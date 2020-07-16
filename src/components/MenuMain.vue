<template>
    <div class="navWrapper">
        <div id="menu" :class="{ active: isActive }">
            <el-menu :default-active="activeIndex"
                     style="margin-bottom: 10px;"
                     class="app-container el-menu-demo"
                     :mode="isActive ? 'vertical' : 'horizontal'"
                     @select="handleSelect"
            >
                <el-menu-item index="-1" class="menu-items" :style="isActive ? 'display:block;' : ''" v-scroll-to="'#menu-home'">
                    <router-link to="/"><i class="el-icon-s-home"></i> Home</router-link>
                </el-menu-item>
                <template>
                    <template v-if="isHome">
                        <el-menu-item v-for="(menu, index) in menuList" :index="index.toString()" :key="index" :style="isActive ? 'display:block;' : ''" class="menu-items" v-scroll-to="'#menu-' + menu.id">
                            <i :class="menu.icon"></i> {{ menu.name }}
                        </el-menu-item>
                    </template>
                    <el-menu-item index="4" class="menu-items" :style="isActive ? 'display:block;' : ''">
                        <router-link to="/order"><i class="el-icon-sold-out"></i>My Orders</router-link>
                    </el-menu-item>
                    <el-submenu index="5" class="menu-items" :style="isActive ? 'display:block;' : ''">
                        <template slot="title">
                            <i class="el-icon-info"></i>
                            <router-link to="/about">About Service</router-link>
                        </template>
                        <el-menu-item index="5-1" class="menu-items" :style="isActive ? 'display:block;' : ''">
                            <router-link to="/about"><i class="el-icon-info"></i> About Us</router-link>
                        </el-menu-item>
                        <el-menu-item index="5-2" class="menu-items" :style="isActive ? 'display:block;' : ''">
                            <router-link to="/delivery"><i class="el-icon-truck"></i> Delivery</router-link>
                        </el-menu-item>
                        <el-menu-item index="5-3" class="menu-items" :style="isActive ? 'display:block;' : ''">
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
                    <a v-if="!isAuthenticated" class="cart-button" @click="dialogLogin = true"><i class="el-icon-user"></i> Login</a>
                    <el-popover
                            v-if="isAuthenticated"
                            placement="top"
                            width="160"
                            v-model="visibleLoginPopup">
                        <p>Are you sure you want to logout?</p>
                        <div style="text-align: right; margin: 0">
                            <el-button size="mini" type="text" @click="visibleLoginPopup = false">Cancel</el-button>
                            <el-button type="primary" size="mini" @click="handleLogout">Logout</el-button>
                        </div>
                        <a slot="reference" class="cart-button"><i class="el-icon-user"></i> {{ isAuthenticated ? username : 'Logout' }}</a>
                    </el-popover>
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
                    <a href="#" class="icon-navbar" style="right: 15px; position: fixed; margin-left:5px; color: #ff6900;" @click="select()">
                        <i style="font-size:23px;" :class="isActive ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
                    </a>
                </div>
            </el-menu>
        </div>
        <el-dialog
                :appendToBody="true"
                title="Sign in"
                :visible.sync="dialogLogin"
                width="30%"
                class="dialog-border"
                :before-close="handleClose">
            <br>
            <div style="text-align: center;">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <ul>
                <b>Why do I need to login?</b>
                <li>Save all orders</li>
                <li>Remember your address so as not to indicate it next time</li>
            </ul>
            <br>
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item v-if="!otpSent" label="Your email">
                    <el-input type="email" v-model="form.email"></el-input>
                </el-form-item>
                <div v-if="otpSent" style="text-align: center; margin: 20px 0 20px 0;">{{ otpSentMessage }}</div>
                <el-form-item v-if="otpSent" label="Code">
                    <el-input type="password" v-model="form.otp"></el-input>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button v-if="!otpSent" @click="dialogLogin = false">Cancel</el-button>
                <el-button v-if="!otpSent" type="primary" @click="sendToEmail(form.email)">Send</el-button>
                <el-button v-if="otpSent" @click="otpSent = false">Back</el-button>
                <el-button v-if="otpSent" type="success" @click="handleCheckOtp(form.otp)">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { otpLogin } from '../api/user'
    export default {
        name: "MenuMain",
        methods: {
            ...mapActions('currency', [
               'selectCurrency'
            ]),
            ...mapActions('menu', [
               'loadMenu'
            ]),
            ...mapActions('user', [
               'authOtp', 'logout'
            ]),
            handleCart() {
                this.$router.push({ path: '/cart' })
            },
            handleLogout() {
                this.logout()
                this.visibleLoginPopup =false
            },
            handleClose() {
                this.dialogLogin = false
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            select() {
                this.isActive = !this.isActive;
            },
            changeCurrency(currency) {
                this.selectCurrency(currency)
            },
            async sendToEmail(email) {
                await otpLogin(email).then(response => {
                    const { message, code } = response
                    this.$notify({
                        title: 'Sent',
                        message,
                        type: 'success'
                    })
                    console.log(code)
                    this.otpSent = true
                    this.otpSentMessage = message
                })
            },
            async handleCheckOtp(otp) {
                await this.authOtp(otp)
                if (this.isAuthenticated) {
                    this.$notify({
                        title: 'Login',
                        message: 'You are successfully logged in system',
                        type: 'success'
                    })
                    setTimeout(() => (this.dialogLogin = false), 1000);
                } else {
                    this.$notify({
                        title: 'Login',
                        message: 'Unauthenticated',
                        type: 'error'
                    })
                }

            }
        },
        created() {
          this.loadMenu()
        },
        data () {
            return {
                otpSentMessage: '',
                otpSent: false,
                visibleLoginPopup: false,
                form: {
                    email: '',
                    otp: ''
                },
                dialogLogin: false,
                isActive: false,
                activeIndex: "2",
                currencyList: ['USD', 'EUR']
            }
        },
        computed: {
            ...mapGetters([
                'cartCount',
                'selectedCurrency',
                'menuList',
                'username',
                'isAuthenticated'
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
        .dialog-border >>> .el-dialog {
            border-radius: 20px;
            z-index: 3000;
        }
</style>