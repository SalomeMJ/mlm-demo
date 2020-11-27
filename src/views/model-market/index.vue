<template>
  <div class="h100 border-radius-5 bg-ee">
    <el-tabs v-model="activeName" type="card" class="headTab" @tab-click="handleClick">
      <el-tab-pane label="模型追踪" name="first" />
      <tab1 v-if="activeName=='first'" />
      <el-tab-pane label="模型指标" name="second" />
      <tab2 v-if="activeName=='second'" />
    </el-tabs>
    <div class="monitoring">
      <span class="fs-14 text-grey-0 fw-400">监控项目：</span>
      <el-select v-model="project" class="mr-15 ml-5" placeholder="请选择">
        <el-option
          v-for="item in projectlist"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <span class="fs-14 text-grey-0 fw-400 ml-20">监控周期：</span>
      <el-select v-model="period" class="mr-15" placeholder="请选择">
        <el-option
          v-for="item in monitoringPeriod"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <picker-time id="timetile" :time-title="timeTitle" />
    </div>
  </div>
</template>

<script>
import Tab1 from './tab/tab1'
import Tab2 from './tab/tab2'
import PickerTime from '@/components/PickerTime/index'
import { getModelStrategy } from '@/api/model-market/model-strategy'
export default {
  name: 'ModelMarket',
  components: { Tab1, Tab2, PickerTime },
  data() {
    return {
      activeName: 'first',
      timeTitle: '时间范围',
      projectlist: [],
      project: '',
      monitoringPeriod: [
        {
          value: 0,
          label: '日'
        }, {
          value: 1,
          label: '周'
        }, {
          value: 2,
          label: '月'
        }, {
          value: 3,
          label: '年'
        }],
      period: 0
    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab)
    },
    initData() {
      getModelStrategy().then((res) => {
        this.projectlist = res.data.projectlist
        this.project = this.projectlist[0].value
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-ee{
  position: relative;
  >>> .headTab.el-tabs.el-tabs--card .el-tabs__header{
    border:none;
  }
  >>> .headTab.el-tabs.el-tabs--card .el-tabs__content{
    height: calc(100% - 42px);
  }
  >>>.headTab.el-tabs.el-tabs--card .el-tabs__nav .el-tabs__item{
    width: 120px;
      height: 32px;
      background: transparent;
      border-radius: 16px;
      color: #333;
      font-size: 16px;
      border:none;
  }
  >>>.headTab.el-tabs.el-tabs--card .el-tabs__nav .el-tabs__item.is-active{
      background: #00A0E9;
      border-radius: 16px;
      color: #fff;
  }
  .monitoring{
    position: absolute;
    top: 0px;
    right: 0px;
    #timetile{
      display: inline-block;
      .el-range-editor.el-input__inner{
      width: 220px !important;
      }
    }
  }
}
 </style>
