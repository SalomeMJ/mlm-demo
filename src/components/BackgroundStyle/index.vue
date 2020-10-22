<template>
  <div>
    <img class="img" src="@/assets/login/login1.png" alt="">
    <img id="imgFade" :class="{active:fadeOut}" class="img" src="@/assets/login/login2.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackgroundStyle',
  prop: {

  },
  data: function() {
    return {
      fadeOut: true
    }
  },
  mounted: function() {
    this.autoChangeBgc()
    setInterval(this.autoChangeBgc, 2000)
  },
  methods: {
    autoChangeBgc() {
      this.fadeOut = !this.fadeOut
    }
  }
}
</script>

<style lang="scss">
  img.img{
    display: inline-block;
    width:100%;
    height:100%;
    position: absolute;
  }
  img#imgFade{
    opacity: 0;
    top:0;
    left:0;
    transition: opacity 2s;
  }
  img#imgFade.active{
    opacity: 1;
    transition: opacity 2s;
  }
</style>
