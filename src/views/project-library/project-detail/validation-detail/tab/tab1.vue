<template>
  <div class="tabContainer">
    <el-tabs v-model="activeTab" :tab-position="tabPosition" class="h100 left-tab">
      <el-tab-pane label="混淆矩阵" name="first" />
      <confusion-matrix v-if="activeTab=='first'" />
      <el-tab-pane label="K-S: 0.5288" name="second" />
      <k-s v-if="activeTab=='second'" />
      <el-tab-pane label="AUC: 0.8447" name="third" />
      <a-u-c v-if="activeTab=='third'" />
      <el-tab-pane label="Gini：0.6894" name="four" />
      <gini v-if="activeTab=='four'" />
    </el-tabs>
  </div>
</template>
<script>
import ConfusionMatrix from '../tab1-container/confusion-matrix'
import KS from '../tab1-container/k-s'
import AUC from '../tab1-container/auc'
import Gini from '../tab1-container/gini'

export default {
  name: 'TabOne',
  components: { ConfusionMatrix, KS, AUC, Gini },
  props: {
    projectDetail: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      tabPosition: 'left',
      activeTab: 'first'
    }
  },
  mounted() {
  },
  methods: {
  }

}
</script>
<style lang="scss" scoped>
.tabContainer{
  height: 100%;
  >>> .el-tabs{
    .el-tabs__header{
    width: 200px;
    height: 100%;
    }
  }
   >>> .el-tabs__nav{
     border-right:1px solid #eee;
      .el-tabs__item{
        cursor: pointer;
        box-sizing: border-box;
        width: 100%;
        height: 60px !important;
        line-height: 60px !important;
        list-style: none;
        text-align: left;
         border:none !important;
      }
      .el-tabs__item.is-active{
        background: rgba(0,160,233,.1) !important;
        color: #00A0E9 !important;
        border-right: 3px solid #049cef !important;
        font-weight: 600 !important;
      }
    }
}
</style>
