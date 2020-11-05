<template>
  <div :class="scatterChart.className" :style="{height:scatterChart.height,width:scatterChart.width}" />
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
    scatterChart: {
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
    scatterChart: {
      deep: true,
      handler(val) {
        this.scatterChart = val
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
      if (this.scatterChart.xName === undefined || this.scatterChart.title === undefined ||
       this.scatterChart.yName === undefined || this.scatterChart.series.length === 0) return

      this.chart.setOption({
        title: {
          text: this.scatterChart.title,
          textStyle: {
            fontSize: 14,
            fontWeight: 600,
            color: 'rgba(0,0,0,1)'
          },
          align: 'left'
        },
        grid: {
          top: 35,
          y: 30,
          bottom: 50,
          'right': 30,
          'left': 55
        },
        xAxis: {
          name: this.scatterChart.xName,
          nameLocation: 'center',
          nameTextStyle: {
            padding: 20
          },
          axisLine: { // y轴
            show: true,
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
          }
        },
        yAxis: {
          name: this.scatterChart.yName,
          nameLocation: 'center',
          nameTextStyle: {
            padding: 20
          },
          scale: true,
          axisLine: { // y轴
            show: true,
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
          }
        },
        series: this.scatterChart.series
      })
    }
  }
}
</script>
