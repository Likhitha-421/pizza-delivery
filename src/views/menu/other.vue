<template>
    <div class="app-container">
        <h2 style="text-align: left; margin-bottom: 20px; color: #ff6900;">Other Items</h2>
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
                                {{ item.miniDescription }}
                            </span>
                        </main>
                        <footer class="pizza-footer" style="background-color: #ffffff;">
                            <div class="price-item">
                                from <span class="money">
                                <span class="value">{{ item.price }}</span>
                                <span class="on-the-right"> USD</span>
                            </span>
                            </div>
                            <div class="pizza-select">
                                <el-button type="success" @click="centerDialogVisible = true" round>Select</el-button>
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
                                                src="https://cdn.dodostatic.net/static/Img/Products/5e347c8e1c8b4bc79cb16b683b113cc4_292x292.jpeg"
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
                                    <h3>Pizza Pie</h3>
                                    <br>
                                    <span>It should be noted that the content will not be aligned in center by default</span>
                                    <br>
                                    <div><strong>Price:</strong> {{ 34 }} USD</div>
                                    <br>
                                    <el-radio-group class="size-select" v-model="form.labelSize" size="small">
                                        <el-radio-button label="small">Small</el-radio-button>
                                        <el-radio-button label="middle">Middle</el-radio-button>
                                        <el-radio-button label="big">Big</el-radio-button>
                                    </el-radio-group>
                                    <br>
                                    <el-input-number v-model="form.selectedItem" @change="handleChange" :min="1" :max="10"></el-input-number>
                                    <p><strong>Total price:</strong> {{ totalPrice }} &nbsp; {{ currency }}</p>
                                </div>
                            </el-col>
                        </el-row>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="centerDialogVisible = false"><i class="el-icon-close" /> Cancel</el-button>
                            <el-button type="primary" @click="centerDialogVisible = false"><i class="el-icon-plus" /> Add to Shopping Cart</el-button>
                        </span>
                    </el-dialog>
                </div>
            </el-col>

        </el-row>
    </div>
</template>

<script>
    export default {
        name: "OtherItems",
        data() {
            return {
                centerDialogVisible: false,
                totalPrice: 0,
                bufferCart: {},
                currency: 'USD',
                form: {
                    selectedItem: 1,
                    labelSize: 'middle'
                },
                items: [
                    {
                        id: 1,
                        img: 'https://cdn.dodostatic.net/static/Img/Products/ed6c0e7f280846c782fd58b24288474c_292x292.jpeg',
                        name: 'Cappuccino Coffee',
                        price: '10',
                        miniDescription: 'Espresso hot drink with frothed milk, 0.4 L',
                    },
                    {
                        id: 2,
                        img: 'https://cdn.dodostatic.net/static/Img/Products/Drinks/ru-RU/cf19422f-7b3a-4220-a9bf-49787f7e2dac.jpg',
                        name: 'Coca-cola',
                        price: '45',
                        miniDescription: '1.5 L',
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
    .app-container {
        padding: 20px 10% 20px 10%;
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