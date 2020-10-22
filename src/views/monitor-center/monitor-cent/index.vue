<template>
  <div calss="h100 monitor-cent">
    <div class="pull-right">
      <span class="mr-20">时间范围:{{ timeArea }}</span>
      <span class="text-grey-0">监控周期:</span>
      <can-search-select id="monitor" :options="options" :value="value" :values="values" @initOptions="initOptions" />
    </div>
    <el-tabs id="tabs" v-model="activeName" class="h100" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="策略追踪" name="first" class="overflow-y-auto" />
      <strategy-follow v-if="activeName=='first'" />
      <el-tab-pane label="审批概览" name="second" />
      <approval-overview v-if="activeName=='second'" />
      <el-tab-pane label="贷款质量" name="third" />
      <loan-quality v-if="activeName=='third'" />
    </el-tabs>
  </div>
</template>

<script>
import CanSearchSelect from '@/components/CanSearchSelect/index'
import StrategyFollow from './strategy-follow/index'
import ApprovalOverview from './approval-overview/index'
import LoanQuality from './loan-quiality/index'

export default {
  name: 'MonitorCent',
  components: { CanSearchSelect, StrategyFollow, ApprovalOverview, LoanQuality },
  props: {

  },
  data() {
    return {
      timeArea: '2020.05.01-2020.05.31',
      activeName: 'first',
      options: [{
        value: '1',
        label: '天'
      }, {
        value: '2',
        label: '周'
      }, {
        value: '3',
        label: '月'
      }],
      value: '',
      values: '3',
      total: null
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
    },
    initOptions(e) {
      this.values = e
    }
  }
}
</script>
<style lang="scss" scoped>
   .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .app-main >>> .monitor-cent{
    height: 100%;
  }
  .el-tabs >>> .el-tabs__content{
    padding: 0;
    padding-top: 15px;
        height: 89%;
    overflow-y: auto;
    .el-tab-pane{
      height: 100%;
      .el-row{
        padding: 0;
        margin: 0 !important;
        .el-col:first-child{
          padding-left: 0 !important;
        }
        .el-col:last-child{
          padding-right: 0 !important;
        }
      }
    }
  }
  .el-tabs >>> .el-tabs__nav-scroll{
    width: 720px;
    font-size: 16px;
    font-weight: 700;
    color: rgba(0,0,0,.86);
    text-align: center;
    border: 1px solid #EEE;
    background-color: #f6f6f6;
    border-left: 0;
    cursor: pointer;
  }
  .el-tabs >>> .el-tabs__nav-wrap::after{
    display: none;
  }

  .el-tabs >>> .el-tabs__item{
    border-right:1px solid #eee;
  }

  .el-tabs >>> .el-tabs__header .is-active{
    background-color: #00a0e9;
  }
  .el-tabs--border-card>>>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    color:#909399;
  }
  .el-tabs--border-card>>>.el-tabs__header .el-tabs__item.is-active:hover {
    color:#fff;
  }
     .el-tabs--border-card{
    background-color: transparent;
    box-shadow: none;
    border:none;
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
        overflow: hidden;}}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
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
   .text-grey-0{
      color:#000;
    }
</style>
