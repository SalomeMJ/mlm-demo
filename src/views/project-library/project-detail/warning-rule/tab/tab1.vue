<template>
  <div>
    <line-chart :line-chart="lineChart" :width="lineChart.width" :height="lineChart.height" />
  </div>
</template>
<script>
import LineChart from '@/components/Echats/LineChart'
import { getWarningRuleDetail } from '@/api/project-library/warning-rule/warning-ruledetail'

export default {
  name: 'WarningOne',
  components: { LineChart },
  data() {
    return {
      lineChart: {
        title: '上海地区申请通过率',
        chartName: 'lineOptions',
        width: '100%',
        height: '510px',
        legend: [''],
        timeRange: [],
        yInterval: 10,
        yName: '',
        yAxis: null,
        series: []
      }
    }
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      getWarningRuleDetail().then((res) => {
        res.data = res.data.results
        if (res.data.runCounts === null) res.data.runCounts = 0
        if (res.data.triggeNumber === null) res.data.triggeNumber = 0
        const datax = []
        const datay = []
        let max = res.data.value * 2
        for (const item of res.data.rulePerformanceList) {
          datax.push(item.executeTime)
          datay.push(item.executeResult)
          if (max < item.executeResult) {
            max = item.executeResult
          }
        }
        this.lineChart.timeRange = datax

        this.lineChart.yAxis = {
          type: 'value',
          show: true,
          axisLine: {
            show: false
          },
          min: 0,
          max: Math.ceil(max),
          interval: Math.ceil(max),
          axisLabel: {
            textStyle: {
              color: 'rgba(0,0,0,0.56)'
            }

          }
        }
        this.lineChart.series = [{
          data: datay,
          type: 'line',
          symbolSize: 8,
          markLine: {
            symbol: 'none',
            label: {
              position: 'start'
            },
            data: [{
              silent: true,
              lineStyle: {
                type: 'dashed',
                color: '#FA3934',
                width: 1
              },
              yAxis: res.data.value
            }],
            tooltip: {
              show: false
            },
            precision: 1,
            emphasis: {
              lineStyle: {
                type: 'dashed',
                color: '#FA3934',
                width: 1
              }
            }
          }
        }]
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.projectCon{
height: 152px;
background: #FFFFFF;
border-radius: 5px;
padding: 20px;
}
 .content{
    height: calc(100% - 42px);
    border-radius: 0 0 5px 5px;
    overflow-y: auto;
    overflow-x: hidden;
    .rightItem{
      display: inline-grid;
      grid-template-columns: repeat(3,1fr);
    }
    p{
          display: inline-block;
    height: 60px;
    margin: 0;
    padding: 0;
    text-align: center;
      .circle{
      display: inline-block;
      width: 46px;
      height: 46px;
      text-align: center;
      line-height: 46px;
      background: #F6F6F6;
      border: 1px solid #D9D9D9;
      border-radius: 50%;
      i{
        font-size: 22px;
      }
    }
    span.num{
          display: block;
    position: relative;
    margin-top: -17%;
    margin-left: 50%;
    }
    }
    .grid-center{
      display: grid;
      grid-template-columns: repeat(5,1fr);
      p{
        text-align: center;
        height: 50px;
        span{
          display: block;
        }
      }
      p:last-child{
        text-align: right;
      }
      p:first-child{
        text-align: left;
        text-indent: 10px;
      }
    }
    .warningMsg{
      width: 100%;
      height: 85px;
      background: #f6f6f6;
      border-radius: 5px;
      overflow-y: auto;
      .circle{
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
      p{
        display: block;
        text-align: left;
        text-indent: 10px;
        height: 25px;
      }
    }
  }
  .con-head{
    margin-bottom: 20px;
  }
  .grid-two{
    display:grid;
    grid-template-columns: 1.43fr 1fr;
    grid-column-gap: 20px;
  }
  .content >>> .el-step__main {
    background: #fff;
    margin-top: -30px;
    margin-left: 24px;
    position: absolute;
    z-index: 1;
    padding-left: 10px;
    padding-right: 10px;
    width: 84px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
  }
  .content >>> .el-step__head{
    width: 94%;
  }
  // .content >>> .el-step.is-horizontal .el-step__line{
  //   // margin-right: 10px !important;
  // }
  .content >>> .el-step.is-horizontal {
      flex-basis:24% !important;
  }
  .content >>> .el-step.is-horizontal:last-child{
    flex-basis:6% !important;
    max-width:none;
  }
  .el-col {
    .grid-content{
      height: 209px;
      background: #fff;
      border-radius: 5px;
      border: 1px solid #D9D9D9;
      padding: 10px 20px;
    }
    .grid-content.bg-white{
      border:none;padding: 0;
      height: 233px;
      background:#eee;
       .grid-center{
        width: 100%;
        height: 204px;
        border-radius: 5px;
        border: 1px solid #D9D9D9;
        display: inline-block;
        p{
          padding: 0;
          margin: 0;
          height: 32px;
          width: 100%;
          text-align: center;
          line-height: 32px;
        }
      }
    }
  }
  .el-row{
    margin: 0;
  }
</style>
