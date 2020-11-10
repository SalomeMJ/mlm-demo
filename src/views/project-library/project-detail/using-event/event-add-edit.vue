<template>
  <div class="h100">
    <div class="conCen">
      <div class="bg-white p-20-30">
        <div v-for="(item, index) in condetail" :key="index" class="conItem mb-20">
          <p class="title fs-14 fw-bold text-grey-opacity-86">{{ item.name }}</p>
          <div class="conDetail">
            <p v-for="(child, ind) in item.child" :key="ind">
              <span class="fs-14 fw-400 text-grey-opacity-86" :class="{'must-write':child.mustWrite}">{{ child.name }}：</span>
              <el-input v-if="child.type=='input'" v-model="child.value" :disabled="child.disabled" />
              <el-input v-if="child.type=='textarea'" v-model="child.value" type="textarea" :disabled="child.disabled" :readonly="child.disabled" resize="none" />
              <el-select v-if="child.type=='select'" v-model="child.value" placeholder="请选择" :disabled="child.disabled">
                <el-option
                  v-for="items in child.options"
                  :key="items"
                  :label="items"
                  :value="items"
                />
              </el-select>
              <i v-if="child.icon!=''" class="icon iconfont doingColor cursor-pointer" :class="child.icon" />
              <picker-time v-if="child.type=='time'" />
            </p>
          </div>
        </div>
      </div>

      <div v-if="$route.query.action=='生效审核中'" class="effectCheck bg-white p-20-30 approval">
        <p class="title fs-14 fw-bold text-grey-opacity-86">审批配置</p>
        <time-line :time-list="timeList" />
      </div>
    </div>
    <div class="footer">
      <div v-if="$route.query.eventName!=null&&$route.query.action!='配置中'">
        <el-button type="danger" plain>撤销</el-button>
        <el-button type="primary">催办</el-button>
      </div>
      <div v-if="$route.query.eventName==null||$route.query.action=='配置中'">
        <el-button type="primary" plain @click="goBack()">取消</el-button>
        <el-button type="primary">提交审核</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getUrlParams } from '@/utils/getUrlParams'
import PickerTime from '@/components/PickerTime'
import TimeLine from '@/components/TimeLine'

export default {
  name: 'EventAddEdit',
  components: { PickerTime, TimeLine },
  data() {
    return {
      condetail: [
        {
          name: '信息填写',
          child: [
            { name: '使用事件名称', mustWrite: true, type: 'input', icon: '', value: '', disabled: false },
            { name: '使用事件描述', mustWrite: false, type: 'textarea', icon: '', value: '', disabled: false },
            { name: '负责人', mustWrite: true, type: 'select', icon: '', value: '', options: ['田雨', '黎簇', '王盟', '于和伟'], disabled: false }
          ]
        },
        {
          name: '使用事件配置',
          child: [
            { name: '使用模型', mustWrite: true, type: 'select', icon: '', disabled: false, options: ['易速贷申请', '自营车审批', '新车审批', '二手车预审批', '易速贷反欺诈', '易速贷反欺诈2.0', '自营车预审批', '新车预审批', '新车催收', '二手车审批', '二手车审批2.0'] },
            { name: '验证记录', mustWrite: true, type: 'select', icon: '', disabled: false, options: ['验证事件V11', '验证事件V10', '验证事件V9', '验证事件V8', '验证事件V7', '验证事件V6', '验证事件V5', '验证事件V4', '验证事件V3', '验证事件V2', '验证事件V1'] },
            { name: '模型文档', mustWrite: true, type: 'select', icon: '', disabled: false, options: ['DataSet.csv', 'Feature.xlsx', 'Algorithm.docx', 'Test.docx'] },
            { name: '发布模型文档', mustWrite: false, type: 'input', icon: 'iconstrategyPlus', disabled: false },
            { name: '使用时间生效时间', mustWrite: true, type: 'time', icon: '', disabled: false }
          ]
        },
        {
          name: '审批配置',
          child: [
            { name: '审批流', mustWrite: true, type: 'select', icon: '', value: '审批流一号', disabled: false, options: ['审批流一号', '审批流二号', '审批流三号'] },
            { name: '审批负责人', mustWrite: false, type: 'input', icon: '', value: '王盟；于和伟', disabled: false },
            { name: '审批类别', mustWrite: false, type: 'input', icon: '', value: '会签', disabled: false }
          ]
        }
      ],
      timeList: [
        {
          content: [
            {
              con: '王盟',
              desc: '已同意-2020.08.15-12:00:00'
            },
            {
              con: '于和伟',
              desc: '已同意-2020.08.17-12:00:00'
            }
          ],
          packUp: false,
          timestamp: '直接上级',
          color: '#00a0e9',
          icon: 'el-icon-s-check'
        },
        {
          content: [{
            con: '田雨',
            desc: '已同意-2020.08.20-12:00:00'
          }],
          packUp: true,
          timestamp: '指定审批人',
          color: '#00a0e9',
          icon: 'el-icon-s-check'
        }
      ]
    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    initData() {
      for (const item of this.condetail) {
        for (const child in item.child) {
          item.child[child].disabled = false
        }
      }
      if (getUrlParams().action === 'add' || getUrlParams().action === '配置中') {
        this.condetail[2].child[1].disabled = true
        this.condetail[2].child[2].disabled = true
      } else {
        this.condetail[1].child.splice(3, 1)
        for (const item of this.condetail) {
          for (const child in item.child) {
            item.child[child].disabled = true
          }
        }
      }
      if (getUrlParams().action === '配置中' || getUrlParams().action === '生效审核中') {
        this.condetail[0].child[0].value = getUrlParams().eventName
        this.condetail[0].child[1].value = '用于贷前审批'
        this.condetail[0].child[2].value = '黎簇'
        this.condetail[1].child[0].value = getUrlParams().modelName
        if (getUrlParams().action === '生效审核中') {
          this.condetail.splice(2, 1)
          this.condetail[1].child[1].value = '验证事件V11、验证事件V10'
          this.condetail[1].child[2].value = 'DataSet.csv'
        }
      }
    },
    goBack() {
      this.$router.push({ path: '/project-library/project-detail', query: { projectName: getUrlParams().projectName }})
    }
  }
}
</script>

<style lang="scss" scoped>
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
    width: 80px !important;
    height: 32px;
    margin-right: 10px;
    padding: 0;
  }
}
.conCen{
  width: 100%;
  height: calc(100% - 105px);
  border-radius: 0 0 5px 5px;
  overflow-y: auto;
  .p-20-30{
padding: 20px 30px;
  }

  .conItem{
    .title{
      padding: 0;
      margin: 0;
    }
    p{
      margin-top: 20px;
      span{
        display: inline-block;
        width: 160px;
        text-align: right;
      }
    }
    .conDetail{
      .el-input,.el-textarea,.el-select {
        width: 28%;
        height: 32px;
        border-radius: 2px;
      }
      .el-textarea{
        height: 64px;
        vertical-align: top;
      }
      i.iconxiazai{
        margin-left: 5px;
      }
    }

  }
  >>> #pickertime{
    width: 28%;
    .el-input__inner{
      width: 100%;
    }
  }
}
 </style>
