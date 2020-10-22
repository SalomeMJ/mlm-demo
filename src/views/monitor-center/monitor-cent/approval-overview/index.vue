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
        <el-col :span="12">
          <div class="grid-content text-grey-0 bg-white work-shadow-radius">
            <div class="title">
              <span class="fs-14 fw-bold" style="color:#616f77">放款申请单/放款金额变化趋势</span>
              <div class="selectCon w-120 pull-right" style="margin-top:-8px;margin-right:-15px;">
                <can-search-select id="loanMoney" :options="options" :value="value" :values="values" @initOptions="initOptions" />
              </div>
            </div>
            <div id="chartCon" class="chartCon">
              <chart-template :chart-options="changeOptions" />
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content text-grey-0 bg-white work-shadow-radius">
            <div class="title">
              <span class="fs-14 fw-bold" style="color:#616f77">放款通过率及分布情况</span>
              <div class="selectCon w-120 pull-right" style="margin-top:-8px;margin-right:-15px;">
                <can-search-select id="approval" :options="options" :value="value" :values="values" @initOptions="initOptions" />
              </div>
            </div>
            <div class="chartCon">
              <chart-template :chart-options="approvalOptions" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import CanSearchSelect from '@/components/CanSearchSelect/index'
import { getModelApproval } from '@/api/monitor-model/model-approval'
import ChartTemplate from '@/components/Echats/ChartTemplate'

export default {
  name: 'MonitorApproval',
  directives: {
    focus
  },
  components: { CanSearchSelect, ChartTemplate },
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
      total: null,
      charList: '',
      changeOptions: {
        backgroundColor: '#FBFBFB',
        chartName: '',
        width: '100%',
        height: '480px',
        legend: null,
        xAxisData: [],
        yAxis: null,
        yName: [],
        xName: [],
        series: [],
        seriesData: []
      },
      approvalOptions: {
        backgroundColor: '#FBFBFB',
        chartName: '',
        width: '100%',
        height: '480px',
        legend: null,
        xAxisData: [],
        yAxis: null,
        yName: [],
        xName: [],
        series: [],
        seriesData: []
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
      getModelApproval().then((res) => {
        this.total = res.data.modelCenHead
        // 放款申请单/放款金额变化趋势
        this.changeOptions.legend = ['放款金额', '申请单数量']
        this.changeOptions.yName = ['数量', '金额']
        const echartsData = res.data.loanOrderList.echartsData
        this.changeOptions.xAxisData = echartsData.time
        this.changeOptions.yAxis = [
          {
            type: 'value',
            name: '数量',
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
            name: '金额',
            nameTextStyle: {
              color: 'rgba(0,0,0,0.56)',
              fontSize: 12,
              padding: 10
            },
            min: 1000000,
            interval: 1000000,
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
        this.changeOptions.series = [
          {
            name: '放款金额',
            data: echartsData.loanMoney,
            color: '#FBB221',
            yAxisIndex: 1,
            min: 1000000,
            interval: 1000000,
            smooth: true,
            type: 'line'
          },
          {
            name: '申请单数量',
            data: echartsData.orderNum,
            color: '#6F7C9F',
            type: 'bar',
            yAxisIndex: 0,
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
          }
        ]
        // 放款通过率及分布情况
        this.approvalOptions.legend = ['建议通过占比', '建议人工审核占比', '建议拒绝占比', '建议通过', '建议人工审核', '建议拒绝']
        this.approvalOptions.yName = ['数量', '占比']
        const approvalData = res.data.loanPassList.echartsData
        this.approvalOptions.xAxisData = approvalData.createTime
        this.approvalOptions.yAxis = [
          {
            type: 'value',
            name: '数量',
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
            min: 0,
            max: 3000,
            interval: 500,
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
            name: '占比',
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
            min: 0,
            max: 1,
            interval: 0.1,
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
        this.approvalOptions.series = [
          {
            name: '建议通过占比',
            data: approvalData.loanPassPercent,
            color: '#40CAC0',
            yAxisIndex: 1,
            type: 'line'
          },
          {
            name: '建议人工审核占比',
            data: approvalData.loanTestPercent,
            color: '#FBB221',
            yAxisIndex: 1,
            type: 'line',
            stack: '申请单数量'
          },
          {
            name: '建议拒绝占比',
            data: approvalData.loanRejectPercent,
            color: '#FE6C60',
            yAxisIndex: 1,
            type: 'line'
          },
          {
            name: '建议通过',
            data: approvalData.loanPass,
            color: '#40CAC0',
            yAxisIndex: 0,
            smooth: true,
            type: 'bar',
            stack: '申请单数量',
            barWidth: '10'
          },
          {
            name: '建议人工审核',
            data: approvalData.loanTest,
            color: '#FBB221',
            yAxisIndex: 0,
            type: 'bar',
            stack: '申请单数量',
            barWidth: '10'
          },
          {
            name: '建议拒绝',
            data: approvalData.loanReject,
            color: '#FE6C60',
            yAxisIndex: 0,
            type: 'bar',
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
  .bg-yellow{
    background-image: linear-gradient(to bottom right,#f5ca73,#ffb75e);
  }
   .bg-grey-0{
        background-image: linear-gradient(to bottom right,#a5acb2,#495968);
  }
   .bg-red-0{
       background-image: linear-gradient(to bottom right,#E076A0,#EC81AB);
  }
  .pull-right{
    float: right;
    margin-right: 30px !important;
  }
   .con{
      height: 609px;
      .grid-content{
        height: 609px;
        padding: 20px;
        .chartCon{
          width:100%;height:510px;padding:20px;margin-top:20px;border:1px solid #eee;border-radius:3px;background:#fbfbfb;
        }
      }
    }
</style>
