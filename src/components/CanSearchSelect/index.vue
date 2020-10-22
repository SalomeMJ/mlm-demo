<template>
  <div class="canserachselContainer">
    <el-select v-model="selectValue">
      <el-input
        :id="id"
        v-model="value"
        type="text"
        @input="dataFilter"
      >
        <i slot="suffix" class="el-input__icon el-icon-search" />
      </el-input>
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
  </div>
</template>
<script>
export default {
  name: 'CanSearchSelect',
  props: {
    id: {
      type: String,
      default: () => ''
    },
    value: {
      type: String,
      default: () => ''
    },
    values: {
      type: String,
      default: () => ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data: function() {
    return {
      selectValue: this.values
    }
  },
  watch: {
    selectValue: {
      deep: true,
      handler(val) {
        this.$emit('initOptions', this.selectValue)
      }
    }
  },
  mounted() {

  },
  methods: {
    dataFilter(val) {
      this.value = val
      if (val) {
        this.options = this.optionsCopy.filter((item) => {
          if (!!~item.label.indexOf(val) || !!~item.label.toUpperCase().indexOf(val.toUpperCase())) {
            return true
          }
        })
      } else {
        this.options = this.optionsCopy
      }
    }
  }

}
</script>
<style lang="scss" scoped>
 .el-input__inner{
    width: 90%;
    margin-left: 5%;
  }
  .el-input__suffix{
    right: 12%;
  }
  .canserachselContainer{
    display: inline-block;
    width: 150px;
    vertical-align: middle;
  }
  .el-select{
    position: relative;
    z-index: 1;
  }
</style>
