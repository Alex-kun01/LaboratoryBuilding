<template>
    <div class="contentPage">
       <div class="con_tatic_car">
            <title-bar class="title_bar1" :left="titlebar[0].left" :right="titlebar[0].right" />
            <static-card />
    </div>
    <div class="boxCard">
          <title-bar class="title_bar1" :left="titlebar[1].left" :right="titlebar[1].right" />
    </div>
    </div>
</template>
<script>
import TitleBar from '../twolevel/TitleBar'
import StaticCard from '../components/StaticCard'
export default {
  data () {
    return {
      titlebar: [
        {
          left: '楼 + 实战课程',
          right: '定期开班,导师全程辅导,最快最优成长'
        },
        {
          left: '精选项目课',
          right: '精选会员项目课程，动手中收获'
        }
      ]
    }
  },
  components: {
    TitleBar,
    StaticCard
  }
}
</script>
<style scoped>
.contentPage{
    width: 1140px;
}
.contentPage .title_bar1{
    margin-top: 35px;
}
</style>
