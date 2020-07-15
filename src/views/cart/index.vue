<template>
    <div style="min-height: 80vh;">
        <div v-if="hasItems">
            <br>
            <br>
            <div style="margin: 65px 0 25px 0; text-align: center;">
                <h1>Your Cart</h1>
                <br>
                <p align="center">
                    <el-steps :active="activeStep" style="width: 40%;">
                        <el-step title="Step 1" icon="el-icon-shopping-cart-full" description="Cart"></el-step>
                        <el-step title="Step 2" icon="el-icon-document-checked" description="Order"></el-step>
                        <el-step title="Step 3" icon="el-icon-truck" description="Delivery"></el-step>
                        <el-step title="Step 4" icon="el-icon-circle-check" description="Order is accepted"></el-step>
                    </el-steps>
                </p>
            </div>
            <main class="cart-item">
                <div class="top-cart"></div>
                <section class="cart-section">
                    <div style="margin: 50px 0 50px 0;">
                        <el-row style="text-align: center;" v-for="(item, index) in cartItems" :key="index">

                            <el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4">
                                <div class="grid-content">
                                    <img
                                            :src="item.img"
                                            class="cart-image"
                                            :alt="item.name"
                                            :title="item.name"
                                    />
                                </div>
                            </el-col>
                            <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                                <div class="grid-content">
                                    <b> {{ item.name }}</b>
                                    <p class="description"> {{ item.title }}</p>
                                </div>
                            </el-col>
                            <el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4">
                                <el-input-number v-model="cartItems[cartItems.findIndex(x => x.id === item.id)].qty"
                                                 style="width: 130px;"
                                                 @change="handleQty({ id: item.id, qty: cartItems[cartItems.findIndex(x => x.id === item.id)].qty })" :min="1" :max="15"
                                >
                                </el-input-number>
                            </el-col>
                            <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                                <div class="grid-content">
                                    {{ cartItems[cartItems.findIndex(x => x.id === item.id)].qty * getCurrentPrice(item.prices) }} {{ selectedCurrency }}
                                </div>
                            </el-col>
                            <el-col :xs="24" :sm="24" :md="24" :lg="2" :xl="2">
                                <div class="grid-content">
                                    <el-button icon="el-icon-delete" @click="deleteItem(item.id)" circle></el-button>
                                </div>
                            </el-col>

                        </el-row>
                        <hr>
                    </div>
                </section>
                <div style="text-align: right; margin: 15px; font-size: medium;">
                    <span><b>Sub total:</b> {{ subTotalPrice }} {{ selectedCurrency }}</span><br>
                </div>
                <br>
                <el-form
                        :label-position="labelPosition"
                         label-width="100px"
                         :model="formOrder.delivery">
                    <el-form-item label="Your Name">
                        <el-input v-model="formOrder.delivery.customer_name"></el-input>
                    </el-form-item>
                    <el-form-item label="Your customer_phone">
                        <el-input v-model="formOrder.delivery.customer_phone">
                            <template slot="prepend">+</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Address">
                        <el-input type="textarea"
                                  v-model="formOrder.delivery.address"
                        ></el-input>
                    </el-form-item>
                </el-form>
                <br>

                <div style="text-align: right; margin: 15px; font-size: medium;">
                    <span><b>Delivery Price:</b> {{ formOrder.delivery.delivery_cost }} {{ selectedCurrency }}</span><br><br>
                    <span><b>Payment Method:</b> Cash</span><br><br>
                    <h2><b>Total Cost:</b> {{ totalCost }} {{ selectedCurrency }}</h2><br><br>
                </div>

                <div style="margin: 0 5% 0 5%;">
                    <el-row>
                        <router-link to="/" class="left">
                            <el-button type="primary" icon="el-icon-back"> Back</el-button>
                        </router-link>
                        &nbsp;&nbsp;
                        <el-button
                                style="float: right;"
                                type="success"
                                @click="checkoutOrder"
                        >
                            <i class="el-icon-shopping-cart-full"></i> Checkout Order
                        </el-button>
                    </el-row>
                </div>
                <br>
                <br>
            </main>
        </div>

        <div else>
            <br>
            <br>
            <div style="margin: 65px 0 25px 0; text-align: center;">
                <h1>Your Cart</h1>
                <br>
            </div>
            <div style="text-align: center; margin-top: 20px;">
                Cart is empty!
                <br>
                <br>
                <img src="https://www.sportsdrive.in/images/empty-cart.png"/>

                <br>
                <br>
                <router-link to="/">
                    <el-button
                            type="primary"
                            icon="el-icon-arrow-left"
                    >Home
                    </el-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { createOrder } from '../../api/order'
    export default {
        name: "Cart",
        data () {
            return {
                order: {
                    no: '',
                    message: '',
                },
                activeStep: 1,
                formOrder: {
                    delivery: {
                        delivery_cost: 15,
                        customer_name: '',
                        address: '',
                        customer_phone: ''
                    },
                    paymentMethod: 'cash',
                    selectedCurrency: 'USD',
                    items: []
                },
                labelPosition: 'top'
            }
        },
        computed: {
            ...mapGetters([
                'cartItems',
                'selectedCurrency'
            ]),
            hasItems() {
              return this.cartItems && Object.assign(this.cartItems, {}).length > 0;
            },
            subTotalPrice() {
                let total = 0;
                this.formOrder.items.forEach((item) => {
                    total += this.getCurrentPrice(item.prices) * item.qty;
                });
                return total
            },
            totalCost() {
                return this.formOrder.delivery.delivery_cost + this.subTotalPrice
            }
        },
        mounted () {
            this.updateOrderForm()
        },
        methods: {
            ...mapActions('cart', [
                'clearCart',
                'removeItem',
                'changeQty'
            ]),
            async updateOrderForm() {
                if (this.hasItems) {
                    this.formOrder.items = []
                    await this.cartItems.forEach((item) => {
                        if (item && item.qty) {
                            this.formOrder.items.push({qty: item.qty, prices: item.prices, item_id: item.id, type: item.type })
                        }
                    })
                }
            },
            handleQty(item) {
                this.changeQty(item)
                this.updateOrderForm()
            },
            deleteItem(value) {
                this.removeItem(value)
                this.updateOrderForm()
            },
            getCurrentPrice(prices) {
                return prices[this.selectedCurrency] ? prices[this.selectedCurrency] : 0
            },
            async checkoutOrder() {
                this.updateOrderForm()
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                })
                await createOrder(this.formOrder).then(response => {
                    const { message, code, data } = response
                    this.$notify({
                        title: 'Order created',
                        message,
                        type: 'success'
                    })
                    if (code === 20000) {
                        this.activeStep = 2
                        this.clearCart()
                    }
                    this.$router.push({ path: '/order?no=' + data.no })
                })
                loading.close()
            }
        },
        watch: {
            selectedCurrency() {
                this.formOrder.selectedCurrency = this.selectedCurrency
            }
        }
    }
</script>

<style scoped>
    .grid-content {
        padding: 20px;
    }
    .cart-item {
        width: 614px;
        margin: 0px auto;
    }
    .cart-image {
        width: 84px;
        height: 84px;
        flex: 0 0 auto;
        margin: 0px 12px 0px 0px;
    }
    .top-cart {
        margin-top: 44px;
        padding: 24px 0px;
    }
    .description {
        font-size: small;
    }
</style>