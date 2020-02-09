<template>
    <div class="menuList">
      <div class="creat-item"
        v-for="(item,index) in menuData"
        :key="index"
      >
      <div class="inner-item">
        <span>{{item.title}}</span>
        <span>{{item.menu[0]}}</span>
        <span>{{item.menu[1]}}</span>
      </div>
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
    ...mapState(['menuData'])
  }
}
</script>
<style scoped>
.menuList{
    width: 260px;
    height: 541px;
    background-color: rgba(0, 0, 0, .2);
}
.creat-item .inner-item span{
  margin-right: 8px;
  color: #fff;
  cursor: pointer;
}
.creat-item .inner-item{
  width: 250px;
  height: 58px;line-height: 58px;
  padding-left: 10px;
}
.creat-item .inner-item span:nth-of-type(2),
.creat-item .inner-item span:nth-of-type(3){
  font-size: 13px;
}
.creat-item .inner-item:hover{
  background-color: #fff;
}
.menuList .creat-item .inner-item:hover span{
  color: #6c757d;
}
.menuList .creat-item .inner-item span:hover{
  color: #08bf91;
}
</style>
