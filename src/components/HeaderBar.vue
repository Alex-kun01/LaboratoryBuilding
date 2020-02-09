<template>
  <div class="headerBar">
      <div class="left">
        <img :src="logo" alt="实验楼">
        <div class="left-text">
            做实验，学编程
        </div>
      </div>
      <div class="right">
          <div class="right-text">
              <span><a href="#">企业版</a></span>
              <span class="lin">|</span>
              <span><a href="#">学校版</a></span>
          </div>
          <div class="login">
              <span>登录</span>
              <span>注册</span>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      logo: 'https://static.shiyanlou.com/frontend/dist/img/9f43b00.svg'
    }
  }
}
</script>
<style scoped>
.headerBar{
    height: 73px;
    background-color: #f8f9fa;
    position: relative;
    max-width: 1140px;
    min-width: 768px;
}
.left{
    position: absolute;
    top: 11px;
    left: 0;
    display: flex;
}
.right{
    position: absolute;
    top: 11px;
    right: 0;
    display: flex;
}
.left img{
    height: 50px;
    width: 122px;
}
.left .left-text{
    font-size: 18px;
    line-height: 50px;
    color: #274a59;
}
.right .right-text a,
.right .right-text .lin{
    color: #999;
    text-decoration: none;
    line-height: 50px;
}
.right .right-text a:hover{
    color: #08bf91;
}
.right .login{
    margin-left: 10px;
    line-height: 50px;
}
.right .login span{
    margin-left: 15px;
}
.right .login span:nth-of-type(1){
    color: #08bf91;
}
.right .login span:nth-of-type(2){
    display: inline-block;
    width:82px;
    text-align: center;
    background-color: #08bf91;
    color: #fff;
    border-radius: 2px;
}
</style>
