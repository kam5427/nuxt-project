<template class="main-background-color">
<div class="main-page-wrapper">
  <div class="container">
    <!-- Заголовок -->
    <section class="welcome-section">
      <h1 class="mb-4 welcome-section-title welcome-section-title-media" style="color: #ffffff">Добро пожаловать!<br>Мы занимаемся продажей чековой ленты и рулонной бумажной продукции с многолетним опытом работы на рынке!
        <br> Здесь Вы можете приобрести чековую ленту, термоэтикетки, ленту для банкоматов в розницу либо оптом!</h1>
    </section>

    <!-- Категории продуктов -->
    <div class="row">
      <vCatalog v-for="category in CATEGORIES.slice(0,3)" :key="category.cName" :category_data="category" />
    </div>

    <div class="show-all text-right">
      <nuxt-link active-class="active" class="all-goods-link" to="/order">
        <h5 class="welcome-section-title-media" style="color: #ffffff">Показать весь товар
<!--          <img class="arrow-link" src="~~/assets/svg/arrow-link.svg" alt="стрелка перейти"> -->
          <svg class="arrow-link-svg-path"width="45" viewBox="0 0 32 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.347 4.85355C31.5422 4.65829 31.5422 4.34171 31.347 4.14645L28.165 0.964466C27.9697 0.769204 27.6531 0.769204 27.4579 0.964466C27.2626 1.15973 27.2626 1.47631 27.4579 1.67157L30.2863 4.5L27.4579 7.32843C27.2626 7.52369 27.2626 7.84027 27.4579 8.03553C27.6531 8.2308 27.9697 8.2308 28.165 8.03553L31.347 4.85355ZM0.993408 5H30.9934V4H0.993408V5Z" fill="black"/>
          </svg>
        </h5>
      </nuxt-link>
    </div>
    <section class="welcome-section">
      <h2 class="mb-4 welcome-section-title welcome-section-title-media welcome-section-questions" style="color: #ffffff">
        Если у вас возникли вопросы позвоните нам по телефону указанному на сайте и наши специалисты предоставят вам консультацию, ответят на все интересующие вопросы.
      </h2>
    </section>

    <section class="welcome-section">
      <h2 class="mb-4 welcome-section-title welcome-section-title-media" style="color: #ffffff">С нами удобно работать!</h2>
    </section>

    <div class="row">

      <div class="col-12 col-lg-4 mb-5">
        <div class="value">
          <div class="row">
            <div class="col-lg-8 d-flex align-items-center justify-content-center">
              <div class="value-title">Доступность</div>
            </div>
            <div class="col-lg-4">
              <div class="value-icon text-center">
                <img class="value-img" src="~~/assets/svg/piggy-bank.svg" alt="Доступность">
              </div>
            </div>
            <div class="col-12">
              <div class="value-desc">
                <h3 class="value-desc-title">Доступная ценовая политика. <br> У нас найдется достойное предложение для любого бюджета.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4 mb-5">
        <div class="value">
          <div class="row">
            <div class="col-lg-8 d-flex align-items-center justify-content-center">
              <div class="value-title">Качество</div>
            </div>
            <div class="col-lg-4">
              <div class="value-icon text-center">
                <img class="value-img" src="~~/assets/svg/product.svg" alt="Качество">
              </div>
            </div>
            <div class="col-12">
              <div class="value-desc">
                <h3 class="value-desc-title">Высокое качество. Продукция выполнена из качественных материалов (Mitsubishi, Lomond)</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4 mb-5">
        <div class="value">
          <div class="row">
            <div class="col-lg-8 d-flex align-items-center justify-content-center">
              <div class="value-title">Наличие</div>
            </div>
            <div class="col-lg-4">
              <div class="value-icon text-center">
                <img class="value-img" src="~~/assets/svg/shopping-mall.svg" alt="Наличие">
              </div>
            </div>
            <div class="col-12">
              <div class="value-desc">
                <h3 class="value-desc-title">Наличие стандартных типоразмеров продукции. Также мы изготавливаем продукцию на заказ.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


    <!-- О нас -->
    <section class="welcome-section">
      <h2 class="mb-4 welcome-section-title welcome-section-title-media" style="color: #ffffff">Коротко о нас</h2>
    </section>

    <div class="row">
      <div class="col-lg-10">
        <div class="about-us">
          <div class="row">
            <div class="col-12">
              <div class="about-us-desc">
                В сфере наших профессиональных интересов постоянное снабжение по требованию необходимых
                расходных материалов для всего спектра оборудования
              </div>
              <div class="about-us-title">
                Нам доверяют:
              </div>
              <ul class="list-style trust-list">
                <li>Государственные структуры и крупные сетевые компании (Retail)</li>
                <li>Ресторанный и гостиничный бизнес</li>
                <li>Супермаркеты</li>
                <li>Курьерские службы доставки</li>
                <li>Туристические компании</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import vCatalog from '~~/components/commons/v-catalog'
  import { mapActions, mapGetters} from 'vuex'
  export default {
    head() {
      return {
        title: 'Чековая лента, Термолента, Термоэтикетки купить, доставка, оптом | Санкт-Петербург',
        meta: [
          { hid: "description", name: "description", content: "Купить чековые ленты, термоленты, термоэтикетки,  Санкт-Петербург, +7(904) 514-46-46, бесплатная доставка при оптовом заказе!" },
          { hid: "keywords", name: "keywords", content: "чековая лента,термолента,кассовая лента, купить чековую ленту, купить чековая лента, термоэтикетка, термоэтикетки, рулонная бумага,бумага рулон,термолента для банкоматов,термолента для терминалов,рулон,этикетка купить,кассовый лента" }
        ]
      }
    },
    components: { vCatalog },
    props: {},
    data() { return {} },
    computed: { ...mapGetters ([ 'CATEGORIES' ]) },
    methods: { ...mapActions([ 'GET_CATEGORIES_FROM_API' ]), },
    mounted() { this.GET_CATEGORIES_FROM_API() },
  }
