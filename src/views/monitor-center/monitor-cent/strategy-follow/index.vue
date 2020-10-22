<template>
  <div>
    <el-row :gutter="20" type="flex">
      <el-col v-for="(item,index) in total" :key="index" :span="4">
        <div class="grid-content bg-purple h100" :class="item.bgc">
          <p>{{ item.number }}</p>
          <p class="fs-14">{{ item.name }}</p>
          <div class="rate">
            <i class="icon iconfont iconup" />
            <span>{{ item.up }}</span>
          </div>
          <i class="icon iconfont bgicon" :class="item.icon" />
        </div>
      </el-col>
    </el-row>
    <div class="con text-grey-0 mt-20">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content text-grey-0 bg-white work-shadow-radius">
            <div class="title">
              <span class="fs-14 fw-bold" style="color:#616f77"> 冠军挑战者各决策时间变化图</span>
              <div class="selectCon w-120 pull-right" style="margin-top:-8px;margin-right:-15px;">
                <can-search-select id="champion" :options="options" :value="value" :values="values" @initOptions="initOptions" />
              </div>
            </div>
            <div class="chartCon">
              <chart-template :chart-options="chartOptions" />
            </div>
            <div class="pull-right rightCon">
              <span>统计策略:</span>
              <p v-for="(item, ind) in applicationList" :key="ind">
                <i v-if="item.changege" class="icon iconfont iconChampion" />
                <i v-if="!item.changege" class="icon iconfont iconBoxing" />
                <span>{{ item.name }}</span>
              </p>
              <el-button type="primary" plain>查看模型指标</el-button>
              <el-button type="primary" plain>查看规则指标</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content text-grey-0 bg-white work-shadow-radius pieCon">
            <div class="title">
              <span class="fs-14 fw-bold" style="color:#616f77"> 预警触发饼状图</span>
              <div class="selectCon w-120 pull-right" style="margin-top:-8px;margin-right:-15px;">
                <can-search-select id="touch" :options="options" :value="value" :values="values" @initOptions="initOptions" />
              </div>
            </div>
            <div class="chartCon">
              <pie-chart :pie-chart="pieChart" :width="pieChart.width" :height="pieChart.height" />
            </div>
          </div>
          <div class="grid-content text-grey-0 bg-white work-shadow-radius linCon">
            <div class="title">
              <span class="fs-14 fw-bold" style="color:#616f77"> 预警触发次数图</span>
              <div class="selectCon w-120 pull-right" style="margin-top:-8px;margin-right:-15px;">
                <can-search-select id="touchtime" :options="options" :value="value" :values="values" @initOptions="initOptions" />
              </div>
            </div>
            <div class="chartCon">
              <line-chart :line-chart="lineChart" :width="lineChart.width" :height="lineChart.height" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import { getModelCen } from '@/api/monitor-model/model-cen'
import CanSearchSelect from '@/components/CanSearchSelect/index'
import ChartTemplate from '@/components/Echats/ChartTemplate'
import PieChart from '@/components/Echats/PieChart'
import LineChart from '@/components/Echats/LineChart'

