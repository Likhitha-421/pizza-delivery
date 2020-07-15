<template>
    <div style="min-height: 100vh; margin-top: 40px;">
        <div  v-if="isDetail">
            <div style="margin: 100px 0 25px 0;">
                <div style="text-align: center; font-size: large;">
                    <br>
                    <i class="el-icon-hot-water"></i>
                    <br>
                    <b>Order Number:</b> #{{ order.no }}
                </div>
            </div>
            <div style="margin: 65px 0 25px 0;">
                <p align="center">
                    <el-steps :active="activeStep" style="width: 40%;">
                        <el-step title="Step 1" icon="el-icon-shopping-cart-full" description="Cart"></el-step>
                        <el-step title="Step 2" icon="el-icon-document-checked" description="Order"></el-step>
                        <el-step title="Step 3" icon="el-icon-truck" description="Delivery"></el-step>
                        <el-step title="Step 4" icon="el-icon-circle-check" description="Order is accepted"></el-step>
                    </el-steps>
                </p>
            </div>
            <br>
            <div style="text-align: center; color: #ffffff; font-size: 13px; line-height: 18px;">
                <span :style="'border-radius: 10px; padding: 5px; width: 30%; background-color:' + statusColor"><b>Status: </b>
                    <slot name="title">{{ order.statusMessage }}</slot>
                </span>
            </div>
        </div>
        <div else>
            <div style="min-height: 80vh;">
                <div>
                    <br>
                    <br>
                    <div style="margin: 65px 0 25px 0; text-align: center;">
                        <h1>Your Orders</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { checkOrder } from '../../api/order'
    export default {
        name: "Order",
        data () {
            return {
                statusColor: '#16DC7B',
                isDetail: false,
                isOrderPage: false,
                order: {
                    no: '',
                    statusMessage: '',
                },
                activeStep: 2,
            }
        },
        created () {
            if (this.$route.query && this.$route.query.no) {
                this.order.no = this.$route.query.no
                this.isDetail = true
                this.checkOrder()
            }
        },
        methods: {
            async checkOrder() {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                })
                await checkOrder(this.order.no).then(response => {
                    const { message, code, data } = response
                    this.$notify({
                        title: 'Check',
                        message,
                        type: 'success'
                    })
                    if (code === 20000) {
                        this.isOrderPage = true
                    }
                    if (data.status === 1) {
                        this.activeStep = 2
                    }
                    if (data.status === 2) {
                        this.activeStep = 3
                    }
                    if (data.status === 3) {
                        this.activeStep = 4
                    }
                    if (data.status === -2) {
                        this.statusColor = '#DC7F31'
                    }
                    this.order.statusMessage = data.statusMessage
                })
                loading.close()
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