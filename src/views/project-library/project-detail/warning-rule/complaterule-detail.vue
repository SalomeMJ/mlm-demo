<template>
  <div class="h100  border-radius-5 coverParentView">
    <head-title :title="'预警规则>预警规则详情'" :back="back" />
    <div class="conCen ">
      <div class="modelMsg bg-white w100">
        <span class="fs-16 text-grey-0 fw-bold">预警名称：{{ $route.query.ruleName }}</span>
        <span class="pull-right fw-bold fs-16 normal">预警等级：一般</span>
        <p class="fs-14 fw-400 text-grey-2">预警提醒：无</p>
        <p class="fs-14 fw-400 text-grey-1 warningMsg">
          <span>监控使用事件：易速贷申请</span>
          <span class="ml-20">使用模型：{{ $route.query.modelName }}</span>
          <span>开始执行时间：2020.10.10-12:00:00</span>
          <span class="ml-20">最近操作事件：易速贷申请</span>
          <span>预警人员：于和伟、王盟</span>
        </p>

      </div>
      <div class="model-record mt-20 fs-14">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="预警规则指标展示" name="first" />
          <tab1 v-if="activeName=='first'" />
          <el-tab-pane label="预警触发记录" name="second" />
          <tab2 v-if="activeName=='second'" />
          <!-- <el-tab-pane label="操作日志" name="third" />
          <tab3 v-if="activeName=='third'" /> -->
          <el-tab-pane label="配置详情" name="third" />
          <tab4 v-if="activeName=='third'" />
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
import Tab1 from './tab/tab1'
import Tab2 from './tab/tab2'
// import Tab3 from './tab/tab3'
import Tab4 from './tab/tab4'
// import { getUrlParams } from '@/utils/getUrlParams'

export default {
  name: 'ComplateRuleDetail',
  components: { HeadTitle, Tab1, Tab2, Tab4 },
  data() {
    return {
      back: true,
      activeName: 'first',
      action: null
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleClick(tab, event) {
    }
  }
}
</script>

<style lang="scss" scoped>
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
    text-align: center;
    padding: 0;
  }
}
.conCen{
  width: 100%;
  height: 82%;
  background:#eee;
  .modelMsg{
    width: 100%;
    height: 132px;
    background: #F6F6F6;
    border-radius: 0 0 5px 5px;
    padding:20px 30px;
    p{
      margin-top: 10px;
    }
    p.warningMsg{
      display: grid;
      grid-template-columns: 1fr 1fr 1.5fr 1fr;
      margin: 0;
      span{
        display: inline-block;
        width: 100%;
        margin-top: 10px;
      }
      span:nth-child(5){
        grid-column-start: 1;
        grid-column-end: 5;
      }
    }
  }
  .model-record{
    height: 85%;
    background: #FFFFFF;
    border-radius: 5px;
  }
  >>> .pagination-container{
   width: 100%;
    padding: 32px 20px;
  }
  >>> .el-tabs{
    height: 100%;
    .el-tabs__content{
      height: 88%;
    margin: 20px 30px;
    }
  }
  >>> .el-tabs__nav{
    border-top:none;
    .el-tabs__item{
      height: 32px;
      background: #F6F6F6;
      line-height: 32px;
      border-top:1px solid #D9D9D9;
    }
    .el-tabs__item:hover{
      color:#00a0e9;
    }
    .el-tabs__item:first-child{
      border-radius: 2px 0 0 0;
    }
     .el-tabs__item:last-child{
      border-radius: 0 2px 0 0;
    }
    .el-tabs__item.is-active{
      border:1px solid #00a0e9;
      border-bottom:1px solid transparent;
      color:#00a0e9;
      background-color: #fff;
    }
  }
}
.normal{
  color:#FF7700
}
 </style>
