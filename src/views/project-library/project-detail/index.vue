<template>
  <div class="h100 coverParentView">
    <div class="project-select">
      <el-select v-model="values" class="ml-20 w-200" placeholder="请选择" @change="changeProject">
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
      <tab1 v-if="activeName=='first'&&flag&&projectDetail!={}" :project-detail="projectDetail" @enterDetail="getenterDetail" @activeName="getactiveName" />
      <el-tab-pane label="模型资产池" name="second" />
      <tab2 v-if="activeName=='second'" :project-name="projectName" />
      <el-tab-pane label="使用事件" name="third" />
      <tab3 v-if="activeName=='third'" />
      <el-tab-pane label="预警规则" name="fourth" />
      <tab4 v-if="activeName=='fourth'" />
      <el-tab-pane label="模型验证" name="five" />
      <tab5 v-if="activeName=='five'" />
    </el-tabs>
    <!-- <div v-if="routerActive"> -->
    <router-view />
    <!-- </div> -->

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
import { getUrlParams } from '@/utils/getUrlParams'

export default {
  name: 'ProjectDetail',
  components: { Tab1, Tab2, Tab3, Tab4, Tab5 },
  data() {
    return {
      activeName: null,
      projectName: '',
      projectOptions: [],
      values: '',
      projectDetail: {},
      flag: false,
      isShow: false
    }
  },
  created() {
  },
  mounted() {
    this.getDetail()
    this.getactiveName(Number(localStorage.getItem('activeTab')))
    // localStorage.removeItem('activeTab')
  },
  methods: {
    handleClick(tab, event) {
      localStorage.setItem('activeTab', tab.index)
      this.$router.push({ path: '/project-library/project-detail', query: { projectName: this.projectName }})
    },
    getDetail() {
      this.projectName = getUrlParams().projectName
      getProjectDetail().then((res) => {
        this.projectDetail = res.data
        this.flag = true
      })
      getProjectLibrary().then((res) => {
        this.projectOptions = []
        for (const item of res.data.projectList) {
          this.projectOptions.push(
            {
              value: item.projectId,
              label: item.projectName
            }
          )
        }
        this.values = this.projectOptions[0].label
      })
    },
    changeProject() {
      this.projectName = this.projectOptions[this.values - 1].label
      this.activeName = 'first'
      localStorage.setItem('activeTab', 0)
      this.$router.push({ path: '/project-library/project-detail', query: { projectName: this.projectName }})
    },
    getenterDetail(e) {
      this.activeName = 'second'
      localStorage.setItem('activeTab', 1)
      this.$router.push({ path: '/project-library/project-detail/model-record', query: { modelName: e.params.name, projectName: this.projectName }})
    },
    getactiveName(e) {
      localStorage.setItem('activeTab', e)
      if (e === null || e === 0) {
        this.activeName = 'first'
      }
      if (e === 1) {
        this.activeName = 'second'
      }
      if (e === 2) {
        this.activeName = 'third'
      }
      if (e === 3) {
        this.activeName = 'fourth'
      }
      if (e === 4) {
        this.activeName = 'five'
      }
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
    >>> .el-tabs__nav-scroll::after{
      display: none;
    }
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
    >>> .el-tabs__nav-wrap::after{
      display: none;
    }
    >>> .el-tabs__item {
      height: 53px;
    }
  }
 </style>
