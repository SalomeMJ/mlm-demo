<template>
  <div>
    <el-timeline>
      <el-timeline-item v-for="(item, index) in timeList" :key="index" :timestamp="item.timestamp" :color="item.color" placement="top">
        <el-card>
          <p v-for="(child, ind) in item.content" :key="ind" class="pt-25 fs-14">{{ child }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
import { getOperation } from '@/api/project-library/warning-rule/operation'
export default {
  name: 'WarningThree',
  // components: { LineChart },
  data() {
    return {
      timeList: []
    }
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      getOperation().then((res) => {
        for (const item of res.data.results) {
          this.timeList.push(
            {
              content: JSON.parse(item.ret).baseInfo,
              timestamp: item.logTime + item.process + '操作人：' + item.operator,
              color: '#00a0e9'
            }
          )
        }
      })
    }
  }

}
</script>
<style lang="scss" scoped>
</style>
