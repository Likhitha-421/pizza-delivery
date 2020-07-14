<template>
    <div>
        <div style="margin-top: 60px">
            <slider-main/>
        </div>
        <menu-foods :category="category" v-for="(category, index) in categories" :key="index"/>
    </div>
</template>

<script>
    import MenuFoods from './menu'
    import SliderMain from '../components/SliderMain'
    import { fetchCategoryList } from '../api/category'
    import { mapActions } from 'vuex'
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

        methods: {
            ...mapActions('cart', [
                'loadCart'
            ]),
            init() {
                this.getList()
                this.loadCart()
            },
            async getList() {
                this.listLoading = true
                const { data } = await fetchCategoryList()
                this.categories = data
                this.listLoading = false
            },
        }
    }
</script>

<style scoped>

</style>