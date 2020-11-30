<template>
  <div class="h100 bg-white border-radius-5 pos-relative">
    <router-view />
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="我发起的" name="first" />
      <tab1 v-if="activeName=='first'" :active-name="activeName" />
      <el-tab-pane label="我核签的" name="second" />
      <tab2 v-if="activeName=='second'" :active-name="activeName" />
      <el-tab-pane label="抄送我的" name="third" />
      <tab3 v-if="activeName=='third'" :active-name="activeName" />
    </el-tabs>
  </div>
</template>

<script>
import Tab1 from './tab/tab1'
import Tab2 from './tab/tab2'
import Tab3 from './tab/tab3'

export default {
  name: 'NuclearsignCenter',
  components: { Tab1, Tab2, Tab3 },
  data() {
    return {
      activeName: null
    }
  },
  created() {
  },
  mounted() {
    this.activeName = 'first'
  },
  methods: {
    handleClick(tab, event) {
      if (tab.index === '0') {
        this.activeName = 'first'
      } else if (tab.index === '1') {
        this.activeName = 'second'
      } if (tab.index === '2') {
        this.activeName = 'third'
      }
    },
    getactiveName(e) {
      // console.log(e)
      // if (e === '我发起的') {
      //   this.activeName = 'first'
      // } else if (e === '我核签的') {
      //   this.activeName = 'second'
      // } if (e === '抄送我的') {
      //   this.activeName = 'third'
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
 .el-tabs{
    height: 100%;
    .el-tabs__content{
      height: calc(100% - 72px);
      margin: 20px 30px;
      overflow-y: auto;
    }
     >>> .el-tabs__nav{
    border-top:none;
    .el-tabs__item{
      width: 110px;
      height: 32px;
      background: #F6F6F6;
      line-height: 32px;
      text-align: center;
      padding: 0;
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

