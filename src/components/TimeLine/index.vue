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

export default {
  name: 'TimeLine',
  props: {
    timeList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
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
    border: 1px solid #D1D1D1;
  .el-card__body{
background: #F6F6F6;
border-radius: 3px;
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
    left: 100px;
    cursor: pointer;
    font-size: 18px;
    color:#999;
}
 </style>
