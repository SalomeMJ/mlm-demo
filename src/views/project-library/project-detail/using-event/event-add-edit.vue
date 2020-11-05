<template>
  <div>
    <div class="conCen bg-white">
      <div v-for="(item, index) in condetail" :key="index" class="conItem mb-20">
        <p class="title fs-14 fw-bold text-grey-opacity-86">{{ item.name }}</p>
        <div class="conDetail">
          <p v-for="(child, ind) in item.child" :key="ind">
            <span class="fs-14 fw-400 text-grey-opacity-86" :class="{'must-write':child.mustWrite}">{{ child.name }}：</span>
            <el-input v-if="child.type=='input'" v-model="child.value" :disabled="child.disabled" />
            <el-input v-if="child.type=='textarea'" v-model="child.value" type="textarea" :disabled="child.disabled" :readonly="child.disabled" resize="none" />
            <el-input
              v-if="child.type=='time'"
              v-model="child.value"
              :disabled="child.disabled"
              suffix-icon="el-icon-date"
            />
            <el-select v-if="child.type=='select'" v-model="child.value" :disabled="child.disabled" />
            <i v-if="child.icon!=''" class="icon iconfont doingColor cursor-pointer" :class="child.icon" />
          </p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div v-if="$route.query.eventName!=null&&$route.query.action!='配置中'">
        <el-button type="danger" plain>撤销</el-button>
        <el-button type="primary">催办</el-button>
      </div>
      <div v-if="$route.query.eventName==null||$route.query.action=='配置中'">
        <el-button type="primary" plain @click="goBack()">取消</el-button>
        <el-button type="primary">提交审核</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getUrlParams } from '@/utils/getUrlParams'

export default {
  name: 'EventAddEdit',
  components: { },
  data() {
    return {
      condetail: [
        {
          name: '信息填写',
          child: [
            { name: '使用事件名称', mustWrite: true, type: 'input', icon: '', value: '', disabled: false },
            { name: '使用事件描述', mustWrite: false, type: 'textarea', icon: '', value: '', disabled: false },
            { name: '负责人', mustWrite: true, type: 'select', icon: '', value: '', disabled: false }
          ]
        },
        {
          name: '使用事件配置',
          child: [
            { name: '使用模型', mustWrite: true, type: 'select', icon: '', value: '', disabled: false },
            { name: '验证记录', mustWrite: true, type: 'select', icon: 'iconeye1', value: '', disabled: false },
            { name: '模型文档', mustWrite: true, type: 'select', icon: 'iconxiazai', value: '', disabled: false },
            { name: '使用时间生效时间', mustWrite: true, type: 'time', icon: '', value: '', disabled: false }
          ]
        },
        {
          name: '审批配置',
          child: [
            { name: '审批流', mustWrite: true, type: 'select', icon: '', value: '', disabled: false },
            { name: '审批负责人', mustWrite: false, type: 'input', icon: '', value: '', disabled: false },
            { name: '审批类别', mustWrite: false, type: 'input', icon: '', value: '', disabled: false }
          ]
        }
      ]
    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    initData() {
      for (const item of this.condetail) {
        for (const child in item.child) {
          item.child[child].disabled = false
        }
      }
      if (getUrlParams().eventName == null || getUrlParams().action === '配置中') {
        this.condetail[2].child[1].disabled = true
        this.condetail[2].child[2].disabled = true
        this.condetail[1].child = [
          { name: '使用模型', mustWrite: true, type: 'select', icon: '', disabled: false },
          { name: '验证记录', mustWrite: true, type: 'select', icon: '', disabled: false },
          { name: '模型文档', mustWrite: true, type: 'select', icon: '', disabled: false },
          { name: '发布模型文档', mustWrite: false, type: 'select', icon: 'iconstrategyPlus', disabled: false },
          { name: '使用时间生效时间', mustWrite: true, type: 'time', icon: '', disabled: false }
        ]
      } else {
        this.condetail[1].child = [
          { name: '使用模型', mustWrite: true, type: 'select', icon: '', value: '', disabled: false },
          { name: '验证记录', mustWrite: true, type: 'select', icon: 'iconeye1', value: '', disabled: false },
          { name: '模型文档', mustWrite: true, type: 'select', icon: 'iconxiazai', value: '', disabled: false },
          { name: '使用时间生效时间', mustWrite: true, type: 'time', icon: '', value: '', disabled: false }
        ]
        for (const item of this.condetail) {
          for (const child in item.child) {
            item.child[child].disabled = true
          }
        }
      }
    },
    goBack() {
      this.$router.push({ path: this.src, query: getUrlParams().projectName })
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
    width: 80px;
    height: 32px;
    margin-right: 10px;
  }
}
.conCen{
  width: 100%;
  height: calc(100% - 105px);
  padding: 20px 30px;
  border-radius: 0 0 5px 5px;
  .conItem{
    .title{
      padding: 0;
      margin: 0;
    }
    p{
      margin-top: 20px;
      span{
        display: inline-block;
        width: 160px;
        text-align: right;
      }
    }
    .conDetail{
      .el-input,.el-textarea,.el-select {
        width: 28%;
        height: 32px;
        border-radius: 2px;
      }
      .el-textarea{
        height: 64px;
        vertical-align: top;
      }
      i.iconxiazai{
        margin-left: 5px;
      }
    }

  }
}
 </style>
