<template>
  <div class="h100  border-radius-5 coverParentView">
    <head-title :title="'模型资产池>'+($route.query.modelName==null?'新建模型':$route.query.eventName)" :back="back" :src="src" :query="query" />
    <add-model v-if="$route.query.modelName==undefined" />
    <model-group v-if="$route.query.modelName!==undefined" />
  </div>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
import AddModel from './add-model'
import ModelGroup from './model-group'
import { getUrlParams } from '@/utils/getUrlParams'

export default {
  name: 'ModelOperation',
  components: { HeadTitle, AddModel, ModelGroup },
  data() {
    return {
      back: true,
      src: '/project-library/project-detail',
      query: null,
      activeName: 'second',
      action: null
    }
  },
  created() {
  },
  mounted() {
    this.query = { projectName: getUrlParams().projectName }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
 </style>
