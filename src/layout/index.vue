<template>
    <div>
        <el-header>
            <div style="text-align: center;"><img src="../assets/images/logo.png" width="260"></div>
            <menu-main/>
        </el-header>
        <div style="margin-top: 60px">
            <slider-main/>
        </div>
        <app-main />
        <footer-main></footer-main>
    </div>
</template>

<script>
    import AppMain from './AppMain'
    import FooterMain from '../components/FooterMain'
    import MenuMain from '../components/MenuMain'
    import SliderMain from '../components/SliderMain'
    export default {
        name: "index",
        components: {
            AppMain, FooterMain, MenuMain, SliderMain
        }
    }
</script>

<style scoped>

</style>