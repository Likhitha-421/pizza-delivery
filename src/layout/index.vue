<template>
    <div>
        <el-header>
            <div><img src="../assets/images/logo.png" width="260"></div>
            <el-menu :default-active="activeIndex" style="margin-bottom: 10px;" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">Menu</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">Workspace</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">item four</template>
                        <el-menu-item index="2-4-1">item one</el-menu-item>
                        <el-menu-item index="2-4-2">item two</el-menu-item>
                        <el-menu-item index="2-4-3">item three</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" disabled>Info</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
            </el-menu>
        </el-header>
        <div style="margin-top: 60px">
            <el-carousel :interval="4000" type="card" height="375px">
                <el-carousel-item v-for="item in slides" :key="item" class="slider" style="transform: translate3d(-2608px, 0px, 0px); transition-duration: 0ms;">
                    <img style="position: relative;
    box-shadow: rgba(115, 121, 140, 0.5) 0px 2px 10px -2px;
    image-rendering: auto;
    width: 1280px;
    margin-right: 24px;
    flex: 0 0 auto;
    border-radius: 20px;
    overflow: hidden;
    transition: opacity 450ms ease-out 0s, box-shadow, transform;" :data-src="item.img" :src="item.img"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <app-main />
        <el-footer>
            Footer
        </el-footer>
    </div>
</template>

<script>
    import AppMain from './AppMain'
    export default {
        name: "index",
        components: {
            AppMain
        },
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

</style>