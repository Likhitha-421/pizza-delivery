<template>
    <div>
        <div style="margin-top: 60px">
            <slider-main/>
        </div>
        <menu-foods/>
        <other-items />
    </div>
</template>

<script>
    import MenuFoods from './menu'
    import OtherItems from './menu/other'
    import SliderMain from '../components/SliderMain'
    export default {
        name: "Home",
        components: {
            MenuFoods, OtherItems, SliderMain
        }
    }
</script>

<style scoped>

</style>