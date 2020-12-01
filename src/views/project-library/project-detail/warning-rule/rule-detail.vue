<template>
  <div class="conCen">
    <div class="bg-white p-20 mb-20 border-bottom-left-radius border-bottom-right-radius">
      <p class="mb-20">
        <span class="must-write fs-14 fw-400 text-grey-opacity-86">监控使用事件：</span>
        <el-select v-model="useEvent" placeholder="请选择" :disabled="canEdit">
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
            <el-input v-if="item.type=='input'" v-model="item.value" placeholder="请选择" :disabled="canEdit" />
            <el-select v-if="item.type!='input'||item.name=='执行周期'" v-model="item.values" placeholder="请选择" :disabled="canEdit">
              <el-option
                v-for="items in item.options"
                :key="items.value"
                :label="items.label"
                :value="items.values"
              />
            </el-select>
            <i v-if="!canEdit" class="icon iconfont" :class="[item.icon, item.color]" />
          </div>
        </div>
      </div>
      <div class="mt-20 pos-relative">
        <p class="fs-14 fw-bold text-grey-opacity-86 mb-10">预警规则表达式</p>
        <el-select v-model="ruleCondition" class="mr-20" :disabled="canEdit">
          <el-option value="And">And</el-option>
          <el-option value="Or">Or</el-option>
        </el-select>
        <el-button type="primary" class="cursor-pointer" :style="{'opacity':!canEdit?'1':'0.39'}" plain @click="addIndicators()">添加指标</el-button>
        <div v-for="(item, index) in ruleExpression" :key="index" class="mt-20 ruleExpression">
          <div v-for="(child, ind) in item" :key="ind" :class="{'mt-20':ind==3||ind==4}">
            <span class="fs-14 fw-400 text-grey-opacity-86" :class="ind!=2?'must-write':''">{{ child.name }}：</span>
            <el-input v-if="child.type=='input'" v-model="child.value" :type="ind==2?'textarea':'input'" :placeholder="ind==2?'选择指标后，指标描述自动填充':'请选择'" :disabled="canEdit" resize="none" :class="{'disable-ipt':ind==2}" />
            <el-select v-if="child.type=='select'" v-model="child.value" placeholder="请选择" :disabled="canEdit">
              <el-option
                v-for="items in child.options"
                :key="items.value"
                :label="items.label"
                :value="items.values"
              />
            </el-select>
            <el-input v-if="child.type=='all'" v-model="child.value" placeholder="自动填充为选择的指标" :disabled="canEdit" />
            <el-select v-if="child.type=='all'" v-model="child.value1" placeholder="请选择" :disabled="canEdit">
              <el-option
                v-for="items in child.logic"
                :key="items.value"
                :label="items.label"
                :value="items.values"
              />
            </el-select>
            <el-input v-if="child.type=='all'" v-model="child.value2" placeholder="请填写数字" :disabled="canEdit" />
          </div>
          <i v-if="!canEdit" class="icon iconfont iconDelete errorColor" :style="{'opacity':!canEdit?'1':'0.39'}" />
        </div>
        <div ref="divider" class="divider">
          <el-divider direction="vertical" />
        </div>

      </div>
    </div>
    <div class="bg-white p-20 border-radius-5 approval">
      <span class=" fs-14 fw-bold text-grey-opacity-86 mb-20">审批配置</span>
      <time-line :time-list="timeList" />
    </div>

  </div>
</template>

<script>
import TimeLine from '@/components/TimeLine'
import { getUrlParams } from '@/utils/getUrlParams'
import { getUsingEvent } from '@/api/project-library/using-event/using-event'

export default {
  name: 'AddRule',
  components: { TimeLine },
  data() {
    return {
      canEdit: true,
      useEvent: '易速贷申请',
      ruleList: [],
      msgDetail: [
        { name: '预警名称', type: 'input', icon: '', value: 'Trigger_8' },
        { name: '预警等级', type: 'select', icon: '', values: '一般', options: [
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
        { name: '执行周期', type: 'input', icon: '', value: '1', values: '天', options: [
          {
            value: '1',
            label: '天'
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
        { name: '开始执行周期', type: 'input', icon: 'iconHistory', color: 'text-grey-3', value: '2020.10.10-12:00:00' },
        { name: '预警人员', type: 'input', icon: 'iconPlus', color: 'doingColor', value: '于和伟、王盟', alerMsg: '灰色表示相关人员无相应权限，请联系系统管理员' },
        { name: '预警提醒', type: 'input', icon: '', value: '无' }
      ],
      ruleName: 'Trigger_8',
      ruleCondition: 'And',
      ruleExpression: [
        [
          { name: '类别选择', type: 'select', icon: '', value: '模型-特征', options: [
            {
              value: '1',
              label: '模型-特征'
            }] },
          { name: '指标选择', type: 'select', icon: '', value: '上海地区宝马故障率', values: '', options: [
            {
              value: '1',
              label: '上海地区宝马故障率'
            }] },
          { name: '指标描述', type: 'input', value: '上海地区宝马故障率' },
          { name: '指定对象', type: 'input', value: '易速贷申请' },
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
            }], value: '指标1', value1: '>', value2: '97' }
        ]
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
    addIndicators() {
      if (!this.canEdit) {
        this.ruleExpression.push(
          [
            { name: '类别选择', type: 'select', icon: '', value: '', options: [
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
            { name: '指标选择', type: 'select', icon: '', value: '', values: '', options: [
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
      }
    },
    delIndicators(index) {
      this.ruleExpression.splice(index, 1)
    },
    initData() {
      this.canEdit = getUrlParams().action !== '配置中'
      this.$refs.divider.style.height = '124px'
      getUsingEvent().then((res) => {
        for (const item of res.data.usingEvents) {
          this.ruleList.push({ value: item.id, label: item.eventName })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.conCen{
  width: 100%;
  height: calc(100% - 40px);
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
      >>> .el-input:first-child{
        width: 100%;
        margin: 0;
      }
    }
  }
  .iconDelete{
    position: absolute;
    top: 84px;
    left: -28px;
    font-size: 14px;;
    opacity: 0.39;
    cursor: pointer;
  }
  .divider {
    position: absolute;
    top: 59px;
    opacity: 0.39;
    .el-divider--vertical{
      height: 100%;
      // background-color: #979797;
      border:1px dashed #979797;
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
    opacity: 0.39;
  }
  .approval{
// height: 248px;
background: #FFFFFF;
  }
}
button,button:hover{
background: #FFFFFF;
border-radius: 2px;
opacity: 0.39;
border: 1px solid #00A0E9;
}
</style>
