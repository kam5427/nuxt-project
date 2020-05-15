<template>
    <div class="v-product-page mt-5">
        <div class="container">
            <div class="row">
                        <div class="v-category-products-description p-2 mt-4 mt-md-0 mt-lg-0 col-lg-8 col-md-8 order-lg-1 order-2">
                            <h1 class="v-category-product-name">{{ product.pName }} {{product.pType}}</h1>
                            <h2 class="v-category-product-description">Описание</h2>
                            <p class="v-category-product-description-text">{{product.pDesc}} </p>
                            <p class="v-category-product-description-min">{{product.pMinPrice}}</p>
                            <p class="v-category-product-description-min">{{ product.pMinOrder}}</p>
                            <h3 class="v-category-product-character mt-3">Характеристики</h3>
                            <p class="v-category-product-character-desc">{{product.pBrand}}</p>
                            <p class="v-category-product-character-desc">{{product.pWidth}}</p>
                            <p class="v-category-product-character-desc">{{product.pLength}}</p>
                            <p class="v-category-product-character-desc">{{product.pPlot}}</p>
                            <p class="v-category-product-character-desc">{{product.pQtyProd}}</p>
                            <p class="v-category-product-character-desc">{{product.pQtyPack}}</p>
                        </div>
                        <div class="product-image col-lg-4 col-md-4 order-lg-2 order-1">
                            <div class="row">
                                <div class="col-12 text-center"><img class="article-image" :src="product.pImg" alt="Чековая лента"></div>
                                <div class="col-12 mt-2 text-center"> <p class="v-category-product-price">Цена: {{ product.pPrice }} руб/шт</p></div>
                                <div class="v-product-cart-btn text-center col-12 mt-2">
                                    <button class="add-btn" @click="addToCart" >
                                        <p class="v-product-cart-btn-text">Купить</p>
                                        <!--                    <img class="product-svg" src="data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' height='19' width='19'%3E%3Cpath d='M18 17.987V7H2v11l16-.013zM4.077 5A5.996 5.996 0 0110 0c2.973 0 5.562 2.162 6.038 5H20v14.986L0 20V5h4.077zm9.902-.005C13.531 3.275 11.86 2 10 2 8.153 2 6.604 3.294 6.144 4.995c.92 0 7.654.03 7.835 0z' fill='%23FFF'/%3E%3C/svg%3E" alt="добавить в корзину">-->
                                    </button>
                            </div>
                            </div>

                        </div>
                        <div class="col-12 order-4">
                            <h5 class="v-product-page-questions">
                                Если у вас возникают какие-либо трудности с выбором необходимой продукции, то задайте вопрос нашим специалистам. Они с радостью помогут вам сделать рентабельную покупку.
                            </h5>
                        </div>


            </div>

        </div>


    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: this.product.pName + " " + this.product.pType,
                meta: [
                    { hid: "description", name: "description", content: this.product.pMeta},
                    { hid: "keywords", name: "keywords", content: this.product.pKeys }
                ]
            }
        },
        props: {
            product: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            addToCart() {
                this.$emit('addToCart', this.product)
            }
        }
    }
</script>

<style>
    .v-category-products-description {
        background-color: #ffffff;
    }
    .v-product-cart-btn button {
        background-color: #6a3df7;
        border: none;
        border-radius: 4px;
        min-width: 200px;
    }
    .v-product-cart-btn button:hover {
        background-color: #3e2d8f;
    }
    .v-product-cart-btn button:focus {
        background-color: #16c67a;
    }
    .v-product-cart-btn-text {
        margin: 0;
        color:#ffffff;
        font-size: 1.4rem;
    }
    .v-category-product-name {
        font-size: 1.6rem;
        color: #6a3df7;
    }
    .v-category-product-price {
        font-size: 1.4rem;
        color: #6a3df7;
    }
    .v-category-product-description {
        font-size: 1.4rem;
        color: #6a3df7;
    }
    .v-category-product-description-min {
        font-weight: bold;
        margin-bottom: 10px;
    }
    .v-category-product-character {
        font-size: 1.2rem;
        color: #6a3df7;
    }
    .v-category-product-character-desc {
        margin-bottom: 8px;
    }
    .article-image {
        width: 100%;
    }
    .v-category-product-description-text {
        margin-bottom: 15px;
    }
    .v-product-page-questions {
        padding: 15px 15px 15px 15px;
        margin-left: -15px;
        background-color:  #ffffff;
        color: #6a3df7;
        margin-top: 30px;
    }
    @media (max-width: 576px) {
        .v-category-product-name {
            font-size: 22px;
            text-align: center;
            margin-bottom: 1rem;
        }
        .v-category-products-description {
            padding-left: 1rem!important;
            padding-right: 1rem!important;
        }
        .v-product-page {
            margin-top: 1.5rem!important;
        }
        .article-image {
            width: 70%;
        }
        .v-product-cart-btn-text {
            margin: 0;
            color:#ffffff;
            font-size: 20px!important;
        }
        .v-category-product-price {
            font-size: 18px!important;
        }
        .v-product-cart-btn button:hover {
            background-color: #01a715;
        }
        .v-product-page-questions {
            font-size: 14px;
            margin-left: 0;
        }
    }
    @media (max-width: 376px) {
        .v-category-product-name {
            font-size: 18px;
            text-align: center;
        }
        .v-category-product-description {
            font-size: 16px;
        }
        .v-category-product-description-text {
            font-size: 14px;
        }
        .v-category-product-description-min {
            font-size: 15px;
        }
    }
</style>