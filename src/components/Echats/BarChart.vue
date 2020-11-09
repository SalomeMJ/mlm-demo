<template>
  <div :class="barChat.className" :style="{height:barChat.height,width:barChat.width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/components/mixins/resize'

// const animationDuration = 6000

export default {
  mixins: [resize],
  props: {
    barChat: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    barChat: {
      deep: true,
      handler(newValue, oldValue) {
        this.barChat = newValue // 把新值赋值给我们的属性数据
        this.initChart() // 刷新echarts图表
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      if (this.barChat.interval === undefined || this.barChat.series.length === 0 || this.barChat.headList === null || this.barChat.timeRange.length === 0 || this.barChat.title === undefined) return
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        title: {
          text: this.barChat.title,
          textStyle: {
            fontSize: 14,
            fontWeight: 600,
            color: 'rgba(0,0,0,1)'
          },
          align: 'left'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: this.barChat.headList,
          bottom: 0
        },
        dataZoom: this.barChat.dataZoom,
        grid: {
          top: 54,
          left: '2%',
          right: '2%',
          bottom: '13%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          show: this.barChat.xShow,
          data: this.barChat.timeRange,
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,1)'
            }
          }
        }],
        yAxis: [
          {
            name: this.barChat.yName,
            type: 'value',
            data: this.barChat.yData,
            interval: this.barChat.interval,
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
          }
        ],
        series: this.barChat.series
      })
    }
  }
}
</script>
