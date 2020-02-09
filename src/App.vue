<template>
  <div id="app">
    <header-bar />
    <head-footer />
    <rotation-chart />
    <two-menu />
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar'
import HeadFooter from './components/HeadFooter'
import RotationChart from './components/RotationChart'

export default {
  components: {
    HeaderBar,
    HeadFooter,
    RotationChart
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
</style>
