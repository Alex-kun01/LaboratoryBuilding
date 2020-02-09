<template>
  <div class="menuList">
    <ul>
      <li class="cate-item"
       v-for="(item,index) in menuData"
       :key="index"
       @mouseover="mouseover(index,item)"
       @mouseleave="mouseleave"
       >
        <!-- 一级菜单 -->
        <div class="inner-item">
          <a href="#" v-for="(title,ti) in item.title" :key="ti">{{title}}</a>
        </div>
        <!-- 子菜单 -->
        <div class="cate-list"
        v-show="index === targetIndex && isNull"
        v-bind:class="{five: index === 5, six: index === 6, seven: index === 7}"
        >
          <p>{{datas.title[0]}}</p>
          <div class="menu_data">
            <a href="#" v-for="(menu,mi) in datas.menu" :key="mi">{{menu}}</a>
          </div>
          <p>课程推荐</p>
          <div class="class_data">
            <a href="#" v-for="(cls,ci) in datas.class" :key="ci">{{cls}}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      datas: {
        title: [],
        menu: [],
        class: []
      },
      targetIndex: 0,
      isNull: false
    }
  },
  components: {
  },
  computed: {
    ...mapState(['menuData'])
  },
  methods: {
    // 鼠标hoverli一级菜单
    mouseover (index, item) {
      this.datas = item
      this.targetIndex = index
      this.isNull = true
      // eslint-disable-next-line no-unused-vars
      var class1 = document.getElementsByClassName('five')
      // eslint-disable-next-line no-unused-vars
      var class2 = document.getElementsByClassName('six')
      // eslint-disable-next-line no-unused-vars
      var class3 = document.getElementsByClassName('seven')
      if (index === 5) {
        class2 = class2.replace('six', '')
        class3 = class3.replace('seven', '')
      } else if (index === 6) {
        class1 = class1.replace('five', '')
        class3 = class3.replace('seven', '')
      } else if (index === 7) {
        class1 = class1.replace('five', '')
        class2 = class2.replace('six', '')
      }
    },
    mouseleave () {
      this.isNull = false
    }
  }
}
</script>
<style scoped>
.menuList .inner-item a{
  color: #fff;
  margin-right: 8px;
}
.menuList .inner-item a:nth-of-type(2),
.menuList .inner-item a:nth-of-type(3){
  font-size: 12px;
}
.menuList{
  width: 260px;
  height: 515px;
  background-color: rgba(0, 0, 0, 0.5);
}
.menuList .cate-item {
  widows: 260px;
  height: 58px;
  position: relative;
}
.menuList .cate-item:hover{
  background-color: #fff;
}
.menuList .cate-item:hover a{
  color: #333;
}
.menuList .inner-item {
  width: 236px;
  height: 40px;
  border-bottom: 1px solid #fff;
  margin-left: 8px;
  padding-left: 8px;
  position: absolute;
  bottom: -1px;
}
.menuList .cate-item .cate-list{
  width: 400px;
  position: absolute;
  background-color: #fff;
  top: 0;
  left: 260px;
  cursor: pointer;
  padding: 20px;
  z-index: 1005;
}
.menuList .cate-item .cate-list p{
  background-color: #ddd;
  display: inline-block;
  color: #555;
  font-size: 14px;
  padding: 0 10px;
  border-radius: 2px;
  margin-bottom: 20px;
}
.menuList .cate-item .cate-list a{
  color: #666;
  font-size: 13px;
}
.menuList .cate-item .cate-list .menu_data{
  margin-bottom: 20px;
}
.menuList .cate-item .cate-list .menu_data a{
   display: inline-block;
   margin: 0 20px 10px 0;
}
.menuList .cate-item .cate-list .menu_data a:hover{
  color: #08bf91;
}
.menuList .cate-item .cate-list .class_data a{
  display: block;
  margin-bottom: 8px;
}
.menuList .cate-item .cate-list .class_data a:hover{
  color: #08bf91;
}
.menuList .cate-item .cate-list.five{
  top: -70px;
}
.menuList .cate-item .cate-list.six{
  top: -105px;
}
.menuList .cate-item .cate-list.seven{
  top: -163px;
}

</style>
