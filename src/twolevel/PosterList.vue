<template>
    <div class="poster">
        <div class="item demn">
            <img :src="images.demn">
        </div>
        <div class="item weixin">
            <img :src="images.weixin">
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      images: {
        demn: 'https://static.shiyanlou.com/frontend/dist/img/2a64526.png',
        weixin: 'https://static.shiyanlou.com/frontend/dist/img/8832e65.svg'
      }
    }
  }
}
</script>
<style scoped>
    .poster{
        width: 52px;
    }
    .poster .item{
        width: 52px;
        height: 52px;
        background-color: #fff;
        margin-bottom: 8px;
    }
    .poster .item img{
        width: 35px;
        height: 35px;
        margin-left: 8.5px;
        margin-top: 8.5px;
    }
</style>
