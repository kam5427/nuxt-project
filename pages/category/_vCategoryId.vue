<template>
  <div>
    <div class="goods">
      <div class="container">
        <div class="row">
          <Sidebar/>
          <div class="col-12 col-lg-9">
            <div class="title-section">
              <h1 class="title">{{category.cName}}</h1>
            </div>
            <div class="category-desc">
             {{category.cDesc}} <br> <b>{{category.cModel}}</b> <br> {{category.cQuestion}}  <b>{{category.cAnswer}}</b>
            </div>
            <div class="goods-grid v-category-id-grid">
              <div class="row">
                <v-product @addToCart="addToCart" v-for="product in paginatedProducts" :key="product.id" :product="product"/>
              </div>
              <div class="v-product-pagination mt-3">
                <div class="page mr-1" v-for="page in pages" :class="{'page-selected': page === pageNumber}" :key="page" @click="pageClick(page)">{{page}}</div>
              </div>
            </div>
            <h5 class="category-desc mt-3">
              Если у вас возникли вопросы позвоните нам по телефону указанному на сайте и наши специалисты предоставят вам консультацию, ответят на все интересующие вопросы.
            </h5>
          </div>
        </div>

        <!--        <v-call />-->
        <!--  Товар добавлен в корзину  -->
      </div>

    </div>
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
  import vProduct from '~~/components/category/v-product'
  import Sidebar from '~~/components/Sidebar'
  // import vCall from '~~/components/v-call'
  import { mapState, mapActions } from 'vuex'

  export default {
    head() {
      return {
        title: this.category.cTitle,
        meta: [
          { hid: "description", name: "description", content: this.category.cMeta},
          { hid: "keywords", name: "keywords", content: this.category.cKeys }
        ]
      }
    },
    data() {
      return {
        productsPerPage: 12,
        pageNumber: 1,
        addedProduct: false,
      }
    },
    components: {
      vProduct,
      Sidebar,

      // vCall
    },
    methods: {
      ...mapActions(['ADD_TO_CART']),
      addToCart(data) {
        this.ADD_TO_CART(data);
        this.addedProduct = true;
      },
      pageClick(page) {
        this.pageNumber = page;
      },
      closeAdded() {
        this.addedProduct = false;
      }
    },
    asyncData ({ app, params, route, error }) { app.store.dispatch('GET_CURRENT_CATEGORY', { route }) },
    computed: {
      ...mapState({ category: 'currentCategory' }),
      pages() {
        return Math.ceil(this.category.products.length / 12)
      },
      paginatedProducts() {
        let from = (this.pageNumber-1) * this.productsPerPage;
        let to = from + this.productsPerPage;
        return this.category.products.slice(from, to);
      },
    }
  }
</script>

<style>

  .title {
    font-size: 2rem;
  }
  .goods {
    margin: 70px auto 0 auto;
  }

  .goods-grid {
    margin-top: 50px;
  }

  .v-category-id-grid {
    margin-top: 45px!important;
  }

  .v-product-pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .page {
    padding: 8px;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
  }

  .page:hover {
    background: #3e2d8f;
    color: #ffffff;
    cursor: pointer;
  }
  .page-selected {
    background: #6a3df7;
    color: #ffffff;
  }
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

  @media (max-width: 576px) {
    .goods {
      margin: 40px auto 0 auto;
    }
    .goods-grid {
      margin-top: 40px;
    }

    .title {
      font-size: 16px;
    }
    .category-desc {
      font-size: 14px;
    }
  }
</style>
