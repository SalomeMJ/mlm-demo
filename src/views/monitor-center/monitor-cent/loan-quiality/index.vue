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
      <div class="conItem" style="height:290px;">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content text-grey-0 bg-white work-shadow-radius">
              <div class="title">
                <span class="fs-14 fw-bold" style="color:#616f77">逾期金额、逾期申请单变化趋势图</span>
                <div class="selectCon w-120 pull-right" style="margin-top:-8px;margin-right:-15px;">
                  <can-search-select id="change" :options="options" :value="value" :values="values" @initOptions="initOptions" />
                </div>
              </div>
              <div id="chartCon" class="chartCon">
                <chart-template :chart-options="applycationOptions" />
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content text-grey-0 bg-white work-shadow-radius">
              <div class="title">
                <span class="fs-14 fw-bold" style="color:#616f77">逾期申请单分布折线变化图</span>
                <div class="selectCon w-120 pull-right" style="margin-top:-8px;margin-right:-15px;">
                  <can-search-select id="lineChange" :options="options" :value="value" :values="values" @initOptions="initOptions" />
                </div>
              </div>
              <div class="chartCon">
                <line-chart :line-chart="applycationLineOptions" :width="applycationOptions.width" :height="applycationOptions.height" />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="conItem conLast" style="height:330px;">
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="grid-content text-grey-0 bg-white work-shadow-radius">
              <div class="title">
                <span class="fs-14 fw-bold" style="color:#616f77">各账龄违约变化图</span>
                <div class="selectCon w-120 pull-right" style="margin-top:-8px;margin-right:-15px;">
                  <can-search-select id="geChange" :options="options" :value="value" :values="values" @initOptions="initOptions" />
                </div>
              </div>
              <div id="chartCon" class="chartCon">
                <line-chart :line-chart="geOptions" :width="geOptions.width" :height="geOptions.height" />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>

import CanSearchSelect from '@/components/CanSearchSelect/index'
import { getModelLoan } from '@/api/monitor-model/model-loan'
import ChartTemplate from '@/components/Echats/ChartTemplate'
import LineChart from '@/components/Echats/LineChart'

export default {
  name: 'MonitorApproval',
  directives: {
    focus
  },
  components: { CanSearchSelect, ChartTemplate, LineChart },
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
      values: '1',
      applicationList: [
        { changege: true, name: '申请单统计策略1' },
        { changege: false, name: '申请单统计策略2' },
        { changege: false, name: '申请单统计策略3' },
        { changege: false, name: '申请单统计策略4' },
        { changege: false, name: '申请单统计策略5' }
      ],
      total: null,
      charList: '',
      applycationOptions: {
        backgroundColor: '#FBFBFB',
        chartName: '',
        width: '100%',
        height: '165px',
        legend: null,
        xAxisData: [],
        yName: [],
        xName: [],
        series: [],
        seriesData: []
      },
      applycationLineOptions: {
        backgroundColor: '#FBFBFB',
        title: '',
        chartName: 'lineOptions',
        width: '100%',
        height: '175px',
        legend: ['触发次数'],
        timeRange: [],
        yInterval: 200,
        yName: '申请单数量',
        yAxis: null,
        series: []
      },
      geOptions: {
        backgroundColor: '#FBFBFB',
        title: '',
        chartName: 'lineOptions',
        width: '100%',
        height: '370px',
        legend: [],
        timeRange: [],
        yInterval: 0.3,
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
      getModelLoan().then((res) => {
        this.total = res.data.modelCenHead
        // 逾期金额、逾期申请单变化趋势图
        this.applycationOptions.legend = ['逾期申请单', '逾期金额']
        this.applycationOptions.yName = ['逾期金额', '逾期申请单数量']
        const echartsData = res.data.loanQuality.echartsData
        this.applycationOptions.xAxisData = echartsData.time
        this.applycationOptions.yAxis = [
          {
            type: 'value',
            name: '逾期申请单数量',
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
            name: '逾期金额',
            nameTextStyle: {
              color: 'rgba(0,0,0,0.56)',
              fontSize: 12,
              padding: 10
            },
            min: 0,
            interval: 200,
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
        this.applycationOptions.series = [
          {
            name: '逾期申请单',
            color: '#6F7DA0',
            type: 'bar',
            data: echartsData.number,
            yAxisIndex: 1,
            barWidth: '10',
            itemStyle: {
              // 柱形图圆角，鼠标移上去效果
              emphasis: {
                barBorderRadius: [20, 20, 0, 0]
              },

              normal: {
                // 柱形图圆角，初始化效果
                barBorderRadius: [20, 20, 0, 0]
              }
            }
          },
          {
            name: '逾期金额',
            data: echartsData.apyNum,
            color: '#FBB221',
            type: 'line',
            yAxisIndex: 0
          }
        ]
        // 逾期申请单分布折线变化图
        this.applycationLineOptions.legend = ['逾期申请单', '建议通过违约申请单', '建议人工审核违约申请单']
        this.applycationLineOptions.timeRange = res.data.loanLine.echartsData.time
        this.applycationLineOptions.yAxis = {
          show: true,
          name: '申请单数量',
          type: 'value',
          interval: 200,
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
        this.applycationLineOptions.series = [
          {
            type: 'line',
            smooth: false,
            name: '逾期申请单',
            color: '#69779B',
            data: res.data.loanLine.echartsData.application
          },
          {
            type: 'line',
            smooth: false,
            name: '建议通过违约申请单',
            color: '#40CAC0',
            data: res.data.loanLine.echartsData.approvalApplication
          },
          {
            type: 'line',
            smooth: false,
            name: '建议人工审核违约申请单',
            color: '#FFB35B',
            data: res.data.loanLine.echartsData.reviewApplication
          }
        ]
        // 各账龄违约变化图
        this.geOptions.yAxis = {
          show: true,
          name: '',
          type: 'value',
          interval: 200,
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
        for (const item of res.data.defaultAge.echartsData.legendData) {
          this.geOptions.legend.push(item + '')
        }
        for (const item of res.data.defaultAge.echartsData.maxAge) {
          this.geOptions.timeRange.push(item)
        }
        const colorArr = []
        for (const item of this.geOptions.legend) {
          this.geOptions.series.push({
            name: item + '',
            type: 'line',
            color: colorArr[item],
            smooth: false,
            data: res.data.defaultAge.echartsData.lineData[item]
          })
        }
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
  .bg-purple{
    background-image: linear-gradient(to bottom right,#a7b3e8,#6998ea);
  }
   .bg-skyblue{
            background-image: linear-gradient(to bottom right,#58c1e4,#05c5cf);
  }
   .bg-red{
       background-image: linear-gradient(to bottom right,#E076A0,#EC81AB);
  }
  .pull-right{
    float: right;
    margin-right: 30px !important;
  }
   .con{
      // height: 290px;
      .grid-content{
        // height: 290px;
        padding: 20px;
        .chartCon{
          width:100%;height:200px;padding:20px;margin-top:20px;border:1px solid #eee;border-radius:3px;background:#fbfbfb;
        }
      }
      .conLast .chartCon{
          height: 400px;
        }
    }
</style>
