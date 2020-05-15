<template>
  <header class="header">
    <!-- Навигация -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white order-1 order-lg-1">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">ТЕРМОЛЕНТА СПБ <br> <p class="navbar-brand-title">Расходные материалы</p></nuxt-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-lg-flex justify-content-center order-4 order-lg-2" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <nuxt-link exact active-class="active" data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-item nav-link" to="/">Главная</nuxt-link>
            <nuxt-link active-class="active" data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-link catalog-mobile" :class="[currentPage.includes('category') ? activeClass: '' ]" to="/order" id="navbarDropdownMenuLink"  aria-haspopup="true" aria-expanded="false">Каталог</nuxt-link>
            <div class="nav-item dropdown">
              <nuxt-link active-class="active" class="nav-link dropdown-toggle" :class="[currentPage.includes('category') ? activeClass: '' ]" to="/order" id="navbarDropdownMenuLink"  aria-haspopup="true" aria-expanded="false">Каталог</nuxt-link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <nuxt-link class="dropdown-item" to="/category/chekovaya-lenta-57">Чековая лента 57мм</nuxt-link>
                <nuxt-link class="dropdown-item" to="/category/chekovaya-lenta-80">Чековая лента 80мм</nuxt-link>
                <nuxt-link class="dropdown-item" to="/category/chekovaya-lenta-44">Чековая лента 44мм</nuxt-link>
                <nuxt-link class="dropdown-item" to="/category/chekovaya-lenta-bankomatov">Лента для банкоматов</nuxt-link>
                <nuxt-link class="dropdown-item" to="/category/termoetiketki-standart">Термоэтикетки(эко)стандарт</nuxt-link>
                <nuxt-link class="dropdown-item" to="/category/termoetiketki-top">Термоэтикетки(топ)</nuxt-link>
                <nuxt-link class="dropdown-item" to="/category/termoetiketki-eco">Термоэтикетки(эко)нестандарт</nuxt-link>
                <nuxt-link class="dropdown-item" to="/category/termotransfernye-etiketki-plg">Термотрансферные этикетки</nuxt-link>
                <nuxt-link class="dropdown-item" to="/category/bumaga-formatnya">Бумага форматная</nuxt-link>
                <nuxt-link class="dropdown-item" to="/category/strejch-plenka">Стрейч плёнка</nuxt-link>
                <nuxt-link class="dropdown-item" to="/category/klejkaya-lenta-skotch">Клейкая лента</nuxt-link>
                <nuxt-link class="dropdown-item" to="/category/etiket-pistolety">Этикет пистолеты</nuxt-link>
                <nuxt-link class="dropdown-item" to="/category/etiket-lenta">Этикет лента</nuxt-link>
                <nuxt-link class="dropdown-item" to="/category/ribbony-wax-vosk">Риббоны WAX воск (standart)</nuxt-link>
              </div>
            </div>
            <nuxt-link active-class="active" data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-item nav-link" to="/about">Контакты</nuxt-link>
            <nuxt-link active-class="active" data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-item nav-link" to="/delivery">Доставка</nuxt-link>
            <nuxt-link active-class="active" data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-item nav-link" to="/payment">Оплата</nuxt-link>
          </div>
        </div>


        <!-- Кнопка корзина -->
        <div class="header-btn text-center order-3 order-lg-3">

          <nuxt-link :class="[currentPage.includes('cart') ? hideClass: '' ]"  to="/cart" class="cart-link">
            <button class="btn-purple" type="submit">
              В корзину [{{this.$store.getters.CART.length}}]
              <img class="cart-svg" src="data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' height='17' width='17'%3E%3Cpath d='M18 17.987V7H2v11l16-.013zM4.077 5A5.996 5.996 0 0110 0c2.973 0 5.562 2.162 6.038 5H20v14.986L0 20V5h4.077zm9.902-.005C13.531 3.275 11.86 2 10 2 8.153 2 6.604 3.294 6.144 4.995c.92 0 7.654.03 7.835 0z' fill='%23FFF'/%3E%3C/svg%3E" alt="">
            </button>
          </nuxt-link>
          <div class="tel-number">
            <span class="call-icon-header material-icons"></span>
            <a class="tel-number-link" href="tel:+79045144646">+7(904)-514-46-46</a>
          </div>
        <div class="row ml-1 mr-2">
          <div class="tel-number-mobile">
            <a class="tel-number-link" href="tel:+79045144646"><span class="call-icon-header material-icons"></span></a>
          </div>
          <nuxt-link :class="[currentPage.includes('cart') ? hideClass: '' ]"  to="/cart" class="cart-link-mobile ml-4">
            <button class="btn-purple" type="submit">
              <img class="cart-svg" src="data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' height='17' width='17'%3E%3Cpath d='M18 17.987V7H2v11l16-.013zM4.077 5A5.996 5.996 0 0110 0c2.973 0 5.562 2.162 6.038 5H20v14.986L0 20V5h4.077zm9.902-.005C13.531 3.275 11.86 2 10 2 8.153 2 6.604 3.294 6.144 4.995c.92 0 7.654.03 7.835 0z' fill='%23FFF'/%3E%3C/svg%3E" alt="">
              <p v-if="this.$store.getters.CART.length>0" class="cart-qty-header" style="color:#ffffff">{{this.$store.getters.CART.length}}</p>
            </button>
          </nuxt-link>
        </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        activeClass: 'active',
        hideClass: 'hide-cart',
      };
    },
    computed: {
      currentPage() {
        return this.$route.path;
      }
    }
  }

