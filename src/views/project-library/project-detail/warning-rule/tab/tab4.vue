<template>
  <div class="conCen bg-white h100">
    <div class="mt-20 pos-relative">
      <p class="fs-14 fw-bold text-grey-opacity-86 mb-10">预警规则表达式</p>
      <el-select v-model="ruleCondition" class="mr-20" disabled>
        <el-option value="And">And</el-option>
        <el-option value="Or">Or</el-option>
      </el-select>
      <div v-for="(item, index) in ruleExpression" :key="index" class="mt-20 ruleExpression">
        <div v-for="(child, ind) in item" :key="ind" :class="{'mt-20':ind==3||ind==4}">
          <span class="fs-14 fw-400 text-grey-opacity-86" :class="ind!=2?'must-write':''">{{ child.name }}：</span>
          <el-input v-if="child.type=='input'" v-model="child.value" :type="ind==2?'textarea':'input'" :placeholder="ind==2?'选择指标后，指标描述自动填充':'请选择'" disabled resize="none" :class="{'disable-ipt':ind==2}" />
          <el-select v-if="child.type=='select'" v-model="child.value" placeholder="请选择" disabled>
            <el-option
              v-for="items in child.options"
              :key="items.value"
              :label="items.label"
              :value="items.values"
            />
          </el-select>
          <el-input v-if="child.type=='all'" v-model="child.value" placeholder="自动填充为选择的指标" disabled />
          <el-select v-if="child.type=='all'" v-model="child.value1" placeholder="请选择" disabled>
            <el-option
              v-for="items in child.logic"
              :key="items.value"
              disabled
              :label="items.label"
              :value="items.values"
            />
          </el-select>
          <el-input v-if="child.type=='all'" v-model="child.value2" placeholder="请填写数字" disabled />
        </div>
      </div>
      <div ref="divider" class="divider">
        <el-divider direction="vertical" />
      </div>

    </div>
    <div class="bg-white pt-20 border-radius-5 approval">
      <span class=" fs-14 fw-bold text-grey-opacity-86 mb-20">审批配置</span>
      <el-timeline class="p-20">
        <el-timeline-item v-for="(item, index) in timeList" :key="index" :icon="item.icon" :timestamp="item.timestamp" :color="item.color" placement="top">
          <el-card>
            <p v-for="(child, ind) in item.content" :key="ind" class="fs-14" :class="{'pb-10':ind!==child.length-1?true:false}">
              <i class="icon iconfont iconicon-duihao doingColor fs-14 mr-5" />
              <span class="fw-400">{{ child.con }}</span>
              <span class="ml-10" style="color:#999">({{ child.desc }})</span>
            </p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>

  </div>
</template>

<script>
// import HeadTitle from '@/components/HeadTitle'
// import { getUrlParams } from '@/utils/getUrlParams'

export default {
  name: 'WarningFour',
  // components: { HeadTitle },
  data() {
    return {
      useEvent: '',
      options: [
        {
          value: '',
          label: '全部'
        }, {
          value: false,
          label: '公开'
        }, {
          value: true,
          label: '私有'
        }],
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
        { name: '预警人员', type: 'input', icon: 'iconPlus', color: 'doingColor', value: '', alerMsg: '灰色表示相关人员无相应权限，请联系系统管理员' },
        { name: '预警提醒', type: 'input', icon: '', value: '' }
      ],
      ruleName: '',
      ruleCondition: 'And',
      ruleExpression: [
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
      ],
      approvalList: [
        {
          name: '审批流', mustWrite: true, type: 'select', disabled: false
        },
        {
          name: '审批负责人', mustWrite: false, type: 'input', disabled: true
        },
        {
          name: '审批类别', mustWrite: false, type: 'input', disabled: true
        }
      ],
      timeList: [
        {
          content: [
            {
              con: '阿达西',
              desc: '已同意。2020.08.09-12:00:00'
            },
            {
              con: '阿达西',
              desc: '已同意。2020.08.09-12:00:00'
            }
          ],
          timestamp: '直接上级.已同意（2/2）',
          color: '#00a0e9',
          icon: 'iconshenpi'
        },
        {
          content: [],
          timestamp: '指定审批人.已同意',
          color: '#00a0e9',
          icon: 'iconshenpi'
        },
        {
          content: [],
          timestamp: '抄送人.已抄送',
          color: '#00a0e9',
          icon: 'icon__cc'
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
    this.$refs.divider.style.height = '124px'
  },
  methods: {
    addIndicators() {
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
    },
    delIndicators(index) {
      this.ruleExpression.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.conCen{
  width: 100%;
  overflow: hidden;
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
        width: calc(85% - 180px);
      }
      >>> .el-select {
        width: calc(85% - 200px);
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
    opacity: 0.39;
    cursor: pointer;
  }
  .divider {
    position: absolute;
    top: 59px;
    .el-divider--vertical{
      height: 100%;
      background-color: #979797;
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
.approval{
  >>>.el-card{
  .el-card__body{
background: #F6F6F6;
border-radius: 3px;
border: 1px solid #D1D1D1;
p{
  margin: 0;
  padding: 0;
}
  }
}
}

</style>
