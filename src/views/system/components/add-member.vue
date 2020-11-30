<template>
  <div>
    <el-dialog title="添加成员" :visible.sync="dialogVisible" :modal-append-to-body="false" :close-on-click-modal="false" width="1000px">
      <i class="el-icon el-icon-close" @click="confirmProject()" />

      <div class="h-32 mb-20">
        <span class="fw-bold fs-14 ver-middle">已选成员：{{ selectNode }}</span>
        <el-input
          v-model="filterText"
          class="pull-right w-180 ver-middle"
          prefix-icon="el-icon-search"
          placeholder="搜索用户"
        />
      </div>
      <div class="border-radius-5 border-d9 h-240 overflow-y-auto">
        <el-tree
          ref="tree"
          :data="roots"
          :props="defaultProps"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[1, 3, 4, 8]"
          class="border-radius-5 filter-tree"
          :filter-node-method="filterNode"
          highlight-current
          accordion
          @check="handleNodeClick"
        />
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="confirmProject()">取 消</el-button>
        <el-button type="primary" @click="confirmProject()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: '',
  props: {
    addMember: {
      type: Boolean,
      default: true
    },
    root: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dialogVisible: true,
      authorityList: [],
      roots: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      filterText: '',
      selectNode: 0,
      selectMember: []
    }
  },

  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    handleNodeClick(data, statu) {
      const getCheckeKeys = statu.checkedNodes
      const arr = []
      this.selectMember = []
      for (const item in getCheckeKeys) {
        if (getCheckeKeys[item].level === '4') {
          arr.push(item)
          this.selectMember.push(getCheckeKeys[item])
        }
      }
      this.selectNode = arr.length
    },
    confirmProject() {
      this.dialogVisible = false
      this.$emit('addMember', this.selectMember)
    },
    initData() {
      this.roots = this.root
      this.dialogVisible = this.addMember
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  }
}
</script>
<style lang='scss' scoped>
.el-dialog__wrapper{
  >>> .el-dialog{
    height: 440px;
    margin-top: 0 !important;
    top: calc(50% - 220px) !important;
    .el-dialog__headerbtn{
      display: none;
    }
  }
}
.el-icon-close{
  position: absolute;
  top:22px;
  right:30px;
  cursor: pointer;
}
</style>
