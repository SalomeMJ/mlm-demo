<template>
  <div class="h100 pt-5 overflow-y-auto">
    <div class="modelTrace1 mb-20">
      <div class="first-div">
        <div class="bg-white border-radius-5 pt-20 pb-20 pl-20 pr-20">
          <p class="fs-14 text-grey-2 fw-400 mb-20">模型在线数量</p>
          <p class="fs-30 text-grey-0 fw-bold">63</p>
          <i class="icon iconfont iconfengchao " />
        </div>
        <div class="bg-white border-radius-5 pt-15 pb-15 pl-30 pr-30">
          <p class="mb-10">
            <i class="icon iconfont iconguizeguanliquanjugongxiang mr-40" />
            <span class="fs-14 text-grey-2 fw-400">预警规则数量</span>
            <span class="fs-30 text-grey-0 fw-bold">11</span>
          </p>
          <p>
            <i class="icon iconfont iconshijiangongdanguanli mr-40" />
            <span class="fs-14 text-grey-2 fw-400">使用事件数量</span>
            <span class="fs-30 text-grey-0 fw-bold">11</span>
          </p>
        </div>
      </div>
      <div class="bg-white border-radius-5 pt-15 pb-15 pl-20 pr-20">
        <p class="fs-16 text-grey-0 fw-bold">预警规则触发情况</p>
        <bar-chart :bar-chat="barOptions" />
      </div>
      <div class="bg-white border-radius-5 pt-10 pb-10 pl-20 pr-20">
        <p class="fs-16 text-grey-0 fw-bold">使用事件状态分布</p>
        <pie-chart :pie-chart="pieChart" :width="pieChart.width" :height="pieChart.height" />
      </div>
    </div>
    <div class="modelTrace2">
      <div class="bg-white border-radius-5 pt-10 pb-10 pl-20 pr-20">
        <p class="fs-16 text-grey-0 fw-bold">模型请求次数趋势</p>
        <el-select v-model="status" class="mr-15 ml-5" placeholder="请选择">
          <el-option
            v-for="item in statusList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <line-chart :line-chart="chartList[0].lineOptions" />
      </div>
      <div class="bg-white border-radius-5 pt-10 pb-10 pl-20 pr-20">
        <p class="fs-16 text-grey-0 fw-bold">预测评分趋势</p>
        <el-select v-model="status" class="mr-15 ml-5" placeholder="请选择">
          <el-option
            v-for="item in statusList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <bar-chart :bar-chat="chartList[1].barOptions" />
      </div>
    </div>
  </div>
