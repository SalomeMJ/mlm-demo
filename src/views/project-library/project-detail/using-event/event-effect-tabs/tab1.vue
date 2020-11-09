<template>
  <div class="tabCon pb-20 mt-5">
    <p class="tabTop mb-20">
      <span class="fs-14 fw-400 text-grey-0">总上线时长：105天5小时</span>
      <span class="fs-14 fw-400 text-grey-0">总请求次数：10034</span>
      <span class="fs-14 fw-400 text-grey-0">平均响应时长：1.2s</span>
    </p>
    <div v-for="(item, index) in chartList" :key="index" class="tabItem mb-20 p-20">
      <div class="mb-20">
        <span class="text-black-0 fs-16 fw-bold">{{ item.name }}</span>
        <span class="pull-right">
          <picker-time />
        </span>
      </div>
      <div class="echartContainer">
        <bar-chart :bar-chat="item.barOptions" />
      </div>
    </div>
  </div>
</template>
<script>
import BarChart from '@/components/Echats/BarChart'
import PickerTime from '@/components/PickerTime/index'
import { getSituation } from '@/api/project-library/using-event/situation-data'

export default {
  name: 'TabOne',
  components: { PickerTime, BarChart },
  props: {
  },
  data() {
    return {
      chartList: [
        {
          name: '请求次数趋势',
          barOptions: {
            title: '',
            className: 'situationList',
            headList: [],
            width: '100%',
            height: '250px',
            timeRange: [],
            interval: 250,
            xShow: true,
            yName: '',
            series: []
          }
        },
        {
          name: '预测评分趋势',
          barOptions: {
            title: '',
            className: 'situationList',
            headList: [],
            width: '100%',
            height: '250px',
            timeRange: [],
            interval: 250,
            xShow: true,
            yName: '',
            series: []
          }
        }
      ]
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      getSituation().then((res) => {
        // 次数趋势
        const seriesData = []
        for (const item of res.data.situationList.trainData) {
          this.chartList[0].barOptions.timeRange.push(item.range)
          seriesData.push(Number(item.ratio.replace('%', '')))
        }
        this.chartList[0].barOptions.series = [
          {
            name: '',
            color: '#00A0E9',
            type: 'bar',
            barWidth: 40,
            data: seriesData
          }
        ]
        // 分数趋势
        const seriesData1 = []
        for (const item of res.data.situationList.actualData) {
          this.chartList[1].barOptions.timeRange.push(item.range)
          seriesData1.push(Number(item.ratio.replace('%', '')))
        }
        this.chartList[1].barOptions.series = [
          {
            name: '',
            color: '#00A0E9',
            type: 'bar',
            barWidth: 40,
            data: seriesData1
          }
        ]
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.tabCon{
   overflow-y: auto;
  height:calc(100% - 20px);
  .tabTop{
    margin: 0;
    width: 80%;
    display:grid;
    grid-template-columns: repeat(3,1fr);
  }
  .tabItem{
      height: 300px;
      border:1px solid #d1d1d1;
      background-color: #f6f6f6;
      border-radius: 5px;
    }
}
</style>
