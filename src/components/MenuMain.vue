<template>
    <el-menu :default-active="activeIndex" style="margin-bottom: 10px;" class="app-container el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><i class="el-icon-orange"></i> Menu pizzas</el-menu-item>
        <el-menu-item index="2"><i class="el-icon-coffee"></i> Other Items</el-menu-item>
        <el-menu-item index="3"><a href="#"><i class="el-icon-sold-out"></i>My Orders</a></el-menu-item>
        <el-submenu index="4">
            <template slot="title"><i class="el-icon-info"></i> About Service</template>
            <el-menu-item index="2-1"><i class="el-icon-truck"></i> About Delivery</el-menu-item>
            <el-menu-item index="2-2"><i class="el-icon-truck"></i> Payment</el-menu-item>
            <el-menu-item index="2-3"><i class="el-icon-fork-spoon"></i> About our Restaurants</el-menu-item>
        </el-submenu>
        <div class="right-elements">
            <button class="cart-button"><i class="el-icon-shopping-cart-2"></i> Cart</button>
            <button class="cart-button"><i class="el-icon-user"></i> Account</button>
        </div>
    </el-menu>
</template>

<script>
    export default {
        name: "MenuMain"
    }
</script>

<style scoped>
        .app-container {
            padding: 0 10% 0 10%;
        }
        .right-elements {
            float: right;
            height: 60px;
            line-height: 60px;
            margin: 0;
            border-bottom: 2px solid transparent;
            color: #909399;
        }
        .cart-button {
            font-weight: 500;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            position: relative;
            cursor: pointer;
            user-select: none;
            transition-property: border-color, background, color;
            transition-duration: 200ms;
            transition-timing-function: ease-in-out;
            color: rgb(255, 255, 255);
            top: 9px;
            min-width: 90px;
            outline: none;
            border-radius: 8px;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(255, 105, 0);
            border-image: initial;
            padding: 0px 12px;
            overflow: hidden;
            background: rgb(255, 105, 0);
            margin-right: 10px;
        }
</style>