</template>
<script>
import { getModelTrace } from '@/api/model-market/model-trace'
import { getSituation } from '@/api/project-library/using-event/situation-data'
import BarChart from '@/components/Echats/BarChart'
import PieChart from '@/components/Echats/PieChart'
import LineChart from '@/components/Echats/LineChart'
export default {
  name: 'TabOne',
  components: { BarChart, PieChart, LineChart },
  props: {
    'activeName': {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      statusList: [
        {
          value: '',
          label: '全部'
        }, {
          value: 1,
          label: '已通过'
        }, {
          value: 2,
          label: '审批中'
        }, {
          value: 3,
          label: '已拒绝'
        }, {
          value: 4,
          label: '已撤销'
        }],
      status: '',
      eventTypes: [
        {
          value: '',
          label: '全部'
        }, {
          value: 1,
          label: '使用事件'
        }, {
          value: 2,
          label: '预警规则'
        }],
      eventType: '',
      submitOnes: [
        {
          value: '',
          label: '全部'
        }, {
          value: 1,
          label: '黎簇'
        }],
      submitOne: '',
      nuclearList: [],
      title: null,
      input: '',
      barOptions: {
        title: '',
        className: 'situationList',
        headList: ['轻微', '一般', '严重'],
        width: '100%',
        height: '100%',
        timeRange: ['轻微', '一般', '严重'],
        interval: 250,
        xShow: true,
        yName: '',
        series: []
      },
      pieChart: {
        width: '100%',
        height: '100%',
        color: ['#5B8FF9', '#5AD8A6'],
        responseType: ['配置中', '生效审核中', '已生效', '停用审核中', '已停用'],
        successRate: '',
        orient: 'bottom',
        legend: {
          orient: 'vertical',
          right: 20,
          itemWidth: 10,
          itemHeight: 10,
          icon: 'circle',
          itemGap: 15,
          padding: [5, 10],
          top: 130,
          textStyle: {
            color: '#8C8C8C',
            fontSize: 12
          },
          data: ['配置中', '生效审核中', '已生效', '停用审核中', '已停用']
        },
        requestRateList: [],
        series: []
      },
      chartList: [
        {
          name: '请求次数趋势',
          lineOptions: {
            xShow: true,
            title: '',
            chartName: 'lineOptions',
            width: '100%',
            height: '100%',
            legend: ['202001', '202002', '202003', '202004', '202005', '202006', '训练样本'],
            timeRange: [],
            yInterval: 3,
            yName: '占比',
            yAxis: null,
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
            height: '100%',
            timeRange: [],
            interval: 250,
            xShow: true,
            yName: '',
            series: []
          }
        }]
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      getModelTrace().then((response) => {
        // 预警规则触发图
        this.barOptions.series = [
          {
            name: '',
            type: 'bar',
            barWidth: 45,
            data: [response.data.warningRuleTouch[0].value, response.data.warningRuleTouch[1].value, response.data.warningRuleTouch[2].value],
            itemStyle: {
              normal: {
                color: function(params) {
                  const colorList = ['#FFC800', '#FF7700', '#FF4949']
                  return colorList[params.dataIndex]
                }
              }
            }
          }
        ]
        // 使用事件分布
        this.pieChart.series = [{
          type: 'pie',
          radius: ['50%', '70%'],
          center: ['32%', '50%'],
          data: response.data.useEventStatus,
          itemStyle: {

            normal: {
              color: function(params) {
                // 自定义颜色
                var colorList = [
                  '#5B8FF9', '#5AD8A6', '#5D7092', '#FFCD3A', '#FF7453'
                ]
                return colorList[params.dataIndex]
              }
            }
          },
          label: {
            normal: {
              position: 'inner',
              show: false
            }
          }

        }]
      })
      getSituation().then((res) => {
        // 次数趋势
        const seriesData = []
        for (const item of res.data.situationList.trainData) {
          this.chartList[0].lineOptions.timeRange.push(item.range)
          seriesData.push(Number(item.ratio.replace('%', '')))
        }
        this.chartList[0].lineOptions.yAxis = {
          show: true,
          name: '',
          type: 'value',
          interval: 250,
          axisLine: {
            'show': false,
            lineStyle: {
              color: 'rgba(0,0,0,0.45)'
            }
          },
          axisLabel: {
            textStyle: {
              color: 'rgba(0,0,0,0.45)'
            }
          },
          'axisTick': {
            'show': false
          },
          textStyle: {
            fontSize: 12,
            color: 'rgba(0,0,0,0.45)'
          },
          splitLine: {
            show: false
          },
          splitArea: { show: false }
        }
        this.chartList[0].lineOptions.series = [
          {
            name: '',
            color: '#00A0E9',
            type: 'line',
            barWidth: 40,
            smooth: false,
            data: seriesData
          }
        ]
        // 分数趋势
        const seriesData1 = []
        for (const item of res.data.situationList.actualData) {
          this.chartList[1].barOptions.timeRange.push(item.range)
          seriesData1.push(item.countNum)
        }
        this.chartList[1].barOptions.series = [
          {
            name: '',
            color: '#00A0E9',
            type: 'bar',
            barWidth: 20,
            data: seriesData1
          }
        ]
      })
    }
  }

}
</script>
<style lang="scss" scoped>
 .modelTrace1{
   display: grid;
   grid-template-columns:  69fr 50fr 71fr;
   grid-column-gap: 20px;
   height:52%;
  width: 100%;
   div.first-div{
     display:grid;
     grid-template-rows: 0.52fr 0.77fr;
     grid-row-gap:20px;
    div:nth-child(1){
      height: 100%;
      position: relative;
      .iconfengchao{
        position: absolute;
        right: 30px;
        top: 35px;
        display: inline-block;
        width: 80px;
          height: 80px;
          text-align: center;
          line-height: 80px;
          color:#fff;
          font-size: 25px;
          background: #00A0E9;
          border-radius: 50%;
      }
      .mb-20{
        position: absolute;
        top:35px;
      }
      .fs-30{
        font-size: 40px;
        position: absolute;
        top: 65px;
      }
    }
    div:nth-child(2){
      height:100%;
      p{
        position: relative;
        height: 50%;
        span{
          position: absolute;
          top:10px;
          left:95px;
        }
        span:nth-child(3){
          top: 35px;
        }
      }
    }
  }
   .iconguizeguanliquanjugongxiang,.iconshijiangongdanguanli{
      display: inline-block;
       width: 75px;
        height: 75px;
        text-align: center;
        line-height: 75px;
        color:#fff;
        font-size: 20px;
        border-radius: 50%;
        position: absolute;
   }
   .iconguizeguanliquanjugongxiang{
      background: #73DEB3;
   }
   .iconshijiangongdanguanli{
    background: #73A0FA;
   }
 }
 .modelTrace2{
   display: grid;
   grid-template-columns: repeat(2,1fr);
   grid-column-gap: 20px;
    height: calc(48% - 20px);
   div{
     display: inline-block;
     width: 100%;
     position: relative;
   }
   .el-select{
     position: absolute;
     top: 10px;
     right: 20px;
     width:160px;

   }
 }
</style>
