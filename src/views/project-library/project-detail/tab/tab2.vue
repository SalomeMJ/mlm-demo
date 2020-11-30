<template>
  <div class="h100">
    <div class="conHead">
      <picker-time />
      <el-input
        v-model="input"
        placeholder="请输入搜索关键字"
        prefix-icon="el-icon-search"
      />
      <el-button type="primary" class="mr-20" plain @click="dialogFormVisible = true">新建模型组</el-button>
      <el-button type="primary" @click="registrtionModel()">注册模型</el-button>
    </div>
    <div class="conCen mt-20">
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
          <el-table-column :key="index" :prop="item.prop" :sortable="item.sortable" :label="item.label" :align="index==4||index==5?'right':'left'" show-overflow-tooltip fixed>
            <template slot-scope="scope">
              <span v-if="item.prop!='modelName'&&item.prop!='modelGroup'">
                {{ scope.row[item.prop] }}
              </span>
              <span v-if="item.prop=='modelName'" @click="enterModelRecord(scope.row)">
                {{ scope.row[item.prop] }}
              </span>
              <span v-if="item.prop=='modelGroup'&&scope.row[item.prop]!='-'" @click="enterModelGroup(scope.row)">
                {{ scope.row[item.prop] }}
              </span>
              <span v-if="item.prop=='modelGroup'&&scope.row[item.prop]=='-'" style="color:#333;text-decoration:none;cursor:default;">
                {{ scope.row[item.prop] }}
              </span>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <pagi-nation :pagination-data="paginationData" @pagination="pageChange" />
    </div>
    <el-dialog title="新建模型组" :visible.sync="dialogFormVisible" :modal-append-to-body="false" :close-on-click-modal="false" width="480px">
      <el-form :model="form">
        <el-form-item label="模型组名称：" required :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="模型组描述：" :label-width="formLabelWidth">
          <el-input v-model="form.desc" type="textarea" resize="none" placeholder="请输入" autocomplete="off" />
        </el-form-item>
        <el-form-item label="负责人：" required :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请输入">
            <el-option label="黎簇" value="黎簇" />
            <el-option label="王盟" value="王盟" />
            <el-option label="于和伟" value="于和伟" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import PickerTime from '@/components/PickerTime/index'
import { getAssetPool } from '@/api/model-asset/asset-pool'
import PagiNation from '@/components/Pagination/index'

export default {
  name: 'TabTwo',
  components: { PickerTime, PagiNation },
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
        { label: '修改时间', prop: 'updateTime', sortable: false },
        { label: '所属模型组', prop: 'modelGroup', sortable: false },
        { label: '验证事件数量', prop: 'validationEventNum', sortable: false },
        { label: '正在使用事件数量', prop: 'useEventNum', sortable: false }
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
      formLabelWidth: '110px'
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
        this.pageChange({ page: 1, limit: 10 })
      })
    },
    initDirective(x) {
      this.currpage = x
    },
    // 模型记录
    enterModelRecord(params) {
      this.$router.push({ path: '/project-library/project-detail/model-record', query: { modelName: params.modelName, title: '模型资产池', projectName: this.projectName }})
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
>>> td:nth-child(2) .cell span,td:nth-child(4) .cell span{
  cursor: pointer;
}
>>> td:nth-child(2) .cell span,td:nth-child(4) .cell span{
  color:#00a0e9;
  text-decoration: underline;
}
background-color: #fff;
}
</style>
