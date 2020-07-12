<template>
    <div style="min-height: 100vh;">
        <div v-if="this.$route.name === 'Cart'" style="margin: 65px 0 25px 0;">
            <p align="center">
                <el-steps :active="1" style="width: 30%;">
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
                <h1>Cart</h1>
                <div style="margin: 50px 0 50px 0;">
                    <el-row style="text-align: center;" v-for="(item, index) in items" :key="index">
                        <hr>
                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                            <div class="grid-content">
                                <img
                                        :src="item.img"
                                        class="cart-image"
                                        :alt="item.name"
                                        :title="item.name"
                                />
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                            <div class="grid-content">
                                <h3> {{ item.name }}</h3>
                                <p class="description"> {{ item.miniDescription }}</p>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4">
                            <div class="grid-content">
                               <el-button type="danger" icon="el-icon-delete" circle></el-button>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </section>
            <div style="text-align: right; margin: 15px; font-size: medium;">
                <span><b>Sub total:</b> 56 USD</span><br>
                <span><b>Delivery Price:</b> 16 USD</span><br>
                <h2><b>Total Cost:</b> 16 USD</h2><br><br>
            </div>
            <div style="margin: 0 5% 0 5%;">
                <el-row>
                    <router-link to="/" class="left">
                        <el-button type="primary" icon="el-icon-back"> Back</el-button>
                    </router-link>
                    &nbsp;&nbsp;
                    <el-button style="float: right;" type="success" @click="centerDialogVisible = true"><i class="el-icon-shopping-cart-full"></i> To Order</el-button>
                </el-row>
            </div>
        </main>
        <el-dialog
                title="Please, add your address"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>

                <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                    <el-form-item label="Phone">
                        <el-input v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                    <el-form-item label="Address">
                        <el-input type="textarea" v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                </el-form>

                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
                </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        data () {
            return {
                centerDialogVisible: false,
                form: {
                    selectedItem: 0
                },
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },
                items: [
                    {
                        id: 1,
                        img: 'https://cdn.dodostatic.net/static/Img/Products/5e347c8e1c8b4bc79cb16b683b113cc4_292x292.jpeg',
                        name: 'Halved Pizza',
                        price: '30',
                        miniDescription: 'Collect your 35 cm pizza with two different flavors',
                    },
                    {
                        id: 3,
                        img: 'https://cdn.dodostatic.net/static/Img/Products/25cfbe54b782402f964a41be6417bea6_292x292.jpeg',
                        name: 'Sprite',
                        price: '55',
                        miniDescription: '1 L',
                    },
                    {
                        id: 4,
                        img: 'https://cdn.dodostatic.net/static/Img/Products/be55eb49702e46289514998a88028c4f_292x292.jpeg',
                        name: 'Coffee "Americano',
                        price: '35',
                        miniDescription: 'Espresso hot drink, 0.3 L',
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .cart-item {
        width: 514px;
        margin: 0px auto;
        flex: 1 1 0%;
    }
    .cart-image {
        width: 64px;
        height: 64px;
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