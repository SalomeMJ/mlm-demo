<template>
  <div class="h100 bg-white border-radius-5 coverParentView">
    <head-title :title="$route.query.projectName+'>'+'项目配置'" :back="back" />
    <div class="conCen ">
      <div class="modelMsg bg-white w100">
        <span class="fs-16 text-grey-0 fw-bold">{{ $route.query.projectName }}</span>
        <i class="icon iconfont icontable-edit doingColor ml-10 cursor-pointer" @click="editProject()" />
        <p class="fs-12 fw-400 text-grey-2">用于贷前审批</p>
        <p class="fs-14 fw-400 text-grey-2">
          <span>创建人：黎簇</span>
          <span class="ml-50">创建时间：2020.08.09-12:00:09</span>
          <span class="ml-50">项目成员(1)：黎簇</span>
        </p>
      </div>
      <div class="model-record mt-20 fs-14">
        <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
          <el-tab-pane label="工作流配置" name="0" />
          <span v-if="activeTab=='0'" class="addValidationEvent" @click="addflow('工作')">新建工作流</span>
          <tab1 v-if="activeTab=='0'" />
          <el-tab-pane label="审批流配置" name="1" />
          <span v-if="activeTab=='1'" class="addValidationEvent" @click="addflow('审批')">新建审批流</span>
          <tab2 v-if="activeTab=='1'" />
          <el-tab-pane label="模型注册配置" name="2" />
          <span v-if="activeTab=='2'" class="addValidationEvent" @click="addModelTemplate('模型注册')">新建模型注册模板</span>
          <tab3 v-if="activeTab=='2'" />
          <el-tab-pane label="验证事件配置" name="3" />
          <span v-if="activeTab=='3'" class="addValidationEvent" @click="addModelTemplate('验证事件')">新建验证事件模板</span>
          <tab4 v-if="activeTab=='3'" />
          <el-tab-pane label="使用事件配置" name="4" />
          <span v-if="activeTab=='4'" class="addValidationEvent" @click="addModelTemplate('使用事件')">新建使用事件模板</span>
          <tab5 v-if="activeTab=='4'" />
          <el-tab-pane label="项目字段配置" name="5" />
          <span v-if="activeTab=='5'" class="addValidationEvent" @click="addField('增加')">新建字段</span>
          <tab6 v-if="activeTab=='5'" />
        </el-tabs>
      </div>
      <el-dialog title="编辑项目信息" :visible.sync="dialogFormVisible" :modal-append-to-body="false" :close-on-click-modal="false" width="480px">
        <el-form :model="form">
          <el-form-item label="项目名称：" required :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" placeholder="请输入" />
          </el-form-item>
          <el-form-item label="项目描述：" :label-width="formLabelWidth">
            <el-input v-model="form.desc" type="textarea" resize="none" placeholder="请输入" autocomplete="off" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmProject()">确 定</el-button>
        </div>
      </el-dialog>
      <router-view />
    </div>
  </div>
</template>

<script>
import { getUrlParams } from '@/utils/getUrlParams'
import HeadTitle from '@/components/HeadTitle'
import Tab1 from './tab/tab1'
import Tab2 from './tab/tab2'
import Tab3 from './tab/tab3'
import Tab4 from './tab/tab4'
import Tab5 from './tab/tab5'
import Tab6 from './tab/tab6'
export default {
  name: 'ProjectConfiguration',
  components: { HeadTitle, Tab1, Tab2, Tab3, Tab4, Tab5, Tab6 },
  data() {
    return {
      back: true,
      activeTab: null,
      dialogFormVisible: false,
      form: {
        name: '',
        desc: '用于贷前审批'
      },
      formLabelWidth: '93px'
    }
  },
  created() {
  },
  mounted() {
    this.form.name = getUrlParams().projectName
    this.activeTab = localStorage.getItem('activeTab')
  },
  methods: {
    handleClick(tab, event) {
      localStorage.setItem('activeTab', tab.index)
    },
    addModelTemplate(params) {
      this.$router.push({ path: '/project-library/project-configuration/model-edit-template', query: { projectName: getUrlParams().projectName, from: params }})
    },
    editProject() {
      this.dialogFormVisible = true
    },
    confirmProject() {
      this.dialogFormVisible = false
      this.$router.push({ path: '/project-library/project-configuration', query: { projectName: this.form.name }})
    },
    addflow(params) {
      this.$router.push({ path: '/project-library/project-configuration/flow-edit', query: { projectName: getUrlParams().projectName, title: params }})
    },
    addField(params) {
      this.$router.push({ path: '/project-library/project-configuration/field-edit', query: { projectName: getUrlParams().projectName, from: params }})
    }
  }
}
</script>
<style lang='scss' scoped>
.conCen{
  width: 100%;
  height: 94%;
  // padding:20px 30px;
  background:#eee;
  .modelMsg{
    width: 100%;
    height: 105px;
    background: #F6F6F6;
    border-radius: 0 0 5px 5px;
    padding:20px 30px;
    p{
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }
  .model-record{
    height: calc(100% - 125px);
    background: #FFFFFF;
    border-radius: 5px;
  }
  >>> .pagination-container{
   width: 100%;
    padding: 32px 20px;
  }
  >>> .el-tabs{
    height: 100%;
    .el-tabs__content{
          height: calc(100% - 72px);
    margin: 20px 30px;
    overflow-y: auto;
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
.addValidationEvent{
  border: none;
  background: #fff;
  text-decoration: underline;
  cursor: pointer;
  position: fixed;
  top: 255px;
  height: 20px;
  right: 50px;
  color:#00a0e9;
}
.el-dialog__wrapper{
  >>> .el-dialog{
    height: 280px;
  }
}
</style>
