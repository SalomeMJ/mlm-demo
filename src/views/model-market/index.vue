<template>
  <div class="h100 border-radius-5 bg-white">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="模型追踪" name="first" />
      <tab1 v-if="activeName=='first'" />
      <el-tab-pane label="模型指标" name="second" />
      <tab2 v-if="activeName=='second'" />
    </el-tabs>
  </div>
</template>

<script>
import Tab1 from './tab/tab1'
import Tab2 from './tab/tab2'
export default {
  name: 'ModelMarket',
  components: { Tab1, Tab2 },
  data() {
    return {
      activeName: 'first'
    }
  },
  created() {
  },
  mounted() {

  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab)
    }
  }
}
</script>

<style lang="scss" scoped>
 </style>
