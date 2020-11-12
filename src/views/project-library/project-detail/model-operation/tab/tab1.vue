<template>
  <div class="h100 conCen">
    <el-table
      v-if="tableData.length!=0"
      class="system-table w100"
      :data="tableData"
      :default-sort="{prop: 'name', order: 'descending'}"
      @selection-change="handleCurrentChange"
    >
      <template v-for="(item,index) in headArr">
        <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" :align="index==4||index==5?'right':'left'" show-overflow-tooltip fixed>
          <template slot-scope="scope">
            <span>
              {{ scope.row[item.prop] }}
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <pagi-nation :pagination-data="paginationData" class="pull-right" @pagination="pageChange" />
  </div>
</template>
<script>
import { getAssetPool } from '@/api/model-asset/asset-pool'
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
        total: 11,
        page: 1,
        limit: 10,
        pageSizes: [1, 5, 10, 100],
        background: false,
        autoScroll: false,
        hidden: false
      },
      headArr: [
        { label: '模型编号', prop: 'modelNo', sortable: false },
        { label: '模型名称', prop: 'modelName', sortable: false },
        { label: '正在使用事件数量', prop: 'useEventNum', sortable: false },
        { label: '验证事件数量', prop: 'validationEventNum', sortable: false },
        { label: '修改时间', prop: 'updateTime', sortable: false }
      ],
      tableData: [],
      totalData: [],
      dialogTableVisible: false,
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
      formLabelWidth: '120px'
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
    dataFilter(val) {
      this.value = val
      if (val) {
        this.options = this.optionsCopy.filter((item) => {
          if (!!~item.label.indexOf(val) || !!~item.label.toUpperCase().indexOf(val.toUpperCase())) {
            return true
          }
        })
      } else {
        this.options = this.optionsCopy
      }
    },
    initData() {
      getAssetPool().then((response) => {
        this.tableData = response.data.assetPool
        this.totalData = this.tableData
      })
    },
    initDirective(x) {
      this.currpage = x
    },
    // 模型记录
    enterModelRecord(params) {
      this.$router.push({ path: '/project-library/project-detail/model-record', query: { modelName: params.modelName, projectName: this.projectName }})
    },
    // 模型组
    enterModelGroup(params) {
      localStorage.setItem('activeTab', 1)
      this.$router.push({ path: '/project-library/project-detail/model-operation', query: { projectName: this.projectName, modelName: params.modelName, modelGroup: params.modelGroup }})
    },
    // 注册模型
    registrtionModel() {
      localStorage.setItem('activeTab', 1)
      this.$router.push({ path: '/project-library/project-detail/model-operation', query: { projectName: this.projectName }})
    }
  }

}
</script>
<style lang="scss" scoped>
.conCen{
border-radius: 5px;
border: 1px solid #D9D9D9;
background-color: #fff;
}
</style>
