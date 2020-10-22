<template>
  <div style="height: 653px;overflow-y: auto;overflow-x: hidden;">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="modelTabCon w100 mt-20  scoreDistribution ">
          <div class="modelConHead w100 h-32 lh-32 fs-14 fw-bold text-grey-0 pl-20 bg-black-4">模型匹配度分析</div>
          <div id="scoreDistribution" class="w100 conItem p-20">
            <div class="operating mb-10">
              <picker-time id="timetile" :time-title="timeTitle" />
              <div class="pull-right">
                <el-button type="primary" plain>查看数据</el-button>
              </div>
            </div>
            <div class="w100  displayBlock chartCon">
              <line-chart :line-chart="lineOptions" />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="height:770px;">
      <el-col :span="24">
        <div class="modelTabCon w100 mt-20  scoreDistribution ">
          <div class="modelConHead w100 h-32 lh-32 fs-14 fw-bold text-grey-0 pl-20 bg-black-4">模型排序能力分析</div>
          <div id="scoreDistribution" class="w100 conItem p-20">
            <div class="operating mb-10">
              <picker-time id="timetile" :time-title="timeTitle" />
              <div class="pull-right">
                <el-button type="primary" plain>查看数据</el-button>
              </div>
            </div>
            <div class="w100  displayBlock chartCon">
              <bar-chart :bar-chat="barOptions" />
              <line-chart :line-chart="lineOptions1" />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="height:437px;">
      <el-col :span="24">
        <div class="modelTabCon w100 mt-20  scoreDistribution h100">
          <div class="modelConHead w100 h-32 lh-32 fs-14 fw-bold text-grey-0 pl-20 bg-black-4">违约情况分析</div>
          <div id="scoreDistribution" class="w100 conItem p-20" style="height:437px;">
            <div class="operating mb-10">
              <picker-time id="timetile" :time-title="timeTitle" />
              <div class="pull-right">
                <el-button type="primary" plain>查看数据</el-button>
              </div>
            </div>
            <div class="w100  displayBlock chartCon">
              <div class="pie">
                <pie-chart :pie-chart="pieChart" :width="pieChart.width" :height="pieChart.height" />
              </div>
              <div class="pull-right chart">
                <chart-template :chart-options="chartOptions" />
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="height:437px;">
      <el-col :span="24">
        <div class="modelTabCon w100 mt-20  scoreDistribution h100">
          <div class="modelConHead w100 h-32 lh-32 fs-14 fw-bold text-grey-0 pl-20 bg-black-4">变量有效性分析</div>
          <div id="scoreDistribution" class="w100 conItem p-20" style="height:437px;">
            <div class="operating mb-10">
              <picker-time id="timetile" :time-title="timeTitle" />
              <div class="pull-right">
                <el-button type="primary" plain>查看数据</el-button>
              </div>
            </div>
            <div class="w100  displayBlock chartCon">
              <div class="leftTab display-inlineblock  bg-black-4 ">
                <ul class="scrollWidth h100">
                  <li v-for="(item, index) in featureList" :key="index" class="w100  fs-14 fw-400  text-grey-2 pl-20" :class="{'activeTabs':activeIndex===index}" @click="changeFeature(index)">
                    <span class="display-inline-block w100 h100 text-overflow-ellipsis">{{ item.featureName }}</span>
                  </li>
                </ul>
              </div>
              <div class="rightTab display-inlineblock pull-right mt-20">
                <bar-chart v-if="!continuteFeature" :bar-chat="barOptions1" />
                <line-chart v-if="continuteFeature" :line-chart="lineOptions2" />
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import PickerTime from '../../picker-time/index'
import { getModelResult } from '@/api/monitor-model/model-result'
import { getFeatureAnalysis } from '@/api/monitor-model/feature-analysis'
import ChartTemplate from '@/components/Echats/ChartTemplate'
import BarChart from '@/components/Echats/BarChart'
import LineChart from '@/components/Echats/LineChart'
import PieChart from '@/components/Echats/PieChart'

