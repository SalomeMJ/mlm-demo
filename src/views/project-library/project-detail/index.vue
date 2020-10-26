<template>
  <div class="h100">
    <div class="project-select">
      <el-select v-model="values" class="ml-20 w-200" placeholder="请选择">
        <el-option
          v-for="item in projectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="项目工作台" name="first" />
      <tab1 v-if="activeName=='first'" :project-detail="projectDetail" />
      <el-tab-pane label="模型资产池" name="second" />
      <tab2 v-if="activeName=='second'" />
      <el-tab-pane label="预警触发" name="third" />
      <tab3 v-if="activeName=='third'" />
      <el-tab-pane label="使用事件" name="fourth" />
      <tab4 v-if="activeName=='fourth'" />
      <el-tab-pane label="验证数据" name="five" />
      <tab5 v-if="activeName=='five'" />
    </el-tabs>
  </div>
</template>

<script>
import Tab1 from './tab/tab1'
import Tab2 from './tab/tab2'
import Tab3 from './tab/tab3'
import Tab4 from './tab/tab4'
import Tab5 from './tab/tab5'
import { getProjectDetail } from '@/api/project-library/project-detail'
import { getProjectLibrary } from '@/api/project-library/projectLibrary'

export default {
  name: 'ProjectDetail',
  components: { Tab1, Tab2, Tab3, Tab4, Tab5 },
  data() {
    return {
      activeName: 'first',
      projectOptions: [],
      values: '',
      projectDetail: {}
    }
  },
  created() {
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    getDetail() {
      getProjectDetail().then((res) => {
        this.projectDetail = res.data
      })
      getProjectLibrary().then((res) => {
        this.projectOptions = []
        for (const item of res.data.projectList) {
          this.projectOptions.push(
            {
              value: item.projectName,
              label: item.id
            }
          )
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.project-select{
  position: fixed;
  top:15px;
  left:80px;
}
.el-select >>> .el-input--medium .el-input__inner {
      width: 130px;
  }
  .el-tabs{
    display: inline-block;
    width: 100%;
    height: 100%;
    >>> .el-tabs__header {
      padding: 0;
      position: fixed;
      top: 7px;
      left: 300px;
    }
    >>> .el-tabs__content{
      height: 100%;
      overflow: hidden;
      overflow-y: auto;
      position: relative;
      background: #eee;
    }
  }
 </style>
