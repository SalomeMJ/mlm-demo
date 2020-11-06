<template>
  <div class="approval">
    <el-timeline class="p-20 times">
      <el-timeline-item v-for="(item, index) in timeList" :key="index" :icon="item.icon" :timestamp="item.timestamp" :color="item.color" placement="top">
        <i class="icon iconfont" :class="{'iconXiasanjiao':item.packUp, 'iconShangsanjiao':!item.packUp}" @click="packup(index)" />
        <el-card v-if="item.content.length!=0&&!item.packUp">
          <p v-for="(child, ind) in item.content" :key="ind" class="fs-14" :class="{'pb-10':ind!==child.length-1?true:false}">
            <i class="icon iconfont iconicon-duihao doingColor fs-14 mr-5" />
            <span class="fw-400">{{ child.con }}</span>
            <span class="ml-10" style="color:#999">({{ child.desc }})</span>
          </p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
// import { getUrlParams } from '@/utils/getUrlParams'
// import PickerTime from '@/components/PickerTime'

export default {
  name: 'TimeLine',
  props: {
    timeList: {
      type: Array,
      default: () => []
    }
  },
  // components: { PickerTime },
  data() {
    return {
      // condetail: [
      //   {
      //     name: '信息填写',
      //     child: [
      //       { name: '使用事件名称', mustWrite: true, type: 'input', icon: '', value: '', disabled: false },
      //       { name: '使用事件描述', mustWrite: false, type: 'textarea', icon: '', value: '', disabled: false },
      //       { name: '负责人', mustWrite: true, type: 'select', icon: '', value: '', options: ['田雨', '黎簇', '王盟', '于和伟'], disabled: false }
      //     ]
      //   },
      //   {
      //     name: '使用事件配置',
      //     child: [
      //       { name: '使用模型', mustWrite: true, type: 'select', icon: '', disabled: false, options: ['易速贷申请', '自营车审批', '新车审批', '二手车预审批', '易速贷反欺诈', '易速贷反欺诈2.0', '自营车预审批', '新车预审批', '新车催收', '二手车审批', '二手车审批2.0'] },
      //       { name: '验证记录', mustWrite: true, type: 'select', icon: '', disabled: false, options: ['验证事件V11', '验证事件V10', '验证事件V9', '验证事件V8', '验证事件V7', '验证事件V6', '验证事件V5', '验证事件V4', '验证事件V3', '验证事件V2', '验证事件V1'] },
      //       { name: '模型文档', mustWrite: true, type: 'select', icon: '', disabled: false, options: ['DataSet.csv', 'Feature.xlsx', 'Algorithm.docx', 'Test.docx'] },
      //       { name: '发布模型文档', mustWrite: false, type: 'input', icon: 'iconstrategyPlus', disabled: false },
      //       { name: '使用时间生效时间', mustWrite: true, type: 'time', icon: '', disabled: false }
      //     ]
      //   },
      //   {
      //     name: '审批配置',
      //     child: [
      //       { name: '审批流', mustWrite: true, type: 'select', icon: '', value: '', disabled: false, options: ['审批流一号', '审批流二号', '审批流三号'] },
      //       { name: '审批负责人', mustWrite: false, type: 'input', icon: '', value: '王盟；于和伟', disabled: false },
      //       { name: '审批类别', mustWrite: false, type: 'input', icon: '', value: '会签', disabled: false }
      //     ]
      //   }
      // ],
      // timeList: [
      //   {
      //     content: [
      //       {
      //         con: '王盟',
      //         desc: '已同意-2020.08.15-12:00:00'
      //       },
      //       {
      //         con: '于和伟',
      //         desc: '已同意-2020.08.17-12:00:00'
      //       }
      //     ],
      //     packUp: false,
      //     timestamp: '直接上级',
      //     color: '#00a0e9',
      //     icon: 'el-icon-s-check'
      //   },
      //   {
      //     content: [{
      //       con: '田雨',
      //       desc: '已同意-2020.08.20-12:00:00'
      //     }],
      //     packUp: true,
      //     timestamp: '指定审批人',
      //     color: '#00a0e9',
      //     icon: 'el-icon-s-check'
      //   }
      // ]
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    packup(index) {
      this.timeList[index].packUp = !this.timeList[index].packUp
    }
  }
}
</script>

<style lang="scss" scoped>
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
>>> .el-timeline-item__node--normal{
  width: 20px;
  height: 20px;
  top:-3px;
  left:-5px;
}
i.iconShangsanjiao,i.iconXiasanjiao{
    position: absolute;
    top: 1px;
    left: 6%;
    cursor: pointer;
    font-size: 18px;
    color:#999;
}
 </style>
