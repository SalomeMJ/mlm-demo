<template>
  <div class="h100 border-radius-5 coverParentView">
    <head-title :title="'使用事件>'+$route.query.eventName+'>'+$route.query.modelName" :back="back" :src="src" :query="query" />
    <div class="conCen ">
      <div class="modelMsg bg-white w100">
        <span class="fs-16 text-grey-0 fw-600">{{ $route.query.modelName }}</span>
        <el-tag class="ml-20" type="primary">PMML</el-tag>
        <p class="fs-12 fw-400 text-grey-2">121234123412341234123434</p>
        <p class="fs-12 fw-400 text-grey-2">
          <span>模型开发负责人：123</span>
          <span class="ml-20">模型注册时间：2020.08.09-12:00:09</span>
        </p>
        <div class="dataDetail mt-5">
          <p class="fs-14 fw-bold">数据信息</p>
          <div>
            <span v-for="(item, index) in dataDetail" :key="index">
              {{ item.name }}：{{ item.value }}
            </span>
          </div>
        </div>
      </div>
      <div class="model-record mt-20 fs-14">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="模型区分能力" name="first" />
          <tab1 v-if="activeName=='first'" />
          <el-tab-pane label="模型排序能力" name="second" />
          <tab2 v-if="activeName=='second'" />
          <el-tab-pane label="模型稳定性" name="third" />
          <tab3 v-if="activeName=='third'" />
          <el-tab-pane label="模型可解释性" name="fourth" />
          <tab4 v-if="activeName=='fourth'" />
          <el-tab-pane label="cut-off测算" name="five" />
          <tab5 v-if="activeName=='five'" />
          <el-tab-pane label="验证数据特征分布" name="six" />
          <tab6 v-if="activeName=='six'" />
          <el-tab-pane label="验证数据样例" name="seven" />
          <tab7 v-if="activeName=='seven'" />
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
// import { getValidationRecord } from '@/api/project-library/model-record/validation-record'
import HeadTitle from '@/components/HeadTitle'
import { getUrlParams } from '@/utils/getUrlParams'
import Tab1 from './tab/tab1'
import Tab2 from './tab/tab2'
import Tab3 from './tab/tab3'
import Tab4 from './tab/tab4'
import Tab5 from './tab/tab5'
import Tab6 from './tab/tab6'
import Tab7 from './tab/tab7'

export default {
  name: 'ValidationDetail',
  components: { HeadTitle, Tab1, Tab2, Tab3, Tab4, Tab5, Tab6, Tab7 },
  data() {
    return {
      back: true,
      src: '/project-library/project-detail/model-record',
      query: null,
      activeName: 'second',
      dataDetail: [
        { name: '数据集名称', value: 'DataSet' },
        { name: '时间范围', value: '123' },
        { name: '总客户数', value: '123' },
        { name: '好客户数', value: '124' },
        { name: '坏客户数', value: '123' },
        { name: '拒绝客户数', value: '123' },
        { name: '好坏客户比例', value: '123' }
      ]
    }
  },
  created() {
  },
  mounted() {
    this.query = { projectName: getUrlParams().projectName, modelName: getUrlParams().modelName }
  },
  methods: {
    handleClick(e) {
      // cosnole.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.coverParentView{
  background-color: #eee;
}
.conCen{
  width: 100%;
  height: calc(100% - 42px);
  // padding:20px 30px;
  background:#eee;
  .modelMsg{
    width: 100%;
    height: 246px;
    background: #F6F6F6;
    border-radius: 0 0 5px 5px;
    padding:20px 30px;
    p{
      margin-bottom: 10px;
      margin-top: 10px;
    }
    div.dataDetail{
      height: 104px;
      background: #F6F6F6;
      border-radius: 5px;
      border: 1px solid #D9D9D9;
      padding:10px 20px ;
      p{
        margin: 0;
        padding: 0;
        color:#666;
      }
      div{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        span{
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          display: inline-block;
          margin-top: 15px;
        }

      }
    }
  }
  .model-record{
    height: 67%;
    background: #FFFFFF;
    border-radius: 5px;
  }
  >>> .el-tabs{
    height: 100%;
    background-color: #f8f8f8;
    .el-tabs__content{
      height: 94%;
    }
    .el-tabs__header{
      margin: 0;
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
