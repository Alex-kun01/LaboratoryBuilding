<template>
  <div id="app">
    <poster-list class="poster_app" />
    <header-bar />
    <head-footer />
    <rotation-chart />
    <two-menu />
    <content-page />
    <footer-bar />
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar'
import HeadFooter from './components/HeadFooter'
import RotationChart from './components/RotationChart'
import PosterList from './twolevel/PosterList'
import FooterBar from './components/footerBar'
import ContentPage from './page/ContentPage'

export default {
  data () {
    return {
    }
  },
  components: {
    HeaderBar,
    HeadFooter,
    RotationChart,
    PosterList,
    ContentPage,
    FooterBar
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
}
body{
  background-color: #f8f9fa;
}
#app{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1140px;
}
.poster_app{
  position: fixed;
  top: 700px;
  right: -100px;
}
</style>
