<template>
  <div class="container">
    <span>test</span>
  </div>
</template>

<script>

// import NavTitle from '@/layout/components/NavTitle/index.vue'
// import PanelGroup from '@/components/Echats/PanelGroup'
// import LineChart from '@/components/Echats/LineChart'
// import RaddarChart from '@/components/Echats/RaddarChart'
// import PieChart from '@/components/Echats/PieChart'
// import BarChart from '@/components/Echats/BarChart'
// import TableList from '@/components/Echats/TableList'
// import DatasetChart from '@/components/Echats/DatasetChart'
// import IconTableList from '@/views/model/personal-report/component/IconTableList'
// import { findAllModel, getExtremeTime, requestBasicInfos, calculationByTypeAndTime } from '@/api/model'

export default {
  name: 'DashboardAdmin',
  // components: { NavTitle },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}

</script>

<style lang="scss" scope>
.el-tag{
  margin-left: 10px;
}
.no-model{
  text-align: center;
  margin-top: 20%;
}
.el-tabs--card>.el-tabs__header .el-tabs__nav{
  background:rgba(246,246,246,1);
  border:1px solid rgba(238,238,238,1);
  color:rgba(51,51,51,1);
  border-radius:5px 0px 0px 5px;
  height:28px;
  line-height: 28px;
}
.el-tabs__item{
  line-height: 28px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 220px;
  overflow: hidden;
  word-break: keep-all;
  text-align: center;
}
.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
  color:rgba(255,255,255,1);
  background:rgba(66,133,226,1);
  }
.container{
  border-radius:10px;
}
.model-name{
  font-size:18px;
  font-weight:600;
  color:rgba(51,51,51,1);
  line-height:30px;
  .model-code{
  color: #999999;
  }
  .link-model-detail{
  font-size:14px;
  font-weight:400;
  text-decoration:underline;
  color:rgba(66,133,226,1);
  line-height:30px;
  float: right;
  cursor: pointer;
  }
}
.el-range-editor {
  // float: right;
  position: absolute;
  right: 0;
}
.el-range-editor--medium.el-input__inner{
  height: 30px;
}

.dashboard-editor-container {
  padding: 32px;
  background-color: RGBA(255, 255, 255, 1);
  position: relative;

  .chart-wrapper {
    background: #fff;
    // padding: 0px 16px 0 16px;
    margin-bottom: 32px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(237,237,237,1);
    border-radius:5px 5px 0px 0px;
    .chat-title{
      font-size:16px;
      font-weight:600;
      color:rgba(51,51,51,1);
      height:32px;
      background:rgba(245,245,245,1);
      border:1px solid rgba(237,237,237,1);
      border-radius:5px 5px 0px 0px;
      text-indent: 10px;
      line-height: 32px;
      position: relative;
    }
  }
}
.el-range-editor--medium.el-input__inner{
  background-color: #f5f5f5;
}
.el-range-editor--medium .el-range-input{
  background: #f5f5f5;
  color: #333333;
}
@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
