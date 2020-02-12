<template>
    <!-- 动态卡片组件 -->
    <div class="dyncard">
        <div class="dyncard_item"
        v-for="(item, index) in dycList"
        :key="index"
        >
        <!-- 上面部分 -->
            <div class="img">
                <img :src="item.img">
            </div>
            <!-- 下面部分 -->
            <div class="move">
                <div class="top">{{item.content}}</div>
                <div class="content">
                    {{item.text}}
                </div>
                <div class="footer">
                    <div class="left">{{item.number}}</div>
                    <div class="right" :class="item.color">{{item.paic}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['dycList']
}
</script>
<style scoped>
.dyncard{
    height: 250px;
    display: flex;
    justify-content: space-between;
    z-index: 2;
}
.dyncard .dyncard_item{
    width: 256px;
    height: 250px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    margin: 0 10px;
}
.dyncard .dyncard_item img{
    width: 256px;
}
.dyncard .dyncard_item .move{
    width: 100%;
    height: 100px;
    background-color: #fff;
    color: #666;
    position: relative;
}
.dyncard .dyncard_item .move .top{
    background-color: #fff;
    box-sizing: border-box;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    padding: 10px 10px 10px  10px;
    position: relative;
    bottom: 0;
    transition: bottom 0.1s;
}
.dyncard .dyncard_item .move .content{
    box-sizing: border-box;
    background-color: #fff;
    height: 0;
    padding:17px 5px 0  5px;
    position: relative;
    font-size: 13px;
    transition: bottom 0.1s;
}
.dyncard .dyncard_item .move .footer{
    box-sizing: border-box;
    height: 43px;
    color: #9b9da2;
    width: 100%;
    margin-top: 10px;
    padding: 5px 10px 0 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}
.dyncard .dyncard_item:hover .content{
    bottom: 58px;
}
.dyncard .dyncard_item:hover .top{
    bottom: 58px;
}
.dyncard .dyncard_item .move .footer{
    box-sizing: border-box;
    background-color: #fff;
    position: absolute;
    bottom: -13px;
    height: 50px;
    width: 256px;
    z-index: 999;
    padding-top: 10px;
    font-size: 14px;
}
.dyncard .dyncard_item .move .footer .right{
    color: #fff;
    background-color: rgb(57, 209, 57);
    height: 25px;
    line-height: 25px;
    padding: 0 10px;
    border-radius: 20px;
}
.dyncard .dyncard_item .move .footer>.red{
    background-color: rgb(233, 106, 106);
}
.dyncard .dyncard_item .move .footer>.yellow{
    background-color: rgb(247, 181, 59);
}
</style>
