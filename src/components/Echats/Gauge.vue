<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/components/mixins/resize'

export default {
  mixins: [resize],
  props: {
    gauge: {
      type: Number,
      required: true,
      default: 1
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
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    gauge: {
      handler() {
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
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          formatter: '{a} <br/>{b} : {c}'
        },
        title: {
          x: 'center',
          bottom: 200
        },
        series: [
          {
            axisTick: {
              show: false,
              splitNumber: 1
            },
            splitLine: {
              show: false,
              length: 15,
              fontSize: 200
            }, pointer: {
              width: 10, // 指针的宽度
              length: '60%', // 指针长度，按照半圆半径的百分比
              shadowColor: '#ccc', // 默认透明
              shadowBlur: 5
            },
            // 分割线样式
            axisLabel: {
              // show:false,
              distance: 5,
              textStyle: {
                fontSize: '11',
                fontWeight: '400',
                bottom: 20
              },
              formatter: '{value}'
            },
            name: '信用分',
            type: 'gauge',
            max: 900,
            min: 300,
            axisLine: {
              show: true,
              lineStyle: {
                width: 15,
                shadowBlur: 0,
                color: [
                  [0.35, '#FE6C60'],
                  [0.65, '#FBB221'],
                  [1, '#40CAC0']
                ]
              }
            },
            detail: {
              offsetCenter: [0, '70%'],
              formatter: '{value}',
              textStyle: {
                fontSize: 36,
                fontWeight: 600,
                fontFamily: 'PingFang SC'
              }
            },
            data: [{ value: this.gauge }]
          }
        ]
      })
    }
  }
}
</script>
