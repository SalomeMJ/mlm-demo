<template>
  <div class="h100 border-radius-5 coverParentView">
    <head-title :title="'项目库>'+$route.query.projectName+'>模型资产池>'+$route.query.modelName" :back="back" :src="src" :query="query" />
    <div class="conCen ">
      <div class="modelMsg bg-white w100">
        <span class="fs-16 text-grey-0 fw-600">{{ $route.query.modelName }}</span>
        <el-button class="pull-right" type="primary">导出模型</el-button>
        <p class="fs-12 fw-400 text-grey-2">用于贷前审批</p>
        <p class="fs-12 fw-400 text-grey-2">
          <span>模型开发负责人：黎簇</span>
          <span class="ml-20">模型注册时间：2020.08.09-12:00:09</span>
        </p>
      </div>
      <div class="model-record mt-20 fs-14">
        <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
          <el-tab-pane label="模型开发记录" name="first" />
          <develop-record v-if="activeTab=='first'" />
          <el-tab-pane label="模型验证记录" name="second" />
          <span v-if="activeTab=='second'" class="addValidationEvent" @click="addValidationEvent()">新建验证事件</span>
          <validation-record v-if="activeTab=='second'" />
          <el-tab-pane label="模型使用记录" name="third" />
          <using-record v-if="activeTab=='third'" />
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
import { getAssetPool } from '@/api/model-asset/asset-pool'

export default {
  name: 'ModelRecord',
  components: { HeadTitle, DevelopRecord, ValidationRecord, UsingRecord },
  data() {
    return {
      back: true,
      src: '/project-library/project-detail',
      query: null,
      activeTab: 'first',
      child: [
        { name: '验证事件名称', mustWrite: true, type: 'input', value: '' },
        { name: '验证模型', mustWrite: true, type: 'select', value: '易速贷申请', options: ['易速贷申请', '自营车审批', '新车审批'] },
        { name: '选择验证方式', mustWrite: true, type: 'select', value: '上传数据', options: ['上传数据'] },
        { name: '负责人', mustWrite: true, type: 'select', value: '黎簇', options: ['黎簇', '王盟', '于和伟'] },
        { name: '上传数据', mustWrite: true, type: 'input', value: '' }
      ]
    }
  },
  created() {
  },
  mounted() {
    this.query = { projectName: getUrlParams().projectName }
    getAssetPool().then((response) => {
      for (const item of response.data.assetPool) {
        this.child[1].options.push(item.modelName)
      }
    })
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    getActiveTab(e) {
      this.activeName = e
    },
    addValidationEvent() {
      this.$msgBox.showMsgBox({
        title: '新建验证事件',
        content: '',
        contentData: this.child,
        isShowInput: true
      }).then(async(val) => {
        this.$router.push({ path: '/project-library/project-detail/validation-detail', query: { modelName: getUrlParams().modelName, eventName: val[0].value, projectName: getUrlParams().projectName }})
      }).catch(() => {
        // ...
      })
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
    // border: 1px solid #D9D9D9;
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
