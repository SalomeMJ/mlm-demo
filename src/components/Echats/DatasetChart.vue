<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/components/mixins/resize'

// const animationDuration = 6000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    dataSetChart: {
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
    dataSetChart: {
      deep: true,
      handler(val) {
        this.dataSetChart = val
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
      if (this.dataSetChart.dimensions === undefined) return
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        legend: {
          left: 'center',
          bottom: '10'
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 40,
          top: 40,
          containLabel: true
        },
        tooltip: {},
        dataset: {
          dimensions: this.dataSetChart.dimensions,
          source: this.dataSetChart.source
        },
        xAxis: { type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,1)'
            }
          }
        },
        yAxis: {
          name: '个数',
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,1)'
            }
          }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar', color: 'rgba(19, 128, 244, 1)' },
          { type: 'bar', color: 'RGBA(233, 133, 172, 1)' },
          { type: 'bar', color: 'RGBA(101, 114, 147, 1)' }
        ]
      })
    }
  }
}
</script>
