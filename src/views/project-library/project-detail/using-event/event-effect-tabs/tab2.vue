<template>
  <div class="tabCon pb-20 mt-5">
    <picker-time />
    <span class="pull-right">
      <el-input
        v-model="input"
        placeholder="请输入关键字搜索"
        prefix-icon="el-icon-search"
      />
    </span>
    <div class="mt-20" style="height:74%;">
      <el-table
        v-if="tableData.length!=0"
        class="system-table"
        :data="tableData"
        style="width: 100%"
        height="100%"
        :default-sort="{prop: 'name', order: 'descending'}"
        @selection-change="handleCurrentChange"
      >
        <template v-for="(item,index) in headArr">
          <el-table-column :key="index" :prop="item.prop" :style="{'width':index==1?'10%':''}" :sortable="item.sortable" :label="item.label" :align="index==0?'left':'right'" show-overflow-tooltip fixed>
            <template slot-scope="scope">
              <span v-if="index!=3">
                {{ scope.row[item.prop] }}
              </span>
              <span v-if="index==3" :style="{'color':scope.row[item.prop]=='轻微'?'#FFC800':'#FF7700'}">
                {{ scope.row[item.prop] }}
              </span>
              <span v-if="index==7">
                <i class="icon iconfont iconDetail doingColor" style="display:inline-block;margin-right:20px;" @click="editWarningRule(scope.row)" />
                <i class="icon iconfont iconDelete errorColor" />
              </span>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <pagi-nation :pagination-data="paginationData" class="pull-right" @pagination="pageChange" />
    </div>
  </div>
</template>
<script>
import PickerTime from '@/components/PickerTime/index'
import PagiNation from '@/components/Pagination/index'
import { getEventWarning } from '@/api/project-library/using-event/warning-rule'
import { getUrlParams } from '@/utils/getUrlParams'

export default {
  name: 'TabOne',
  components: { PickerTime, PagiNation },
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
      headArr: [
        { label: '预警名称', prop: 'warningName', sortable: false },
        { label: '执行次数', prop: 'runTimes', sortable: false },
        { label: '触发次数', prop: 'touchTimes', sortable: false },
        { label: '预警等级', prop: 'warningLevel', sortable: false },
        { label: '执行周期', prop: 'runRange', sortable: false },
        { label: '操作人', prop: 'operator', sortable: false },
        { label: '预警更新时间', prop: 'updateTime', sortable: false },
        { label: '操作', prop: '', sortable: false }
      ],
      tableData: [],
      totalData: []
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
      getEventWarning().then((response) => {
        this.tableData = response.data.warningRule
        this.totalData = this.tableData
        this.pageChange({ page: 1, limit: 10 })
      })
    },
    initDirective(x) {
      this.currpage = x
    },
    editWarningRule(params) {
      localStorage.setItem('activeName', 1)
      this.$router.push({ path: '/project-library/project-detail/warning-rule', query: { projectName: getUrlParams().projectName, modelName: getUrlParams().modelName, ruleName: params.warningName, action: '生效中', title: params.warningName }})
    }
  }

}
</script>
<style lang="scss" scoped>
.tabCon{
  height: 94%;
}
.pagination-container {
    width: 99%;
    background: #fff;
    padding: 23px 12px;
    margin: 0;
    position: absolute;
    bottom: 7px;
    right: 0;
}
</style>
