<template>
  <div class="h100 bg-white pos-relative">
    <router-view />
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="我发起的" name="first" />
      <el-tab-pane label="我核签的" name="second" />
      <el-tab-pane label="抄送我的" name="third" />
      <tab :active-name="activeName" />
    </el-tabs>
  </div>
</template>

<script>
import Tab from './tab/tab1'

export default {
  name: 'NuclearsignCenter',
  components: { Tab },
  data() {
    return {
      activeName: 'first'
    }
  },
  created() {
  },
  mounted() {
    // localStorage.removeItem('activeTab')
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab)
    }
  }
}
</script>

<style lang="scss" scoped>
// .coverParentView{
//   height:calc(100% - 40px);
//   width:100%;
//   margin-top: 20px;
//   border-radius: 5px;
// }
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

