<template>
    <div class="static">
        <div class="item"
        v-for="(item, index) in staticList"
        :key="index"
        >
        <img :src="item.img">
        <p>{{ item.content }}</p>
        <p>{{ item.foot }}</p>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['staticList'])
  }
}
</script>
<style scoped>
.static{
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}
.static .item {
    width: 263px;
    height: 194px;
    border-radius: 15px;
    box-shadow: 0 1px 2px #ccc;
    position: relative;
}
.static .item img{
    width: 263px;
    height: 90px;
    border-radius: 15px 15px 0 0;
}
.static .item p{
    width: 246px;
    height: 22px;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    left: calc(50% - 123px);
}
.static .item p:nth-of-type(1){
    font-size: 18px;
    color: #555;
    top: 105px;
}
.static .item p:nth-of-type(2){
    font-size: 16px;
    color: #999;
    top: 140px;
}
</style>
