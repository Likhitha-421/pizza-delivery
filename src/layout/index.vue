<template>
    <div>
        <el-header>
            <div style="text-align: center; margin-top: 20px;"><a href="/"><img src="../assets/images/logo.png" width="260"/></a></div>
            <template v-if="this.$route.name === 'Cart'">
                <el-steps :active="1" style="width: 30%; float: right;">
                    <el-step title="Step 1" icon="el-icon-shopping-cart-full" description="Cart"></el-step>
                    <el-step title="Step 2" icon="el-icon-document-checked" description="Order"></el-step>
                    <el-step title="Step 2" icon="el-icon-truck" description="Delivery"></el-step>
                    <el-step title="Step 3" icon="el-icon-circle-check" description="Order is accepted"></el-step>
                </el-steps>
            </template>
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