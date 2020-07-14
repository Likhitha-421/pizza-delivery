<template>
    <el-menu :default-active="activeIndex" style="margin-bottom: 10px;" class="app-container el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" class="menu-items"><i class="el-icon-orange menu-items"></i> Menu pizzas</el-menu-item>
        <el-menu-item index="2" class="menu-items"><i class="el-icon-coffee menu-items"></i> Other Items</el-menu-item>
        <el-menu-item index="3" class="menu-items"><a href="#"><i class="el-icon-sold-out menu-items"></i>My Orders</a></el-menu-item>
        <el-submenu index="4" class="menu-items">
            <template slot="title"><i class="el-icon-info menu-items"></i>
                <span class="menu-items">About Service</span>
            </template>
            <el-menu-item index="2-1" class="menu-items"><i class="el-icon-truck menu-items"></i> About Delivery</el-menu-item>
            <el-menu-item index="2-2" class="menu-items"><i class="el-icon-truck menu-items"></i> Payment</el-menu-item>
            <el-menu-item index="2-3" class="menu-items"><i class="el-icon-fork-spoon menu-items"></i> About our Restaurants</el-menu-item>
        </el-submenu>
        <div class="right-elements">
            <button class="cart-button" @click="handleCart"><i class="el-icon-shopping-cart-2"></i> Cart <b v-if="countItemsCart">| {{ countItemsCart }}</b></button>
            <button class="cart-button"><i class="el-icon-user"></i> Account</button>
        </div>
    </el-menu>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "MenuMain",
        methods: {
            handleCart() {
                this.$router.push({ path: '/cart' })
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        data () {
            return {
                activeIndex: "2"
            }
        },
        computed: {
            ...mapGetters([
                'cartCount'
            ]),
            countItemsCart()
            {
                return this.cartCount
            }
        },
    }
</script>

<style scoped>
        .app-container {
            padding: 0 10% 0 10%;
        }
        .menu-items {
            /*color: #ff6900 !important;*/
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