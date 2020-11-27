<template>
  <div style="height: 653px;overflow-y: auto;overflow-x: hidden;">
    <el-row :gutter="20">
      <el-col :span="24"><div class="grid-content bg-purple" />
        <div class="modelTabCon w100 mt-20  scoreDistribution ">
          <div class="modelConHead w100 h-32 lh-32 fs-14 fw-bold text-grey-0 pl-20 bg-f6 border-bottom-d9">
            <span class="fs-14 fw-bold text-grey-0">审批匹配度分析</span>
            <span class="pull-right text-decoration doingColor">查看数据</span>
          </div>
          <div id="scoreDistribution" class="w100 conItem p-20">
            <div class="w100  displayBlock chartCon">
              <chart-template :chart-options="chartOptions" />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple" />
        <div class="modelTabCon w100 mt-20 scoreDistribution ">
          <div class="modelConHead w100 h-32 lh-32 fs-14 fw-bold text-grey-0 pl-20 bg-f6 border-bottom-d9">
            <span class="fs-14 fw-bold text-grey-0">模型自动审批分析</span>
            <span class="pull-right text-decoration doingColor">查看数据</span>
          </div>
          <div id="scoreDistribution" class="w100 conItem p-20">
            <div class="w100  displayBlock chartCon">
              <chart-template :chart-options="modelApprovalOptions" />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12"><div class="grid-content bg-purple" />
        <div class="modelTabCon w100 mt-20 scoreDistribution ">
          <div class="modelConHead w100 h-32 lh-32 fs-14 fw-bold text-grey-0 pl-20 bg-f6 border-bottom-d9">
            <span class="fs-14 fw-bold text-grey-0">决策否决分析</span>
            <span class="pull-right text-decoration doingColor">查看数据</span>
          </div>
          <div id="scoreDistribution" class="w100 conItem p-20">
            <div class="w100  displayBlock chartCon">
              <chart-template :chart-options="DecisionVetoOptions" />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getApprovalResult } from '@/api/model-market/approval-result'
import ChartTemplate from '@/components/Echats/ChartTemplate'

export default {
  name: 'MonitorCent',
  components: { ChartTemplate },
  props: {

  },
  data() {
    return {
      timeTitle: '时间范围',
      total: null,
      charList: '',
      chartOptions: {
        xShow: true,
        backgroundColor: '#fff',
        chartName: '',
        width: '100%',
        height: '370px',
        legend: ['批准数量', '拒绝数量', '批准比例'],
        xAxisData: [],
        yName: ['数量', '通过率'],
        xName: [],
        yAxis: [],
        series: []
      },
      modelApprovalOptions: {
        backgroundColor: '#fff',
        chartName: '',
        width: '100%',
        height: '370px',
        legend: ['批准数量', '拒绝数量', '拒绝率'],
        xAxisData: [],
        yName: ['数量', '拒绝率'],
        xName: [],
        xShow: true,
        yAxis: [],
        series: []
      },
      DecisionVetoOptions: {
        backgroundColor: '#fff',
        chartName: '',
        width: '100%',
        height: '370px',
        legend: ['否决数量', '否决率'],
        xAxisData: [],
        yName: ['数量', '否决率'],
        xName: [],
        yAxis: [],
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
      getApprovalResult().then((res) => {
        // 审批匹配度分析
        const approvalData = []
        const refuseData = []
        const approvalRate = []
        for (const item of res.data.approvalMatching) {
          if (item.range !== '合计') {
            this.chartOptions.xAxisData.push(item.range)
            approvalData.push(item.approvalNum)
            refuseData.push(item.refuseNum)
            approvalRate.push(Number(item.approvalRate.replace('%', '')))
          }
        }
        this.chartOptions.yAxis = [
          {
            name: '数量',
            type: 'value',
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
          },
          {
            name: '通过率',
            type: 'value',
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
        ]
        this.chartOptions.series = [
          {
            name: '批准数量',
            color: '#5AD8A6',
            type: 'bar',
            barWidth: 18,
            data: approvalData
          },
          {
            name: '拒绝数量',
            color: '#E8684A',
            type: 'bar',
            barWidth: 18,
            data: refuseData
          },
          {
            name: '批准比例',
            color: '#F6BD16',
            yAxisIndex: 1,
            smooth: false,
            type: 'line',
            data: approvalRate
          }
        ]
        // 模型自动审批分析
        const approvalData1 = []
        const refuseData1 = []
        const refuseRate = []
        for (const item of res.data.autoApproval) {
          if (item.range !== '合计') {
            this.modelApprovalOptions.xAxisData.push(item.range)
            approvalData1.push(item.approvalNum)
            refuseData1.push(item.refuseNum)
            refuseRate.push(Number(item.refuseRate.replace('%', '')))
          }
        }
        this.modelApprovalOptions.yAxis = [
          {
            name: '数量',
            type: 'value',
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
          },
          {
            name: '拒绝率',
            type: 'value',
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
        ]
        this.modelApprovalOptions.series = [
          {
            name: '批准数量',
            color: '#5AD8A6',
            type: 'bar',
            barWidth: 18,
            data: approvalData1
          },
          {
            name: '拒绝数量',
            color: '#E8684A',
            type: 'bar',
            barWidth: 18,
            data: refuseData1
          },
          {
            name: '拒绝率',
            color: '#5D7092',
            yAxisIndex: 1,
            smooth: false,
            type: 'line',
            data: refuseRate
          }
        ]
        // 审批匹配度分析
        const refuseData2 = []
        const refuseRate1 = []
        for (const item of res.data.resuseAnalysis) {
          this.DecisionVetoOptions.xAxisData.push(item.range)
          refuseData2.push(item.refuseNum)
          refuseRate1.push(Number(item.refuseRate.replace('%', '')))
        }
        this.DecisionVetoOptions.yAxis = [
          {
            name: '数量',
            type: 'value',
            interval: 3,
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
          },
          {
            name: '拒绝率',
            type: 'value',
            interval: 0.1,
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
        ]
        this.DecisionVetoOptions.series = [
          {
            name: '否决数量',
            color: '#5B8FF9',
            type: 'bar',
            barWidth: 18,
            data: refuseData2
          },
          {
            name: '否决率',
            color: '#5D7092',
            yAxisIndex: 1,
            smooth: false,
            type: 'line',
            data: refuseRate1
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
 .pull-right{
    float: right;
    position: relative;
    z-index: 2;
    margin-top: -5px;
    text-decoration: underline;
    width: 55%;
    height: 40px;
    line-height: 45px;
    font-size: 14px;
    text-align: right;
    padding-right: 20px;
    cursor: pointer;
  }
  .scoreDistribution{
    height: 435px;
    width: 100%;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
  }
  .el-tabs__content{
    padding-top: 0;
  }
</style>
