<template>
  <div class="h100  border-radius-5 coverParentView">
    <head-title :title="'使用事件>'+($route.query.eventName==null?'新建事件':$route.query.eventName)" :back="back" :src="src" :query="query" />
    <event-addedit v-if="action=='add'||action=='配置中'||action=='生效审核中'" />
    <event-effect v-if="action=='生效中'" />
  </div>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
import { getUrlParams } from '@/utils/getUrlParams'
import EventAddedit from './event-add-edit'
import EventEffect from './event-effect'

export default {
  name: 'UsingDetail',
  components: { HeadTitle, EventAddedit, EventEffect },
  data() {
    return {
      back: true,
      src: '/project-library/project-detail',
      query: null,
      activeName: 'third',
      action: null
    }
  },
  created() {
  },
  mounted() {
    this.query = { projectName: getUrlParams().projectName }
    this.action = getUrlParams().action
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    goBack() {
      this.$router.push({ path: this.src, query: this.query })
    }
  }
}
</script>

<style lang="scss" scoped>
.conCen{
  width: 100%;
  height: calc(100% - 105px);
  padding: 20px 30px;
  border-radius: 0 0 5px 5px;
  .conItem{
    .title{
      padding: 0;
      margin: 0;
    }
    p{
      margin-top: 20px;
      span{
        display: inline-block;
        width: 160px;
        text-align: right;
      }
    }
    .conDetail{
      .el-input,.el-textarea,.el-select {
        width: 28%;
        height: 32px;
        border-radius: 2px;
      }
      .el-textarea{
        height: 64px;
        vertical-align: top;
      }
      i.iconxiazai{
        margin-left: 5px;
      }
    }

  }
}
.coverParentView{
  background-color: #eee;
}
 </style>
