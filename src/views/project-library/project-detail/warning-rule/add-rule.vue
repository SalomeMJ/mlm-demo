<template>
  <div class="conCen">
    <div class="bg-white p-20 mb-20 border-bottom-left-radius border-bottom-right-radius">
      <p class="mb-20">
        <span class="must-write fs-14 fw-400 text-grey-opacity-86">监控使用事件：</span>
        <el-select v-model="useEvent" placeholder="请选择">
          <el-option
            v-for="item in ruleList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </p>
      <div>
        <p class="fs-14 fw-bold text-grey-opacity-86">预警信息填写</p>
        <div class="msgItem mt-10">
          <div v-for="(item, index) in msgDetail" :key="index">
            <span class="must-write fs-14 fw-400 text-grey-opacity-86">{{ item.name }}：</span>
            <el-input v-if="item.type=='input'" v-model="ruleName" placeholder="请选择" />
            <el-select v-if="item.type!='input'||item.name=='执行周期'" v-model="item.value" placeholder="请选择">
              <el-option
                v-for="items in item.options"
                :key="items.value"
                :label="items.label"
                :value="items.value"
              />
            </el-select>
            <i class="icon iconfont cursor-pointer" :class="[item.icon, item.color]" @click="addMember = true" />
          </div>
        </div>
      </div>
      <div class="mt-20 pos-relative">
        <p class="fs-14 fw-bold text-grey-opacity-86 mb-10">预警规则表达式</p>
        <el-select v-model="ruleCondition" class="mr-20">
          <el-option value="And">And</el-option>
          <el-option value="Or">Or</el-option>
        </el-select>
        <el-button type="primary" class="cursor-pointer" plain @click="addIndicators()">添加指标</el-button>
        <div v-for="(item, index) in ruleExpression" :key="index" class="mt-20 ruleExpression">
          <div v-for="(child, ind) in item" :key="ind" :class="{'mt-20':ind==3||ind==4}">
            <span class="fs-14 fw-400 text-grey-opacity-86" :class="ind!=2?'must-write':''">{{ child.name }}：</span>
            <el-input v-if="child.type=='input'" v-model="child.value" :type="ind==2?'textarea':'input'" :placeholder="ind==2?'选择指标后，指标描述自动填充':'请选择'" :disabled="ind==2" resize="none" :class="{'disable-ipt':ind==2}" />
            <el-select v-if="child.type=='select'" v-model="child.value" placeholder="请选择">
              <el-option
                v-for="items in child.options"
                :key="items.value"
                :label="items.label"
                :value="items.value"
              />
            </el-select>
            <el-input v-if="child.type=='all'" v-model="child.value" placeholder="自动填充为选择的指标" disabled />
            <el-select v-if="child.type=='all'" v-model="child.value1" placeholder="请选择">
              <el-option
                v-for="items in child.logic"
                :key="items.label"
                :label="items.label"
                :value="items.value"
              />
            </el-select>
            <el-input v-if="child.type=='all'" v-model="child.value2" placeholder="请填写数字" />
          </div>
          <i class="icon iconfont iconDelete errorColor" @click="delIndicators(index)" />
        </div>
        <div ref="divider" class="divider">
          <el-divider direction="vertical" />
        </div>

      </div>
    </div>
    <div class="bg-white p-20 border-radius-5 approval">
      <span class=" fs-14 fw-bold text-grey-opacity-86">审批配置</span>
      <p v-for="(item, index) in approvalList" :key="index">
        <span class=" fs-14 fw-400 text-grey-opacity-86" :class="{'must-write':item.mustWrite}">{{ item.name }}：</span>
        <el-input v-if="item.type=='input'" v-model="item.value" placeholder="请选择" disabled />
        <el-select v-if="item.type!='input'" v-model="item.value">
          <el-option
            v-for="items in item.options"
            :key="items"
            :label="items"
            :value="items"
          />
        </el-select>
      </p>
    </div>
    <add-member v-if="addMember" :root="root" :add-member="addMember" @addMember="getaddMember" />
  </div>
