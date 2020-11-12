<template>
  <div class="table-container">
    <el-table
      v-if="tableData.length!=0"
      class="system-table can-edit-table"
      :data="tableData"
      style="width: 100%;"
      height="80%"
      :default-sort="{prop: 'name', order: 'descending'}"
      @selection-change="handleCurrentChange"
    >
      <template v-for="(item,index) in headArr">
        <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" align="left" show-overflow-tooltip fixed>
          <template slot-scope="scope">
            <span v-if="index!=7">
              {{ scope.row[item.prop] }}
            </span>
            <span v-if="index==7">
              {{ scope.row[item.prop] }}
              <i class="icon iconfont icontoright icon-f20 doingColor" @click="enterDetail(scope.row)" />
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <pagi-nation :pagination-data="paginationData" class="pull-right" @pagination="pageChange" />
    <router-view />
  </div>
</template>

<script>
import { getValidationRecord } from '@/api/project-library/model-record/validation-record'
import PagiNation from '@/components/Pagination/index'
import { getUrlParams } from '@/utils/getUrlParams'

export default {
  name: 'ValidationRecord',
  components: { PagiNation },
  data() {
    return {
      paginationData: {
        total: 11,
        page: 1,
        limit: 10,
        pageSizes: [1, 5, 10, 100],
        layout: 'total, sizes, prev, pager, next',
        background: false,
        autoScroll: false,
        hidden: false
      },
      headArr: [
        { label: '事件编号', prop: 'eventNo', sortable: false },
        { label: '事件名称', prop: 'eventName', sortable: false },
        { label: '负责人', prop: 'head', sortable: false },
        { label: '状态', prop: 'status', sortable: false },
        { label: '验证时间', prop: 'validationTime', sortable: false },
        { label: 'K-S', prop: 'K-S', sortable: false },
        { label: 'AUC', prop: 'AUC', sortable: false },
        { label: 'PSI', prop: 'PSI', sortable: false }
      ],
      tableData: [],
      totalData: []
    }
  },
  created() {
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
      getValidationRecord(this.currpage).then((response) => {
        this.tableData = response.data.assetPool
        this.totalData = this.tableData
        this.pageChange({ page: 1, limit: 10 })
      })
    },
    initDirective(x) {
      this.currpage = x
    },
    enterDetail(params) {
      this.$router.push({ path: '/project-library/project-detail/validation-detail', query: { modelName: getUrlParams().modelName, eventName: params.eventName, projectName: getUrlParams().projectName }})
    }
  }
}
</script>

<style lang="scss" scoped>
.table-container {
  border: 1px solid #D9D9D9;
  height: 100%;
}
 </style>