export default {
  name: 'MonitorCent',
  components: { CanSearchSelect, ChartTemplate, PieChart, LineChart },
  props: {

  },
  data() {
    return {
      options: [{
        value: '1',
        label: '过去3个月'
      }, {
        value: '2',
        label: '过去6个月'
      }, {
        value: '3',
        label: '过去12个月'
      }, {
        value: '4',
        label: '过去24个月'
      }, {
        value: '5',
        label: '上线至今'
      }],
      value: '',
      values: '2',
      applicationList: [
        { changege: true, name: '申请单统计策略1' },
        { changege: false, name: '申请单统计策略2' },
        { changege: false, name: '申请单统计策略3' },
        { changege: false, name: '申请单统计策略4' },
        { changege: false, name: '申请单统计策略5' }
      ],
      total: null,
      charList: '',
      chartOptions: {
        backgroundColor: '#FBFBFB',
        chartName: '',
        width: '100%',
        height: '480px',
        legend: null,
        xAxisData: [],
        yName: [],
        xName: [],
        series: []
      },
      pieChart: {
        width: '100%',
        height: '150px',
        color: ['#FBAD98', '#6594E6', '#40D3ED'],
        responseType: ['严重', '一般', '轻微'],
        successRate: '',
        orient: 'vertical',
        legend: {
          orient: 'vertical',
          right: '5%',
          top: '25%',
          icon: 'circle',
          textStyle: {
            color: 'rgba(0,0,0,0.56)',
            fontSize: 12
          }
        },
        requestRateList: [],
        series: []
      },
      lineChart: {
        title: '',
        chartName: 'lineOptions',
        width: '100%',
        height: '240px',
        legend: ['触发次数'],
        timeRange: [],
        yInterval: 60,
        yName: '',
        yAxis: null,
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
    handleClick(tab, event) {
      // console.log(tab, event)
    },
    initOptions(e) {
      this.values = e
    },
    getTotal() {
      getModelCen().then((res) => {
        this.total = res.data.modelCenHead
        // 冠军挑战者决策时间变化图
        this.chartOptions.legend = ['建议通过', '建议拒绝', '建议人工审核', '通过率']
        this.chartOptions.yName = ['申请单数量', '一次通过率']
        const echartsData = res.data.timeChange.echartsData
        this.chartOptions.xAxisData = echartsData.time
        this.chartOptions.yAxis = [
          {
            type: 'value',
            name: '申请单数量',
            min: 0,
            max: 60000,
            nameTextStyle: {
              color: 'rgba(0,0,0,0.56)',
              fontSize: 12,
              padding: 10
            },
            'axisTick': { // y轴刻度线
              'show': false
            },
            'splitLine': { // 网格线
              'show': false
            },
            axisLabel: {
              textStyle: { // 改变刻度字体样式
                color: 'rgba(0,0,0,0.56)'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#d7d7d7'
              }
            },
            textStyle: {
              fontSize: 12,
              color: 'rgba(0,0,0,0.82)'
            }
          },
          {
            type: 'value',
            name: '一次通过率',
            nameTextStyle: {
              color: 'rgba(0,0,0,0.56)',
              fontSize: 12,
              padding: 10
            },
            min: 0,
            max: 100,
            'axisTick': { // y轴刻度线
              'show': false
            },
            'splitLine': { // 网格线
              'show': false
            },
            axisLabel: {
              textStyle: { // 改变刻度字体样式
                color: 'rgba(0,0,0,0.56)'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#d7d7d7'
              }
            },
            textStyle: {
              fontSize: 12,
              color: 'rgba(0,0,0,0.82)'
            }
          }
        ]
        this.chartOptions.series = [
          {
            name: '建议通过',
            data: echartsData.approval,
            color: '#40CAC0',
            type: 'bar',
            stack: '申请单数量',
            yAxisIndex: 0,
            barWidth: '10'
          },
          {
            name: '建议拒绝',
            data: echartsData.refuse,
            color: '#FE6C60',
            type: 'bar',
            stack: '申请单数量',
            yAxisIndex: 0,
            barWidth: '10'
          },
          {
            name: '建议人工审核',
            data: echartsData.check,
            type: 'bar',
            yAxisIndex: 0,
            color: '#FFC146',
            stack: '申请单数量',
            barWidth: '10',
            itemStyle: {
              emphasis: {
                barBorderRadius: [20, 20, 0, 0]
              },
              normal: {
                barBorderRadius: [20, 20, 0, 0]
              }
            }
          },
          {
            name: '通过率',
            data: echartsData.approvalRate,
            color: '#1280F4',
            yAxisIndex: 1,
            smooth: false,
            type: 'line'
          }
        ]
        // 预警触发次数饼状图
        this.pieChart.series = [
          {
            type: 'pie',
            data: res.data.touchTimesPie.echartsData,
            radius: '80%',
            center: ['40%', '50%'],
            emphasis: {
              itemStyle: {
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            itemStyle: {
              normal: {
                label: {
                  show: false // 隐藏标示文字
                },
                labelLine: {
                  show: false // 隐藏标示线
                }
              }
            }
          }
        ]
        // 预警触发次数折线图
        const seriesData = []
        for (const item of res.data.touchTimesLine.echartsData) {
          this.lineChart.timeRange.push(item.time)
          seriesData.push(item.num)
        }
        this.lineChart.yAxis = {
          show: true,
          name: '',
          type: 'value',
          interval: 60,
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0.56)'
            }
          },
          axisLabel: {
            textStyle: {
              color: 'rgba(0,0,0,0.56)'
            }
          },
          textStyle: {
            fontSize: 12,
            color: 'rgba(0,0,0,0.56)'
          }
        }
        this.lineChart.series = [
          {
            type: 'line',
            smooth: true,
            name: '触发次数',
            data: seriesData,
            // 线条样式
            itemStyle: {
              color: '#5C6C7A'
            },
            // 区域颜色渐变
            areaStyle: {
              normal: {
                // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(73,89,104,1)'
                }, {
                  offset: 0.59,
                  color: 'rgba(73,89,104,0)'
                }])

              }
            }
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
 .el-col {
    border-radius: 4px;
    color:#fff;
    height: 68px;
  }
  .el-col-4{
    width: 100%;
    height: 68px;
    border-radius: 5px;
    position: relative;
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        font-size: 16px;
        padding: 10px 0px 10px 20px;
        position: relative;
        overflow: hidden;
        p{
          margin: 0;
        }
        p:first-child{
          font-size: 20px;
        }
        p.fs-14{
          font-size: 14px;
          margin-top: 5px;
        }
        i.bgicon{
          position: absolute;
          top: -25px;
          right: 0;
          font-size: 130px;
          color: rgba(255,255,255,.1);
        }
        .rate{
              width: 70px;
          position: absolute;
          right: 0;
          top: 20px;
          font-size: 14px;;
          text-align: center;
          background: #fff;
          color:#009E57
        }
      }
  }
  .pull-right{
    float: right;
    position: relative;
    z-index: 2;
    margin-top: 20px;
    width: 55%;
    height: 40px;
    line-height: 45px;
    font-size: 14px;
    text-align: right;
    padding-right: 20px;
  }
  .el-col-4:first-child{
    padding-left: 0 !important;
  }
  .el-col-4:last-child{
    padding-right: 0 !important;
  }
 .bg-purple{
   background-image: linear-gradient(to bottom right,#a7b3e8,#6998ea);
  }
  .bg-blue{
    background-image: linear-gradient(to bottom right,#58c1e4,#05c5cf);
  }
  .bg-red{
        background-image: linear-gradient(to bottom right,#f7a18e,#f6756a);
  }
  .bg-orange{
        background-image: linear-gradient(to bottom right,#f5ca73,#ffb75e);
  }
  .bg-grey{
    background-image: linear-gradient(to bottom right,#a5acb2,#495968);
  }
    .con{
      height: 609px;
      .grid-content{
        height: 609px;
        padding: 20px;
        .chartCon{
          width:73%;height:510px;padding:20px;margin-top:20px;border:1px solid #eee;border-radius:3px;background:#fbfbfb;

        }
        .rightCon{
          width: 23%;
          vertical-align: top;
          margin-top: -500px;
          padding-top: 60px;
          text-align: left;
          vertical-align: top;
          font-weight: 600;
          color: rgba(0,0,0,.82);
          font-size: 14px;
          line-height: 30px;
          font-family: PingFang SC;
          .iconChampion{
            color:#FBB221
          }
          .iconBoxing{
            color:#00a0e9
          }
          p{
            margin: 0;
          }
          .el-button--primary.is-plain {
            // color: #1890ff;
            // background: #e8f4ff;
            // border-color: #a3d3ff;
            margin-top: 20px;
            font-weight: 400;
            border-radius: 5px;
            width: 100%;
            margin-left:0;
          }
        }
      }
      .grid-content.pieCon{
        height: 230px;
        .chartCon{
          width: 100%;
          height: 170px;
          border:none;
          background: #fff;
        }
      }
      .grid-content.linCon{
        height: 359px;
        margin-top: 20px;
        .chartCon{
          height: 297px;
          width: 100%;
          border:none;
          background: #fff;
        }
      }
    }
</style>

