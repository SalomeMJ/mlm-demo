<template>
  <div>
    <el-dialog title="编辑权限" :visible.sync="dialogVisible" :modal-append-to-body="false" :close-on-click-modal="false" width="1000px">
      <i class="el-icon el-icon-close" @click="confirmProject()" />
      <div class="funJuris border-d9 border-radius-5">
        <ul class="roleTop" :class="{'editAuthority':edit}">
          <li><div>模块</div></li>
          <li><div>子模块</div></li>
          <li><div>功能权限</div></li>
        </ul>
        <div class="scrollWidth funContent border-top-d9" :class="{'editAuthority':edit}" :style="{'height':edit?'259px':'110px'}">
          <ul v-for="(item, index) in authorityList" :key="index">
            <li class="border-right-d9">
              <div>
                <el-checkbox v-if="edit" v-model="item.selected" @change="selectAll(item)">{{ item.name }}</el-checkbox>
              </div>
            </li>
            <li>
              <div v-for="(child, ind) in item.children" :key="ind" class="authorList" :class="{'border-bottom-d9':ind!=item.children.length-1}">
                <p>
                  <el-checkbox v-if="edit" v-model="child.selected" @change="selectChild(item,child)">{{ child.name }}</el-checkbox>
                </p>
                <div class="juryisty">
                  <div v-for="(juristy, inde) in child.children" :key="inde">
                    <el-checkbox v-if="edit" v-model="juristy.selected" @change="selectJuristy(item,child,juristy)">{{ juristy.name }}</el-checkbox>
                  </div>
                </div>

              </div>
            </li>
            <li />
          </ul>
        </div>
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
    roleList: {
      type: Array,
      default: () => []
    },
    editJustrify: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dialogVisible: true,
      edit: true,
      authorityList: null

    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.dialogVisible = this.editJustrify
      this.authorityList = this.roleList[0].authorityList
    },
    selectAll(item) {
      for (const i of item.children) {
        i.selected = item.selected
        for (const j of i.children) {
          j.selected = item.selected
        }
      }
    },
    selectChild(item, child) {
      for (const juristy of child.children) {
        juristy.selected = child.selected
      }
      const selectedChild = []

      for (const i of item.children) {
        if (i.selected) {
          selectedChild.push(i)
        }
      }
      if (selectedChild.length !== 0) {
        item.selected = true
      }
    },
    selectJuristy(item, child, juristy) {
      const selectedJuristy = []
      for (const i of child.children) {
        if (i.selected) {
          selectedJuristy.push(i)
        }
      }
      if (selectedJuristy.length !== 0) {
        child.selected = true
      }
      const selectedChild = []
      for (const i of item.children) {
        if (i.selected) {
          selectedChild.push(i)
        }
      }
      if (selectedChild.length !== 0) {
        item.selected = true
      }
    },
    confirmProject() {
      this.dialogVisible = false
      this.$emit('editJustrify')
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
.funJuris{
  width: 100%;
  height:auto;
  ul{
    display: grid;
    li{
      display: inline-block;
      width: 100%;
      line-height: 32px;
      text-align: left;
      div{
        width: 100%;
        padding: 0px 16px 0px 16px;
        min-height: 36px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 36px;
        .juryisty{
          display: inline-block;
          width: 100%;
          vertical-align: top;
          padding: 0;
          div{
            padding-left: 0;
            display: inline-block;
            width:auto;
            margin-top: -20px;

          }
        }
      }
    }
  }
  .roleTop{
    width: 100%;
    height:32px;
    background:rgba(246,246,246,1);
    border:none;
    border-bottom:none;
    grid-template-columns: 1.5fr 1.8fr 4fr;
    overflow: hidden;
    margin: 0;
    li{
      div{
        padding-top: 10px;
        line-height: 10px;
      }
    }
    li:last-child{
      border:none;
    }
  }
  .editAuthority,.funContent{
    width: 100%;
    height:110px;
    overflow-y: auto;
    overflow-x: hidden;
    border-top: 1px solid #d9d9d9;
    ul{
      height: auto;
      background:rgba(255,255,255,1);
      border:none ;
      grid-template-columns: 1.54fr 5.96fr;
      li{
        padding-top: 0;
      }
      li:nth-child(2){
        width: 100%;
        div.authorList{
          display: grid;
          grid-template-columns: 1.43fr 3fr;
        }
      }
    }
  }
  .editAuthority{
    border:none;
    ul{
      border-bottom:1px solid #d9d9d9;
      li{
        label{
          display: inline-block;
        }
        .juryisty{
          border:none;
          padding-left: 15px;
          border-left:1px solid #d9d9d9;

        }
      }
    }
    ul:last-child{
      border-bottom:none;
    }
  }
  .editAuthority.roleTop{
    height: 32px;
    overflow: hidden;
    border-bottom: none;
    grid-template-columns: 1.52fr 1.96fr 4fr;
    li{
      border-right:1px solid #d9d9d9;
      grid-template-columns: 1.5fr 1.8fr 4fr;
    }
  }

}
</style>
