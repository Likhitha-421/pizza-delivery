<template>
    <div id="menu-home">
        <el-header style="height: auto !important;">
            <div style="text-align: center; padding-top: 10px;">
                <router-link to="/">
                    <img src="../assets/images/logo.png" width="280"/>
                </router-link>
            </div>
            <scroll-fixed-header :fixed.sync="fixed" :threshold="56">
                <menu-main/>
            </scroll-fixed-header>
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
        data () {
          return {
              fixed: false
          }
        },
        created () {
            this.checkAuth()
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
            ...mapActions('user', [
                'checkAuth'
            ]),
        }
    }
</script>

<style scoped>

</style>