</script>
<style>
  .catalog-mobile {
    display: none;
  }
  .tel-number-mobile {
    display: none;
  }
  .cart-link-mobile {
    display: none;
  }
  .header {
    background-color: #ffffff;
  }

  .tel-number {
    font-size: 0.8rem;
  }

  .tel-number-link {
    color: #212529;
  }

  .tel-number-link:hover {
    color: #212529;
    text-decoration: none;
  }

  .btn-purple {
    font-size: 16px;
    background-color: #3e2d8f;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px 10px;
    color: white;
    margin-bottom: 0.2rem;
  }

  .cart-svg {
    padding-bottom: 5px;
  }

  .hide-cart {
    display: none;
  }
  .dropdown:hover > .dropdown-menu {
    display: block;
  }
  .navbar-brand {
    font-size: 1rem;
  }
  .navbar-brand-title {
    font-size: 0.8rem;
    border-top: 1px solid gray;
    margin-bottom: 0;
  }
  .call-icon-header::before  {
    content: "call";
    font-size: 1rem;
    position: relative;
    top: 4px;
  }
  .material-icons {
    font-size: 0;
  }
  @media (max-width: 991px) {
    .navbar-brand {
      margin-right: 0;
    }
    .catalog-mobile {
      display: block;
    }
    .dropdown {
      display: none!important;
    }
    .cart-qty-header {
      position: relative;
      bottom: 28px;
      font-size: 14px;
    }
    .cart-svg {
      width: 26px;
      position: relative;
      right: 4px;
      bottom: 2px;
    }
    .btn-purple {
      height: 35px;
      width: 40px;
    }
    .tel-number-mobile {
      display: block;
    }
    .tel-number {
      display: none;
    }
    .cart-link-mobile {
      display: block;
    }
    .cart-link {
      display: none;
    }
    .call-icon-header::before  {
      content: "call";
      font-size: 2rem;
    }
  }
  @media (max-width: 576px) {

    .navbar-brand {
      font-size: 12px;

    }
    .navbar-brand-title {
      font-size: 10px;
      border-top: 1px solid gray;
      margin-bottom: 0;
    }
    .btn-purple {
      font-size: 14px !important;
    }
    .tel-number {
      font-size: 14px;
    }
    .cart-qty-header {
      position: relative;
      bottom: 26px;
      font-size: 13px;
    }
  }
  @media (max-width: 334px) {
    .navbar-brand {
      margin-bottom: 20px;
    }
  }


</style>