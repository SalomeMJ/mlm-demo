<template>
  <div class="p-20">
    <chart-template :chart-options="chartOptions" />
  </div>
</template>
<script>
import { getValidationDetail } from '@/api/project-library/validation-data/validation-detail'
import ChartTemplate from '@/components/Echats/ChartTemplate'

export default {
  name: 'TabOne',
  components: { ChartTemplate },
  data() {
    return {
      chartOptions: {
        backgroundColor: '#f8f8f8',
        chartName: '',
        width: '100%',
        height: '465px',
        legend: ['模型', '随机', 'Lift值'],
        xAxisData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        yName: ['% of Bad', 'Lift'],
        xName: [],
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
        const badCapturedByModel = response.data.validationDatas.badCapturedByModel
        const badCapturedRandomly = response.data.validationDatas.badCapturedRandomly
        const lift = response.data.validationDatas.lift

        const newBadCapturedByModel = []
        const newBadCapturedRandomly = []
        const newLift = []
        for (const item in lift) {
          newBadCapturedByModel.push(badCapturedByModel[item].toFixed(4))
          newBadCapturedRandomly.push(badCapturedRandomly[item].toFixed(4))
          newLift.push(lift[item].toFixed(4))
        }

        this.chartOptions.yAxis = [
          {
            type: 'value',
            splitLine: {
              show: false
            },
            splitArea: { show: false },
            axisLine: {
              lineStyle: {
                color: '#5f5f5f'
              }
            },
            name: '% of Bad',
            nameLocation: 'middle',
            offset: 0,
            position: 'bottom',
            nameGap: 40
          }, {
            type: 'value',
            splitLine: {
              show: false
            },
            splitArea: { show: false },
            axisLine: {
              lineStyle: {
                color: '#5f5f5f'
              }
            },
            name: 'Lift',
            nameLocation: 'middle',
            offset: 0,
            position: 'bottom',
            nameGap: 40
          }
        ]
        this.chartOptions.series = [{
          data: newBadCapturedByModel,
          name: '模型',
          type: 'bar',
          yAxisIndex: 0,
          barWidth: '30%',
          smooth: true,
          color: '#8378ea'
        }, {
          data: newBadCapturedRandomly,
          name: '随机',
          type: 'bar',
          yAxisIndex: 0,
          barWidth: '30%',
          smooth: true,
          color: '#d2d2d2'
        }, {
          data: newLift,
          name: 'Lift值',
          showSymbol: true,
          symbol: 'circle', // 设定为实心点
          symbolSize: 10, // 设定实心点的大小
          yAxisIndex: 1,
          type: 'line',
          smooth: true,
          color: '#AFCD6F'
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
