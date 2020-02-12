<template>
    <div class="learning_path">
        <div class="learn_item"
        v-for="(item, index) in learnDatas"
        :key="index"
        >
            <div class="img"><a href="#"><img :src="item.img"></a></div>
            <div class="learn_footer">
                <div class="footer_text">{{item.content}}</div>
                <div class="footer_bom">{{item.footer}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['learnDatas']
}
</script>
<style scoped>
.learning_path{
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}
.learning_path .learn_item{
    width: 263px;
    height: 250px;
    font-size: 0;
    transition: all 0.2s linear;
    cursor: pointer;
    border-radius: 2px;
}
.learning_path .learn_item:hover{
    transform: translateY(-5%);
    box-shadow: 0 10px 20px #ccc;
    transition: all 0.2s linear;
}
.learning_path .learn_item img{
    height: 130px;
    width: 100%;
}
.learning_path .learn_item .learn_footer{
    width: 100%;
    height: 120px;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 0 2px #ccc;
}
.learning_path .learn_item .learn_footer .footer_bom{
    font-size: 14px;
    color: #999;
    box-sizing: border-box;
    padding-top: 45px;
}
.learning_path .learn_item .learn_footer .footer_text{
    color: #555;
    box-sizing: border-box;
    padding-top: 20px;
    font-size: 18px;
}
</style>
