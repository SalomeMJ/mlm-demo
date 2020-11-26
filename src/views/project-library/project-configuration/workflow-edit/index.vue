<template>
  <div class="h100 bg-white border-radius-5 coverParentView">
    <head-title :title="$route.query.projectName+'>'+'项目配置>工作流配置>'+($route.query.workflowName==null?'新建工作流':'编辑工作流')" :back="back" />
    <div class="conCen ">
      <div class="modelMsg bg-white w100">
        <p>
          <span class="fs-14 text-grey-0 fw-400">工作流名称：</span>
          <el-input v-model="$route.query.workflowName" class="mb-20" placeholder="请输入" />
        </p>
        <p>
          <span class="fs-14 text-grey-0 fw-400">工作流描述：</span>
          <el-input v-model="$route.query.workflowDesc" placeholder="请输入" />
        </p>
      </div>
      <div class="model-record bg-white border-radius-5 mt-20 fs-14">
        <p class="border-bottom-d9 h-32 lh-32 pl-30 pr-30">
          <span class="fs-14 text-grey-0 fw-bold">工作流编辑</span>
        </p>
        <div class="pl-30 pr-30 pt-20 pb-20 edit-model">
          <div class="h100 border-d9 border-radius-5 bg-grey-4">
            <flow-panel :show-flow="$route.query.workflowName==null" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
import FlowPanel from '@/components/ef/panel'
export default {
  name: 'AddEditWorkflow',
  components: { HeadTitle, FlowPanel },
  data() {
    return {
      back: true
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang='scss' scoped>
.conCen{
  width: 100%;
  height: 94%;
  // padding:20px 30px;
  background:#eee;
  .modelMsg{
    width: 100%;
    height: 125px;
    background: #F6F6F6;
    border-radius: 0 0 5px 5px;
    padding:20px 30px;
    .el-input {
      width: 43%;
    }
  }
  .model-record{
    height: calc(100% - 145px);
    background: #FFFFFF;
    border-radius: 5px;
    >>> .edit-model{
      height:calc(100% - 32px);
      .menuList{
         display: inline-block;
        width:200px;
        vertical-align: top;
        border-radius: 5px 0 0 5px;
        border-right:1px solid #d9d9d9;
        .mb-20{
          width: 100%;
          margin: 0 !important;
            span{
              display: inline-block;
              width: 100%;
              padding: 20px;
            }
        }
        .mb-20:hover,.mb-active{
          background-color: rgba(0,160,233,.1);
        }
      }
      .elContainer{
        display: inline-block;
        width:calc(100% - 568px);
        height: 100%;
        vertical-align: top;
        padding: 20px;
      }
      .elDetail{
         display: inline-block;
        width: 360px;
        height: 100%;
        border-left:1px solid #d9d9d9;
        vertical-align: top;
        border-radius: 0 5px 5px 0;
        p{
          height: 42px;
          line-height: 42px;
          padding-left: 20px;
          border-bottom:1px solid #d9d9d9;
        }
      }
    }
  }
}
</style>
