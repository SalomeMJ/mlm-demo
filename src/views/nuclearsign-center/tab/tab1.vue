<template>
  <div class="h100 pt-5">
    <div class="conHead pl-20 pr-20 pb-10">
      <picker-time />
      <el-select v-model="status" class="mr-15 ml-5" placeholder="请选择">
        <el-option
          v-for="item in statusList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select v-model="eventType" class="mr-15" placeholder="请选择">
        <el-option
          v-for="item in eventTypes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-input
        v-model="input"
        placeholder="请输入搜索关键字"
        prefix-icon="el-icon-search"
      />
    </div>
    <div class="conCen">
      <div v-for="(item, index) in nuclearList" :key="index" class="conItem mb-20 pt-10 pb-10 pl-20 pr-20">
        <span class="border-right" :class="item.bgc" />
        <div class="item-top">
          <span class="fs-16 fw-bold text-grey-0 ver-middle mr-15">{{ item.eventName }}</span>
          <el-tag class="mr-5">{{ item.eventType }}</el-tag>
          <el-tag class="mr-5">{{ item.checkType }}</el-tag>
          <el-tag v-if="item.status=='已通过'" type="success">已通过</el-tag>
          <el-tag v-if="item.status=='审批中'" type="warning">审批中</el-tag>
          <el-tag v-if="item.status=='已拒绝'" type="danger">已拒绝</el-tag>
          <el-tag v-if="item.status=='已撤销'" type="info">已撤销</el-tag>
          <router-link v-if="item.eventType=='使用事件'" :to="{path:'/nuclearsign-center/using-detail',query:{eventName:item.eventName, action: item.action, title: title}}">
            <span class="doingColor fw-400 fs-14 pull-right mt-5 cursor-pointer" @click="enterDetail(item)">查看详情></span>
          </router-link>
          <router-link v-if="item.eventType=='预警规则'" :to="{path:'/nuclearsign-center/warning-rule',query:{ruleName: item.ruleName, action: item.action, title: title, status: item.status}}">
            <span class="doingColor fw-400 fs-14 pull-right mt-5 cursor-pointer" @click="enterDetail(item)">查看详情></span>
          </router-link>
        </div>
        <div class="item-cen">
          <div class="item-cen-cen fs-12 fw-400 text-grey-2 mt-15 letter-space-1">
            {{ item.desc }}
          </div>
          <div class="item-bottom fs-12 fw-400 text-grey-3">
            <div class="pull-left iconContainer">
              <i class="icon iconfont iconmodel mr-5 fs-18 ver-middle" />{{ item.modelMsg }}
              <i class="icon iconfont iconPlay mr-5 fs-18 ml-20 ver-middle" />{{ item.effectTime }}
              <i class="icon iconfont iconchengyuan fs-18 mr-5 ml-20 ver-middle" />{{ item.head }}
            </div>
            <div class="pull-right">
              <i class="icon iconfont iconHistory fs-18 mr-5 ver-middle" /><span class="ver-middle text-align-right">{{ item.submitTime }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getNuclearList } from '@/api/nuclearsign-center/nuclear-list'
import PickerTime from '@/components/PickerTime/index'
export default {
  name: 'TabOne',
  components: { PickerTime },
  props: {
    'activeName': {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      statusList: [
        {
          value: '',
          label: '全部'
        }, {
          value: 1,
          label: '已通过'
        }, {
          value: 2,
          label: '审批中'
        }, {
          value: 3,
          label: '已拒绝'
        }, {
          value: 4,
          label: '已撤销'
        }],
      status: '',
      eventTypes: [
        {
          value: '',
          label: '全部'
        }, {
          value: 1,
          label: '使用事件'
        }, {
          value: 2,
          label: '预警规则'
        }],
      eventType: '',
      submitOnes: [
        {
          value: '',
          label: '全部'
        }, {
          value: 1,
          label: '黎簇'
        }],
      submitOne: '',
      nuclearList: [],
      title: '我发起的',
      input: ''
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      getNuclearList().then((response) => {
        this.nuclearList = response.data.nuclearList
        for (const item of this.nuclearList) {
          if (item.status === '已通过') {
            item.bgc = 'bg-green-0'
          }
          if (item.status === '审批中') {
            item.bgc = 'bg-yellow-0'
          }
          if (item.status === '已拒绝') {
            item.bgc = 'bg-red-0'
          }
          if (item.status === '已撤销') {
            item.bgc = 'bg-grey-1'
          }
        }
      })
    },
    enterDetail(params) {
      localStorage.setItem('activeTab', 0)
    }
  }

}
</script>
<style lang="scss" scoped>
 .el-select >>> .el-input--medium .el-input__inner {
      width: 124px;
  }
  .el-select{
    vertical-align: middle;
  }
  .el-input--prefix{
    width: 160px;
    float: right;
    vertical-align: middle;
  }
  .conCen{
    height:94%;
    padding-top: 10px;
    overflow-y: auto;
    div.conItem{
      width: calc(100% - 40px);
      margin-left: 20px;
      height: 100px;
      background: #FFFFFF;
      border:1px solid #D9D9D9;
      border-left:none;
      border-radius: 3px;
      padding: 10px;
      position: relative;
      span.border-right{
        display: inline-block;
        width: 4px;
        height: 100px;
        border-radius: 3px;
        position: absolute;
        top: -1px;
        left: 0;
      }
      .iconContainer{
        width: 70%;
        i:nth-child(2),i:last-child{
          margin-left: 20% !important;
        }
      }
      .item-bottom{
        height: 20px;
        position: absolute;
        width: 98%;
        bottom: 10px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
      }
    }
    div.conItem:hover{
      box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }
  }
</style>
