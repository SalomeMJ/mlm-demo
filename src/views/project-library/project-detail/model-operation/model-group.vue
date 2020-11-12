<template>
  <div class="h100 border-radius-5 coverParentView">
    <head-title :title="$route.query.eventName==undefined?'模型资产池>'+$route.query.modelGroup:'使用事件>'+$route.query.modelGroup" :back="back" :src="src" :query="query" />
    <div class="conCen ">
      <div class="modelMsg bg-white w100">
        <span class="fs-16 text-grey-0 fw-600">{{ $route.query.modelGroup }}</span>
        <el-button class="pull-right" type="primary">导出模型</el-button>
        <p class="fs-12 fw-400 text-grey-2">用于贷前审批</p>
        <p class="fs-14 fw-400 text-grey-2">
          <span>模型数量：123</span>
          <span class="ml-20 mr-20">模型组负责人：黎簇</span>
          <span class="ml-20">模型组创建时间：2020.08.09-12:00:09</span>
        </p>
      </div>
      <div class="model-record mt-20 fs-14">
        <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
          <el-tab-pane label="模型列表" name="first" />
          <tab1 v-if="activeTab=='first'" />
          <el-tab-pane label="模型组操作日志" name="second" />
          <tab2 v-if="activeTab=='second'" />
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
import { getUrlParams } from '@/utils/getUrlParams'
import Tab1 from './tab/tab1'
import Tab2 from './tab/tab2'

export default {
  name: 'ModelRecord',
  components: { HeadTitle, Tab1, Tab2 },
  data() {
    return {
      back: true,
      src: '/project-library/project-detail',
      query: null,
      activeTab: 'first'
    }
  },
  created() {
  },
  mounted() {
    this.query = { projectName: getUrlParams().projectName }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
.conCen{
  width: 100%;
  height: calc(100% - 42px);
  // padding:20px 30px;
  background:#eee;
  .modelMsg{
    width: 100%;
    height: 105px;
    background: #F6F6F6;
    border-radius: 0 0 5px 5px;
    padding:20px 30px;
    p{
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }
  .model-record{
    height: calc(100% - 125px);
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
          height: calc(100% - 72px);
    margin: 20px 30px;
    overflow-y: auto;
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
.addValidationEvent{
  border: none;
  background: #fff;
  text-decoration: underline;
  cursor: pointer;
  position: fixed;
  top: 255px;
  height: 20px;
  right: 50px;
  color:#00a0e9;
}
 </style>
