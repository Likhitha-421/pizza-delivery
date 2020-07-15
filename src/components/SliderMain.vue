<template>
    <section id="home" style="text-align: center;">
        <el-carousel :interval="4000" :autoplay="true" type="card" height="345px;">
            <el-carousel-item v-for="(item, index) in slides" :key="index" class="slider" style="transform: translate3d(-2608px, 0px, 0px); transition-duration: 0ms;">
                <img class="slide-image" :src="item.img"/>
            </el-carousel-item>
        </el-carousel>
    </section>
</template>

<script>
    export default {
        name: "SliderMain",
        data() {
            return {
                slides: [
                    { img: 'https://ucarecdn.com/63b997d9-f305-4d22-9376-d260689bc2ba/5.jpg' },
                    { img: 'https://ucarecdn.com/3c5ffd4e-5b55-4ac9-a1d2-44a0b3868c3e/4.jpg' },
                    { img: 'https://ucarecdn.com/143bba6e-f194-4e04-968f-1d7d32eb714e/2.jpg' },
                    { img: 'https://ucarecdn.com/d2c53229-1a91-435e-95c8-7d5c8fa6865c/3.jpg' },
                    { img: 'https://ucarecdn.com/60ae3565-d035-4a6a-8888-5920c3701cfe/1.jpg' }
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
        width: 840px;
        height: 300px;
        margin-right: 24px;
        flex: 0 0 auto;
        border-radius: 20px;
        overflow: hidden;
        transition: opacity 450ms ease-out 0s, box-shadow, transform;
    }
</style>