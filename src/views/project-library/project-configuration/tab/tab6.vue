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
            <span v-if="item.prop!='operate'">
              {{ scope.row[item.prop] }}
            </span>
            <span v-if="item.prop=='operate'">
              <i class="icon iconfont doingColor mr-10 icontable-edit" @click="editField(scope.row)" />
              <i class="icon iconfont doingColor mr-10 iconeye1" @click="dialogFormVisible = true" />
              <i class="icon iconfont doingColor mr-10 iconCopy" />
              <i class="icon iconfont text-red-0 iconDelete fs-15" />
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <pagi-nation :pagination-data="paginationData" @pagination="pageChange" />
    <el-dialog title="查看字段" :visible.sync="dialogFormVisible" :modal-append-to-body="false" :close-on-click-modal="false" width="620px">
      <p class="fs-14 fw-bold text-grey-0 mb-10">基本信息</p>
      <el-form :model="form">
        <el-form-item label="字段名称：" :label-width="formLabelWidth">
          <el-input v-model="form.name" disabled autocomplete="off" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="字段描述：" :label-width="formLabelWidth">
          <el-input v-model="form.desc" disabled placeholder="请输入" autocomplete="off" />
        </el-form-item>
        <el-form-item label="字段类型：" :label-width="formLabelWidth">
          <el-input v-model="form.type" disabled autocomplete="off" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="字段值：" :label-width="formLabelWidth">
          <el-input v-model="form.field" disabled type="textarea" resize="none" placeholder="请输入" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmProject()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getProjectField } from '@/api/project-library/project-configuration/project-field'
import PagiNation from '@/components/Pagination/index'
import { getUrlParams } from '@/utils/getUrlParams'
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
        { label: '字段名称', prop: 'fieldName', sortable: false },
        { label: '字段类型', prop: 'fieldType', sortable: false },
        { label: '修改人', prop: 'operator', sortable: false },
        { label: '操作', prop: 'operate', sortable: false }
      ],
      tableData: [],
      totalData: [],
      dialogFormVisible: false,
      form: {
        name: '',
        desc: '用于贷前审批',
        type: '下拉框',
        field: ''
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
      getProjectField().then((response) => {
        this.tableData = response.data.projectField
        this.totalData = this.tableData
        this.pageChange({ page: 1, limit: 10 })
      })
    },
    editField(params) {
      this.$router.push({ path: '/project-library/project-configuration/field-edit', query: { projectName: getUrlParams().projectName, fieldName: params.fieldName, fieldType: params.fieldType }})
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
}
</style>
