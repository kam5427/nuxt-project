<template>
  <div class="v-cart row">
    <div class="mt-5 mb-5 col-12"><h1>Корзина</h1></div>
    <div class="col-12 col-lg-9 mb-4">
      <div class="row">
        <div class="cart-product-name mb-3 col-4 text-left"><p>Название товара</p></div>
        <div class="cart-product-price mb-3 col-4 text-center"><p>Цена, руб/шт</p></div>
        <div class="cart-product-qty mb-3 col-4 text-center"><p>Количество, шт</p></div>
      </div>
      <div class="row">
        <v-cart-item
                v-for="( item, index ) in cart_data"
                :key="item.article"
                :cart_item_data="item"
                @deleteFromCart="deleteFromCart(index)"
                @increment="increment(index)"
                @decrement="decrement(index)"
                @update="update(index)"
        />
      </div>
    </div>
    <div class="v-cart-total col-lg-3 col-10 mr-auto ml-auto">
      <div class="v-cart-total-sum text-center row">
        <div class="pt-5 pb-3 order-block col-12"><h3>Ваш заказ</h3></div>
        <div class="pb-4 total-goods col-12">Товары: {{cartTotalCost}} руб</div>
        <div class="pb-4 total-name col-12">Итого к оплате: <br>{{cartTotalCost}} руб</div>
        <div class="col-lg-12 col-md-6 col-sm-6 col-12 mt-3 mb-5 p-0 mr-auto ml-auto"><button class="btn-block btn order-btn" data-toggle="modal" data-target="#cartModal">Заказать в 1 клик</button></div>
        <!-- Modal -->
        <ValidationObserver v-slot="{ valid }">
          <form class="modal fade cursor" v-on:submit.prevent="sendCartForm" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header justify-content-center">
                  <h3 class="modal-title" id="exampleModalLabel">Заказ в 1 клик</h3>
                </div>
                <div class="modal-body row">
                  <div class="modal-text text-left col-12">Вам позвонит менеджер для согласования доставки.
                    Товары в вашей корзине будут отправлены для оформления заказа вместе с вашими данными.
                  </div>
                  <div class="col-12 mt-2 mb-2 min-height-2">
                    <ValidationProvider :rules="{regex:/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/}" v-slot="{ errors }" name="Phone">
                      <input
                              v-model.number="CartForm.phone"
                              required
                              :class="[errors[0] ? invalidClass: '' ]"
                              class="modal-input"
                              type="tel"
                              placeholder="Телефон">
                      <br>
                      <sup class="error-class">{{ errors[0] }}</sup>
                    </ValidationProvider>
                  </div>
                  <div class="col-12 mt-2 mb-2 min-height-2">
                    <ValidationProvider :rules="{required: true, alpha: true, min:2}" v-slot="{ errors }" name="Username">
                    <input
                            v-model.trim="CartForm.name"
                            required
                            :class="[errors[0] ? invalidClass: '' ]"
                            class="modal-input"
                            type="text"
                            placeholder="Имя">
                      <br>
                      <sup class="error-class">{{ errors[0] }}</sup>
                      </ValidationProvider>
                  </div>
                </div>
                <div class="modal-footer purple-color justify-content-center">
                  <button type="submit" :disabled="!valid" class="btn cart-btn">
                    Отправить заявку
                    <img class="arrow-link" src="~~/assets/svg/arrow-link-white.svg" alt="Отправить">
                  </button>
                </div>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
  import vCartItem from './v-cart-item'
  import { ValidationProvider, ValidationObserver} from 'vee-validate'
  import {mapActions} from 'vuex'
  export default {
    components: {
      vCartItem,
      ValidationProvider,
      ValidationObserver
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        CartForm: {
          name : '',
          phone: ''
        },
        invalidClass: 'invalid-class'
      }
    },

    computed: {
      cartTotalCost() {
        let result =[]
        if (this.cart_data.length) {
          for (let item of this.cart_data) {
            result.push (item.pPrice * item.quantity)
          }
          result = result.reduce(function(sum, el) {
            return sum + el;
          })
          return result.toFixed(2);
        } else {
          return 0
        }
      }

      // cartTotalCost() {
      //   let result =[]
      //   if (this.cart_data.length) {
      //     for (let item of this.cart_data) {
      //       if (item.quantity >= item.pQtyBox) {
      //         result.push (item.pPrice * item.quantity)
      //       }
      //       else {
      //         result.push (item.pRozPrice * item.quantity)
      //       }
      //     }
      //     result = result.reduce(function(sum, el) {
      //       return sum + el;
      //     })
      //     return result.toFixed(2);
      //   } else {
      //     return 0
      //   }
      // }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM',
        'UPDATE_CART_ITEM',
        'DELETE_CART_STATE'
      ]),
      increment(index) {
        this.INCREMENT_CART_ITEM(index)
      },
      decrement(index) {
        this.DECREMENT_CART_ITEM(index)
      },
      update(index) {
        this.UPDATE_CART_ITEM(index)
      },
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      },
      sendCartForm(e) {
        e.preventDefault()
        const cartFormData = {
          cartInfo: this.CartForm,
          cart: this.$store.state.cart,
          total: this.cartTotalCost
        }
        this.$axios
                .post('https://termolent.ru/cart.php',
                        cartFormData)
                .then(res => {});
        this.DELETE_CART_STATE()
        $('#cartModal').modal('hide')
        this.$router.push('/success')
      }
    }
  }
