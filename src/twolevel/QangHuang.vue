<template>
    <div class="qianghua">
        <div class="q_left">
            <a href="#"><img :src="qhDatas.img"></a>
        </div>
        <div class="q_right">
            <p>{{qhDatas.title}}</p>
            <div class="content">{{qhDatas.text}}</div>
            <div class="q_footer">
                <div>{{qhDatas.tfooter}}</div>
                <div class="q_box"><a href="#">查看详情</a></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['qhDatas']
}
</script>
<style scoped>
.qianghua{
    width: 100%;
    height: 280px;
    display: flex;
    justify-content: space-between;
}
.qianghua .q_left{
    width: 490px;
    height: 100%;
}
.qianghua .q_left img{
    width: 100%;
}
.qianghua .q_right{
    height: 100%;
    width: 615px;
    padding: 20px 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.qianghua .q_right p{
    color: #555;
}
.qianghua .q_right .content{
    color: #666;
    font-size: 14px;
    word-break: break-all;
}
.qianghua .q_right .q_footer{
    display: flex;
    justify-content: space-between;
}
.qianghua .q_right .q_footer .q_box{
    font-size: 21px;
    background-color: #ff9717;
    padding: 4px 16px;
}
.qianghua .q_right .q_footer .q_box a{
    color: #fff;
}
</style>
