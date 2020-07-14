<template>
    <el-carousel :interval="4000" type="card" height="375px">
        <el-carousel-item v-for="(item, index) in slides" :key="index" class="slider" style="transform: translate3d(-2608px, 0px, 0px); transition-duration: 0ms;">
            <img class="slide-image" :data-src="item.img" :src="item.img"/>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: "SliderMain",
        data() {
            return {
                slides: [
                    { img: "https://cdn.dodostatic.net/static/Img/Banners/7b4ed994f7ad4ef8941f920a226ecafe.jpeg" },
                    { img: "https://cdn.dodostatic.net/static/Img/Banners/7b4ed994f7ad4ef8941f920a226ecafe.jpeg" },
                    { img: "https://cdn.dodostatic.net/static/Img/Banners/7b4ed994f7ad4ef8941f920a226ecafe.jpeg" },
                    { img: "https://cdn.dodostatic.net/static/Img/Banners/b9f7fa3d875f49ebac9c0055d31c2d75.jpeg" }
                ]
            }
        }
    }
</script>

<style scoped>
    .slide-image {
        position: relative;
        box-shadow: rgba(115, 121, 140, 0.5) 0px 2px 10px -2px;
        image-rendering: auto;
        width: 1280px;
        margin-right: 24px;
        flex: 0 0 auto;
        border-radius: 20px;
        overflow: hidden;
        transition: opacity 450ms ease-out 0s, box-shadow, transform;
    }
</style>