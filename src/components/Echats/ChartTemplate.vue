<template>
  <div :class="chartOptions.className" :style="{height:chartOptions.height,width:chartOptions.width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/components/mixins/resize'

// const animationDuration = 6000

export default {
  mixins: [resize],
  props: {
    chartOptions: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartOptions: {
      deep: true,
      handler(newValue, oldValue) {
        this.chartOptions = newValue // 把新值赋值给我们的属性数据
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
      if (this.chartOptions.backgroundColor === undefined || this.chartOptions.yAxis === undefined || this.chartOptions.legend === null || this.chartOptions.xAxisData.length === 0 || this.chartOptions.series.length === 0) return
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        backgroundColor: this.chartOptions.backgroundColor,
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: this.chartOptions.legend,
          bottom: 0,
          icon: 'circle'
        },
        grid: {
          top: 40,
          left: '20',
          right: '20',
          bottom: '40',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: this.chartOptions.xAxisData,
          axisLine: {
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
        }],
        yAxis: this.chartOptions.yAxis,
        series: this.chartOptions.series
      })
    }
  }
}
</script>
