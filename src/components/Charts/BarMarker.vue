<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>
<script>
import echarts from 'echarts'
import resize from '@/components/mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    },
    seriesData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  destroyed() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOptions({
        title: {
          text: '评分分布总览',
          textStyle: {
            fontSize: 14,
            fontWeight: 600
          },
          align: 'left'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid: {
          'bottom': 60,
          'right': 40,
          x: 30,
          y: 60,
          x1: 0,
          y1: 0
        },
        legend: {
          data: ['开发样本', '实际样本'],
          align: 'left',
          y: 'bottom'
        },
        xAxis: [
          {
            name: '分数段',
            type: 'category',
            data: this.seriesData.scoreBinList,
            axisPointer: {
              type: 'shadow'
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            name: '占比',
            type: 'value',
            interval: 25,
            axisLine: {
              show: false

            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true
            }

          }
        ],
        series: [
          {
            name: '开发样本',
            color: '#FFD938',
            type: 'bar',
            barWidth: 15,
            data: this.seriesData.trainData
          },
          {
            name: '实际样本',
            color: '#8478F1',
            type: 'bar',
            barWidth: 15,
            data: this.seriesData.actualData
          }
        ]
      })
    }
  }
}

</script>
