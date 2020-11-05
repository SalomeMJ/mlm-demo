<template>
  <div class="h100  border-radius-5 coverParentView">
    <head-title :title="'预警规则>预警规则详情'" :back="back" :src="src" :query="query" />
    <add-rule v-if="$route.query.action=='add'" />
    <rule-detail v-if="$route.query.action=='edit'" />
    <complate-rule-detail v-if="$route.query.action=='scan'" />
    <div class="footer">
      <div v-if="$route.query.action=='scan'">
        <el-button type="danger" plain>终止该事件</el-button>
      </div>
      <div v-if="$route.query.ruleName!=null&&$route.query.action=='edit'">
        <el-button type="danger" plain>撤销</el-button>
        <el-button type="primary">催办</el-button>
      </div>
      <div v-if="$route.query.ruleName==null||$route.query.action!='edit'">
        <el-button type="primary" plain @click="goBack()">取消</el-button>
        <el-button type="primary">提交审核</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
import { getUrlParams } from '@/utils/getUrlParams'
import AddRule from './add-rule'
import RuleDetail from './rule-detail'
import ComplateRuleDetail from './complaterule-detail'

export default {
  name: 'WarningRule',
  components: { HeadTitle, AddRule, RuleDetail, ComplateRuleDetail },
  data() {
    return {
      back: true,
      src: '/project-library/project-detail',
      query: null,
      activeName: 'third',
      action: null
    }
  },
  created() {
  },
  mounted() {
    this.query = { projectName: getUrlParams().projectName }
    console.log(getUrlParams().action)
    this.action = getUrlParams().action
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    goBack() {
      this.$router.push({ path: this.src, query: this.query })
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  height: 64px;
  background: #FFFFFF;
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.16);
  width: 95.5%;
  position: fixed;
  bottom: 0;
  z-index: 9;
  left: 66px;
  text-align: center;
  line-height: 70px;
  button{
    width: 100px;
    height: 32px;
    margin-right: 10px;
    text-align: center;
    padding: 0;
  }
}
.coverParentView{
  background-color: #eee;
}
 </style>
