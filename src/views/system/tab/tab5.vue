<template>
  <div class="h100  p-10 pb-30 pt-20">
    <div class="conHead">
      <span class="fs-18 fw-bold">数据属性管理 <span class="fs-12 text-grey-2 fw-normal letter-spacing-1">（数据权限的属性字段，满足更多场景需要）</span></span>
    </div>
    <div class="conCen mt-10">
      <div v-for="(item, index) in dataAttr" :key="index" class="border-radius-3 border-d9 h-150">
        <div class="h-32 lh-32 pl-20 pr-20 border-bottom-d9 fw-bold">
          <span class="fs-14 text-grey-0">{{ item.name }}</span>
          <el-popover
            v-model="visible"
            placement="right"
            width="80"
            trigger="hover"
          >
            <i slot="reference" class="icon iconfont iconxiangqing fs-18 pull-right cursor-pointer doingColor" @click="editDocument()" />
            <p v-for="(ite, ide) in popmsg" :key="ide" class="cursor-pointer fs-14 mb-5" @click="popClick(item, ite)">{{ ite.name }}</p>
          </el-popover>
          <!-- <i class="icon iconfont iconxiangqing fs-18 pull-right cursor-pointer doingColor" /> -->
        </div>
        <div class="pl-20 pr-20 pb-10 pt-10">
          <p>
            <i class="icon iconfont iconshuxing text-grey-2 fs-18 ver-middle" />
            <span class="fs-12 text-grey-2 ver-middle">子属性</span>
          </p>
          <p class="childAttr mt-5">
            <span v-for="(attr, ind) in item.attributeLines" :key="ind" class="fs-14 fw-400 text-grey-0 mb-10">{{ attr.name }}</span>
          </p>
        </div>
      </div>
    </div>
    <el-dialogtemplate v-if="dialogFormVisible" :dialog="dialog" @dialogVisible="getdialogVisible()" />
  </div>
</template>
<script>
import { getDataAttr } from '@/api/system/data-attr'
import ElDialogtemplate from '@/components/el-dialog'
export default {
  name: 'TabOne',
  components: { ElDialogtemplate },
  data() {
    return {
      dataAttr: [],
      dialogFormVisible: false,
      visible: false,
      popmsg: [
        { type: 'add', name: '添加子属性', label: [
          { name: '属性名称', type: 'input', value: '', disabled: true },
          { name: '子属性名称', type: 'input', value: '' }
        ] },
        { type: 'delete', name: '删除子属性', label: [
          { name: '属性名称', type: 'input', value: '', disabled: true },
          { name: '子属性', type: 'checkbox', value: '', options: [
            { name: '文件夹名称', checked: false }
          ] }
        ] }
      ],
      dialog: {
        title: '新建文件夹',
        width: '480px',
        label: '',
        formLabelWidth: '',
        form: {
          name: ''
        }
      }
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      getDataAttr().then((res) => {
        this.dataAttr = res.data.dataAttr
      })
    },
    // 文件删除重命名等点击事件
    popClick(params, type) {
      this.visible = false
      this.dialogFormVisible = true
      this.dialog.title = type.name
      this.dialog.label = type.label
      if (type.type === 'add') {
        this.dialog.form.name = params.name
        this.popmsg[0].label[0].value = params.name
      } else {
        this.popmsg[1].label[0].value = params.name
        this.popmsg[1].label[1].options = []
        for (const item of params.attributeLines) {
          this.popmsg[1].label[1].options.push(
            { name: item.name, checked: false }
          )
        }
      }
      this.dialog.formLabelWidth = '95px'
    },
    getdialogVisible() {
      this.dialogFormVisible = false
    }
  }

}
</script>
<style lang="scss" scoped>
.conHead{
  height: 32px;
  width: 100%;
  position: relative;
  >>> button{
    position: absolute;
       width: 88px;
    height: 32px;
    right:0;
  }
}
.conCen{
height:93%;
display: grid;
grid-template-columns: repeat(auto-fill,360px);
grid-gap: 20px 20px;
.childAttr{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  span{
    display: inline-block;
    width: 100%;
    text-align: left;
  }
}
}
</style>
