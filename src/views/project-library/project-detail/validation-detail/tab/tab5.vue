<template>
  <div class=" m-20 bg-white cutoff">
    <div class="leftBtn pull-left" @click="changeCustomer()">
      好坏测算切换
    </div>
    <div class="rightCon">
      <div class="cutoffHead pl-20 pr-20 pt-10 mb-10">
        <div class="cutoffItem display-inlineblock">
          <span class="fw-bold display-inlineblock fs-14 text-black-0">{{ testChangeGood?'好':'坏' }}客户测算</span>
          <div class="cutoffRate display-inlineblock ml-30">
            <span class="display-inlineblock fs-14 text-grey-0">查全率</span>
            <label ref="recall" class="display-inlineblock pl-10 pr-10 ml-5 rate">
              <el-input
                v-model="recall1"
                class="form-control fs-14 text-grey-0"
                @input="getRate()"
              />
              <span>%&nbsp;&nbsp;~</span>
              <el-input
                v-model="recall2"
                class="form-control fs-14 text-grey-0"
                @input="getRate()"
              />
              <span>%</span>
            </label>
          </div>
          <div class="cutoffRate display-inlineblock ml-30 ">
            <span class="fs-14 text-grey-0">查准率</span>
            <label ref="precision" class="display-inlineblock pl-10 pr-10 ml-5 rate">
              <el-input
                v-model="precision1"
                class="form-control fs-14 text-grey-0"
                @input="getRate()"
              />
              <span>%&nbsp;&nbsp;~</span>
              <el-input
                v-model="precision2"
                class="form-control fs-14 text-grey-0"
                @input="getRate()"
              />
              <span>%</span>
            </label>
          </div>
          <el-button type="primary" class="ver-middle ml-20" :disabled="cannotSearch" @click="search()">查找</el-button>
        </div>
        <el-button type="primary" plain @click="changeData()">{{ cutoffChart?'切换数据':'切换图表' }}</el-button>
      </div>
      <div class="tableContainer">
        <el-table
          v-if="tableData.length!=0&&!cutoffChart"
          class="system-table"
          :data="tableData"
          style="width: 100%"
          height="100%"
          :default-sort="{prop: 'name', order: 'descending'}"
          @selection-change="handleCurrentChange"
        >
          <template v-for="(item,index) in headArr">
            <el-table-column :key="index" :prop="item.prop" :style="{'width':index==1?'10%':''}" :sortable="item.sortable" :label="item.label" :align="index==0?'left':'right'" fixed>
              <template slot-scope="scope">
                <!-- <span v-if="scope.row['bgc']" style="background:rgba(255, 162, 0, 0.3)">
                  {{ scope.row[item.prop] }}
                </span> -->
                <span>
                  {{ scope.row[item.prop] }}
                </span>
              </template>
            </el-table-column>
          </template>
        </el-table>
        <line-chart v-if="cutoffChart" :line-chart="lineChart" :width="lineChart.width" :height="lineChart.height" />
        <p class="mt-10 ml-10">
          <i class="icon iconfont iconwarn text-yellow-0 ver-middle" />
          <span class="fs-14 fw-400 text-grey-2 ver-middle">有背景颜色的区间为符合条件cut-off自动拒绝线</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { getCutOffbad } from '@/api/project-library/validation-data/cutoffbad'
import { getCutOffgood } from '@/api/project-library/validation-data/cutoffgood'
import LineChart from '@/components/Echats/LineChart'

