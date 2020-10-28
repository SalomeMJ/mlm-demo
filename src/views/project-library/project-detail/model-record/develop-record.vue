<template>
  <div class="developContainer">
    <div v-for="(item, index) in developMsg" :key="index" class="mb-20">
      <span class="name fs-14 fw-400">{{ item.name }}</span>
      <span class="value doingColor fs-14 fw-400">{{ item.value }}</span>
      <i class="icon iconfont iconxiazai doingColor ml-20 cursor-pointer" />
    </div>
  </div>
</template>

<script>
import { getDevelopRecord } from '@/api/project-library/model-record/develop-record'

export default {
  name: 'DevelopRecord',
  components: { },
  data() {
    return {
      developMsg: [
        { name: '开发数据集：', value: '' },
        { name: '开发特征：', value: '' },
        { name: '补充算法信息：', value: '' },
        { name: '补充测试信息：', value: '' }
      ]
    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      getDevelopRecord().then((res) => {
        this.developMsg[0].value = res.data.developDataset
        this.developMsg[1].value = res.data.developFeature
        this.developMsg[2].value = res.data.developAlgorithm
        this.developMsg[3].value = res.data.developTest
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.developContainer{
  width: 30%;
  margin-left: 35%;
  margin-top: 5%;
  span.name{
    display: inline-block;
    width: 100px;
    text-align: right;
  }
   span.value{
    display: inline-block;
    height: 32px;
    background: #F6F6F6;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    line-height: 32px;
    padding-left: 10px;
    padding-right: 10px;
    width: calc(100% - 160px);
  }
}
 </style>
