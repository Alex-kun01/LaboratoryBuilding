<template>
    <div class="footer">
        <div class="footer_top">
            <div class="left">
                <img :src="img">
                <p>动手做实验，轻松学IT</p>
            </div>
            <ul class="right">
                <li>
                    <p>公司</p>
                    <a href="#">关于我们</a>
                    <a href="#">加入我们</a>
                </li>
                <li>
                    <p>合作</p>
                    <a href="#">我要合作</a>
                    <a href="#">我要合作</a>
                    <a href="#">我要合作</a>
                    <a href="#">我要合作</a>
                </li>
                <li>
                    <p>服务</p>
                </li>
                <li>
                    <p>学习路径</p>
                    <a href="#">加入我们</a>
                    <a href="#">加入我们</a>
                    <a href="#">加入我们</a>
                    <a href="#">加入我们</a>
                    <a href="#">加入我们</a>
                    <a href="#">加入我们</a>
                </li>
            </ul>
        </div>
        <div class="footer_bottom">JZK</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      img: 'https://static.shiyanlou.com/img/logo-white.svg'
    }
  }
}
</script>
<style scoped>
    .footer{
        width: 1140px;
        height: 240px;
    }
    .footer .footer_top{
        width: 100%;
        height: 190px;
        background-color: #444;
        display: flex;
        justify-content: space-around;
    }
    .footer .footer_bottom{
        width: 100%;
        height: 50px;
        background-color: #000;
        color: #555;
        text-align: center;
        line-height: 50px;
    }
    .footer .footer_top .left{
        margin-top: 20px;
    }
    .footer .footer_top .left p{
        font-size: 30px;
        color: #08bf91;
        margin-top: 10px;
        position: relative;
    }
    .footer .footer_top .left p::after,
    .footer .footer_top .left p::before{
        content: "";
        display: block;
        height: 30px;
        width: 30px;
        background-color: #777;
        border-radius: 50%;
        position: absolute;
        top: 45px;
    }
    .footer .footer_top .left p::before{
        left: 60px;
    }
    .footer a{
        color: #777;
        font-size: 14px;
        display: block;
    }
    .footer a:hover{
        color: #fff;
    }
    .footer p{
        color: #777;
        font-size: 18px;
        margin-bottom: 15px;
    }
    .footer .footer_top .right{
        display: flex;
        justify-content: space-between;
        list-style: none;
    }
    .footer .footer_top .right li{
        margin: 20px;
    }
</style>
