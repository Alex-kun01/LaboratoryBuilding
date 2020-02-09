<template>
    <div class="box">
            <el-carousel :interval="5000" arrow="never" indicator-position="none">
                <el-carousel-item v-for="(item,index) in lunbotu" :key="index">
                <img :src="item">
                </el-carousel-item>
            </el-carousel>
            <menu-list class="menu" />
    </div>
</template>
<script>
// eslint-disable-next-line standard/object-curly-even-spacing
import { mapState} from 'vuex'
import MenuList from '../components/MenuList'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['lunbotu'])
  },
  components: {
    MenuList
  }
}
</script>
<style scoped>
.box,
.box .el-carousel__item,
.box img{
    width: 1138px;
    height: 515px;
}
.box{
    overflow: hidden;
    position: relative;
}
.el-carousel--horizontal{
    overflow-x:unset;
}
.menu{
    position: absolute;
    z-index: 1002;
    top: 0;
    left: 0;;
}
</style>
