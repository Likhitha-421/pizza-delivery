<template>
    <div class="app-container" style="">
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
                                <el-button type="success" round>Select</el-button>
                            </div>
                        </footer>
                    </article>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "MenuFoods",
        data() {
            return {
                items: [
                    {
                        id: 1,
                        img: 'https://cdn.dodostatic.net/static/Img/Products/5e347c8e1c8b4bc79cb16b683b113cc4_292x292.jpeg',
                        name: 'Halved Pizza',
                        price: '30',
                        miniDescription: 'Collect your 35 cm pizza with two different flavors',
                    },
                    {
                        id: 2,
                        img: 'https://cdn.dodostatic.net/static/Img/Products/2925a332340d4d85ba913d99b34d651a_292x292.jpeg',
                        name: 'Vegetables and mushrooms',
                        price: '45',
                        miniDescription: 'Chicken, mozzarella, pineapple, tomato sauce',
                    },
                    {
                        id: 3,
                        img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/d5f51ef8-66d7-468d-83f2-d8cad5f4989e.jpg',
                        name: 'Pizza Pie',
                        price: '55',
                        miniDescription: 'Oregano, pepperoni, mozzarella cheese, champignons, sliced olives, tomato sauce',
                    },
                    {
                        id: 4,
                        img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/5998fb51-0b03-4602-8395-fdb5a201cb3a.jpg',
                        name: 'Hawaiian',
                        price: '35',
                        miniDescription: 'Pickles, tomatoes, red onions, mozzarella, minced beef, cheese sauce',
                    },
                    {
                        id: 5,
                        img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/421a622d-4ad3-47db-86a0-f85f19c4b63c.jpg',
                        name: 'Pepperoni',
                        price: '25',
                        miniDescription: 'Tomato sauce, mozzarella, pepperoni',
                    },
                    {
                        id: 6,
                        img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/c9d27391-4f6b-42d0-a821-dc72f65e789e.jpg',
                        name: 'Pizaa name',
                        price: '25',
                        miniDescription: 'Beef, olives, red onions, mozzarella, ham, pepperoni, bell peppers, champignons, tomato sauce Beef, olives, red onions, mozzarella, ham, pepperoni, bell peppers, champignons, tomato sauce',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .app-container {
        padding: 10% 300px 20px 10%;
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
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
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
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
</style>