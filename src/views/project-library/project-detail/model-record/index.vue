<template>
  <div class="h100 bg-white border-radius-5 coverParentView">
    <head-title :title="'项目库>'+$route.query.projectName+'>模型资产池>'+$route.query.modelName" :back="back" :src="src" :query="query" />
    <div class="conCen">
      <div class="modelMsg">
        <span class="fs-16 text-grey-0 fw-600">{{ $route.query.modelName }}</span>
        <el-button class="pull-right" type="primary">导出模型</el-button>
        <p class="fs-12 fw-400 text-grey-2">121234123412341234123434</p>
        <p class="fs-12 fw-400 text-grey-2">
          <span>模型开发负责人：123</span>
          <span class="ml-20">模型注册时间：2020.08.09-12:00:09</span>
        </p>
      </div>
      <div class="model-record mt-20 fs-14">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="模型开发记录" name="first" />
          <develop-record v-if="activeName=='first'" class="h100" />
          <el-tab-pane label="模型验证记录" name="second" />
          <validation-record v-if="activeName=='second'" />
          <el-tab-pane label="模型使用记录" name="third" />
          <using-record v-if="activeName=='third'" />
          <el-tab-pane label="模型操作日志" name="fourth" />
          <el-tab-pane label="模型文档库" name="five" />
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
import DevelopRecord from './develop-record'
import ValidationRecord from './validation-record'
import UsingRecord from './using-record'
import { getUrlParams } from '@/utils/getUrlParams'

export default {
  name: 'ModelRecord',
  components: { HeadTitle, DevelopRecord, ValidationRecord, UsingRecord },
  data() {
    return {
      back: true,
      src: '/project-library/project-detail',
      query: null,
      activeName: 'first'
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
  padding:20px 30px;
  .modelMsg{
    width: 100%;
    height: 88px;
    background: #F6F6F6;
    border-radius: 5px;
    border: 1px solid #D9D9D9;
    padding:10px 15px
  }
  .model-record{
    height: 85%;
  }
  >>> .el-tabs{
    height: 100%;
    .el-tabs__content{
      height: 95%;
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
 </style>
