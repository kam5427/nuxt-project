<template>
    <div class="p-0 pb-4 col-lg-3 col-sm-6 col-6 mr-sm-0 ml-sm-0 v-product-wrapper">
        <div class="col-lg-12 v-product-column">
            <div class="product-card">
                <div class="text-center">
                    <nuxt-link :to="`product/${product.article}`"><img class="catalog-product-image" :src="product.pImg" alt="картинка товара"></nuxt-link>
                </div>
                <div class="row">
                    <div class="col-lg-12 pr-1 pl-1 pr-sm-3 pl-sm-3 product-description">
                        <nuxt-link class="v-product-item-link" :to="`product/${product.article}`"><p>{{ product.pName }}<br>{{product.pType}}{{product.pQty}}</p></nuxt-link>
                        <p>Цена: {{ product.pPrice }} руб/шт</p>
                    </div>
                    <div class="cart-btn mt-2 col-lg-12 col-12 text-right">
                        <button class="add-btn" @click="addToCart">
                            <p style="color:#ffffff">Купить</p>
                            <!--                    <img class="product-svg" src="data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' height='19' width='19'%3E%3Cpath d='M18 17.987V7H2v11l16-.013zM4.077 5A5.996 5.996 0 0110 0c2.973 0 5.562 2.162 6.038 5H20v14.986L0 20V5h4.077zm9.902-.005C13.531 3.275 11.86 2 10 2 8.153 2 6.604 3.294 6.144 4.995c.92 0 7.654.03 7.835 0z' fill='%23FFF'/%3E%3C/svg%3E" alt="добавить в корзину">-->
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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
    a.v-product-item-link {
        color: #6c757d;

    }

    a.v-product-item-link:hover {
        color: #3e2d8f;
        text-decoration: underline;
    }
    a.product-card-link {
        text-decoration: none;

    }
    p {
        color: #212529;
        margin-bottom: 0;
        font-size: 1rem;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
    }
    .product-card {
        background-color: #ffffff;
        padding: 15px 15px;
        border: none;
        border-radius: 8px;
        box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, .2);
    }
    .catalog-product-image {
        width: 80%;
    }
    .catalog-product-image:hover {
        transform: scale(1.15);
        transition: .3s;
    }

    .product-svg {
        width: 100%;
        padding-bottom: 2px;
    }
    .cart-btn button {
        background-color: #6a3df7;
        border: none;
        border-radius: 4px;
        min-width: 120px;
        padding: 0.2rem;
    }
    .cart-img {
        width: 2rem;
    }
    .cart-btn button:hover {
        background-color: #3e2d8f;
    }
    .cart-btn button:focus {
        background-color: #16c67a;
    }
    /*.product-svg:hover {*/
    /*    transform: rotate(360deg);*/
    /*    transition: all 1s;*/
    /*}*/
    @media (max-width: 576px) {
        .product-card {
            border-radius: 0!important;
        }
        .product-description {
            padding-left: 15px!important;
            padding-right: 0!important;
        }
        .v-product-wrapper {
            padding-bottom: 10px!important;
        }
        .v-product-column {
            padding-left: 5px!important;
            padding-right: 5px!important;
        }
        a.v-product-item-link {
            text-decoration: underline;
        }
        .product-description p  {
            font-size: 13px;
        }
        .add-btn p {
            font-size: 13px;
        }
        .cart-btn button {
            min-width: 70px;
        }
        .cart-btn button:hover {
            background-color: #01a715;
        }
        .product-description {
            margin-bottom: 5px;
        }
    }
    @media (max-width: 376px) {
        .product-description p {
            font-size: 11px;
        }
        .add-btn p {
            font-size: 12px;
        }
    }
    @media (max-width: 360px) {

        .product-description p {
            font-size: 10px;
        }
        .add-btn p {
            font-size: 11px;
        }
    }
</style>
