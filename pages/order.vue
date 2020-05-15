<template>
  <div class="order-wrapper">
  <section class="goods">
    <div class="container ">
      <!-- Заголовок -->

      <!-- Каталог -->
      <div class="goods-grid">
        <div class="row">
         <Sidebar/>
          <div class="col-12 col-lg-9">
            <div class="row">
              <div class="col-12 mb-3">
                <div class="title-section">
                <div class="title">
                  <h1 class="welcome-section-title order-section-title-media" style="color:#ffffff">
                    Каталог <br> На этой странице представлены категории товаров.
                  </h1>
<!--                  <h2 class="welcome-section-subtitle order-section-title-media" style="color:#ffffff">-->
<!--                    Оформить заказ, на интересующие позиции, можно на сайте, либо по телефону. <br>-->
<!--                    Мы также изготавливаем продукцию под ВАШ заказ, любая ширина и длина намотки, для уточнения свяжитесь с нами.-->
<!--                  </h2>-->
                </div>
              </div></div>
              <vCatalog v-for="category in CATEGORIES.slice(0,18)" :key="category.cName" :category_data="category" />
            </div>
          </div>
        </div>
      </div>
      <section class="welcome-section">
        <h2 class="welcome-section-title order-section-title-media" style="color:#ffffff">
          Если у вас возникли вопросы позвоните нам по телефону указанному на сайте и наши специалисты предоставят вам консультацию, ответят на все интересующие вопросы.
        </h2>
      </section>
      <v-call />
    </div>
  </section>
  </div>
</template>


<script>
import vCatalog from '~~/components/commons/v-catalog'
import Sidebar from '../components/Sidebar'
import vCall from '~~/components/v-call'
import { mapActions, mapGetters} from 'vuex'
export default {
  head() {
    return {
      title: 'Чековые ленты - купить темоленту, термоэтикетки, по выгодной цене с доставкой',
      meta: [
        { hid: "description", name: "description", content: "Купить чековая лента, термолента, термоэтикетки в Санкт-Петербурге и Ленинградской области, выгодные цены с доставкой, +7(904)514-46-46, spb@termolent.ru" },
        { hid: "keywords", name: "keywords", content: "Чековая лента, термолента, термоэтикетки, доставка, купить, продажа, интернет-магазин" }
      ]
    }
  },
  components: { vCatalog, vCall, Sidebar },
  props: {},
  data() { return {} },
  computed: { ...mapGetters ([ 'CATEGORIES' ]), },
  methods: { ...mapActions([ 'GET_CATEGORIES_FROM_API' ]), },
  mounted() { this.GET_CATEGORIES_FROM_API() },
}
</script>



<style>
  /*.order-wrapper {*/
  /*  background-image: url('~assets/img/production_bg-2.jpg');*/
  /*  background-position: top center;*/
  /*  background-repeat: no-repeat;*/
  /*  background-attachment: fixed;*/
  /*  padding-top: 35px;*/
  /*  margin-bottom: -45px;*/
  /*}*/
.goods {
  margin: 70px auto 0 auto;
}

.btn-order-call {
  font-size: 22px;
  margin: 1.2rem 0;

}

a.clear-title {
  color: #000000;
  text-decoration: none;
}

.goods-grid {
  margin-top: 70px;
}

.page-link {
  color: #000000;
}


.welcome-section-title {
  line-height: 1.2;
  font-size: 1.6rem;
  margin-bottom: 20px;
  color: #000000!important;
}

.welcome-section-subtitle {
  line-height: 1.2;
  font-size: 1.4rem;
  color: #000000!important;
}
  @media (max-width: 1024px) {
    .order-wrapper {
      background:none;
      padding-top: 0!important;
    }
    .order-section-title-media {
      color: #212529!important;
    }
  }
@media (max-width: 576px) {
  .welcome-section-title {
    font-size: 16px;
  }
  .welcome-section-subtitle {
    font-size: 14px;
  }
  .goods {
    margin-top: 30px !important;
  }
  .goods-grid {
    margin-top: 30px !important;
    margin-bottom: 20px !important;
  }
}
</style>


