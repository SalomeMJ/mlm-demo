<template>
  <div>
    <el-dialog :title="dialog.title" :visible.sync="dialogVisible" :modal-append-to-body="false" :close-on-click-modal="false" :width="dialog.width">
      <el-form v-if="dialog.title!='删除'" :model="dialog.form">
        <el-form-item v-for="(item, index) in dialog.label" :key="index" :label="item.name" required :label-width="dialog.formLabelWidth">
          <el-input v-if="item.type=='input'" v-model="item.value" autocomplete="off" placeholder="请输入" :disabled="item.disabled" />
          <div v-if="item.type=='checkbox'" class="border-d9 w100 h-200 p-20 fs-14 overflow-y-auto">
            <el-checkbox v-for="(option, i) in item.options" :key="i" class="display-block" :label="option.name" />
          </div>
        </el-form-item>
      </el-form>
      <p v-if="dialog.title=='删除'" class="fw-bold">确认删除吗?</p>
      <div slot="footer" class="dialog-footer">
        <el-button @click="confirm()">取 消</el-button>
        <el-button type="primary" @click="confirm()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ElDialogtemplate',
  props: {
    dialog: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dialogVisible: true
    }
  },
  created() {
  },
  mounted() {
    // console.log(this.dialog)
  },
  methods: {
    confirm() {
      this.dialogVisible = false
      this.$emit('dialogVisible', false)
    }
  }
}
</script>
<style lang='scss' scoped>
.el-dialog__wrapper{
  >>> .el-dialog{
    height: auto;
    // margin-top: 0 !important;
    // top: calc(50% - 90px) !important;
    .el-dialog__footer{
      position: unset;
    }
  }
}
</style>
