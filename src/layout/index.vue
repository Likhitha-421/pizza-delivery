<template>
    <div>
        <el-header>
            <div style="text-align: center; margin-top: 20px;"><a href="/"><img src="../assets/images/logo.png" width="260"/></a></div>
            <template v-if="this.$route.name !== 'Cart'">
                <menu-main/>
            </template>
        </el-header>
        <app-main />
        <footer-main></footer-main>
    </div>
</template>

<script>
    import AppMain from './AppMain'
    import FooterMain from '../components/FooterMain'
    import MenuMain from '../components/MenuMain'
    export default {
        name: "index",
        components: {
            AppMain, FooterMain, MenuMain
        }
    }
</script>

<style scoped>

</style>