</template>

<script>
import { getUsingEvent } from '@/api/project-library/using-event/using-event'
import AddMember from '../../../system/components/add-member'
import { getRoot } from '@/api/system/root'
export default {
  name: 'AddRule',
  components: { AddMember },
  data() {
    return {
      useEvent: '',
      ruleList: [],
      msgDetail: [
        { name: '预警名称', type: 'input', icon: '', value: '' },
        { name: '预警等级', type: 'select', icon: '', value: '', values: '', options: [
          {
            value: '1',
            label: '一般'
          }, {
            value: '2',
            label: '轻微'
          }, {
            value: '3',
            label: '严重'
          }] },
        { name: '执行周期', type: 'input', icon: '', value: '', values: '', options: [
          {
            value: '1',
            label: '日'
          }, {
            value: '2',
            label: '周'
          }, {
            value: '3',
            label: '月'
          }, {
            value: '4',
            label: '年'
          }] },
        { name: '开始执行周期', type: 'input', icon: 'iconHistory', color: 'text-grey-3', value: '' },
        { name: '预警人员', type: 'input', icon: 'iconPlus', color: 'doingColor', value: '12', alerMsg: '灰色表示相关人员无相应权限，请联系系统管理员' },
        { name: '预警提醒', type: 'input', icon: '', value: '' }
      ],
      ruleName: '',
      ruleCondition: 'And',
      ruleExpression: [
        [
          { name: '类别选择', type: 'select', icon: '', value: '', options: [
            {
              value: '1',
              label: '模型-特征'
            }] },
          { name: '指标选择', type: 'select', icon: '', value: '', values: '', options: [
            {
              value: '1',
              label: '上海地区宝马故障率'
            }] },
          { name: '指标描述', type: 'input' },
          { name: '指定对象', type: 'input' },
          { name: '表达式', type: 'all', logic: [
            {
              value: 1,
              label: '>'
            }, {
              value: 2,
              label: '<'
            }, {
              value: 3,
              label: '='
            }], value1: '', value2: '' }
        ]
      ],
      approvalList: [
        { name: '审批流', mustWrite: true, type: 'select', icon: '', value: '审批流一号', disabled: false, options: ['审批流一号', '审批流二号', '审批流三号'] },
        { name: '审批负责人', mustWrite: false, type: 'input', icon: '', value: '王盟；于和伟', disabled: false },
        { name: '审批类别', mustWrite: false, type: 'input', icon: '', value: '会签', disabled: false }
      ],
      addMember: false,
      root: []
    }
  },
  watch: {
    'ruleExpression': function(newVal, oldVal) {
      this.$refs.divider.style.height = newVal.length === 0 ? 0 : newVal.length * 208 - 64 + 'px'
    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.$refs.divider.style.height = '124px'
      getUsingEvent().then((res) => {
        for (const item of res.data.usingEvents) {
          this.ruleList.push({ value: item.id, label: item.eventName })
        }
      })
      getRoot().then((res) => {
        this.root = this.setLabel(res.data.root)
      })
    },
    setLabel(data) {
      for (const item of data) {
        item.label = item.name
        if (item.children !== null) {
          this.setLabel(item.children)
        }
      }
      return data
    },
    addIndicators() {
      this.ruleExpression.push(
        [
          { name: '类别选择', type: 'select', icon: '', value: '', values: '', options: [
            {
              value: '1',
              label: '模型-特征'
            }] },
          { name: '指标选择', type: 'select', icon: '', value: '', values: '', options: [
            {
              value: '1',
              label: '上海地区宝马故障率'
            }] },
          { name: '指标描述', type: 'input' },
          { name: '指定对象', type: 'input' },
          { name: '表达式', type: 'all', logic: [
            {
              value: '1',
              label: '>'
            }, {
              value: '2',
              label: '<'
            }, {
              value: '3',
              label: '='
            }], value1: '', value2: '' }
        ]
      )
    },
    delIndicators(index) {
      this.ruleExpression.splice(index, 1)
    },
    getaddMember(e) {
      console.log(e)
      this.addMember = false
      if (e.length !== 0) {
        for (const item of e) {
          this.msgDetail[4].value = this.msgDetail[4].value + item.name + '、'
        }
        console.log(this.msgDetail)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.conCen{
  width: 100%;
  height: 94%;
  overflow-y: auto;
  background:#eee;
  .msgItem{
    height: 198px;
    background: #F6F6F6;
    border-radius: 5px;
    border: 1px solid #D9D9D9;
    padding: 20px 30px;
    display: grid;
    grid-template-columns: 1.3fr 0.8fr 1fr 1fr;
    grid-gap: 20px 20px;
    div{
      display: inline-block;
      width: 100%;
      height: 32px;
      // margin-bottom: 20px;
      // border:1px solid red;
      >>> .el-input{
        width: calc(100% - 90px);
      }
      >>> .el-select {
        width: calc(100% - 90px);
         .el-input{
        width: 100%;
      }
      }
    }
    div:nth-child(5),div:nth-child(6){
      grid-column-start: 1;
      grid-column-end: 5;
      position: relative;
      >>> .el-input{
        width: calc(100% - 90px);
      }
      i{
          position: absolute;
          top:8px;
          right:15px;
        }
    }
    div:nth-child(3){
       >>> .el-input{
        width: 30%;
      }
      >>> .el-select {
        width: 30%;
        margin-left: -6px;
        .el-input{
          width: 100%;
        }
      }
     }
     div:nth-child(4){
       position: relative;
        >>> .el-input{
          width: calc(100% - 120px);
        }
        i{
          position: absolute;
          top:8px;
          right:15px;
        }
     }
  }
  .ruleExpression{
    width: calc(100% - 48px);
    margin-left: 48px;
    padding: 20px 30px;
    padding-right: 0;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 20px 20px;
    height: 208px;
    background: #F6F6F6;
    border-radius: 5px;
    border: 1px solid #D9D9D9;
    position: relative;
    div{
      display: inline-block;
      width: 100%;
      height: 32px;
      >>> .el-input{
        width: calc(100% - 90px);
      }
      >>> .el-select {
        width: calc(100% - 90px);
         .el-input{
          width: 100%;
        }
      }
    }
    div.disable-ipt{
      margin-bottom: 10px;
      height: 64px;
      width:calc(100% - 110px);
      vertical-align: top;
    }
    div.disable-ipt >>> .el-input__inner{height: 64px;}
    div:nth-child(3){
      grid-column-start: 1;
      grid-column-end: 4;
      margin-left: 10px;
    }
    div:nth-child(5){
      >>> .el-select,.el-input{
        width: 23%;
        margin-left: -6px;
      }
      >>> .el-input.is-disabled{
        width: 46%;
        margin: 0;
      }
    }
  }
  .iconDelete{
    position: absolute;
    top: 84px;
    left: -28px;
    font-size: 14px;;
    // opacity: 0.39;
    cursor: pointer;
  }
  .divider {
    position: absolute;
    top: 59px;
    .el-divider--vertical{
      height: 100%;
      border:1px dashed #979797;
      // background-color: #979797;
    }
  }
  .ruleExpression::before{
    content:'';
    width:40px;
    height: 1px;
    border:1px dashed #979797;
    position: absolute;
    top:104px;
    left:-40px;
    // opacity: 0.39;
  }
  .approval{
height: 248px;
background: #FFFFFF;
p{
  margin-top: 20px;
  span.text-grey-opacity-86{
    display: inline-block;
    width: 90px;
    text-align: right;
  }
  >>> .el-input{
        width: 30%;
      }
      >>> .el-select {
        width: 30%;
         .el-input{
          width: 100%;
        }
      }
}
  }
}
</style>
