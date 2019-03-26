<template>
  <section class="m-search-box">
    <i class="icon iconfont icon-xiazai5"></i>
    <div class="input-box">
      <input 
        type="text" 
        ref="input"
        :placeholder="placeholder" 
        v-model="myQuery"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
        >
    </div>
    <div class="clear" @click.stop="clear" v-if='myQuery'>
      <i class="icon iconfont icon-qingchu"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'search-box',
  data () {
    return {
      myQuery: this.query,
    }
  },
  created () {
  },
  props: {
    query: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '搜索商品名称',
    }
  },
  computed: {
  },
  methods: {
    clear() {
      this.myQuery = '';
    },
    onFocus(e) {
      this.$emit('focus', e);
    },
    onBlur(e) {
      this.$emit('blur', e);
    },
    onChange(e) {
      this.$emit('change', e);
    },
  },
  watch: {
    myQuery(val) {
      this.$emit('input', val);
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~common/scss/minxin";
  $searchHeight : 38px;
  .m-search-box {
    display: flex;
    flex-direction: row;
    height: $searchHeight;
    align-items: center;
    .icon{
      font-size: $font-size-medium; 
      padding-right: 4px;
      padding-left: 4px;
      color: #b3b3b3;
    }
    .icon:last-child {
      font-size: $font-size-large;
      padding-left: 10px;
      color: #999999;
    }
    .clear {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .input-box {
      flex: 1;
      input {
        width: 100%;
        font-size: $font-size-medium;
        color: $color-text-title;
        height: 38px;
      }
      input::placeholder {
        color: #999;
      }
    }
  }
</style>