export default {
  name: 'MonitorCent',
  components: { PickerTime, ChartTemplate, BarChart, LineChart, PieChart },
  props: {

  },
  data() {
    return {
      timeTitle: '时间范围',
      total: null,
      charList: '',
      featureList: [],
      activeIndex: 0,
      continuteFeature: false,
      currentData: null,
      continuteFeatures: null,
      distractFeatures: null,
      trendData: null,
      trendDatas1: null,
      trendDatas0: null,
      chartOptions: {
        backgroundColor: '#fff',
        chartName: '',
        width: '100%',
        height: '338px',
        legend: ['逾期违约', '正常还款', '违约率'],
        xAxisData: ['202001', '202002', '202003', '202004', '202005', '202006'],
        yName: ['数量', '通过率'],
        xName: [],
        series: []
      },
      pieChart: {
        width: '100%',
        height: '338px',
        color: ['#5B8FF9', '#5AD8A6'],
        responseType: ['逾期违约', '正常还款'],
        successRate: '',
        orient: 'bottom',
        legend: {
          bottom: 'left',
          left: 'center',
          data: ['逾期违约', '正常还款']
        },
        requestRateList: [],
        series: []
      },
      lineOptions: {
        title: '',
        chartName: 'lineOptions',
        width: '100%',
        height: '318px',
        legend: ['K-S', 'AUC'],
        timeRange: ['202001', '202002', '202003', '202004', '202005', '202006'],
        yInterval: 0.2,
        yName: '指标值',
        yAxis: null,
        series: []
      },
      lineOptions1: {
        title: '',
        chartName: 'lineOptions',
        width: '100%',
        height: '318px',
        legend: ['202001', '202002', '202003', '202004', '202005', '202006'],
        timeRange: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        yInterval: 10,
        yName: '负样本占比',
        yAxis: null,
        series: []
      },
      barOptions: {
        title: '模型总体评分正确性',
        className: 'barOptions',
        headList: ['正样本', '负样本'],
        width: '100%',
        height: '318px',
        interval: 3,
        timeRange: [],
        yName: '占比',
        series: []
      },
      barOptions1: {
        title: '模型总体评分正确性',
        className: 'scoreOverview',
        headList: ['实际样本', '开发样本'],
        width: '100%',
        height: '350px',
        interval: 10,
        timeRange: [],
        yName: '占比',
        series: []
      },
      lineOptions2: {
        title: '模型总体评分正确性',
        chartName: 'lineOptions',
        width: '100%',
        height: '350px',
        legend: ['PSI', 'CSI'],
        timeRange: ['202001', '202002', '202003', '202004', '202005', '202006'],
        yInterval: 0.01,
        yName: 'PSI',
        yAxis: null,
        series: []
      }
    }
  },
  computed: {
  },
  mounted() {
    this.getTotal()
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
    },
    initOptions(e) {
      this.values = e
    },
    changeFeature(index) {
      this.activeIndex = index
      this.continuteFeature = index % 2 === 1
      this.currentData = this.continuteFeature ? this.continuteFeatures : this.distractFeatures
      this.trendData = this.continuteFeature ? this.trendDatas1 : this.trendDatas0
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
          color: '#5AD8A6',
          type: 'bar',
          barWidth: 15,
          data: actualData
        },
        {
          name: '开发样本',
          color: '#E8684A',
          type: 'bar',
          barWidth: 15,
          data: trainData
        }
      ]
      // 趋势对比
      this.lineOptions2.yAxis = [{
        name: 'PSI',
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0.86)'
          }
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(0,0,0,0.86)'
          }
        },
        textStyle: {
          fontSize: 12,
          color: 'rgba(0,0,0,0.86)'
        }
      }, {
        name: 'CSI',
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0.86)'
          }
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(0,0,0,0.86)'
          }
        },
        textStyle: {
          fontSize: 12,
          color: 'rgba(0,0,0,0.86)'
        }
      }
      ]
      const data1 = []
      const data2 = []
      for (const item of this.trendData) {
        data1.push(item.PSI)
        data2.push(item.CSI)
      }
      this.lineOptions2.series = [
        {
          name: 'PSI',
          type: 'line',
          color: '#5B8FF9',
          yAxisIndex: 0,
          smooth: false,
          data: data1
        },
        {
          name: 'CSI',
          type: 'line',
          color: '#5AD8A6',
          yAxisIndex: 1,
          smooth: false,
          data: data2
        }
      ]
    },
    getTotal() {
      getModelResult().then((res) => {
        // 模型区分度分析
        const echartsData = res.data.modelDiscrimination
        this.lineOptions.yAxis = [
          {
            type: 'value',
            name: '指标值',
            min: 0,
            interval: 0.2,
            nameTextStyle: {
              color: 'rgba(0,0,0,0.56)',
              fontSize: 12,
              padding: 10
            },
            'axisTick': { // y轴刻度线
              'show': false
            },
            'splitLine': { // 网格线
              'show': false
            },
            axisLabel: {
              textStyle: { // 改变刻度字体样式
                color: 'rgba(0,0,0,0.56)'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#d7d7d7'
              }
            },
            textStyle: {
              fontSize: 12,
              color: 'rgba(0,0,0,0.82)'
            }
          }
        ]
        const data1 = []
        const data2 = []
        for (const item of echartsData) {
          data1.push(item.KS)
          data2.push(item.AUC)
        }
        this.lineOptions.series = [
          {
            name: 'K-S',
            type: 'line',
            color: '#5B8FF9',
            smooth: false,
            data: data1
          },
          {
            name: 'AUC',
            type: 'line',
            color: '#5AD8A6',
            smooth: false,
            data: data2
          }
        ]
        // 模型排序能力
        const modelScore = res.data.sortAble
        const goodData = []
        const badData = []
        this.barOptions.timeRange = []
        for (const item of modelScore) {
          if (item.range !== '合计') {
            this.barOptions.timeRange.push(item.range)
            goodData.push(Number(item.goodRate.replace('%', '')))
            badData.push(Number(item.badRate.replace('%', '')))
          }
        }
        this.barOptions.series = [
          {
            name: '正样本',
            color: '#E8684A',
            type: 'bar',
            barWidth: 15,
            data: goodData
          },
          {
            name: '负样本',
            color: '#5AD8A6',
            type: 'bar',
            barWidth: 15,
            data: badData
          }
        ]
        // 不同月份Bad Rate变化
        const echartsData1 = res.data.badRate
        this.lineOptions1.yAxis = [
          {
            type: 'value',
            name: '负样本占比',
            min: 0,
            interval: 10,
            nameTextStyle: {
              color: 'rgba(0,0,0,0.56)',
              fontSize: 12,
              padding: 10
            },
            'axisTick': { // y轴刻度线
              'show': false
            },
            'splitLine': { // 网格线
              'show': false
            },
            axisLabel: {
              textStyle: { // 改变刻度字体样式
                color: 'rgba(0,0,0,0.56)'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#d7d7d7'
              }
            },
            textStyle: {
              fontSize: 12,
              color: 'rgba(0,0,0,0.82)'
            }
          }
        ]
        const data = []
        for (const item of echartsData1) {
          for (const items of item.data1) {
            data.push(items)
          }
        }
        const colorArr = ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E8684A', '#6DC8EC']
        const data3 = []
        const data4 = []
        const data5 = []
        const data6 = []
        const data7 = []
        const data8 = []
        for (const item of echartsData1) {
          data3.push(Number(item.data1[0].replace('%', '')))
          data4.push(Number(item.data1[1].replace('%', '')))
          data5.push(Number(item.data1[2].replace('%', '')))
          data6.push(Number(item.data1[3].replace('%', '')))
          data7.push(Number(item.data1[4].replace('%', '')))
          data8.push(Number(item.data1[5].replace('%', '')))
        }
        for (const item in colorArr) {
          this.lineOptions1.series.push(
            {
              name: this.lineOptions1.legend[item],
              type: 'line',
              color: colorArr[item],
              smooth: false
            }
          )
        }
        this.lineOptions1.series[0].data = data3
        this.lineOptions1.series[1].data = data4
        this.lineOptions1.series[2].data = data5
        this.lineOptions1.series[3].data = data6
        this.lineOptions1.series[4].data = data7
        this.lineOptions1.series[5].data = data8
        // 违约情况
        this.pieChart.series = [{
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [{
            name: '逾期违约',
            value: 0.028121485
          }, {
            name: '正常还款', value: 0.971878515
          }],
          itemStyle: {

            normal: {
              color: function(params) {
                // 自定义颜色
                var colorList = [
                  '#5B8FF9', '#5AD8A6'
                ]
                return colorList[params.dataIndex]
              }
            }
          },
          label: {
            normal: {
              position: 'inner',
              show: false
            }
          }

        }]
        const breachNum = []
        const normalNum = []
        const breachRate = []
        for (const item of res.data.contractBreach) {
          if (item.range !== '合计') {
            breachNum.push(item.breachNum)
            normalNum.push(item.normalNum)
            breachRate.push(Number(item.breachRate.replace('%', '')))
          }
        }
        this.chartOptions.yAxis = [
          {
            name: '数量',
            type: 'value',
            axisLine: {
              lineStyle: {
                color: 'rgba(0,0,0,0.86)'
              }
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(0,0,0,0.86)'
              }
            },
            textStyle: {
              fontSize: 12,
              color: 'rgba(0,0,0,0.86)'
            }
          },
          {
            name: '违约率',
            type: 'value',
            axisLine: {
              lineStyle: {
                color: 'rgba(0,0,0,0.86)'
              }
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(0,0,0,0.86)'
              }
            },
            textStyle: {
              fontSize: 12,
              color: 'rgba(0,0,0,0.86)'
            }

          }
        ]
        this.chartOptions.series = [
          {
            name: '逾期违约',
            color: '#5B8FF9',
            type: 'bar',
            barWidth: 18,
            data: breachNum
          },
          {
            name: '正常还款',
            color: '#5AD8A6',
            type: 'bar',
            barWidth: 18,
            data: normalNum
          },
          {
            name: '违约率',
            color: '#5D7092',
            yAxisIndex: 1,
            smooth: false,
            type: 'line',
            data: breachRate
          }
        ]
      })
      getFeatureAnalysis().then((res) => {
        this.featureList = res.data.featureList
        this.chartDistractData = res.data.chartDistractData
        this.chartContinuteData = res.data.chartContinuteData
        this.distractFeatures = res.data.distractFeature
        this.continuteFeatures = res.data.continuteFeature
        this.trendDatas0 = res.data.chartDistractData
        this.trendDatas1 = res.data.chartContinuteData
        this.changeFeature(0)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .pull-right{
    float: right;
    position: relative;
    z-index: 2;
    margin-top: -40px;
    width: 55%;
    height: 40px;
    line-height: 45px;
    font-size: 14px;
    text-align: right;
    padding-right: 20px;
  }
  .scoreDistribution{
    height: 100%;
    width: 100%;
    border: 1px solid #eee;
    border-radius: 3px;
  }
  .el-tabs__content{
    padding-top: 0;
  }
  .pie{
    display: inline-block;
    width: 40%;
    height: 338px;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    position: relative;
  }
  .chart{
    height: 338px;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    position: relative;
    margin: 0;
  }
   .leftTab{
      width: 18%;
      vertical-align: top;
      height: 370px;
      float:left;
      ul{
        overflow-y: auto;
        margin: 0;padding: 0;
        li{
          height:32px;
          line-height: 32px;
          border-radius:2px;
          cursor: pointer;
        }
        li.activeTabs{
          background:rgba(0,160,233,0.2);
          color:#00a0e9;
          font-weight: 600;
          border-right:4px solid #00a0e9;
        }
      }
    }
    .rightTab{
      height: 370px;
      width: 82%;
      vertical-align: top;
      .text-center{
        height: 50% !important;
      }
    }
</style>
