<template>
<!-- 导航标题 -->
    <div class="titlebar">
        <span>{{ left }}</span>
        <span>|</span>
        <span>{{ right }}</span>
        <span><a href="#">更多></a></span>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['left', 'right']
}
</script>
<style scoped>
    .titlebar{
        height: 40px;
    }
    .titlebar span:nth-of-type(1),
    .titlebar span:nth-of-type(2){
        font-size: 25px;
        color: #555;
    }
    .titlebar span:nth-of-type(3){
        font-size: 14px;
        color: #777;
    }
    .titlebar a{
        font-size: 14px;
        color: #555;
        float: right;
    }
</style>
