<template>
    <div class="move_page">
        <dyn-card class="dyn_move" :dycList="dycList.f3" style="left:20px"/>
        <div class="prev" @click="onprev">左</div>
        <div class="next" @click="onnext">右</div>
    </div>
</template>
<script>
import DynCard from '../components/DynCard'
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    // 左边点击按钮
    onprev () {
      var moveBox = document.getElementsByClassName('dyn_move')[0]
      var left = Math.abs(parseInt(moveBox.style.left))
      console.log(left)
      if (left === 2180) {
        moveBox.setAttribute('style', 'left:20px')
        return
      }
      left = '-' + (left + 1080) + 'px'
      moveBox.setAttribute('style', 'left:' + left)
      console.log(left)
    },
    // 右边点击按钮
    onnext () {
      var moveBox = document.getElementsByClassName('dyn_move')[0]
      var left = parseInt(moveBox.style.left)
      console.log(left)
      if (left === 20 || left === -4) {
        moveBox.setAttribute('style', 'left:-2180px')
        console.log(moveBox.style.left)
        return
      }
      left = (left + 1088) + 'px'
      moveBox.setAttribute('style', 'left:' + left)
      console.log(left)
    }
  },
  components: {
    DynCard
  },
  computed: {
    ...mapState(['dycList'])
  }
}
</script>
<style scoped>
    .move_page{
        width: 1110px;
        height: 280px;
        padding: 10px;
        position: relative;
        padding-left: 20px;
        overflow: hidden;

    }
    .move_page .dyn_move{
        position: absolute;
        top: 10px;
        transition: left 0.5s linear;
    }
    .prev,
    .next{
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        background-color: rgba(0, 0, 0, 0.15);
        position: absolute;
        z-index: 666;
        color: #fff;
        font-size: 20px;
        top: 110px;
        border-radius: 50%;
        cursor: pointer;
    }
    .prev{
        left: 30px;
    }
    .next{
        right: 17px;
    }
</style>
