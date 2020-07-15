<template>
    <div v-if="parseInt(category.itemsCount)" class="app-container">
        <h2 style="text-align: left; margin-bottom: 20px; color: #ff6900;">{{ category.name }}</h2>
        <el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" v-for="(item, index) in items" :key="index">
                <div class="grid-content">
                    <article class="item-article">
                        <main class="main-item">
                            <figure class="pizza-image">
                                <img
                                        :src="item.img"
                                        height="292"
                                        :alt="item.name"
                                        :title="item.name"
                                        type="1"
                                        data-ll-status="loaded"
                                />
                            </figure>
                            <h2 class="product-title">{{ item.name }}</h2>
                            <span>
                                {{ item.title }}
                            </span>
                        </main>
                        <footer class="pizza-footer" style="background-color: #ffffff;">
                            <div class="price-item">
                                from <span class="money">
                                <span class="value">{{ getCurrentPrice(item.prices) }}</span>
                                <span class="on-the-right"> {{ selectedCurrency }}</span>
                            </span>
                            </div>
                            <div class="pizza-select">
                                <el-button type="success" @click="handleSelect(item)" round>Select</el-button>
                            </div>
                        </footer>
                    </article>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
                <div class="grid-content bg-purple-dark">
                    <el-dialog
                            title="Pizza Pie"
                            :visible.sync="centerDialogVisible"
                            width="60%"
                            center>
                        <el-row>
                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="text-align: center;">
                                <div>
                                    <figure class="pizza-image">
                                        <img
                                                :src="form.img"
                                                height="292"
                                                alt=""
                                                type="1"
                                                data-ll-status="loaded"
                                        />
                                    </figure>
                                </div>
                            </el-col>
                            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                <div>
                                    <h3>{{ form.name }}</h3>
                                    <br>
                                    <span>{{ form.title }}</span>
                                    <p>{{ form.description }}</p>
                                    <br>
                                    <div><strong>Price:</strong> {{ getCurrentPrice(form.prices) }} {{ selectedCurrency }}</div>
                                    <br>
                                    <el-radio-group class="size-select" v-model="form.type" size="small">
                                        <el-radio-button label="1">Small</el-radio-button>
                                        <el-radio-button label="2">Middle</el-radio-button>
                                        <el-radio-button label="3">Big</el-radio-button>
                                    </el-radio-group>
                                    <br>
                                    <el-input-number v-model="form.qty" :min="1" :max="10"></el-input-number>
                                    <p><strong>Total price:</strong> {{ totalPrice }} &nbsp; {{ currency }}</p>
                                </div>
                            </el-col>
                        </el-row>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="centerDialogVisible = false"><i class="el-icon-close" /> Cancel</el-button>
                            <el-button type="primary" @click="confirmCart" :disabled="disableAddCart"><i class="el-icon-plus" /> Add to Shopping Cart</el-button>
                        </span>
                    </el-dialog>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { fetchList } from '../../api/item'
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "MenuFoods",
        props: {
            category: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data() {
            return {
                disableAddCart: false,
                centerDialogVisible: false,
                totalPrice: 0,
                form: {
                    id: '',
                    qty: 1,
                    img: '',
                    prices: {

                    },
                    title: '',
                    description: '',
                    type: 1,
                },
                currency: 'USD',
                items: []
            }
        },
        computed: {
            ...mapGetters([
                'selectedCurrency'
            ]),
        },
        created () {
            this.init()
            this.loadCart()
        },
        methods: {
            ...mapActions('cart', [
                'addToCart', 'loadCart'
            ]),
            handleSelect(item) {
                this.form = item
                this.form.qty = 1
                this.centerDialogVisible = true
            },
            getCurrentPrice(prices) {
                return prices[this.selectedCurrency] ? prices[this.selectedCurrency] : 0
            },
            init() {
                this.getList()
            },
            async getList() {
                if (parseInt(this.category.itemsCount)) {
                    this.listLoading = true
                    const { data } = await fetchList({ search: 'category_id:' + this.category.id })
                    this.items = data
                    this.listLoading = false
                }
            },
            confirmCart() {
                this.disableAddCart = true
                this.addToCart(this.form)
                this.$message({
                    showClose: true,
                    message: 'Congratulations! You have successfully added that item to your cart and ready to check out.',
                    type: 'success'
                });
                setTimeout(() => this.centerDialogVisible = false, 2000);
                setTimeout(() => this.disableAddCart = false, 2000);
            }
        },
        watch: {
            form(value) {
                this.totalPrice =  this.getCurrentPrice(value.prices)
            },
            'form.selectedItem' (value) {
                this.totalPrice = value * this.getCurrentPrice(this.form.prices)
            }
        }
    }
</script>

<style scoped>
    .app-container {
        padding: 10px 10% 10px 10%;
        min-height: 100vh;
    }
    .item-article {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin-bottom: 60px;
        width: 292px;
        margin-right: 37.3333px;
        flex-flow: column;
    }
    .grid-content {
        margin: 10px;
        padding: 3px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .main-item {
        width: 100%;
        font-size: 14px;
        line-height: 20px;
        height: 383px;
        color: rgb(115, 121, 140);
        font-weight: 400;
        margin: 0px;
    }
    .main-item span{
        overflow: hidden;
        white-space: pre-line;

    }
    .main-item h2 {
        color: rgb(0, 0, 0);
        font-size: 20px;
        line-height: 24px;
        font-family: Dodo, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: 500;
        margin: 8px 0px;
    }
    .price-item {
        padding-right: 4px;
        font-size: 22px;
        color: rgb(0, 0, 0);
        font-family: Dodo, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: 500;
        line-height: 42px;
        flex: 1 1 auto;
    }
    .pizza-image {
        position: relative;
        width: 100%;
        margin: 0px;
    }
    .pizza-footer {
        display: flex; margin-top: 16px;
    }
    .pizza-select button {
        font-family: Dodo, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
        color: rgb(255, 105, 0);
        outline: none;
        border-radius: 8px;
        padding: 0px 12px;
        overflow: hidden;
        background: rgb(255, 255, 255);
        border-width: 1px;
        border-style: solid;
        border-color: rgb(255, 105, 0);
        border-image: initial;
    }
    .size-select {
        margin: 15px 0 15px 0;
    }
</style>