export default {
  name: 'TabTwo',
  components: { LineChart },
  props: {
  },
  data() {
    return {
      testChangeGood: false,
      cutoffChart: false,
      recall1: '',
      recall2: '',
      precision1: '',
      precision2: '',
      cannotSearch: true,
      headArr: [
        { label: '分数段', prop: 'scorearea', sortable: false },
        { label: '区间人数', prop: 'areaprople', sortable: false },
        { label: '累计人数', prop: 'totalpeople', sortable: false },
        { label: '区间好客户数', prop: 'goodnum', sortable: false },
        { label: '累积好客户占比', prop: 'goorate', sortable: false },
        { label: '区间坏客人数', prop: 'badnum', sortable: false },
        { label: '累计坏客户数', prop: 'totalbadnum', sortable: false },
        { label: '累计坏客户占比', prop: 'badrate', sortable: false },
        { label: '坏客户查全率', prop: 'recalration', sortable: false },
        { label: '坏客户查准率', prop: 'precision', sortable: false }
      ],
      tableData: [],
      lineChart: {
        title: '',
        chartName: 'lineOptions',
        width: '100%',
        height: '350px',
        legend: ['坏客户查全率', '坏客户查准率'],
        xType: 'category',
        xShow: true,
        timeRange: [],
        yInterval: 250,
        yName: '',
        yAxis: null,
        series: []
      }
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage
    },
    initData() {
      getCutOffbad().then((response) => {
        this.tableData = response.data.cutoffbad
        for (const item of this.tableData) {
          item.bgc = false
        }
      })
    },
    // 好坏样本切换
    changeCustomer() {
      this.testChangeGood = !this.testChangeGood
      if (this.testChangeGood) {
        getCutOffbad().then((response) => {
          this.tableData = response.data.cutoffbad
          this.headArr[8].label = '好客户查全率'
          this.headArr[9].label = '好客户查准率'
          if (this.cutoffChart) {
            this.initChart()
          }
        })
      } else {
        getCutOffgood().then((response) => {
          this.tableData = response.data.cutoffgood
          this.headArr[8].label = '坏客户查全率'
          this.headArr[9].label = '坏客户查准率'
          if (this.cutoffChart) {
            this.initChart()
          }
        })
      }
    },
    // 准确率变化
    getRate() {
      if (this.recall1 !== '' && this.recall2 !== '' && this.precision1 !== '' && this.precision2 !== '') {
        this.cannotSearch = false
        return
      }
      this.cannotSearch = true
    },
    // 查看
    search() {
      if (Number(this.recall1) >= Number(this.recall2)) {
        this.$refs.recall.style.border = '1px solid red'
        return
      }
      this.$refs.recall.style.border = '1px solid rgba(0,0,0,.15)'
      if (Number(this.precision1) >= Number(this.precision2)) {
        this.$refs.precision.style.border = '1px solid red'
        return
      }
      this.$refs.precision.style.border = '1px solid rgba(0,0,0,.15)'
      for (const item in this.tableData) {
        const recalration = Number(this.tableData[item].recalration.replace('%', ''))
        const precision = Number(this.tableData[item].precision.replace('%', ''))
        if (recalration >= this.recall1 && recalration <= this.recall2 && precision >= this.precision1 && precision <= this.precision2) {
          this.tableData[item].bgc = true
        } else {
          this.tableData[item].bgc = false
        }
      }
    },
    // 切换数据和图表
    changeData() {
      this.cutoffChart = !this.cutoffChart
      if (this.cutoffChart) {
        this.initChart()
      }
    },
    initChart() {
      this.lineChart.timeRange = []
      const seriesData0 = []
      const seriesData1 = []
      this.lineChart.legend = !this.testChangeGood ? ['坏客户查全率', '坏客户查准率'] : ['好客户查全率', '好客户查准率']
      for (const item of this.tableData) {
        this.lineChart.timeRange.push(item.scorearea)
        seriesData0.push(item.recalration)
        seriesData1.push(item.precision)
      }
      this.lineChart.yAxis = {
        type: 'value',
        axisLabel: {
          show: true,
          interval: 'auto',
          formatter: '{value} %'// 纵坐标百分比
        },
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
      this.lineChart.series = [
        {
          name: !this.testChangeGood ? '坏客户查全率' : '好客户查全率',
          type: 'line',
          color: '#5B8FF9',
          data: this.stringtonum(seriesData0)
        },
        {
          name: !this.testChangeGood ? '坏客户查准率' : '好客户查准率',
          type: 'line',
          color: '#FF9D4D',
          data: this.stringtonum(seriesData1)
        }
      ]
    },
    stringtonum(data) {
      const arr = []
      for (const item of data) {
        if (typeof item === 'string') {
          arr.push(Number(item.replace('%', ' ')))
        }
      }
      return arr
    }
  }

}
</script>
<style lang="scss" scoped>
.cutoff{
  height:calc(100% - 40px);
  overflow-y: auto;
  .leftBtn{
    width: 42px;
    height: 100%;
    color:#00a0e9;
    cursor: pointer;
    border-right: 1px solid #eee;
    writing-mode: vertical-lr;
    text-align: center;
    line-height: 42px;
    letter-spacing: 10px;
    font-weight: 600;
  }
  .rightCon{
        display: inline-block;
    width: calc(100% - 42px);
    height: 100%;
    .cutoffHead{
        display: inline-grid;
        grid-template-columns: 1fr 0.1fr;
        width: 100%;
       >>> .el-input,>>>.el-input__inner{
          border:none;
          width: 72px;
          height: 30px;
          display: inline-block;
          background-color: transparent;
          padding-left: 0;
          padding-right: 0;
        }
        label{
          border: 1px solid rgba(0,0,0,0.15);
          height: 32px;
          line-height: 32px;
          border-radius: 3px;
          vertical-align: middle;
        }
        label.error{
          border-color:red;
          background-color: #fff;
        }
        button{
          display: inline-block;
          width: 120px;
          height: 32px;
          text-align: center;
        }
        button.find{
          width: 48px;
        }
      }
  }
}

</style>
