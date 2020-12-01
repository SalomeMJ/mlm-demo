<template>
  <div class="con text-grey-0" style="height:300px;">
    <div class="modelTabCon w100 mt-20 scoreDistribution border-d9 mb-20">
      <div class="modelConHead w100 h-32 lh-32 fs-14 fw-bold text-grey-0 pl-20 bg-f6 border-bottom-d9">评分分布分析</div>
      <div id="scoreDistribution" class="w100 conItem p-20">
        <div class="operating mb-10">
          <picker-time id="timetile" :time-title="timeTitle" />
          <div class="pull-right">
            <el-button type="primary" plain>查看数据</el-button>
          </div>
        </div>
        <div class="w100  displayBlock chartCon">
          <bar-chart :bar-chat="barOptions" />
          <line-chart :line-chart="lineOptions" :width="lineOptions.width" :height="lineOptions.height" />
        </div>
      </div>
    </div>
    <div class="modelTabCon w100 mt-20 scoreDistribution border-d9">
      <div class="modelConHead w100 h-32 lh-32 fs-14 fw-bold text-grey-0 pl-20 bg-f6">客群稳定性分析</div>
      <div id="scoreDistribution" class="w100 conItem p-20">
        <div class="operating mb-10">
          <picker-time id="timetile" :time-title="timeTitle" />
          <div class="pull-right">
            <el-button type="primary" plain>查看数据</el-button>
          </div>
        </div>
        <div class="w100  displayBlock chartCon">
          <line-chart :line-chart="psiOptions" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PickerTime from '@/components/PickerTime/index'
import { getScoreOverview } from '@/api/model-market/score-overview'

import LineChart from '@/components/Echats/LineChart'
import BarChart from '@/components/Echats/BarChart'

export default {
  name: 'MonitorCent',
  components: { PickerTime, LineChart, BarChart },
  props: {

  },
  data() {
    return {
      timeTitle: '时间范围',
      total: null,
      charList: '',
      barOptions: {
        title: '评分分布总览',
        className: 'scoreOverview',
        headList: ['开发样本', '实际样本'],
        width: '100%',
        height: '248px',
        xShow: true,
        timeRange: [],
        interval: 15,
        yName: '占比',
        series: []
      },
      lineOptions: {
        xShow: true,
        title: '评分分布对比',
        chartName: 'lineOptions',
        width: '100%',
        height: '248px',
        legend: ['202001', '202002', '202003', '202004', '202005', '202006', '训练样本'],
        timeRange: [],
        yInterval: 3,
        yName: '占比',
        yAxis: null,
        series: []
      },
      psiOptions: {
        title: '客群稳定性分析',
        chartName: 'lineOptions',
        width: '100%',
        height: '248px',
        legend: ['PSI'],
        timeRange: ['202001', '202002', '202003', '202004', '202005', '202006'],
        yInterval: 0.03,
        yName: '占比',
        xName: '日期',
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
    getTotal() {
      getScoreOverview().then((res) => {
        // 评分分布总览
        const trainData = []
        const actualData = []
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
        // 评分分布对比
        const data1 = []
        const data2 = []
        const data3 = []
        const data4 = []
        const data5 = []
        const data6 = []
        const data7 = []
        for (const item of res.data.scoreDistriratioChart.data1) {
          data1.push(Number(item.ratio.replace('%', '')))
        }
        for (const item of res.data.scoreDistriratioChart.data2) {
          data2.push(Number(item.ratio.replace('%', '')))
        }
        for (const item of res.data.scoreDistriratioChart.data3) {
          data3.push(Number(item.ratio.replace('%', '')))
        }
        for (const item of res.data.scoreDistriratioChart.data4) {
          data4.push(Number(item.ratio.replace('%', '')))
        }
        for (const item of res.data.scoreDistriratioChart.data5) {
          data5.push(Number(item.ratio.replace('%', '')))
        }
        for (const item of res.data.scoreDistriratioChart.data6) {
          data6.push(Number(item.ratio.replace('%', '')))
        }
        for (const item of res.data.scoreDistriratioChart.data7) {
          data7.push(Number(item.ratio.replace('%', '')))
        }
        this.lineOptions.yAxis = {
          show: true,
          name: '占比',
          type: 'value',
          interval: 3,
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0.56)'
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
          },
          splitLine: {
            show: false
          },
          splitArea: { show: false }
        }
        this.lineOptions.timeRange = this.barOptions.timeRange
        const colorArr = ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E8684A', '#6DC8EC', '#916ec8']
        for (const item in this.lineOptions.legend) {
          this.lineOptions.series.push({
            name: this.lineOptions.legend[item] + '',
            color: colorArr[item],
            type: 'line',
            smooth: false
          })
        }
        this.lineOptions.series[0].data = data1
        this.lineOptions.series[1].data = data2
        this.lineOptions.series[2].data = data3
        this.lineOptions.series[3].data = data4
        this.lineOptions.series[4].data = data5
        this.lineOptions.series[5].data = data6
        this.lineOptions.series[6].data = data7
        // 客群稳定性分析
        this.psiOptions.yAxis = {
          show: true,
          name: 'PSI',
          type: 'value',
          interval: 0.03,
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0.56)'
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
          },
          splitLine: {
            show: false
          },
          splitArea: { show: false }
        }
        this.psiOptions.series = [
          {
            name: 'PSI',
            type: 'line',
            color: '#5B8FF9',
            smooth: false,
            data: res.data.customerStabilityAnalysisChart.psi
          }
        ]
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
    // height: 1220px;
    width: 100%;
    border-radius: 3px;
  }
  .el-tabs__content{
    padding-top: 0;
  }
</style>

