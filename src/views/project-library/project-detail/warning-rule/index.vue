<template>
  <div class="h100  border-radius-5 coverParentView">
    <head-title v-if="$route.query.projectName!=undefined" :title="$route.query.projectName+'>'+'预警规则>'+$route.query.title" :back="back" />
    <head-title v-if="$route.query.projectName==undefined" :title="$route.query.title+'>'+$route.query.ruleName" :back="back" />
    <add-rule v-if="$route.query.ruleName==null" />
    <rule-detail v-if="$route.query.action=='生效审核中'||$route.query.action=='配置中'" />
    <complate-rule-detail v-if="$route.query.action=='生效中'" />
    <div v-if="$route.query.title!='抄送我的'&&$route.query.status!=='已撤销'" class="footer">
      <div v-if="$route.query.title=='我核签的'">
        <el-button type="danger" plain @click="goBack()">拒绝</el-button>
        <el-button type="primary" @click="goBack()">同意</el-button>
      </div>
      <div v-if="$route.query.action=='生效中'">
        <el-button type="danger" plain @click="goBack()">终止该事件</el-button>
      </div>
      <div v-if="$route.query.ruleName!=null&&$route.query.action=='生效审核中'">
        <el-button type="danger" plain @click="goBack()">撤销</el-button>
        <el-button v-if="$route.query.title!='我发起的'" type="primary" @click="goBack()">催办</el-button>
        <el-button v-if="$route.query.title=='我发起的'&&$route.query.status=='已拒绝'" type="primary" @click="editWarning()">重新编辑</el-button>
      </div>
      <div v-if="$route.query.ruleName==null||$route.query.action=='配置中'">
        <el-button type="primary" plain @click="goBack()">取消</el-button>
        <el-button type="primary" @click="goBack()">提交审核</el-button>
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
      activeName: 'third',
      action: null
    }
  },
  created() {
  },
  mounted() {
    this.action = getUrlParams().action
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    goBack() {
      this.$emit('activeName', getUrlParams().title)
      this.$router.go(-1)
    },
    editWarning() {
      this.$router.push({ path: '/nuclearsign-center/warning-rule', query: { ruleName: getUrlParams().ruleName, action: '配置中', title: getUrlParams().title }})
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
  z-index: 999;
  left: 66px;
  text-align: center;
  line-height: 70px;
  button{
    width: 100px !important;
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