</script>
<style>

  .v-cart-total-sum {
    color: #ffffff;
  }

  .order-block  {
    background-color: #ffffff;
    border: none;
    border-radius: 8px;
  }

  .total-goods {
    background-color: #ffffff;
    font-size: 1.1rem;
  }

  .v-cart-total-sum {
    color:#6c757d;
    border: none;
    border-radius: 8px;
  }

  .total-name {
    padding: 5px 10px;
    background-color: #6a3df7;
    line-height: 3rem;
    font-size: 1.5rem;
    color: #ffffff;
    border: none;
    border-radius: 0 0 8px 8px;
  }

  .order-btn {
    color: #ffffff ;
    background-color: #6a3df7;
    font-size: 1.5rem;
  }

  .order-btn:hover {
    color: #ffffff;
    background-color: #3e2d8f;
  }

  .purple-color {
    background-color: #6a3df7;
  }
  .cart-btn {
    color: #ffffff;
  }
  .cart-btn:hover {
    color: #ffffff;
  }
  .arrow-link {
    padding: 5px;
    width: 3.5rem;
  }
  .modal-input {
    border: none;
    border-bottom: 2px solid #000000;
  }

  .modal-header {
    border:none;
  }

  .modal-dialog {
    max-width: 300px;
    margin: 120px auto;
    cursor: default;
  }

  .modal-text {
    font-size: 0.9rem;
    padding: 0 30px 15px 30px;
  }
  .cursor {
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVBAMAAABbObilAAAAMFBMVEVMaXH////////////////////////////////////////////////////////////6w4mEAAAAD3RSTlMAlAX+BKLcA5+b6hJ7foD4ZP1OAAAAkUlEQVR4XkWPoQ3CUBQAL4SktoKAbCUjgAKLJZ2ABYosngTJCHSD6joUI6BZgqSoB/+Shqde7sS9x3OGk81fdO+texMtRVTia+TsQtHEUJLdohJfgNNPJHyEJPZTsWLoxShqsWITazEwqePAn69Sw2TUxk1+euPis3EwaXy8RMHSZBIlRcKKnC5hRctjMf57/wJbBlAIs9k1BAAAAABJRU5ErkJggg==),progress;
    background-color: rgba(0, 0, 0, 0.55);
  }

  input[type="text"], input[type="tel"] , textarea {
    outline: none;
    box-shadow:none !important;
  }

  a {
    color: #ffffff;
  }

  a:hover {
    color: #ffffff;
    text-decoration: none;
  }

  .invalid-class {
    border-bottom: 2px solid #ff2f19 !important;
  }

  .error-class {
    color: #ff2f19;
  }

  .min-height-2 {
    max-height: 38px;
  }
</style>
