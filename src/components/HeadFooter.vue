<template>
<!-- 头部导航 -->
    <div class="headfooter">
            <div class="left">
                <i class="el-icon-s-grid"></i>
                <a href="#">全部课程</a>
            </div>
            <div class="right">
                <div class="navigation"><head-navigation /></div>
                <div class="seach">
                    <input type="text" placeholder="搜索 课程/问答">
                    <i class="el-icon-search"></i>
                </div>
            </div>
    </div>
</template>
<script>
import HeadNavigation from '../twolevel/HeadNavigation'
export default {
  data () {
    return {

    }
  },
  components: {
    HeadNavigation
  }
}
</script>
<style scoped>
.headfooter{
    height: 64px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
}
.headfooter .right .seach input{
    border: 1px solid rgb(233, 230, 230);
    border-radius: 4px;
    width: 191px;
    height: 31px;
    margin-top: 15px;
    text-indent: 4px;
    outline-color: #08bf91;
}
.headfooter .right .seach{
    position: relative;
}
.headfooter .right .seach i{
    position: absolute;
    top: 23px;
    right: 15px;
    cursor: pointer;
}
.headfooter .left{
    background-color:#08bf91;
    width: 245px;
    line-height: 64px;
    padding-left: 15px;
}
.headfooter .left a,
.headfooter .left i{
    color: #fff;
}
.headfooter .right{
    width: 840px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
}
</style>
