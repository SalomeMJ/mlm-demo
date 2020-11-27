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
      if (this.barChat.title === undefined || this.barChat.series.length === 0 || this.barChat.legend.length === 0 || this.barChat.yData === null) return
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
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: this.barChat.legend, bottom: 'bottom'
        },
        grid: {
          top: 30,
          y: 30,
          bottom: 50,
          'right': 30,
          'left': 55
        },
        xAxis: {
          type: 'value',
          show: false,
          'axisTick': {
            'show': false
          },
          boundaryGap: [0, 0.01]
        },
        yAxis: {

          type: 'category',
          data: this.barChat.yData,
          axisLabel: this.barChat.axisLabel,
          axisLine: { // y轴
            show: false,
            lineStyle: {
              color: 'rgba(0,0,0,0.45)',
              width: 1,
              type: 'solid'
            }

          },
          axisTick: { // y轴刻度线
            show: false
          },
          splitLine: {
            show: false
          },
          splitArea: { show: false }
        },
        series: this.barChat.series
      })
    }
  }
}
</script>
