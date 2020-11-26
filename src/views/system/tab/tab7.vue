<template>
  <div class="h100 p-10 pb-30 pt-20">
    <div class="conHead">
      <span class="fs-18 fw-bold">授权信息</span>
    </div>
    <div class="conCen mt-20 bg-grey-4 border-d9 border-radius-5 p-20">
      <div class="mb-20">
        <span class="fs-14 text-grey-0 fw-bold ">版本</span>
        <p class="bg-white border-radius-5 border-d9 fs-14 text-grey-0 pl-20 pr-20 h-42 lh-42 mt-10">当前版本：V2.31.0</p>
      </div>
      <div class="mb-20">
        <span class="fs-14 text-grey-0 fw-bold ">授权限制</span>
        <p class="bg-white border-radius-5 border-d9 fs-14 text-grey-0 pl-20 pr-20 h-42 lh-42 mt-10">到期时间：2048.01.12</p>
        <p class="bg-white border-radius-5 border-d9 fs-14 text-grey-0 pl-20 pr-20 h-42 lh-42 mt-20">账号数：--(已启用--个账号，包括--个管理员，--个用户)</p>
        <p class="bg-white border-radius-5 border-d9 fs-14 text-grey-0 pl-20 pr-20 h-42 lh-42 mt-20">授权贷款类型数量：--(已启用--个贷款类型)</p>
      </div>
      <div class="mb-20">
        <span class="fs-14 text-grey-0 fw-bold ">授权序列号 <span class="fs-12 text-grey-2 letter-spacing-1">为避免系统授权到期，请及时授权新的序列号</span></span>
        <p class="bg-white border-radius-5 border-d9 pl-20 pr-20 h-42 lh-42 mt-10 pos-relative">
          <el-input
            v-model="input"
            placeholder="请输入序列号"
          />
          <el-button type="primary">授权</el-button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
// import PagiNation from '@/components/Pagination/index'

import { getProjectLibrary } from '@/api/project-library/projectLibrary'

export default {
  name: 'TabOne',
  // components: { PagiNation },
  data() {
    return {
      input: ''
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      getProjectLibrary().then((res) => {
        this.tableData = res.data.projectList
      })
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
    initDirective(x) {
      this.currpage = x
    },
    addUser() {

    },
    enterUser(params) {
      console.log(params)
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
    right:100px;
    top:0;
  }
  >>> button{
    position: absolute;
  }
  >>> button.el-button--primary.el-button--medium{
    width: 80px;
    height: 32px;
    right:0;
  }
}
.conCen{
height:93%;
border-radius: 5px;
border: 1px solid #D9D9D9;
>>> .el-table__fixed::before,>>> .el-table::before{
  display: none;
}
>>>.el-input--medium .el-input__inner{
  padding: 0;
  border:none;
}
button.el-button{
  position: absolute;
  right: 0;
  top: -1px;
  width: 108px !important;
height: 42px !important;
background: #00A0E9 !important;
border-radius: 0px 3px 3px 0px !important;
border: 1px solid #00A0E9 !important;
opacity: 1  !important;
}
}
</style>
