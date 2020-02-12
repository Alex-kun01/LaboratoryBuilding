<template>
    <div class="site_descr">
        <div class="site_item"
        v-for="(item, index) in siteDatas"
        :key="index"
        >
            <img :src="item.img">
            <p>{{item.text}}</p>
        </div>
    </div>
</template>
<script>
export default {
  props: ['siteDatas']
}
</script>
<style scoped>
.site_descr{
    display: flex;
    justify-content: space-between;
    margin:100px 0 20px 0;
    text-align: center;
}
.site_descr p{
    margin-top: 10px;
    color: #666;
    font-size: 16px;
}
</style>
