<template>
  <div class="coverParentView h100 bg-white  pb-30 pt-20 pr-10">
    <div class="conHead">
      <span class="fs-18 fw-bold">账号管理>{{ editOptions.name }}</span>
      <i class="icon iconfont iconhead-back pull-right cursor-pointer  fs-18  head-back" @click="goBack" />
    </div>
    <div class="conCen pt-20 pb-20">
      <p class="fs-14 text-grey-0 fw-bold mb-10">基本信息</p>
      <div class="border-d9 border-radius-3 bg-grey-4 basicMsg p-20">
        <div v-for="(item, index) in basicMsg" :key="index" class="basicItem">
          <span class="fs-14 display-inlineblock mr-20">{{ item.name }}</span>
          <el-input
            v-if="item.type=='input'"
            v-model="item.value"
            :show-password="index==3"
            :placeholder="item.placeholder"
          />
          <el-select v-if="item.type=='select'" v-model="item.value" :placeholder="item.placeholder">
            <el-option
              v-for="op in item.options"
              :key="op"
              :label="op"
              :value="op"
            />
          </el-select>
        </div>
      </div>
      <p class="fs-14 text-grey-0 fw-bold mb-10 mt-30">设置权限</p>
      <div class="border-d9 border-radius-3 bg-white setJustrify">
        <div class="h100 pull-left border-right-d9 p-20 pt-10 pb-10">
          <p class="fs-14 text-grey-0 fw-bold mb-20 ">数据权限</p>
          <div>
            <p v-for="(item, index) in dataList" :key="index" class="mt-20">
              <el-checkbox v-model="item.checked">{{ item.name }}</el-checkbox>
            </p>
          </div>
        </div>
        <div class="h100  p-20 pt-10 pb-10">
          <p class="fs-14 text-grey-0 fw-bold mb-20 ">选择角色</p>
          <div class="w100 border-d9 border-radius-3 selectRole">
            <el-table
              ref="multipleTable"
              class="system-table"
              :data="tableData"
              style="width: 100%;"
              height="100%"
              :default-sort="{prop: 'name', order: 'descending'}"
              @selection-change="handleCurrentChange"
            >
              <el-table-column
                type="selection"
                width="55"
              />
              <template v-for="(item,index) in headArr">
                <el-table-column :key="index" :prop="item.prop" :width="index==0?'200px':'calc(100% - 200px))px'" :sortable="item.sortable" :label="item.label" align="left" style="text-align:left !important;" show-overflow-tooltip fixed>
                  <template slot-scope="scope">
                    <span>
                      {{ scope.row[item.prop] }}
                    </span>
                  </template>
                </el-table-column>
              </template>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>
        <el-button @click="goBack()">取 消</el-button>
        <el-button type="primary" @click="submit()">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getRole } from '@/api/system/role'

export default {
  name: 'AccountManagement',
  props: {
    editOptions: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dataList: [
        { checked: false, name: '新车预审批' },
        { checked: false, name: '二手车审批' },
        { checked: false, name: '自营车审批' },
        { checked: false, name: '小额信贷审批' },
        { checked: false, name: '消费贷款审批' }
      ],
      basicMsg: [
        { name: '姓名', type: 'input', placeholder: '请输入姓名', value: '' },
        { name: '登录账号', type: 'input', placeholder: '请输入登录账号', value: '' },
        { name: '身份', type: 'select', value: '普通用户', options: ['普通用户', '管理员'] },
        { name: '登录密码', type: 'input', placeholder: '请输入姓名', value: '' },
        { name: '邮箱', type: 'input', placeholder: '请输入关联邮箱', value: '' },
        { name: '重输密码', type: 'input', placeholder: '请再次输入密码', value: '' },
        { name: '组织', type: 'tree', placeholder: '请选择组织', value: '' }
      ],
      checked: false,
      headArr: [
        { label: '角色', prop: 'roleName', sortable: false },
        { label: '功能权限', prop: 'justrify', sortable: false }
      ],
      tableData: []
    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    handleCurrentChange(cpage) {
      // this.currpage = cpage
    },
    goBack() {
      this.$emit('updateEdit', false)
    },
    initData() {
      if (this.editOptions.params !== undefined) {
        this.basicMsg[0].value = this.editOptions.params.realName
        this.basicMsg[1].value = this.editOptions.params.loginName
        this.basicMsg[2].value = this.editOptions.params.identity === 'USER' ? '普通用户' : '管理员'
        this.basicMsg[3].value = this.editOptions.params.realName
        this.basicMsg[4].value = this.editOptions.params.email
      }

      getRole().then((res) => {
        this.tableData = res.data.roleList
        for (const item of this.tableData) {
          item.justrify = '模型大盘，核签中心，项目库模型库，后台配置'
        }
      })
    },
    submit() {
      this.$emit('updateEdit', false)
    }
  }
}
</script>
<style lang='scss' scoped>
.footer{
  height: 64px;
  background: #FFFFFF;
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.16);
  width: 95.5%;
  position: fixed;
  bottom: 0;
  z-index: 9;
  left: 66px;
  text-align: center;
  line-height: 70px;
  button{
    width: 88px !important;
    height: 32px;
    margin-right: 10px;
    padding: 0;
  }
}
.conHead{
  height: 47px;
  border-bottom:1px solid #d9d9d9;
}
.conCen{
  height: calc(100% - 67px);
  overflow-y: auto;
}
.basicMsg{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap:20px 20px;
  .basicItem{
    width: 100%;
    .el-input,.el-select{
      width: 80%;
    }
  }
}
.setJustrify{
  height: 51%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  div.pull-left{
    width: 100%;

  }
  .selectRole{
    height: 85%;
  }
}
</style>
