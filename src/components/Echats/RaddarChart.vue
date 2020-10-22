<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/components/mixins/resize'

const animationDuration = 3000

export default {
  mixins: [resize],
  props: {
    radarChart: {
      type: Object,
      required: true
    },
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
      default: '400px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    radarChart: {
      handler(newValue) {
        this.radarChart = newValue
        this.initChart() // 刷新echarts图表
      },
      deep: true
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
      if (this.radarChart.radarHeadList === undefined) {
        return
      }
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          splitNumber: 6,
          indicator: this.radarChart.radarHeadList
        },
        /* legend: {
          left: 'center',
          bottom: '10',
          data: ['Allocated Budget']
        },*/
        series: [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 0.7
            }
          },
          data: [
            {
              value: this.radarChart.radarList,
              name: 'Allocated Budget',
              areaStyle: {
                opacity: 0.9,
                color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                  {
                    color: '#B3CEF3',
                    offset: 0
                  },
                  {
                    color: '#B3CEF3',
                    offset: 1
                  }
                ])
              }
            }
          ],
          animationDuration: animationDuration
        }]
      })
    }
  }
}
</script>
