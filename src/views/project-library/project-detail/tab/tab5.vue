<template>
  <div class="h100">
    <div class="conHead">
      <picker-time />
      <el-input
        v-model="input"
        placeholder="请输入搜索关键字"
        prefix-icon="el-icon-search"
      />
      <el-upload
        class="upload-demo"
        action=""
        :on-change="handleChange"
        :file-list="fileList"
      >
        <el-button type="primary">上传验证数据</el-button>
      </el-upload>
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
          <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" :align="index==0||index==1||index==2?'left':'right'" show-overflow-tooltip fixed>
            <template slot-scope="scope">
              <span>
                {{ scope.row[item.prop] }}
                <i v-if="item.prop==''" class="icon iconfont iconxiazai doingColor pl-5" style="display:inline-block;" />
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
      totalData: [],
      fileList: []
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    handleChange(file, fileList) {
      // this.fileList = fileList.slice(-3)
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
        this.pageChange({ page: 1, limit: 10 })
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
    right:130px;
    top:0;
  }
  >>> .upload-demo{
    position: absolute;
    width: 100px;
    height: 32px;
    background: #00A0E9;
    border-radius: 3px;
    right: 0px;
    top: 0;
  }
  >>> button.el-button--primary.el-button--medium{
    width: 100px;
    height: 32px;
  }
  >>> button.el-button--primary.el-button--medium.is-plain{
    width: 100px;
    height: 32px;
  }
}
.conCen{
  height: calc(100% - 52px);
border-radius: 5px;
border: 1px solid #D9D9D9;
>>> .el-table__fixed::before,>>> .el-table::before{
  display: none;
}
background-color: #fff;
}

</style>
