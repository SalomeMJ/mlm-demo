<template>
  <div class="funJuris bg-white border-radius-3 border-d9 mt-10">
    <ul class="roleTop">
      <li v-for="(item, index) in moduleOptions.name" :key="index"><div class="fs-12 text-grey-1">{{ item }}</div></li>
    </ul>
    <div v-if="moduleOptions.data.length!=0" class="scrollWidth funContent">
      <ul v-for="(item, ind) in moduleOptions.data" :key="ind">
        <li>
          <div>
            <span>{{ item.name }}</span>
          </div>
        </li>
        <li>
          <div v-for="(child, inde) in item.children" :key="inde" class="authorList">
            <p>
              <span>{{ child.name }}</span>
            </p>
            <div class="juryisty">
              <span v-for="(ju, index) in child.children" :key="index">{{ ju.name }}<span v-if="index!=child.children.length-1">、</span></span>
            </div>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    moduleOptions: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>
<style lang='scss' scoped>
.funJuris{
  width: 100%;
 height: 170px;
 margin-bottom: 20px;
 background-color: #fff;
  ul{
    display: grid;
    margin: 0;
    padding: 0;
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
        color: #333;
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
    border-bottom:1px solid #d9d9d9;
    grid-template-columns: 1.5fr 1.8fr 4fr;
    overflow: hidden;
    li{
      div{
        padding-top: 10px;
        line-height: 10px;
        font-size: 12px;
        color:#999;
      }
    }
    li:last-child{
      border:none;
    }
  }
  .editAuthority,.funContent{
    width: 100%;
    height:136px;
    overflow-y: auto;
    overflow-x: hidden;
    ul{
      height: auto;
      background:rgba(255,255,255,1);
      border:none ;
      grid-template-columns: 1.5fr 5.8fr;
      li{
        padding-top: 0;
      }
      li:nth-child(2){
        width: 100%;
        border:none ;
        div.authorList{
          display: grid;
          grid-template-columns: 1.42fr 3fr;
          border:none;
        }
      }
    }
  }
  .editAuthority{
    border:1px solid #eee;
    ul{
      border-bottom:1px solid rgba(238,238,238,1);
      li{
        border-right:1px solid rgba(238,238,238,1);
        label{
          display: inline-block;
        }
        div.authorList{
          border-bottom:1px solid rgba(238,238,238,1) !important;
        }
        .juryisty{
          border:none;
          padding-left: 15px;
          border-left:1px solid rgba(238,238,238,1);

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
      border-right:1px solid rgba(238,238,238,1);
      grid-template-columns: 1.5fr 1.8fr 4fr;
    }
  }

}
</style>
