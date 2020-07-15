<template>
    <div>
        <div style="margin-top: 60px">
            <slider-main/>
        </div>
        <div v-for="(category, index) in menuList" :key="index">
            <menu-foods :category="category" />
        </div>
    </div>
</template>

<script>
    import MenuFoods from './menu'
    import SliderMain from '../components/SliderMain'
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "Home",
        components: {
            MenuFoods, SliderMain
        },
        data () {
            return {
                categories: []
            }
        },
        created() {
            this.init();
        },
        computed: {
            ...mapGetters([
                'menuList'
            ]),
        },
        methods: {
            ...mapActions('menu', [
                'loadMenu'
            ]),
            init() {
                this.loadMenu()
            },
        }
    }
</script>

<style scoped>

</style>