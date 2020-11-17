<template>
  <div id="featureAnalysis" class="con text-grey-0" style="height:100%;">
    <div class="modelTabCon mt-20 scoreDistribution mb-20">
      <div class="modelConHead w100 h-32 lh-32 fs-14 fw-bold text-grey-0 pl-20 bg-black-4">特征分析</div>
      <div id="scoreDistribution" class="w100 conItem ">
        <div class="operating mb-10 p-20">
          <picker-time id="timetile" :time-title="timeTitle" />
          <div class="pull-right">
            <el-button type="primary" plain>查看数据</el-button>
          </div>
        </div>
        <div class="w100">
          <div class="leftTab display-inlineblock  bg-black-4 ">
            <ul class="scrollWidth h100">
              <li v-for="(item, index) in featureList" :key="index" class="w100  fs-14 fw-400  text-grey-2 pl-20" :class="{'activeTabs':activeIndex===index}" @click="changeFeature(index)">
                <span class="display-inline-block w100 h100 text-overflow-ellipsis">{{ item.featureName }}</span>
              </li>
            </ul>
          </div>
          <div class="rightTab display-inlineblock pull-right mt-20">
            <bar-chart :bar-chat="barOptions" />
            <line-chart :line-chart="lineOptions" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import PickerTime from '@/components/PickerTime/index'
import { getFeatureAnalysis } from '@/api/model-market/feature-analysis'

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
      featureList: [],
      activeIndex: 0,
      continuteFeature: false,
      currentData: null,
      continuteFeatures: null,
      distractFeatures: null,
      trendData: null,
      trendDatas1: null,
      trendDatas0: null,
      barOptions: {
        title: '全量对比',
        className: 'scoreOverview',
        headList: ['实际样本', '开发样本'],
        width: '100%',
        height: '248px',
        interval: 10,
        timeRange: [],
        yName: '占比',
        xShow: true,
        series: []
      },
      lineOptions: {
        xShow: true,
        title: '趋势对比',
        chartName: 'lineOptions',
        width: '100%',
        height: '248px',
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
    changeFeature(index) {
      this.activeIndex = index
      this.continuteFeature = index % 2 === 1
      this.currentData = this.continuteFeature ? this.continuteFeatures : this.distractFeatures
      this.trendData = this.continuteFeature ? this.trendDatas1 : this.trendDatas0
      // 全量对比
      const trainData = []
      const actualData = []
      this.barOptions.timeRange = []
      for (const item of this.currentData) {
        if (item.score !== '合计') {
          this.barOptions.timeRange.push(item.score)
          trainData.push(Number(item.developSampleRate.replace('%', '')))
          actualData.push(Number(item.actualSapleRate.replace('%', '')))
        }
      }
      this.barOptions.series = [
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
      // 趋势对比
      this.lineOptions.yAxis = [{
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
        },
        splitLine: {
          show: false
        },
        splitArea: { show: false }
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
      this.lineOptions.series = [
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
    // height: 1220px;
    width: 100%;
    border: 1px solid #eee;
    border-radius: 3px;
  }
  .el-tabs__content{
    padding-top: 0;
    height: 93%;
  }
    #featureAnalysis{
    .modelTabCon{
      border:1px solid #EEEEEE;
    }
    .leftTab{
      width: 18%;
      vertical-align: top;
      height: 480px;
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
      height: 480px;
      width: 82%;
      vertical-align: top;
      .text-center{
        height: 50% !important;
      }
    }
  }
</style>

