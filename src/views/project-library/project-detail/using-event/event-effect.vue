<template>
  <div class="effectCon">
    <div class="conTop pl-30 pt-20 pr-30 pb-20 bg-white">
      <div>
        <span class="fs-14 fw-400">使用事件名称：</span>
        <span class="value">{{ eventName }}</span>
      </div>
      <div>
        <span class="fs-14 fw-400">使用事件描述：</span>
        <span class="value">用于贷前审批</span>
      </div>
      <div>
        <span class="fs-14 fw-400">当前状态</span>
        <span class="value">{{ action }}</span>
      </div>
      <div class="mt-20">
        <span class="fs-14 fw-400">使用模型：</span>
        <span class="value">{{ modelName }}</span>
      </div>
      <div class="mt-20">
        <span class="fs-14 fw-400">模型文档：</span>
        <span class="value">DataSet.csv</span>
      </div>
    </div>
    <div class="conMiddle bg-white">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="调用情况" name="first" />
        <tab1 v-if="activeName=='first'" />
        <el-tab-pane label="预警触发" name="second" />
        <tab2 v-if="activeName=='second'" />
        <el-tab-pane label="配置详情" name="third" />
        <tab3 v-if="activeName=='third'" />
      </el-tabs>
    </div>
    <div class="footer">
      <el-button type="danger" plain>终止该事件</el-button>
    </div>
  </div>
</template>

<script>
import { getUrlParams } from '@/utils/getUrlParams'
import Tab1 from './event-effect-tabs/tab1'
import Tab2 from './event-effect-tabs/tab2'
import Tab3 from './event-effect-tabs/tab3'

export default {
  name: 'EventEffect',
  components: { Tab1, Tab2, Tab3 },
  data() {
    return {
      activeName: 'first',
      eventName: null,
      action: null,
      modelName: null
    }
  },
  created() {
  },
  mounted() {
    this.action = getUrlParams().action
    this.modelName = getUrlParams().modelName
    this.eventName = getUrlParams().eventName
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.effectCon{
   height: 100%;
  background-color: #eee;
  .conTop{
    border-radius: 0 0 5px 5px;
    display: grid;
    grid-template-columns: 1fr 1.2fr 0.8fr;
    grid-column-gap: 20px;
    div{
      width: 100%;
      text-align: right;
      // border:1px solid red;
    }
    span.value{
      display: inline-block;
      line-height: 32px;
      text-indent: 1em;
      height: 32px;
      background: #F6F6F6;
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      width: calc(100% - 110px);
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      text-align: left;
    }
  }
  .conMiddle{
    border-radius: 5px;
    margin-top: 20px;
    height:calc(100% - 192px);
    >>> .el-tabs .el-tabs__content{
      height: 93%;
      overflow-y: auto;
      padding: 0px 30px;
      margin-bottom: 0;
    }
  }
}
.footer{
  height: 64px;
  background: #FFFFFF;
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.16);
  width: 95.5%;
  position: fixed;
  bottom: 0;
  z-index: 9;
  left: 66px;
  text-align: center;
  line-height: 70px;
  button{
    width: 100px !important;
    height: 32px;
    margin-right: 10px;
    padding: 0;
  }
}
 </style>
