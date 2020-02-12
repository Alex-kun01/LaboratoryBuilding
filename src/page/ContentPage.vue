<template>
    <div class="contentPage">
       <div class="con_tatic_car">
         <!-- 实战课程 -->
            <title-bar class="title_bar1" :left="titlebar[0].left" :right="titlebar[0].right" />
            <static-card />
    </div>
    <!-- 精选项目课 -->
    <title-bar class="title_bar1" :left="titlebar[1].left" :right="titlebar[1].right" />
    <div class="boxCard">
          <div class="con_top">
            <div class="con_img">
              <img src="https://dn-simplecloud.shiyanlou.com/uid/c7edc0e1f2cfc8f40d1b699aaa32766b/1505381939043.png">
            </div>
            <div class="con_dyn">
              <dyn-card class="dyn-card1" :dycList="dycList.f1" />
            </div>
          </div>
          <div class="con_footer">
              <dyn-card class="dyn-card1" :dycList="dycList.f2" />
          </div>
    </div>
    <move-page class="con_move_page" />
    <!-- 基本功 -->
    <title-bar class="title_bar1" :left="titlebar[2].left" :right="titlebar[2].right" />
    <div class="jibengong">
      <dyn-card class="dyn-card1" :dycList="dycList.f4" />
    </div>
    <!-- 后端开发 -->
    <title-bar class="title_bar1" :left="titlebar[3].left" :right="titlebar[3].right" />
    <div class="houduan">
      <div class="hou_left">
       <a href="#"> <img src="https://dn-simplecloud.shiyanlou.com/course/1538993929964_document-uid18510labid1375timestamp1497263061694.png"></a>
      </div>
      <div class="hou_right">
        <div class="hou_top">
          <dyn-card class="dyn-card1" :dycList="dycList.f5" />
        </div>
        <div class="hou_bom">
          <dyn-card class="dyn-card1" :dycList="dycList.f6" />
        </div>
      </div>
    </div>
    <!-- 云计算与大数据 -->
    <title-bar class="title_bar1" :left="titlebar[4].left" :right="titlebar[4].right" />
    <div class="houduan">
      <div class="hou_left">
        <a href="#"><img src="https://dn-simplecloud.shiyanlou.com/course/1538994029560_document-uid18510labid1375timestamp1497263236750.png"></a>
      </div>
      <div class="hou_right">
        <div class="hou_top">
          <dyn-card class="dyn-card1" :dycList="dycList.f7" />
        </div>
        <div class="hou_bom">
          <dyn-card class="dyn-card1" :dycList="dycList.f8" />
        </div>
      </div>
    </div>
    <!-- 强化训练营 -->
    <title-bar class="title_bar1" :left="titlebar[5].left" :right="titlebar[5].right" />
    <div class="qh">
      <div class="qh_top">
        <qiang-huang :qhDatas="qhDatas.first" />
      </div>
      <div class="qh_bom">
        <qiang-huang :qhDatas="qhDatas.two" />
      </div>
    </div>
    <!-- 学习路径 -->
    <title-bar class="title_bar1" :left="titlebar[6].left" :right="titlebar[6].right" />
    <learn-path :learnDatas="learnDatas"/>
    <site-desc :siteDatas="siteDatas" />
    </div>
</template>
<script>
import TitleBar from '../twolevel/TitleBar'
import StaticCard from '../components/StaticCard'
import DynCard from '../components/DynCard'
import { mapState } from 'vuex'
import MovePage from '../twolevel/MovePage'
import QiangHuang from '../twolevel/QangHuang'
import LearnPath from '../twolevel/LearnPath'
import SiteDesc from '../twolevel/SiteDesc'
export default {
  data () {
    return {
    // 导航标题
      titlebar: [
        {
          left: '楼 + 实战课程',
          right: '定期开班,导师全程辅导,最快最优成长'
        },
        {
          left: '精选项目课',
          right: '精选会员项目课程，动手中收获'
        },
        {
          left: '基本功',
          right: '行业专家打造的免费基础课程，注册即可学习'
        },
        {
          left: '后端开发',
          right: '行业专家打造的免费基础课程，注册即可学习'
        },
        {
          left: '云计算与大数据',
          right: '大数据时代'
        },
        {
          left: '强化训练',
          right: '专注实战的完整项目，在实战中融汇贯通'
        },
        {
          left: '学习路径',
          right: '精准而系统的学习路径，从0到大牛'
        }
      ]
    }
  },
  computed: {
    ...mapState(['dycList', 'qhDatas', 'learnDatas', 'siteDatas'])
  },
  components: {
    TitleBar,
    StaticCard,
    DynCard,
    MovePage,
    QiangHuang,
    LearnPath,
    SiteDesc
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
.contentPage .dyn-card1{
  margin-bottom: 20px;
}
.boxCard{
  padding-left: 20px;
  margin-top: 25px;
}
.boxCard  .con_top{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.boxCard .con_top .con_img{
  box-sizing: border-box;
  margin-right: 20px;
}
.boxCard .con_top img{
  width: 545px;
  height: 250px;
}
.boxCard .con_top .con_dyn{
  width: 570px;
}
.con_move_page{
  margin: 20px 0;
}
.jibengong{
  margin-top: 20px;
}
.houduan {
  height: 525px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
.houduan .hou_left{
  height: 100%;
  width: 255px;
}
.houduan .hou_left img{
  width: 100%;
  height: 100%;
}
.houduan .hou_right{
  height: 100%;
  width: 860px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.houduan .hou_right .hou_top,
.houduan .hou_right .hou_bom{
  width: 100%;
  height: 250px;
}
.qh{
  height: 576px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.qh .qh_top,
.qh .qh_bom{
  height: 280px;
  width: 100%;
}
</style>
