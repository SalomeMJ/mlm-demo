<template>
  <div>
    <div v-if="projectDetaiMsg" class="content">
      <div class="projectCon">
        <div class="con-head grid-two">
          <div>
            <span class="fs-18 fw-bold text-grey-0 mr-20 ver-middle">{{ $route.query.projectName }}</span>
            <el-tag v-if="!projectDetaiMsg.projectPrimary">公开</el-tag>
            <el-tag v-if="projectDetaiMsg.projectPrimary" type="warning">私有</el-tag>
            <p class="fs-12 text-grey-2 fw-400 h-32 lh-32" style="display:block;text-align:left;">用于贷前审批</p>
          </div>
          <div class="rightItem">
            <p v-for="(item, index) in projectDetaiMsg.projectData" :key="index">
              <span class="circle mt-5"><i class="iconfont icon" :class="item.icon" /></span>
              <span class="fs-16 text-grey-0 fw-400 num">{{ item.value }}</span>
              <span class="fs-16 text-grey-0 fw-400 num mt-5">{{ item.name }}</span>
            </p>
          </div>
        </div>
        <el-steps>
          <el-step title="注册模型" simple />
          <el-step title="验证模型" simple />
          <el-step title="使用模型" simple />
          <el-step title="模型监控" simple />
          <el-step title="模型迭代" simple />
        </el-steps>
      </div>

      <div class="mt-30">
        <el-row :gutter="20">
          <el-col :span="14">
            <div class="grid-content bg-purple">
              <div class="grid-top">
                <span class="fs-14 fw-bold text-gret-0">预警</span>
                <span class="doingColor fs-14 pull-right cursor-pointer" @click="enterWarningRule()">查看更多</span>
              </div>
              <div class="grid-center mt-20">
                <p v-for="(item, index) in warningData.waningItem" :key="index">
                  <span class="fs-12 fw-400 text-grey-0">{{ item.name }}</span>
                  <span class="fs-20 fw-400 mt-10" :style="{'color':item.color}">{{ item.value }}</span>
                </p>
              </div>
              <div class="warningMsg p-10 overflow-y-auto mt-10">
                <p v-for="(item, index) in warningData.warningMsg" :key="index">
                  <span class="circle mr-10" :style="{'background-color':item.bgc}" />
                  <span class="fs-14 text-grey-0 w100 text-overflow-ellipsis">{{ item.msg }}</span>
                </p>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content bg-purple">
              <div class="grid-top mb-20">
                <span class="fs-14 fw-bold text-gret-0">使用事件触发预警统计</span>
                <el-select v-model="value" class="pull-right" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <line-chart :line-chart="lineChart" :width="lineChart.width" :height="lineChart.height" />
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="mt-30">
        <el-row :gutter="20">
          <el-col :span="14">
            <div class="grid-content bg-white">
              <table-container style="background:#eee;" :table-container="modelContainer" @activeTab="getActiveTab" @enterDetail="getenterDetail" />
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content bg-white" style="background:#eee !important;">
              <div class="grid-top" style="background:#eee;">
                <span class="fs-14 fw-bold text-gret-0">进行中任务（{{ doingMasks.length }}）</span>
              </div>
              <div class="grid-center p-20 mt-10 bg-white">
                <p v-for="(item, index) in doingMasks" :key="index" class="doingColor fs-14 cursor-pointer" style="text-align:left;text-indent:0;" @click="enterEventDetai(item)">{{ item.mask }}“{{ item.eventName }}”{{ item.desc }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="mt-30">
        <el-row :gutter="20">
          <el-col :span="14">
            <div class="grid-content bg-white">
              <table-container style="background:#eee;" :table-container="useEvents" @activeTab="getActiveTab" />
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content bg-white">
              <table-container style="background:#eee;" :table-container="validationContainer" @activeTab="getActiveTab" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from '@/components/Echats/LineChart'
import TableContainer from '../component/table-container'
import { getUrlParams } from '@/utils/getUrlParams'
export default {
  name: 'TabOne',
  components: { LineChart, TableContainer },
  props: {
    projectDetail: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      options: [],
      value: '',
      modelContainer: {
        name: '模型资产池',
        detail: true,
        headArr: [
          { label: '模型编号', prop: 'number', sortable: false },
          { label: '模型名称', prop: 'name', sortable: false },
          { label: '修改时间', prop: 'updateTime', sortable: false },
          { label: '负责人', prop: 'head', sortable: false }
        ],
        tableData: []
      },
      useEvents: {
        name: '使用事件',
        detail: true,
        headArr: [
          { label: '名称', prop: 'name', sortable: false },
          { label: '状态', prop: 'status', sortable: false },
          { label: '触发预警次数', prop: 'touchTimes', sortable: false },
          { label: '生效时间', prop: 'effectTime', sortable: false },
          { label: '负责人', prop: 'head', sortable: false }
        ],
        tableData: []
      },
      validationContainer: {
        name: '验证数据',
        detail: false,
        headArr: [
          { label: '编号', prop: 'number', sortable: false },
          { label: '名称', prop: 'name', sortable: false },
          { label: '时间范围', prop: 'timeRange', sortable: false },
          { label: '好坏比例', prop: 'badGoodRate', sortable: false }
        ],
        tableData: []
      },
      doingMasks: [],
      projectDetaiMsg: null,
      warningData: null,
      lineChart: {
        title: '',
        chartName: 'lineOptions',
        width: '100%',
        height: '150px',
        legend: [''],
        timeRange: [],
        yInterval: 250,
        yName: '',
        yAxis: null,
        series: []
      },
      activeTabIndex: 0
    }
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      this.projectDetaiMsg = this.projectDetail.projectDetaiMsg
      this.warningData = this.projectDetail.warningData
      // 使用时间触发预警统计
      const seriesData = []
      for (const item of this.projectDetail.touchTimesLine.echartsData) {
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
        },
        splitLine: {
          show: false
        },
        splitArea: { show: false }
      }
      this.lineChart.series = [
        {
          type: 'line',
          smooth: true,
          name: '',
          data: seriesData,
          color: '#5B8FF9'
        }
      ]
      // 模型池
      this.modelContainer.tableData = this.projectDetail.modelData
      // 进行中任务
      this.doingMasks = this.projectDetail.doingMasks
      // 使用事件
      this.useEvents.tableData = this.projectDetail.useEvents
      this.options = []
      for (const item of this.useEvents.tableData) {
        this.options.push(
          { label: item.name, value: item.name }
        )
      }
      this.value = this.options[0].label
      // 验证数据
      this.validationContainer.tableData = this.projectDetail.validationData
    },
    getenterDetail(e) {
      this.$emit('enterDetail', e)
    },
    getActiveTab(e) {
      if (e === '模型资产池') {
        this.activeTabIndex = 1
      }
      if (e === '使用事件') {
        this.activeTabIndex = 2
      }
      if (e === '验证数据') {
        this.activeTabIndex = 4
      }
      this.$emit('activeName', this.activeTabIndex)
    },
    enterWarningRule() {
      this.$emit('activeName', 3)
    },
    enterEventDetai(params) {
      this.$emit('activeName', 2)
      this.$router.push({ path: '/project-library/project-detail/using-detail', query: { eventName: params.eventName, modelName: params.useModel, projectName: getUrlParams().projectName, action: params.status }})
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
  .content >>> .el-step__line{
    height:1px;
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
  .content >>> .el-step__icon.is-text{
    border:1px solid;
  }
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
