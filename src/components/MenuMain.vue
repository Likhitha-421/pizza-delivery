<template>
    <div class="navWrapper">
        <div id="menu" :class="{ active: isActive }">
            <el-menu :default-active="activeIndex"
                     style="margin-bottom: 10px;"
                     class="app-container el-menu-demo"
                     :mode="isActive ? 'vertical' : 'horizontal'"
                     @select="handleSelect"
            >
                <el-menu-item index="-1" class="menu-items" v-scroll-to="'#menu-home'">
                    <router-link to="/"><i class="el-icon-s-home"></i> Home</router-link>
                </el-menu-item>
                <template>
                    <template v-if="isHome">
                        <el-menu-item v-for="(menu, index) in menuList" :index="index.toString()" :key="index" class="menu-items" v-scroll-to="'#menu-' + menu.id">
                            <i :class="menu.icon"></i> {{ menu.name }}
                        </el-menu-item>
                    </template>
                    <el-menu-item index="4" class="menu-items">
                        <router-link to="/order"><i class="el-icon-sold-out"></i>My Orders</router-link>
                    </el-menu-item>
                    <el-submenu index="5" class="menu-items">
                        <template slot="title">
                            <i class="el-icon-info"></i>
                            <router-link to="/about">About Service</router-link>
                        </template>
                        <el-menu-item index="5-1" class="menu-items">
                            <router-link to="/about"><i class="el-icon-info"></i> About Us</router-link>
                        </el-menu-item>
                        <el-menu-item index="5-2" class="menu-items">
                            <router-link to="/delivery"><i class="el-icon-truck"></i> Delivery</router-link>
                        </el-menu-item>
                        <el-menu-item index="5-3" class="menu-items">
                            <router-link to="/payment"><i class="el-icon-coin"></i> Payment</router-link>
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
                    <el-dropdown :hide-on-click="false" style="margin: 0 10px 0 10px;">
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
                    <a href="#" class="icon-navbar" style="right: 15px; position: fixed; margin-left:5px; color: #ff6900;" @click="select()"><i style="font-size:23px;" :class="isActive ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i></a>
                </div>
            </el-menu>
        </div>

    </div>
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
            select() {
                this.isActive = !this.isActive;
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
                isActive: false,
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
            },
            isHome() {
                return this.$route.name === 'Home'
            }
        },
    }
</script>

<style scoped>
        .app-container {
            padding: 0 10% 0 10%;
        }
        .menu-items i {
            color: #ff6900 !important;
        }
        .menu-items {
            font-weight: 500;
            color: #ff6900 !important;
        }
        .menu-items a {
            font-weight: 500;
            color: #ff6900 !important;
        }
        .right-elements {
            float: right;
            font-weight: 500;
            font-size: 14px;
            line-height: 40px;
            position: relative;
            cursor: pointer;
            user-select: none;
            transition-property: border-color, background, color;
            transition-duration: 200ms;
            transition-timing-function: ease-in-out;
            color: rgb(255, 255, 255);
            min-width: 90px;
            outline: none;
            border-radius: 8px;
            border-width: 1px;
            border-image: initial;
            padding: 4px 12px;
            overflow: hidden;
            margin-right: 10px;
        }
        .cart-button {
            font-weight: 500;
            font-size: 14px;
            line-height: 40px;
            cursor: pointer;
            user-select: none;
            transition-property: border-color, background, color;
            transition-duration: 200ms;
            transition-timing-function: ease-in-out;
            color: rgb(255, 105, 0);
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
            margin-right: 10px;
        }
        @media screen and (max-width: 600px) {
            .menu-items {
                display: none;
            }
            /*.menu-items a.icon {
                float: right;
                display: block;
            }*/
        }
        @media screen and (min-width: 600px) {
            .icon-navbar {
                display: none;
            }
            /*.menu-items a.icon {
                float: right;
                display: block;
            }*/
        }
</style>