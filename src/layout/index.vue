<template>
    <div>
        <el-header>
            <div style="text-align: center; margin-top: 20px;">
                <router-link to="/">
                    <img src="../assets/images/logo.png" width="280"/>
                </router-link>
            </div>
            <menu-main/>
        </el-header>
        <app-main />
        <footer-main/>
    </div>
</template>

<script>
    import AppMain from './AppMain'
    import FooterMain from '../components/FooterMain'
    import MenuMain from '../components/MenuMain'
    import { mapActions } from 'vuex'
    export default {
        name: "index",
        components: {
            AppMain, FooterMain, MenuMain
        },
        created () {
            this.loadCurrency()
            this.loadCart()
        },
        methods: {
            ...mapActions('currency', [
                'loadCurrency'
            ]),
            ...mapActions('cart', [
                'loadCart'
            ]),
        }
    }
</script>

<style scoped>

</style>