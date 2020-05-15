<template>
   <div class="">
       <v-category-product @addToCart="addToCart" :product="product"/>

       <div class="added-product " v-if="addedProduct">
           <div class="container">
               <div class="row align-items-center">
                   <div class="col-lg-6 col-8"><nuxt-link class="go-to-cart" to="/cart">Товар добавлен в корзину. Перейти <img class="go-to-cart-svg" src="~~/assets/svg/arrow-link-white.svg" alt="переход в корзину"></nuxt-link></div>
                   <div class="col-lg-6 col-4 text-right close-button" @click="closeAdded"><img class="close-svg" src="~~/assets/svg/close-cross.svg" alt="закрыть уведомление"></div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    import vCategoryProduct from '~~/components/category/v-category-product'
    import {mapActions, mapState} from 'vuex'
    export default {
        data() {
            return {

                addedProduct: false
            }
        },
        components: {
            vCategoryProduct,

        },
        async asyncData ({ app, params, route, error }) { app.store.dispatch('getCurrentProduct', { route }) },
        computed: { ...mapState({ product: 'currentProduct' })
        },
        methods: {
            ...mapActions(['ADD_TO_CART']),
            addToCart(data) {
                this.ADD_TO_CART(data);
                this.addedProduct = true;
            },
            closeAdded() {
                this.addedProduct = false;
            }
        },
        head () {
            return {

                meta: [
                    {

                    }
                ]
            }
        }
    }
</script>

<style>
    .added-product {
        position:fixed;
        bottom:0;
        padding: 15px 0 15px 0;
        width: 100%;
        opacity: 0.93;
        /*background-color: #727fdb;*/
        background-color: #6a3df7;
        color: #ffffff;
        z-index: 9999;
    }
    .close-svg {
        width: 20px;
        cursor: pointer;
    }

    .go-to-cart-svg {
        width: 40px;
    }
    .go-to-cart, .go-to-cart:hover {
        color: #ffffff;
        text-decoration: none;
    }
</style>