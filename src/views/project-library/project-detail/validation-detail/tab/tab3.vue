<template>
  <div class="tabContainer">
    <el-tabs v-model="activeTab" :tab-position="tabPosition" class="h100 left-tab" @tab-click="handleClick">
      <el-tab-pane label="评分分布" name="first" />
      <div v-if="activeTab=='first'&&activeIndex=='0'" class="p-20">
        <bar-chart :bar-chat="barOptions" />
      </div>
      <el-tab-pane label="PSI:0.0060" name="second" />
      <div v-if="activeTab=='second'">
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
      <!-- <el-table v-if="activeTab=='second'" :table-data="tableData" :head-arr="headArr" /> -->
      <el-tab-pane label="特征分布" name="third" />
      <div v-if="activeTab=='third'" class="p-20">
        <span class="fs-14 fw-bold text-gret-0">特征</span>
        <el-select v-model="value" class="ml-20 mb-20" placeholder="请选择" @change="changeFeature(value)">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <bar-chart :bar-chat="barOptions1" />
        <el-table
          v-if="tableData1.length!=0"
          class="system-table"
          :data="tableData1"
          style="width: 100%"
          height="100%"
          @selection-change="handleCurrentChange"
        >
          <template v-for="(item,index) in headArr1">
            <el-table-column :key="index" :prop="item.prop" :label="item.label" :align="index==0?'left':'right'" show-overflow-tooltip>
              <template slot-scope="scope">
                <span>
                  {{ scope.row[item.prop] }}
                </span>
              </template>
            </el-table-column>
          </template>
        </el-table>
        <!-- <el-table :table-data="tableData1" :head-arr="headArr1" /> -->
      </div>
    </el-tabs>
  </div>
</template>
<script>
// import ElTable from '@/components/ElTable'
import BarChart from '@/components/Echats/BarChart'
import { getScoreOverview } from '@/api/project-library/validation-data/score-overview'
import { getFeatureAnalysis } from '@/api/project-library/validation-data/feature-analysis'

export default {
  name: 'TabOne',
  components: { BarChart },
  props: {
    projectDetail: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      tabPosition: 'left',
      activeTab: 'first',
      activeIndex: null,
      options: [],
      value: '',
      tableData: [],
      headArr: [
        { label: '分数段', prop: 'score', sortable: false },
        { label: '训练集样本量', prop: 'trainNum', sortable: false },
        { label: '训练集样本占比', prop: 'trainRate', sortable: false },
        { label: '验证集样本量', prop: 'checkNum', sortable: false },
        { label: '验证集样本占比', prop: 'checkRate', sortable: false },
        { label: '占比差距', prop: 'rateGap', sortable: false },
        { label: '占比权重', prop: 'rateWeight', sortable: false },
        { label: 'PSI', prop: 'PSI', sortable: false }
      ],
      tableData1: [],
      headArr1: [
        { label: '分箱标签', prop: 'score', sortable: false },
        { label: '开发样本量', prop: 'developSampleNum', sortable: false },
        { label: '开发样占比', prop: 'developSampleRate', sortable: false },
        { label: '验证集样本量', prop: 'actualSapleNum', sortable: false },
        { label: '验证集样本占比', prop: 'actualSapleRate', sortable: false },
        { label: '占比差距', prop: 'proportionGap', sortable: false },
        { label: '占比权重', prop: 'proportionWeight', sortable: false },
        { label: 'PSI', prop: 'PSI', sortable: false },
        { label: '分箱分数', prop: 'boxfraction', sortable: false },
        { label: 'CSI', prop: 'CSI', sortable: false }
      ],
      barOptions: {
        title: '',
        className: 'scoreOverview',
        headList: ['开发样本', '实际样本'],
        width: '100%',
        height: '465px',
        timeRange: [],
        interval: 15,
        xShow: true,
        yName: '占比',
        series: []
      },
      continuteFeature: false,
      currentData: null,
      continuteFeatures: null,
      distractFeatures: null,
      trendData: null,
      trendDatas1: null,
      trendDatas0: null,
      barOptions1: {
        title: '全量对比',
        className: 'scoreOverview',
        headList: ['实际样本', '开发样本'],
        width: '100%',
        height: '188px',
        interval: 20,
        xShow: true,
        timeRange: [],
        yName: '占比',
        series: []
      }
    }
  },
  mounted() {
    this.handleClick({ index: '0' })
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage
    },
    handleClick(e) {
      this.activeIndex = e.index
      if (e.index === '0') {
        // 评分分布总览
        getScoreOverview().then((res) => {
          const trainData = []
          const actualData = []
          this.barOptions.timeRange = []
          for (const item of res.data.scoreDistributionChart.trainData) {
            this.barOptions.timeRange.push(item.range)
            trainData.push(Number(item.ratio.replace('%', '')))
          }
          for (const item of res.data.scoreDistributionChart.actualData) {
            actualData.push(Number(item.ratio.replace('%', '')))
          }
          this.barOptions.series = [
            {
              name: '开发样本',
              color: '#FFD938',
              type: 'bar',
              barWidth: 15,
              data: trainData
            },
            {
              name: '实际样本',
              color: '#8478F1',
              type: 'bar',
              barWidth: 15,
              data: actualData
            }
          ]
        })
      } else if (e.index === '1') {
        getScoreOverview().then((res) => {
          this.tableData = res.data.psi
        })
      } else if (e.index === '2') {
        getFeatureAnalysis().then((res) => {
          this.options = []
          this.featureList = res.data.featureList
          for (const item in this.featureList) {
            this.options.push(
              {
                value: item,
                label: this.featureList[item].featureName
              }
            )
          }
          this.value = this.options[0].value
          this.chartDistractData = res.data.chartDistractData
          this.chartContinuteData = res.data.chartContinuteData
          this.distractFeatures = res.data.distractFeature
          this.continuteFeatures = res.data.continuteFeature
          this.trendDatas0 = res.data.chartDistractData
          this.trendDatas1 = res.data.chartContinuteData
          this.changeFeature(0)
        })
      }
    },
    changeFeature(index) {
      this.activeIndex = index
      this.continuteFeature = index % 2 === 1
      this.currentData = this.continuteFeature ? this.continuteFeatures : this.distractFeatures
      this.trendData = this.continuteFeature ? this.trendDatas1 : this.trendDatas0
      this.tableData1 = this.currentData
      // 全量对比
      const trainData = []
      const actualData = []
      this.barOptions1.timeRange = []
      for (const item of this.currentData) {
        if (item.score !== '合计') {
          this.barOptions1.timeRange.push(item.score)
          trainData.push(Number(item.developSampleRate.replace('%', '')))
          actualData.push(Number(item.actualSapleRate.replace('%', '')))
        }
      }
      this.barOptions1.series = [
        {
          name: '实际样本',
          color: '#8478F1',
          type: 'bar',
          barWidth: 15,
          data: actualData
        },
        {
          name: '开发样本',
          color: '#FFD938',
          type: 'bar',
          barWidth: 15,
          data: trainData
        }
      ]
    }
  }

}
</script>
<style lang="scss" scoped>
.tabContainer{
  height: 100%;
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
