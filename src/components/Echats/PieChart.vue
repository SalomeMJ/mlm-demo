<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/components/mixins/resize'
// import { array } from 'jszip/lib/support'

export default {
  mixins: [resize],
  props: {
    pieChart: {
      type: Object,
      require: true,
      default: function() {}
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
      default: '350px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    pieChart: {
      handler(newValue, oldValue) {
        this.pieChart = newValue // 把新值赋值给我们的属性数据
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
          trigger: 'item',
          formatter: '{b}:<br/> 触发数量:{c}<br/>占比:{d}%'
        },
        color: this.pieChart.color,
        legend: this.pieChart.legend,
        title: {
          text: this.pieChart.successRate,
          left: 'center',
          top: '43%',
          textStyle: {
            fontSize: 35,
            color: '#98D87D'
          }
        },
        series: this.pieChart.series
      })
    }
  }
}
</script>
