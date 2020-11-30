<template>
  <div class="h100 bg-white border-radius-5 coverParentView">
    <head-title :title="$route.query.projectName+'>'+'项目配置>'+$route.query.from+'配置>'+($route.query.modelName==null?'新建'+$route.query.from+'模板':'编辑'+$route.query.from+'模板')" :back="back" />
    <div class="conCen ">
      <div class="modelMsg bg-white w100">
        <p>
          <span class="fs-14 text-grey-0 fw-400">模板名称：</span>
          <el-input v-model="$route.query.modelName" class="mb-20" placeholder="请输入" />
        </p>
        <p>
          <span class="fs-14 text-grey-0 fw-400">模板描述：</span>
          <el-input v-model="$route.query.modelDesc" placeholder="请输入" />
        </p>
      </div>
      <div class="model-record bg-white border-radius-5 mt-20 fs-14">
        <p class="border-bottom-d9 h-32 lh-32 pl-30 pr-30">
          <span class="fs-14 text-grey-0 fw-bold">模板内容</span>
          <span class="pull-right doingColor cursor-pointer " @click="dialogFormVisible = true">增加字段</span>
        </p>
        <div class="pl-30 pr-30 pt-20 pb-20 edit-model">
          <el-table
            v-if="tableData1.length!=0"
            row-key="id"
            class="system-table border-d9 border-radius-5"
            :data="tableData1"
            style="width: 100%;"
            height="80%"
          >
            <template v-for="(item, index) in headArr1">
              <el-table-column :key="index" :prop="item.prop" :label="item.label" :align="index==3||index==4?'right':'left'" show-overflow-tooltip>
                <template slot-scope="scope">
                  <span v-if="item.prop=='id'">
                    {{ scope.row[item.prop] }}
                    <i class="icon iconfont iconicon- doingColor ver-middle mt-5 cursor-pointer" />
                  </span>
                  <span v-if="item.prop!='id'&&item.prop!='mandatory'&&item.prop!='operate'">
                    {{ scope.row[item.prop] }}
                  </span>
                  <span v-if="item.prop=='mandatory'">
                    <el-checkbox v-model="scope.row[item.prop]" />
                  </span>
                  <span v-if="item.prop=='operate'">
                    <i class="icon iconfont iconDelete text-red-0 fs-15" />
                  </span>
                </template>
              </el-table-column>
            </template>
          </el-table>
        </div>
      </div>
    </div>
    <el-dialog title="增加字段" :visible.sync="dialogFormVisible" :modal-append-to-body="false" :close-on-click-modal="false" width="860px">
      <div class="dialog-content">
        <div class="leftCon overflow-y-auto">
          <p class="fs-14 text-grey-0 fw-bold mb-20">可选字段（{{ canSelect.length }}）</p>
          <div v-for="(item, index) in fieldType" :key="index" class="fieldType mb-20">
            <p class="fs-14 text-grey-1 fw-bold">{{ item.type }}</p>
            <div class="type-container">
              <el-checkbox v-for="(field, inde) in item.field" :key="inde" v-model="field.checked" :label="field.fieldName" class="fs-14 fw-400 mt-20" @change="getField" />
            </div>
          </div>
        </div>
        <div class="rightCon">
          <p class="fs-14 text-grey-0 fw-bold">已字段（{{ alreadySelect.length }}）</p>
          <p v-for="(item, index) in alreadySelect" :key="index" class="mt-20">
            <span class=" text-grey-1 fs-14">{{ item.fieldName }}</span>
            <i class="icon iconfont doingColor iconclose cursor-pointer pull-right" @click="delField(item, index)" />
          </p>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
