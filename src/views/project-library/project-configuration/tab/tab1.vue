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
              <i class="icon iconfont doingColor mr-10 icontable-edit" @click="editWorkflow(scope.row)" />
              <i class="icon iconfont doingColor mr-10 iconeye1" @click="scanWorkflow(scope.row)" />
              <i class="icon iconfont doingColor mr-10 iconCopy" />
              <i class="icon iconfont text-red-0 iconDelete fs-15" />
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <pagi-nation :pagination-data="paginationData" @pagination="pageChange" />
  </div>
</template>
<script>
import { getUrlParams } from '@/utils/getUrlParams'
import { getWorkfow } from '@/api/project-library/project-configuration/workflow'
import PagiNation from '@/components/Pagination/index'

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
        { label: '工作流名称', prop: 'workflowName', sortable: false },
        { label: '工作流描述', prop: 'workflowDesc', sortable: false },
        { label: '修改人', prop: 'operator', sortable: false },
        { label: '启用', prop: 'enable', sortable: false },
        { label: '操作', prop: 'operate', sortable: false }
      ],
      tableData: [],
      totalData: [],
      form: {
        name: '',
        desc: ''
      },
      formLabelWidth: '93px'
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
      getWorkfow().then((response) => {
        this.tableData = response.data.workflow
        this.totalData = this.tableData
        this.pageChange({ page: 1, limit: 10 })
      })
    },
    editWorkflow(params) {
      this.dialogFormVisible = true
      // this.form.name = params.workflowName
      // this.form.desc = params.workflowDesc
      this.$router.push({ path: '/project-library/project-configuration/workflow-edit', query: { projectName: getUrlParams().projectName, workflowName: params.workflowName, workflowDesc: params.workflowDesc }})
    },
    scanWorkflow(params) {

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
    height: 280px;
  }
}
</style>
