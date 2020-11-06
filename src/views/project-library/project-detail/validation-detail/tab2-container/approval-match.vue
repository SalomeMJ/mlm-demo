<template>
  <div class="p-20">
    <bar-chart :bar-chat="barOptions" />
  </div>
</template>
<script>
import { getApprovalMatch } from '@/api/project-library/validation-data/approval-match'
import BarChart from '@/components/Echats/BarChart'

export default {
  name: 'TabOne',
  components: { BarChart },
  data() {
    return {
      barOptions: {
        title: '审批匹配趋势图',
        className: 'barOptions',
        headList: ['批准率', '拒绝率'],
        width: '100%',
        height: '465px',
        interval: 20,
        xShow: true,
        timeRange: [],
        yName: '占比',
        xName: '分数段',
        series: []
      }
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      getApprovalMatch().then((res) => {
        // 审批度
        const scoreEchartsData1 = {
          scoreBinList: [],
          data1: [],
          data2: []
        }
        for (const item in res.data.approvalList) {
          if (Number(item) !== res.data.approvalList.length - 1) {
            scoreEchartsData1.scoreBinList.push(res.data.approvalList[item].score)
            scoreEchartsData1.data1.push(Number(res.data.approvalList[item].approvalRate.replace('%', '')))
            scoreEchartsData1.data2.push(Number(res.data.approvalList[item].refuseRate.replace('%', '')))
          }
        }
        this.barOptions.timeRange = scoreEchartsData1.scoreBinList
        this.barOptions.series = [
          {
            name: '批准率',
            color: '#5AD8A6',
            type: 'bar',
            barWidth: 18,
            data: scoreEchartsData1.data1
          },
          {
            name: '拒绝率',
            color: '#E8684A',
            type: 'bar',
            barWidth: 18,
            data: scoreEchartsData1.data2
          }
        ]
      })
    }
  }

}
</script>
<style lang="scss" scoped>
</style>
