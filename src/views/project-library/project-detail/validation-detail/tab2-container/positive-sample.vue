<template>
  <div class="p-20">
    <bar-chart :bar-chat="barOptions" />
  </div>
</template>
<script>
import { getModelResult } from '@/api/project-library/validation-data/model-result'
import BarChart from '@/components/Echats/BarChart'

export default {
  name: 'TabOne',
  components: { BarChart },
  data() {
    return {
      barOptions: {
        title: '模型总体评分正确性',
        className: 'barOptions',
        headList: ['正样本', '负样本'],
        width: '100%',
        height: '465px',
        interval: 3,
        timeRange: [],
        yName: '占比',
        series: []
      }
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      getModelResult().then((res) => {
        // 模型排序能力
        const modelScore = res.data.sortAble
        const goodData = []
        const badData = []
        this.barOptions.timeRange = []
        for (const item of modelScore) {
          if (item.range !== '合计') {
            this.barOptions.timeRange.push(item.range)
            goodData.push(Number(item.goodRate.replace('%', '')))
            badData.push(Number(item.badRate.replace('%', '')))
          }
        }
        this.barOptions.series = [
          {
            name: '正样本',
            color: '#E8684A',
            type: 'bar',
            barWidth: 15,
            data: goodData
          },
          {
            name: '负样本',
            color: '#5AD8A6',
            type: 'bar',
            barWidth: 15,
            data: badData
          }
        ]
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.p-50{
  height: 100%;
  ul{
        width: 70%;
        height: 100%;
        margin: 0;
        padding: 0;
        li{
          // display: inline-block;
          width:calc(100% - 100px);
          float: left;
        }
        li:first-child{
          display: inline-block;
          width: 100px;
          height: 100%;
          div.lihead{
            height: 64px;
            line-height: 64px;
            width: 100%;
            text-align: center;
          }
          div.licon{
            width: 100%;
            height: calc(100% - 64px);
            div.w-32{
              display: inline-block;
              width: 32px;
              text-align: center;
              font-size: 14px;
              padding: 5px;
            }
            div.rightcon{
              display: inline-grid;
              width: 68px;
              text-align: center;
              float: right;
              height: 100%;
            }
          }
        }
        li:nth-child(2){
          display: inline-block;
          height: 64px;
          width: calc(100% - 100px);
          vertical-align: top;
          div.lihead{
            height: 64px;
            text-align: center;
            p{
              height: 32px;
              line-height: 32px;
              text-align: center;
              margin: 0;
              padding: 0;
            }
            div.liheadcon{
              height: 32px;
              line-height: 32px;
              display: grid;
              grid-template-columns: repeat(3,1fr);
            }
          }
        }
        li:last-child{
          height: calc(100% - 64px);
          display: grid;
          grid-template-columns: repeat(3,1fr);
          text-align: center;
        }
      }
  div.rightRate {
    width: 150px;
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(70% + 50px);
    display: grid;
    line-height: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
   .ver-middle {
    position: relative;
    top: 45%;
    }
}
</style>
