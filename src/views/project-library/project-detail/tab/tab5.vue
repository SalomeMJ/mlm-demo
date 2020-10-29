<template>
  <div class="h100">
    <div class="conHead">
      <picker-time />
      <el-input
        v-model="input"
        placeholder="请输入搜索关键字"
        prefix-icon="el-icon-search"
      />
      <el-button type="primary">新建使用事件</el-button>
    </div>
    <div class="conCen mt-20">
      <el-table
        v-if="tableData.length!=0"
        class="system-table"
        :data="tableData"
        style="width: 100%"
        height="71%"
        :default-sort="{prop: 'name', order: 'descending'}"
        @selection-change="handleCurrentChange"
      >
        <template v-for="(item,index) in headArr">
          <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" :align="index==0||index==1||index==2?'left':'right'" fixed>
            <template slot-scope="scope">
              <span>
                {{ scope.row[item.prop] }}
                <i v-if="item.prop==''" class="icon iconfont iconxiazai doingColor pl-5" style="display:inline-block;" />
              </span>
              <!-- <span v-if="index==7">
                <span v-show="scope.row.levoperateel.invalid" class="errorColor"> 失效</span>
                <i v-show="scope.row.levoperateel.invalid" class="icon iconfont iconeye icon-f20 doingColor" />
                <i class="icon iconfont icontable-edit icon-f20" :class="{ 'doingColor':!scope.row.levoperateel.enabled,'text-grey-0':scope.row.levoperateel.enabled }" />
                <el-switch
                  v-model="scope.row.levoperateel.enabled"
                />
              </span> -->
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
import { getValidationData } from '@/api/project-library/validation-data/validation-data'
import PagiNation from '@/components/Pagination/index'

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
        { label: '验证数据编号', prop: 'validationNo', sortable: false },
        { label: '验证数据名称', prop: 'validationName', sortable: false },
        { label: '时间范围', prop: 'timeRange', sortable: false },
        { label: '总客户数', prop: 'totalCustomerNum', sortable: false },
        { label: '好客户数', prop: 'goodCustomerNum', sortable: false },
        { label: '坏客户数', prop: 'badCustomerNum', sortable: false },
        { label: '好坏客户比例', prop: 'rate', sortable: false },
        { label: '拒绝客户数', prop: 'refuseCustomerNum', sortable: false },
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
      getValidationData().then((response) => {
        this.tableData = response.data.validationDatas
        this.totalData = this.tableData
      })
    },
    initDirective(x) {
      this.currpage = x
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
  height: calc(100% - 52px);
border-radius: 5px;
border: 1px solid #D9D9D9;
// >>> .el-table{
//   th:nth-child(7){
//     text-indent: 5em;
//   }
//   td:nth-child(7){
//     text-indent: 8em;
//   }
// }
>>> .el-table__fixed::before,>>> .el-table::before{
  display: none;
}
// >>> td:nth-child(2) .cell span,>>> td:nth-child(1) .cell span{
//   color:#00a0e9;
//   text-decoration: underline;
// }
background-color: #fff;
}

</style>
