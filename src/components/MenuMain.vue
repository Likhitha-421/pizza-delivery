<template>
    <el-menu :default-active="activeIndex"
             style="margin-bottom: 10px;"
             class="app-container el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
    >
        <el-menu-item index="-1" class="menu-items">
            <router-link to="/"><i class="el-icon-s-home"></i> Home</router-link>
        </el-menu-item>
        <template>
            <template>
                <el-menu-item v-for="(menu, index) in menuList" :index="index.toString()" :key="index" class="menu-items">
                    <i :class="menu.icon"></i> {{ menu.name }}
                </el-menu-item>
            </template>
            <el-menu-item index="4" class="menu-items">
                <router-link to="/order"><i class="el-icon-sold-out"></i>My Orders</router-link>
            </el-menu-item>
            <el-submenu index="5" class="menu-items">
                <template slot="title">
                    <i class="el-icon-info"></i>
                    <span class="menu-items">About Service</span>
                </template>
                <el-menu-item index="5-1" class="menu-items">
                    <i class="el-icon-truck"></i> About Delivery
                </el-menu-item>
                <el-menu-item index="5-2" class="menu-items">
                    <i class="el-icon-truck"></i> Payment
                </el-menu-item>
                <el-menu-item index="5-3" class="menu-items">
                    <i class="el-icon-fork-spoon"></i> About our Restaurants
                </el-menu-item>
            </el-submenu>
        </template>
        <div class="right-elements">

            <a
                    class="cart-button"
                    @click="handleCart">
                <i class="el-icon-shopping-cart-2"></i> Cart
                <b v-if="countItemsCart">| {{ countItemsCart }}</b>
            </a>
            <a class="cart-button"><i class="el-icon-user"></i> Login</a>
            <el-dropdown :hide-on-click="false" style="margin-left: 10px;">
                  <span class="el-dropdown-link">
                    {{ selectedCurrency }}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                            v-for="(currency, index) in currencyList"
                            :disabled="selectedCurrency === currency"
                            :key="index"
                            @click.native="changeCurrency(currency)"
                    >{{ currency }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </el-menu>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "MenuMain",
        methods: {
            ...mapActions('currency', [
               'selectCurrency'
            ]),
            ...mapActions('menu', [
               'loadMenu'
            ]),
            handleCart() {
                this.$router.push({ path: '/cart' })
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            changeCurrency(currency) {
                this.selectCurrency(currency)
            }
        },
        created() {
          this.loadMenu()
        },
        data () {
            return {
                activeIndex: "2",
                currencyList: ['USD', 'EUR']
            }
        },
        computed: {
            ...mapGetters([
                'cartCount',
                'selectedCurrency',
                'menuList'
            ]),
            countItemsCart()
            {
                return this.cartCount
            },
            isCartPage() {
                return this.$route.name === 'Cart'
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
            /*height: 60px;*/
            line-height: 60px;
            margin: 0;
            border-bottom: 2px solid transparent;
            color: #909399;
        }
        .cart-button {
            font-weight: 500;
            font-size: 14px;
            /*height: 60px;*/
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
            padding: 4px 12px;
            overflow: hidden;
            background: rgb(255, 105, 0);
            margin-right: 10px;
        }
</style>