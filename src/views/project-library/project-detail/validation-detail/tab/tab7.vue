<template>
  <div class="tabCon">
    <el-table
      v-if="tableData.length!=0"
      class="system-table"
      :data="tableData"
      style="width: 100%"
      height="80%"
      :default-sort="{prop: 'name', order: 'descending'}"
      @selection-change="handleCurrentChange"
    >
      <template v-for="(item,index) in headArr">
        <el-table-column :key="index" :prop="item.prop" :fixed="item.fixed" :width="item.fixed?'200':'auto'" :label="item.label" align="left" :render-header="labelHead" show-overflow-tooltip="true">
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
import PagiNation from '@/components/Pagination/index'
import { getDataSample } from '@/api/project-library/validation-data/data-sample'
import { getDatesetDetail } from '@/api/project-library/validation-data/dataset-detail'

export default {
  name: 'TabOne',
  components: { PagiNation },
  props: {
  },
  data() {
    return {
      input: '',
      paginationData: {
        total: 11,
        page: 1,
        limit: 10,
        pageSizes: [1, 5, 10, 100],
        background: false,
        autoScroll: false,
        hidden: false
      },
      headArr: [],
      tableData: [],
      featureList: []
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    labelHead(h, { column, index }) {
      // console.log(column.label.length)
      const l = column.label.length
      const f = 14 // 每个字大小，其实是每个字的比例值，大概会比字体大小差不多大一点，
      column.minWidth = f * (l + 1) // 字大小乘个数即长度 ,注意不要加px像素，这里minWidth只是一个比例值，不是真正的长度
      // 然后将列标题放在一个div块中，注意块的宽度一定要100%，否则表格显示不完全
      return h('div', { class: 'table-head', style: { 'min-width': '100px' }}, [column.label])
    },
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
      getDatesetDetail().then((res) => {
        this.headArr = [
          { label: 'BID', prop: 'BID', fixed: true, sortable: false },
          { label: 'label', prop: 'LABEL', sortable: false }
        ]
        const featureData = Object.values(JSON.parse(res.data.variableReport))
        for (const item of featureData) {
          this.headArr.push(
            { label: item.feaCnName, prop: item.featureName }
          )
        }
      })
      getDataSample().then((response) => {
        this.tableData = response.data.results
        this.pageChange({ page: 1, limit: 10 })
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.tabCon{
  height: 100%;
  border:1px solid #d9d9d9;
  border-radius: 5px;
  >>> .el-table__fixed-body-wrapper{
    top: 28px !important;
  }
}
.pagination-container {
    width: calc(100% - 62px);
    background: #fff;
    padding: 23px 12px;
    margin: 0;
    position: absolute;
    bottom: 23px;
    right: 31px;
}
</style>