import { getProjectField } from '@/api/project-library/project-configuration/project-field'
import Sortable from 'sortablejs'
export default {
  name: 'ModelEditTemplate',
  components: { HeadTitle },
  data() {
    return {
      back: true,
      headArr1: [
        { label: '序号', prop: 'id', sortable: false },
        { label: '字段名称', prop: 'fieldName', sortable: false },
        { label: '字段类型', prop: 'fieldType', sortable: false },
        { label: '必填', prop: 'mandatory', sortable: false },
        { label: '操作', prop: 'operate', sortable: false }
      ],
      tableData1: [],
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '110px',
      fieldType: [
        {
          type: '单选下拉框', field: [
            { checked: false, fieldName: '负责人' },
            { checked: false, fieldName: '模型注册渠道' },
            { checked: false, fieldName: '所属模型组' },
            { checked: false, fieldName: '算法类型' }]
        },
        {
          type: '内容输入框', field: [
            { checked: false, fieldName: '模型名称' },
            { checked: false, fieldName: '负责人' },
            { checked: false, fieldName: '模型注册渠道' }
          ]
        },
        {
          type: '复选下拉框', field: [
            { checked: false, fieldName: '所属模型组' }
          ]
        },
        {
          type: '文件上传输入框', field: [
            { checked: false, fieldName: '上传PMML文件' },
            { checked: false, fieldName: '上传模型文档' },
            { checked: false, fieldName: '上传特征信息' },
            { checked: false, fieldName: '上传数据信息' },
            { checked: false, fieldName: '上传算法信息' },
            { checked: false, fieldName: '上传测试信息' }
          ]
        }
      ],
      canSelect: [],
      alreadySelect: []
    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    handleClick(tab, event) {
    },
    handleCurrentChange(cpage) {
      this.currpage = cpage
    },
    initData() {
      getProjectField().then((response) => {
        this.tableData1 = response.data.projectField
        this.$nextTick(() => {
          const tbody = document.querySelector('.edit-model  .el-table__body-wrapper tbody')
          Sortable.create(tbody, {
            handle: '.iconicon-',
            dragClass: 'sortable-drag',
            onEnd({ newIndex, oldIndex }) {
              // console.log(this.tableData1)
            }
          })
        })
      })
      for (const item of this.fieldType) {
        for (const ite of item.field) {
          ite.checked = false
        }
      }
      this.getField()
    },
    getField() {
      this.canSelect = []
      this.alreadySelect = []
      const newVal = this.fieldType
      for (const item of newVal) {
        for (const index in item.field) {
          if (item.field[index].checked) {
            this.alreadySelect.push(item.field[index])
          } else {
            this.canSelect.push(item.field[index])
          }
        }
      }
    },
    delField(item, index) {
      this.alreadySelect.splice(index, 1)
      item.checked = false
      this.canSelect.push(item)
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
    height: 125px;
    background: #F6F6F6;
    border-radius: 0 0 5px 5px;
    padding:20px 30px;
    .el-input {
      width: 43%;
    }
  }
  .model-record{
    height: calc(100% - 145px);
    background: #FFFFFF;
    border-radius: 5px;
    span.cursor-pointer{
      text-decoration: underline;
    }
    >>> .el-table{
      th:nth-child(4){
      .cell:before{
        content:'*';
        color:#FF0000;
        font-size:12px;
        position: absolute;
            right: 40px;
            top: 3px;
        }
      }
      .sortable-drag{
        background-color: #e5f5fd;
      }
    }
  }
}

  >>> .el-dialog__wrapper{
    height: 100%;
    .el-dialog{
      height: 554px;
      .el-dialog__body{
        height: calc(100% - 104px);
        padding: 0;
      }
      .dialog-content{
        height: 100%;
        .leftCon{
          width: 570px;
          height: 100%;
          padding: 20px 30px 20px 30px;
          border-right:1px solid #f0f0f0 ;
        }
        .rightCon{
          float: right;
          width: 228px;
          vertical-align: top;
          margin-right: 30px;
          margin-top: -450px;
          padding-top: 20px;
          padding-bottom: 20px;
          height: 100%;
        }
        .el-checkbox__label{
          color: rgba(0,0,0,0.65);
        }
      }
    }
  }
</style>
