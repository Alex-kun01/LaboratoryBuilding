<template>
    <div class="twomenu">
      <p>{{data.title}}</p>
      <div class="menu_two_list">
        <span
        v-for="(menu,index) in data.menu"
        :key="index"
        >{{menu}}</span>
      </div>
      <p>课程推荐</p>
      <div class="class_list">
        <span
          v-for="(classItem,i) in data.class"
          :key="i"
        >{{classItem}}</span>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['data']
}
</script>
<style scoped>
.twomenu{
    width: 376px;
    background-color: #fff;
    padding: 0 12px;
    box-shadow: 0 0 1px #ccc;
    z-index: 20000;
    cursor: pointer;
}
.twomenu p{
  display: inline-block;
  line-height: 14px;
  font-size: 14px;
  padding: 5px 8px;
  border-radius: 4px;
  background-color: rgb(238, 238, 238);
}
.twomenu .menu_two_list span{
  display: inline-block;
  font-size: 12px;
  line-height: 12px;
  margin-right: 8px;
  color: #6c757d;
  cursor: pointer;
}
.twomenu .menu_two_list span:hover{
  color: #08bf91;
}
.twomenu .class_list {
  margin-top: 20px;
}
.twomenu .class_list span{
  font-size: 12px;
  line-height: 18px;
  color: #6c757d;
  display: block;
  margin-bottom: 10px;
}
</style>
