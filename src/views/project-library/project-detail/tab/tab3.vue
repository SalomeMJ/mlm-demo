<template>
  <div class="h100">
    <div class="conHead">
      <picker-time />
      <el-input
        v-model="input"
        placeholder="请输入搜索关键字"
        prefix-icon="el-icon-search"
      />
      <el-button type="primary" @click="addEvent()">新建使用事件</el-button>
    </div>
    <div class="conCen mt-20">
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
          <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" :align="index!=4?'left':'right'" show-overflow-tooltip fixed>
            <template slot-scope="scope">
              <span v-if="index==0" @click="enterEvent(scope.row)">
                {{ scope.row[item.prop] }}
              </span>
              <span v-if="index==1" @click="enterModelDetail(scope.row)">
                {{ scope.row[item.prop] }}
              </span>
              <span v-if="index!=0&&index!=1">
                {{ scope.row[item.prop] }}
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
import { getUsingEvent } from '@/api/project-library/using-event/using-event'
import PagiNation from '@/components/Pagination/index'
import { getUrlParams } from '@/utils/getUrlParams'

export default {
  name: 'TabTwo',
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
        { label: '事件名称', prop: 'eventName', sortable: false },
        { label: '使用模型', prop: 'useModel', sortable: false },
        { label: '负责人', prop: 'head', sortable: false },
        { label: '状态', prop: 'status', sortable: false },
        { label: '预警触发次数', prop: 'touchTime', sortable: false },
        { label: '生效时间', prop: 'effectTime', sortable: false }
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
      getUsingEvent().then((response) => {
        this.tableData = response.data.usingEvents
        this.totalData = this.tableData
        this.pageChange({ page: 1, limit: 10 })
      })
    },
    initDirective(x) {
      this.currpage = x
    },
    enterModelDetail(params) {
      this.$router.push({ path: '/project-library/project-detail/model-record', query: { modelName: params.useModel, title: '使用事件', projectName: getUrlParams().projectName }})
    },
    enterEvent(params) {
      if (params.status === '生效中') {
        localStorage.setItem('activeName', 0)
      }
      this.$router.push({ path: '/project-library/project-detail/using-detail', query: { eventName: params.eventName, modelName: params.useModel, title: '使用事件', projectName: getUrlParams().projectName, action: params.status }})
    },
    addEvent() {
      this.$router.push({ path: '/project-library/project-detail/using-detail', query: { eventName: null, title: '使用事件', projectName: getUrlParams().projectName, action: 'add' }})
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
    right:130px;
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
height: calc(100% - 52px);
border-radius: 5px;
border: 1px solid #D9D9D9;
>>> .el-table__fixed::before,>>> .el-table::before{
  display: none;
}
>>> td:nth-child(2) .cell span,>>> td:nth-child(1) .cell span{
  color:#00a0e9;
  text-decoration: underline;
  cursor: pointer;
}
background-color: #fff;
}

</style>
