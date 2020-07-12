<template>
    <div>
        <menu-foods/>
        <other-items />
    </div>
</template>

<script>
    import MenuFoods from './menu'
    import OtherItems from './other'
    export default {
        name: "Home",
        components: {
            MenuFoods, OtherItems
        }
    }
</script>

<style scoped>

</style>