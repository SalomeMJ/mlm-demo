<template>
  <div :class="lineChart.className" :style="{height:lineChart.height,width:lineChart.width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/components/mixins/resize'

export default {
  mixins: [resize],
  props: {
    autoResize: {
      type: Boolean,
      default: true
    },
    lineChart: {
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
    lineChart: {
      deep: true,
      handler(val) {
        this.lineChart = val
        this.initChart()
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
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.lineChart)
    },
    setOptions(lineChart) {
      if (this.lineChart.timeRange.length === 0 || this.lineChart.title === undefined ||
       this.lineChart.yName === undefined || this.lineChart.yInterval === undefined ||
       this.lineChart.yAxis === null ||
        this.lineChart.legend.length === 0 || this.lineChart.series.length === 0) return

      this.chart.setOption({
        title: {
          text: this.lineChart.title,
          textStyle: {
            fontSize: 14,
            fontWeight: 600,
            color: 'rgba(0,0,0,1)'
          },
          align: 'left'
        },
        xAxis: {
          data: lineChart.timeRange,
          show: true,
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0.56)'
            }
          },
          axisLabel: {
            textStyle: {
              color: 'rgba(0,0,0,0.56)'
            }
          },
          textStyle: {
            fontSize: 12,
            color: 'rgba(0,0,0,0.56)'
          }
        },
        grid: {
          top: 24,
          left: '2%',
          right: '2%',
          bottom: '13%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: lineChart.yAxis,
        legend: {
          data: lineChart.legend,
          align: 'left',
          y: 'bottom',
          itemWidth: 20,
          padding: 10,
          textStyle: {
            fontSize: 12,
            color: 'rgba(0,0,0,0.82)'
          }
        },
        series: lineChart.series
      })
    }
  }
}
</script>
