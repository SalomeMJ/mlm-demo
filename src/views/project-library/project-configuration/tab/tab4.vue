<template>
  <div class="h100 border-d9 border-radius-5">
    <el-table
      v-if="tableData.length!=0"
      class="system-table"
      :data="tableData"
      style="width: 100%;"
      height="80%"
      :default-sort="{prop: 'name', order: 'descending'}"
      @selection-change="handleCurrentChange"
    >
      <template v-for="(item,index) in headArr">
        <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" :align="index==3||index==4?'right':'left'" show-overflow-tooltip fixed>
          <template slot-scope="scope">
            <span v-if="item.prop!='enable'&&item.prop!='operate'">
              {{ scope.row[item.prop] }}
            </span>
            <span v-if="item.prop=='enable'">
              <el-switch
                v-model="scope.row[item.prop]"
                style="display:inline-block;margin-right:-5px;"
                :width="28"
              />
            </span>
            <span v-if="item.prop=='operate'">
              <i class="icon iconfont doingColor mr-10 icontable-edit" @click="edit(scope.row)" />
              <i class="icon iconfont doingColor mr-10 iconeye1" @click="scan(scope.row)" />
              <i class="icon iconfont doingColor mr-10 iconCopy" />
              <i class="icon iconfont text-red-0 iconDelete fs-15" />
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <pagi-nation :pagination-data="paginationData" @pagination="pageChange" />
    <el-dialog title="查看验证事件模板" :visible.sync="dialogFormVisible" :modal-append-to-body="false" :close-on-click-modal="false" width="826px">
      <div class="el-body pl-20 pr-20">
        <div class="modelMsg bg-white w100">
          <span class="fs-16 text-grey-0 fw-bold">{{ $route.query.projectName }}</span>
          <p class="fs-12 fw-400 text-grey-2 mb-10 mt-10">用于贷前审批</p>
          <p class="fs-14 fw-400 text-grey-2">
            <span>创建人：黎簇</span>
            <span class="ml-50">创建时间：2020.08.09-12:00:09</span>
            <span class="ml-50">修改人：黎簇</span>
            <span class="ml-50">修改时间：2020.08.09-12:00:09</span>
          </p>
        </div>
      </div>
      <div class="p-20">
        <p class="fs-14 text-grey-0 fw-bold mb-10">模板内容</p>
        <el-table
          v-if="tableData1.length!=0"
          class="system-table border-d9 border-radius-5"
          :data="tableData1"
          style="width: 100%;"
          height="80%"
          :default-sort="{prop: 'name', order: 'descending'}"
          @selection-change="handleCurrentChange"
        >
          <template v-for="(item,index) in headArr1">
            <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" :align="index==3||index==4?'right':'left'" show-overflow-tooltip fixed>
              <template slot-scope="scope">
                <span v-if="item.prop!='mandatory'">
                  {{ scope.row[item.prop] }}
                </span>
                <span v-if="item.prop=='mandatory'">
                  <el-checkbox v-model="scope.row[item.prop]" />
                </span>
              </template>
            </el-table-column>
          </template>
        </el-table>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getUrlParams } from '@/utils/getUrlParams'
import { getModelRegister } from '@/api/project-library/project-configuration/modelregister'
import PagiNation from '@/components/Pagination/index'
import { getProjectField } from '@/api/project-library/project-configuration/project-field'
export default {
  name: 'TabTwo',
  components: { PagiNation },
  props: {
    projectName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      input: '',
      dialogFormVisible: false,
      paginationData: {
        total: 3,
        page: 1,
        limit: 10,
        pageSizes: [1, 5, 10, 100],
        background: false,
        autoScroll: false,
        hidden: false
      },
      headArr: [
        { label: '模板名称', prop: 'modelName', sortable: false },
        { label: '模板描述', prop: 'modelDesc', sortable: false },
        { label: '修改人', prop: 'operator', sortable: false },
        { label: '启用', prop: 'enable', sortable: false },
        { label: '操作', prop: 'operate', sortable: false }
      ],
      tableData: [],
      totalData: [],
      headArr1: [
        { label: '序号', prop: 'id', sortable: false },
        { label: '字段名称', prop: 'fieldName', sortable: false },
        { label: '字段类型', prop: 'fieldType', sortable: false },
        { label: '必填', prop: 'mandatory', sortable: false }
      ],
      tableData1: [],
      form: {
        name: '',
        desc: ''
      },
      formLabelWidth: '83px'
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    formatter(row, column) {
      return row.address
    },
    handleCurrentChange(cpage) {
      this.currpage = cpage
    },
    handleSizeChange(psize) {
      this.pagesize = psize
    },
    pageChange(item) {
      this.currpage = item.page
      this.pagesize = item.limit
      this.tableData = this.totalData.slice((this.currpage - 1) * this.pagesize, this.currpage * this.pagesize)
    },
    initData() {
      getModelRegister().then((response) => {
        this.tableData = response.data.modelRegister
        this.totalData = this.tableData
        this.pageChange({ page: 1, limit: 10 })
      })
      getProjectField().then((response) => {
        this.tableData1 = response.data.projectField
      })
    },
    scan(params) {
      this.dialogFormVisible = true
      this.form.name = params.modelName
      this.form.desc = params.modelDesc
    },
    edit(params) {
      this.$router.push({ path: '/project-library/project-configuration/model-edit-template', query: { projectName: getUrlParams().projectName, from: '验证事件', modelName: params.modelName, modelDesc: params.modelDesc }})
    }
  }

}
</script>
<style lang="scss" scoped>
.conHead{
  height: 32px;
  width: 100%;
  position: relative;
  >>> .el-input{
    width: 160px;
    height: 32px;
    background: #FFFFFF;
    border-radius: 2px;
    position: absolute;
    right:260px;
    top:0;
  }
  >>> button{
    position: absolute;
  }
  >>> button.el-button--primary.el-button--medium{
    width: 110px;
    height: 32px;
    right:0;
  }
  >>> button.el-button--primary.el-button--medium.is-plain{
    width: 110px;
    height: 32px;
    right:110px;
  }
}
.conCen{
height:94%;
border-radius: 5px;
border: 1px solid #D9D9D9;
>>> .el-table__fixed::before,>>> .el-table::before{
  display: none;
}
background-color: #fff;
}
.el-dialog__wrapper{
  >>> .el-dialog{
    height: 555px;
  }
  >>> .el-dialog__body{
    padding-left: 0;
    padding-right: 0;
    .border-bottom-06{
      padding: 0 20px 0 20px;
    }
    .el-table{
      th:last-child{
      .cell:before{
        content:'*';
        color:#FF0000;
        font-size:12px;
        position: absolute;
            right: 50px;
            top: 3px;
        }
      }
    }
    }
  }
  >>>.el-dialog{
  height: 555px;
  .el-dialog__body{
    .el-body{
      .modelMsg{
        height: 87px;
      border-bottom:1px solid rgba(0, 0, 0, 0.06);
      }
    }
  }
  }
</style>
