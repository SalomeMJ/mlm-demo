<template>
  <div class="h100 bg-white border-radius-5 pos-relative">
    <head-title title="系统管理配置" :back="back" />
    <div class=" tabContainer pl-30 pr-30">
      <el-tabs v-model="activeTab" type="card" :tab-position="tabPosition" class="h100 left-tab" @tab-click="handleClick">
        <el-tab-pane label="账号管理" name="0" />
        <tab1 v-if="activeTab=='0'" />
        <el-tab-pane label="角色管理" name="1" />
        <tab2 v-if="activeTab=='1'" />
        <el-tab-pane label="数据权限组" name="2" />
        <tab3 v-if="activeTab=='2'" />
        <el-tab-pane label="数据属性列表" name="3" />
        <tab4 v-if="activeTab=='3'" />
        <el-tab-pane label="组织管理" name="4" />
        <tab5 v-if="activeTab=='4'" />
        <el-tab-pane label="项目管理" name="5" />
        <tab6 v-if="activeTab=='5'" />
        <el-tab-pane label="授权信息" name="6" />
        <tab7 v-if="activeTab=='6'" />
      </el-tabs>
    </div>
  </div>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
import Tab1 from './tab/tab1'
import Tab2 from './tab/tab2'
import Tab3 from './tab/tab3'
import Tab4 from './tab/tab4'
import Tab5 from './tab/tab5'
import Tab6 from './tab/tab6'
import Tab7 from './tab/tab7'
export default {
  name: 'System',
  components: { HeadTitle, Tab1, Tab2, Tab3, Tab4, Tab5, Tab6, Tab7 },
  data() {
    return {
      activeTab: '0',
      tabPosition: 'left',
      back: false
    }
  },
  created() {
  },
  mounted() {
    this.handleClick({ index: (localStorage.getItem('systemIndex') != null ? localStorage.getItem('systemIndex') : '0') })
  },
  methods: {
    handleClick(tab, event) {
      localStorage.setItem('systemIndex', tab.index)
      this.activeTab = tab.index
    }
  }
}
</script>

<style lang="scss" scoped>
.tabContainer{
  height: calc(100% - 42px);
  >>> .el-tabs{
    .el-tabs__header{
    width: 176px;
    height: 100%;
    border:none;
    border-right:1px solid #d9d9d9;
    padding-top: 30px;
    }
    .el-tabs__content{
      height: 100%;
    }
  }
   >>> .el-tabs__nav{
     border-right:1px solid #eee;
      .el-tabs__item{
        cursor: pointer;
        box-sizing: border-box;
        width: 100%;
        height: 30px !important;
        line-height: 30px !important;
     background-color: #fff;
        margin-bottom: 15px;
        list-style: none;
        text-align: left;
         border:none !important;
         color:#333;
      }
      div.el-tabs__item:last-child{
        margin-bottom: none;
      }
      .el-tabs__item.is-active{
        background: #00a0e9 !important;
        color: #fff !important;
      }
    }
}
  </style>

