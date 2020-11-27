<template>
  <div id="featureAnalysis" class="con text-grey-0 h100">
    <div class="modelTabCon mt-20 scoreDistribution  h100">
      <div class="modelConHead w100 h-32 lh-32  pl-20 bg-f6 border-bottom-d9">
        <span class="fs-14 fw-bold text-grey-0">特征分析</span>
        <span class="pull-right text-decoration doingColor">查看数据</span>
      </div>
      <div id="scoreDistribution" class="w100 conItem ">
        <div class="w100 h100">
          <div class="leftTab display-inlineblock  bg-black-4 h100 border-right-d9">
            <ul class="scrollWidth h100">
              <li v-for="(item, index) in featureList" :key="index" class="w100  fs-14 fw-400  text-grey-2 pl-20" :class="{'activeTabs':activeIndex===index}" @click="changeFeature(index)">
                <span class="display-inline-block w100 h100 text-overflow-ellipsis">{{ item.featureName }}</span>
              </li>
            </ul>
          </div>
          <div class="rightTab display-inlineblock pull-right mt-20 ">
            <bar-chart :bar-chat="barOptions" />
            <line-chart :line-chart="lineOptions" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { getFeatureAnalysis } from '@/api/model-market/feature-analysis'

import LineChart from '@/components/Echats/LineChart'
import BarChart from '@/components/Echats/BarChart'

export default {
  name: 'MonitorCent',
  components: { LineChart, BarChart },
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
        height: '50%',
        interval: 10,
        timeRange: [],
        yName: '',
        xShow: true,
        series: []
      },
      lineOptions: {
        xShow: true,
        title: '趋势对比',
        chartName: 'lineOptions',
        width: '100%',
        height: '50%',
        legend: ['PSI', 'CSI'],
        timeRange: ['202001', '202002', '202003', '202004', '202005', '202006'],
        yInterval: 0.01,
        yName: '',
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
        name: '',
        type: 'value',
        axisLine: {
          'show': false,
          lineStyle: {
            color: 'rgba(0,0,0,0.45)'
          }
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(0,0,0,0.45)'
          }
        },
        'axisTick': {
          'show': false
        },
        textStyle: {
          fontSize: 12,
          color: 'rgba(0,0,0,0.45)'
        },
        splitLine: {
          show: false
        },
        splitArea: { show: false }
      }, {
        name: '',
        type: 'value',
        axisLine: {
          'show': false,
          lineStyle: {
            color: 'rgba(0,0,0,0.45)'
          }
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(0,0,0,0.45)'
          }
        },
        'axisTick': {
          'show': false
        },
        textStyle: {
          fontSize: 12,
          color: 'rgba(0,0,0,0.45)'
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
    margin-top: -5px;
    text-decoration: underline;
    width: 55%;
    height: 40px;
    line-height: 45px;
    font-size: 14px;
    text-align: right;
    padding-right: 20px;
    cursor: pointer;
  }
  #scoreDistribution{
    height: calc(100% - 32px);
  }
  .scoreDistribution{
    width: 100%;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
  }
  .el-tabs__content{
    padding-top: 0;
    height: 93%;
  }
    #featureAnalysis{
    .modelTabCon{
      border:1px solid #d9d9d9;
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
        li:hover{
          color:#00a0e9;
        }
      }
    }
    .rightTab{
      height:calc(100% - 20px);
      width: 82%;
      vertical-align: top;
      padding: 0px 30px 0px 30px;
      .text-center{
        height: 50% !important;
      }
    }
  }
</style>

