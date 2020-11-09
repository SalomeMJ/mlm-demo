<template>
  <div class="tabContainer">
    <el-tabs v-model="activeTab" :tab-position="tabPosition" class="h100 left-tab" @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in featureList" :key="index" :label="item.feaCnName" :name="index.toString()" />
      <div class="p-20">
        <bar-chart v-if="featuretype==='DISCRETE'" :bar-chat="barOptions" />
        <line-chart v-if="featuretype!=='DISCRETE'" :line-chart="lineChart" :width="lineChart.width" :height="lineChart.height" />
        <div style="overflow-y:auto;height:200px;">
          <el-table
            v-if="tableData.length!=0"
            class="system-table"
            :data="tableData"
            style="width: 100%"
            height="100%"
            @selection-change="handleCurrentChange"
          >
            <template v-for="(item,index) in headArr">
              <el-table-column :key="index" :prop="item.prop" :label="item.label" :align="index==0?'left':'right'">
                <template slot-scope="scope">
                  <span>
                    {{ scope.row[item.prop] }}
                  </span>
                </template>
              </el-table-column>
            </template>
          </el-table>
        </div>

      </div>
    </el-tabs>
  </div>
</template>
<script>
import BarChart from '@/components/Echats/BarChart'
import LineChart from '@/components/Echats/LineChart'
import { getDatesetDetail } from '@/api/project-library/validation-data/dataset-detail'
import { getModelDetail } from '@/api/project-library/validation-data/model-detail'

export default {
  name: 'TabOne',
  components: { BarChart, LineChart },
  props: {
  },
  data() {
    return {
      featureList: [],
      featuretype: null,
      tabPosition: 'left',
      activeTab: '0',
      barOptions: {
        title: '类型：离散型   总数量：38220',
        className: 'scoreOverview',
        headList: ['好人', '坏人'],
        width: '100%',
        height: '255px',
        timeRange: [],
        xShow: true,
        interval: 15,
        yName: '',
        series: []
      },
      lineChart: {
        title: '',
        chartName: 'lineOptions',
        width: '100%',
        height: '255px',
        legend: [''],
        xType: 'category',
        timeRange: '',
        yInterval: 0.2,
        yName: '',
        yAxis: null,
        series: []
      },
      tableData: [],
      headArr: [
        { label: '属性', prop: 'attr', sortable: false },
        { label: '占比', prop: 'rate', sortable: false },
        { label: '数量', prop: 'number', sortable: false }
      ]
    }
  },
  mounted() {
    this.handleClick({ index: 0 })
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage
    },
    handleClick(e) {
      const index = Number(e.index)
      getDatesetDetail().then((res) => {
        this.featureList = Object.values(JSON.parse(res.data.variableReport))
        const featureName = this.featureList[index].featureName
        this.featuretype = this.featureList[index].dtype
        if (this.featuretype === 'DISCRETE') {
          this.headArr = [
            { label: '属性', prop: 'attr', sortable: false },
            { label: '占比', prop: 'rate', sortable: false },
            { label: '数量', prop: 'number', sortable: false }
          ]
          const chartData = {
            category: [],
            data0: [],
            data1: []
          }
          const discreteTableData = []
          const arr = [0, 1, 2, 3, 4, 5]
          for (const i of arr) {
            if (this.featureList[index]['valuemost' + i]) {
              chartData.category.push(this.featureList[index]['valuemost' + i])
              discreteTableData.push(this.featureList[index]['valuemost' + i])
              chartData.data0.push(Math.round(this.featureList[index].count * this.featureList[index]['freqmost' + i].Fre * this.featureList[index]['freqmost' + i]['0']))
              chartData.data1.push(Math.round(this.featureList[index].count * this.featureList[index]['freqmost' + i].Fre * this.featureList[index]['freqmost' + i]['1']))
            }
          }
          this.barOptions.interval = parseFloat(this.featureList[index].count / 3).toFixed(2)
          this.barOptions.timeRange = chartData.category
          this.tableData = []
          for (const item in chartData.category) {
            const ind = Number(item) + 1
            this.tableData.push(
              { attr: this.featureList[index]['valuemost' + ind], rate: '', number: this.featureList[index].count }
            )
          }
          this.barOptions.series = [
            {
              name: '好人',
              type: 'bar',
              stack: '1',
              color: '#40cac0',
              data: chartData.data0
            },
            {
              name: '坏人',
              type: 'bar',
              stack: '1',
              color: '#fe6c60',
              data: chartData.data1
            }
          ]
        } else {
          this.headArr = [
            { label: '类型', prop: 'type', sortable: false },
            { label: '数量', prop: 'number', sortable: false },
            { label: '均值', prop: 'mean', sortable: false },
            { label: '方差', prop: 'variance', sortable: false },
            { label: '最小值', prop: 'min', sortable: false },
            { label: '最大值', prop: 'max', sortable: false },
            { label: '第一四分位数(Q1)', prop: 'Q1', sortable: false },
            { label: '第二四分位数(Q2)', prop: 'Q2', sortable: false },
            { label: '第三四分位数(Q3)', prop: 'Q3', sortable: false }
          ]
          this.tableData = [
            { type: '连续型', number: this.featureList[index].count, mean: this.featureList[index].mean.toFixed(4), variance: this.featureList[index].std.toFixed(4), min: this.featureList[index].min, max: this.featureList[index].max, Q1: this.featureList[index].quantile25, Q2: this.featureList[index].quantile50, Q3: this.featureList[index].quantile75 }
          ]
          getModelDetail().then((response) => {
            const res = response.data
            let data = []
            if (!res.hasOwnProperty(featureName)) {
              data = res['Monthly_Family_Income']
            } else {
              data = res[featureName]
            }
            const goodData = []
            const badData = []
            for (const i in data.true) {
              const dataArr = []
              dataArr.push(data.true[i].xData)
              dataArr.push(data.true[i].yData)
              goodData.push(dataArr)
            }
            for (const j in data.false) {
              const dataArr = []
              dataArr.push(data.false[j].xData)
              dataArr.push(data.false[j].yData)
              badData.push(dataArr)
            }
            this.lineChart.yAxis = {
              type: 'value',
              axisLabel: false,
              axisLine: {
                lineStyle: {
                  color: '#5f5f5f'
                }
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              splitArea: { show: false }
            }
            this.lineChart.series = [{
              data: goodData,
              type: 'line',
              color: '#ff9292',
              name: '坏人'
            },
            {
              data: badData,
              type: 'line',
              color: '#aee3bc',
              name: '好人'
            }]
          })
        }
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.tabContainer{
  height: 100%;
  >>> .el-tabs__nav-scroll{
    overflow-y: auto;
    margin-top: -20px;
  }
  >>> .el-tabs__nav-wrap {
    padding-bottom: 0;
  }
  >>> .el-tabs{
    .el-tabs__header{
    width: 200px;
    height: 100%;
    }
  }
   >>> .el-tabs__nav{
     border-right:1px solid #eee;
      .el-tabs__item{
        cursor: pointer;
        box-sizing: border-box;
        width: 100%;
        height: 60px !important;
        line-height: 60px !important;
        list-style: none;
        text-align: left;
         border:none !important;
      }
      .el-tabs__item.is-active{
        background: rgba(0,160,233,.1) !important;
        color: #00A0E9 !important;
        border-right: 3px solid #049cef !important;
        font-weight: 600 !important;
      }
    }
}
</style>
