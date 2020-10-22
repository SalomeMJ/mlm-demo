<template>
  <div class="con text-grey-0">
    <bar-chart :bar-chat="barOptions" />
  </div>
</template>
<script>
import { getRuleAnalysis } from '@/api/monitor-model/rule-analysis'
import BarChart from '@/components/Echats/BarChart'

export default {
  name: 'MonitorCent',
  components: { BarChart },
  props: {

  },
  data() {
    return {
      timeTitle: '时间范围',
      total: null,
      charList: '',
      barOptions: {
        title: '结果分布分时统计',
        className: 'scoreOverview',
        headList: ['A', 'B', 'C', 'D'],
        width: '100%',
        height: '550px',
        timeRange: [],
        interval: 30,
        yName: '',
        dataZoom: [
          {
            show: true,
            start: 100,
            end: 0
          },
          {
            type: 'inside',
            start: 100,
            end: 0
          }
        ],
        series: []
      }
    }
  },
  computed: {
  },
  mounted() {
    this.getTotal()
  },
  methods: {
    getTotal() {
      getRuleAnalysis().then((res) => {
        // 结果分布分时统计
        const A = []
        const B = []
        const C = []
        const D = []
        for (const item of res.data.data) {
          this.barOptions.timeRange.push(item.dateTime)
          A.push(item.A)
          B.push(item.B)
          C.push(item.C)
          D.push(item.D)
        }
        this.barOptions.series = [
          {
            name: 'A',
            color: '#32C4E9',
            type: 'bar',
            barWidth: '25%',
            stack: '总量',
            data: A
          },
          {
            name: 'B',
            color: '#8478F1',
            type: 'bar',
            barWidth: '25%',
            stack: '总量',
            data: B
          },
          {
            name: 'C',
            color: '#E690D1',
            type: 'bar',
            barWidth: '25%',
            stack: '总量',
            data: C
          },
          {
            name: 'D',
            color: '#FEDB5B',
            type: 'bar',
            barWidth: '25%',
            stack: '总量',
            data: D
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .pull-right{
    float: right;
    position: relative;
    z-index: 2;
    margin-top: -40px;
    width: 55%;
    height: 40px;
    line-height: 45px;
    font-size: 14px;
    text-align: right;
    padding-right: 20px;
  }
  .scoreDistribution{
    // height: 1220px;
    width: 100%;
    border: 1px solid #eee;
    border-radius: 3px;
  }
  .el-tabs__content{
    padding-top: 0;
  }
</style>

