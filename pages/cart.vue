<template>
  <div class="container">
    <v-cart v-if="CART.length" :cart_data="CART"/>
    <v-cart-empty v-else />
  </div>
</template>

<script>
  import vCart from '~~/components/cart/v-cart'
  import vCartEmpty from '~~/components/cart/v-cart-empty'
  import {mapGetters} from 'vuex'
  export default {
    head() {
      return {
        title: 'ТЕРМОЛЕНТ, Чековая лента, Термоэтикетки',
        meta: [
          { hid: "description", name: "description", content: "Чековые ленты, чековая лента, Термоленты в Санкт-Петербурге, +7(904) 514-46-46" },
          { hid: "keywords", name: "keywords", content: "Купить чековые ленты, термоэтикетки, Санкт-Петербург, +7(904) 514-46-46" }
        ]
      }
    },
    components: { vCart, vCartEmpty },
    computed: { ...mapGetters(['CART']) },
  }
</script>

<style>

</style>
