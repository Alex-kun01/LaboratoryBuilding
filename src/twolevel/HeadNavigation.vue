<template>
<!-- 头部导航的复用组件 -->
    <div class="headnavigation">
        <ul>
            <li>
                <span>训练营</span>
                <img src="https://dn-simplecloud.shiyanlou.com/course/1580616286669_pc-tag_%E5%85%83%E5%AE%B5.svg" alt="">
            </li>
            <li>
                <span>楼+</span>
                <img src="https://dn-simplecloud.shiyanlou.com/course/1580616286669_pc-tag_%E5%85%83%E5%AE%B5.svg" alt="">
            </li>
            <li>
                <span>会员</span>
                <img src="https://dn-simplecloud.shiyanlou.com/course/1580616286669_pc-tag_%E5%85%83%E5%AE%B5.svg" alt="">
            </li>
            <li
                @mouseover="mouseOver"
                @mouseleave="mouseLeave"
                >
                <span>社区
                    <i class="el-icon-caret-bottom bottom"></i>
                </span>
                <ul class="menu" v-if="key">
                    <li>讨论</li>
                    <li>教程库</li>
                    <li>直播</li>
                    <li>比赛</li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      key: false
    }
  },
  methods: {
    mouseOver () {
      this.key = true
    },
    mouseLeave () {
      this.key = false
    }
  }
}
</script>
<style scoped>
    ul{
        list-style: none;
        display: flex;
        line-height: 64px;
        cursor: pointer;
        position: relative;
    }
    ul li{
        margin: 0 5px;
    }
    ul li span:hover{
        color: #08bf91;
    }
    ul li img {
        transform: translateY(-80%);
    }
    .menu{
        height: 250px;
        width: 152px;
        background-color: #fff;
        z-index: 998;
        display: flex;
        flex-direction:column-reverse;
        padding: 0;
        border-radius:0 0 10px 10px;
    }
    .menu li{
        padding: 0;
        margin: 0;
        padding-left: 15px;
    }
    .menu li:hover{
        color: #08bf91;
        background-color: rgb(247, 243, 243);
    }
</style>
