<template>

  <div class="v-cart-item col-12">
    <div class="row align-items-baseline">
      <div class="col-4 mb-2">
        <div class="row">
          <div class="col-lg-4 col-12">
           <nuxt-link :to="`category/product/${cart_item_data.article}`"> <img class="v-cart-item-image text-left" :src="cart_item_data.pImg" alt="Фото товара"></nuxt-link>
          </div>
          <div class="v-cart-item-info col-lg-8 col-12">
            <nuxt-link class="cart-item-link" :to="`category/product/${cart_item_data.article}`"> <p>{{cart_item_data.pName}} <br> {{cart_item_data.pType}}</p></nuxt-link>
          </div>
        </div>
      </div>
      <div class="v-cart-item-price col-4 mb-2 text-center font-weight-bold">
        <p>{{cart_item_data.pPrice}}</p>
      </div>
      <div class="v-cart-item-quantity col-4 text-center">
        <div class="row">
          <div class="col-12">
            <button class="quantity-btn d-none d-md-inline mr-2" @click="decrementItem"><img class="quantity-img" src="~~/assets/svg/trash-minus.svg" alt="уменьшить"></button>
            <input class="quantity-value text-center mb-2" name="inputQuantity" step="1" v-model.number="cart_item_data.quantity" @input="updateItem">
            <button class=" quantity-btn d-none d-md-inline ml-2" @click="incrementItem"><img class="quantity-img" src="~~/assets/svg/trash-plus.svg" alt="увеличить"></button>
            <button class="delete-btn ml-0 ml-md-2" @click="deleteFromCart" ><img class="cart-trash" src="~~/assets/svg/trash-bag.svg" alt="убрать"></button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props: {
      cart_item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() { return{} },
    computed:{},
    methods: {
      decrementItem() {
        this.$emit('decrement')
      },
      incrementItem() {
        this.$emit('increment')
      },
      deleteFromCart() {
        this.$emit('deleteFromCart')
      },
      updateItem() {
        this.$emit('update')
      }
    },
    mounted() {}
  }

</script>

<style>
  a.cart-item-link {
    color: #6c757d;
  }
  a.cart-item-link:hover {
    color: #3e2d8f;
    text-decoration: underline;
  }
  .v-cart-item {
    align-items: center;
    padding: 10px;
  }
  .v-cart-item-image {
    max-width: 100%;
  }
  .v-cart-item-image:hover {
    transform: scale(1.3);
    transition: .3s;
  }
  .quantity-value {
    width: 50px;
  }
  .quantity-btn {
    background-color: #6a3df7;
    color: #ffffff;
    width:30px;
  }

  .quantity-btn:hover {
    background-color: #3e2d8f;
  }

  button.quantity-btn {
    border-radius: 5px;
    border: none;
  }

  .quantity-img {
    width: 15px;
    padding-bottom: 2px;
  }

  .delete-btn  {
    background-color: #f7f7f7;
    border: 1px solid #6a3df7;
    border-radius: 5px;
  }
  .delete-btn:hover {
    background-color: #3e2d8f;
  }


  .cart-trash {
    min-width: 20px;
    padding-bottom: 2px;
  }


</style>
