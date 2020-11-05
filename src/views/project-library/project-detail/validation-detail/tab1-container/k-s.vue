<template>
  <div class="p-50">
    <line-chart :line-chart="lineChart" :width="lineChart.width" :height="lineChart.height" />
  </div>
</template>
<script>
import { getValidationDetail } from '@/api/project-library/validation-data/validation-detail'
import LineChart from '@/components/Echats/LineChart'

export default {
  name: 'TabOne',
  components: { LineChart },
  data() {
    return {
      lineChart: {
        title: '',
        chartName: 'lineOptions',
        width: '100%',
        height: '430px',
        legend: ['正负样本差距', '正样本', '负样本'],
        xType: 'category',
        timeRange: [],
        yInterval: 0.2,
        yName: '',
        yAxis: null,
        series: []
      }
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      getValidationDetail().then((response) => {
        const validationDatas = response.data.validationDatas
        const cumsumGood = validationDatas.cumsumGood
        const cumsumBad = validationDatas.cumsumBad
        const ks = validationDatas.ksList
        const tile = validationDatas.tile
        const tile_Fixed = []
        for (const item of tile) {
          tile_Fixed.push(parseFloat(item).toFixed(4))
        }
        this.lineChart.timeRange = tile_Fixed
        this.lineChart.yAxis = {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#5f5f5f'
            }
          },
          name: 'CumSum',
          nameLocation: 'middle',
          offset: 0,
          position: 'bottom',
          nameGap: 30
        }
        this.lineChart.series = [{
          data: ks,
          type: 'line',
          name: '正负样本差距',
          color: '#c23531',
          smooth: true
        }, {
          data: cumsumGood,
          type: 'line',
          name: '正样本',
          color: '#2f4554',
          smooth: true
        }, {
          data: cumsumBad,
          type: 'line',
          color: '#61a0a8',
          name: '负样本',
          smooth: true
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
