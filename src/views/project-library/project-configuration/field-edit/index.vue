<template>
  <div class="h100 bg-white border-radius-5 coverParentView">
    <head-title :title="$route.query.projectName+'>'+'项目配置>项目字段配置>'+($route.query.fieldName==null?'新建字段':'编辑字段')" :back="back" />
    <div class="conCen  p-30 pt-20">
      <p>
        <span class="fs-14 text-grey-0 fw-400 must-write">字段名称：</span>
        <el-input v-model="form.fieldName" class="mb-20" placeholder="请输入" />
      </p>
      <p>
        <span class="fs-14 text-grey-0 fw-400">字段备注：</span>
        <el-input v-model="form.fieldType" resize="none" type="textarea" placeholder="请输入" />
      </p>
      <p>
        <span class="fs-14 text-grey-0 fw-400 must-write">字段类型：</span>
        <el-input v-model="form.fieldType" class="mb-20" placeholder="请输入" />
      </p>
      <p>
        <span class="fs-14 text-grey-0 fw-400 must-write">字段值选项：</span>
        <el-input v-model="form.fieldValue" class="mb-20" placeholder="请输入" />
      </p>
    </div>
    <div class="footer">
      <div>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmProject()">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getUrlParams } from '@/utils/getUrlParams'
import HeadTitle from '@/components/HeadTitle'
export default {
  name: 'FieldEdit',
  components: { HeadTitle },
  data() {
    return {
      back: true,
      form: {
        fieldName: '',
        fieldDesc: '',
        fieldType: '',
        fieldValue: ''

      }
    }
  },
  created() {
  },
  mounted() {
    this.form.fieldName = getUrlParams().fieldName
    this.form.fieldDesc = getUrlParams().fieldDesc
    this.form.fieldType = getUrlParams().fieldType
    this.form.fieldValue = getUrlParams().fieldValue
  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>
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
    width: 80px !important;
    height: 32px;
    margin-right: 10px;
    padding: 0;
  }
}
.conCen{
  span.fs-14{
    display: inline-block;
    width: 98px;
    text-align: right;
  }
  .el-input,.el-textarea,.el-select{
    width: 40%;
  }
  .el-textarea{
    vertical-align: top;
    margin-bottom: 20px;
  }
}
</style>