</script>

<style>
  .arrow-link-svg-path path {
    fill: #ffffff;
  }
  .main-background-color {
    background-color: #727fdb;
  }
  .main-page-wrapper {
    background-image: url('~assets/img/page-bg-1.jpg');
    background-position: top center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    padding-top: 55px;
    padding-bottom: 55px;
    margin-bottom: -45px;
  }

  .welcome-section {
    margin: 55px 0;
  }

  .welcome-section-title {
    line-height: 1.2;
    font-size: 1.6rem;
  }

  a.all-goods-link {
    color: #53575b;
    text-decoration: none;
  }

  .show-all:hover {
    transform: translate(10px);
    transition: .3s;
  }

  .arrow-link {
    padding: 5px;
    width: 3.5rem;
  }

  .card-title {
    margin-bottom: 15px;
  }

  .category-section {
    margin-right: 10px;
  }

  a.category-title {
    color: #626fc9;
    font-weight: 700;
  }

  .value {
    padding: 25px 15px;
    color: #ffffff;
    background-color: #3e2d8f;
    border-radius: 8px;
    border: none;
    box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, .2);
  }

  .value-title {
    font-size: 1.4rem;

  }

  .value-desc {
    padding: 15px 5px 15px 35px;
    min-height: 146px;
  }

  .value-img {
    height: 50px;
  }

  .value-desc-title {
    font-size: 18px;
    font-weight: normal;
    line-height: 1.5;
  }
  .about-us {
    background-color: #ffffff;
    padding: 40px 30px;
    border-radius: 8px;
    border: none;
    box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, .2);
  }

  .about-us-desc {
    margin-bottom: 20px;
    font-size: 18px;
  }

  .about-us-title {
    margin-bottom: 20px;
  }

  ul {
    margin: auto 20px;

  }
  .list-style li {
    margin: auto 30px;
    padding: 10px 10px;

  }
  @media (max-width: 1024px) {
    .arrow-link-svg-path path {
      fill: #000000;
    }
    .main-page-wrapper {
      background-image: none;
      padding-top: 35px !important;
    }
    .welcome-section-title-media {
      color: #212529!important;
    }
  }
  @media (max-width: 576px) {
    .show-all {
      margin-top: 15px;
    }
    .welcome-section {
      margin-top: 0 !important;
      margin-bottom: 30px !important;
    }
    .welcome-section-title {
      font-size: 16px;
    }
    .welcome-section-questions {
      margin-top: 25px;
    }
    .value-title  {
      font-size: 16px;
    }
    .value-desc-title {
      font-size: 14px;
    }
    .value-desc {
      min-height: 100px;
    }
    .about-us-desc, .about-us-title, .trust-list {
      font-size: 14px;
    }
    .trust-list {
      padding-left: 0;
    }

  }

</style>
