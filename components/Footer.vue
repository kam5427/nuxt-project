<template>
    <!-- Footer -->
    <footer class="page-footer font-small blue pt-4 pb-4">
        <div class="footer-wrapper">
        <div class="container">

            <!-- Footer Links -->
            <div class="container-fluid text-center text-md-left">

                <!-- Grid row -->
                <div class="row">

                    <!-- Grid column -->
                    <div class="col-lg-3 mt-3">

                        <!-- Content -->
                        <h5 class="text-uppercase footer-title">ТЕРМОЛЕНТА СПБ</h5>
                        <p class="footer-subtitle">Расходные материалы</p>
                        <p class="footer-subtitle-2">интернет-магазин бумажной продукции и расходных материалов из импортного сырья.</p>
                    </div>
                    <!-- Grid column -->

                    <hr class="clearfix w-100 d-md-none pb-3">

                    <!-- Grid column -->
                    <div class="col-lg-3 mb-3">

                        <!-- Links -->
                        <h5 class="footer-headings">Информация</h5>

                        <ul class="list-unstyled">
                            <li>
                                <nuxt-link to="/">Главная</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/order">Каталог</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/about">Контакты</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/delivery">Доставка</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/payment">Оплата</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/cart">Корзина</nuxt-link>
                            </li>
                        </ul>

                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-lg-3 mb-3">

                        <!-- Links -->
                        <h5 class="footer-headings">Каталог</h5>

                        <ul class="list-unstyled">
                            <li>
                                <nuxt-link to="/category/chekovaya-lenta-57">Чековая лента 57мм</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/category/chekovaya-lenta-80">Чековая лента 80мм</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/category/chekovaya-lenta-44">Чековая лента 44мм</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/category/termoetiketki-standart">Термоэтикетки эко</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/category/termoetiketki-top">Термоэтикетки топ</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/category/bumaga-formatnya">Бумага форматная</nuxt-link>
                            </li>

                        </ul>

                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-lg-3 mb-3">

                        <!-- Links -->
                        <h5 class="footer-headings">Контакты</h5>

                        <ul class="list-unstyled list-about">
                            <li>
                                <span class="fa-map material-icons"></span>
                                <a href="https://yandex.ru/maps/2/saint-petersburg/?from=api-maps&ll=30.434108%2C59.933426&mode=usermaps&origin=jsapi_2_1_76&um=constructor%3Acd62fcdda9cdd961fea73cee8112761eb0c9f802706b15d4fc5eb7c0544ed79f&z=17">г. Санкт-Петербург, 195112, Уткин 13 к.5, пом.5-Н</a>
                            </li>
                            <li>
                                <span class="mail-icon material-icons"></span>
                                <a href="mailto:spb@termolent.ru">spb@termolent.ru</a>
                            </li>
                            <li>
                                <span class="call-icon material-icons"></span>
                                <a href="tel:+79045144646">+7(904)-514-46-46</a>
                            </li>
                            <li>
                                <img class="footer-whatsapp-logo" src="~~/assets/svg/whatsapp-logo.svg" alt="">
                                <a href="https://wa.me/79045144646">+7(904)-514-46-46</a>
                            </li>

                        </ul>



                    </div>
                    <!-- Grid column -->

                </div>
                <!-- Grid row -->

            </div>
            <!-- Footer Links -->

            <!-- Copyright -->
            <div class="footer-copyright text-center py-3">© 2020
                <nuxt-link class="" to="/"> Термолента СПБ</nuxt-link>
            </div>
            <!-- Copyright -->
        </div>
        </div>

    </footer>
    <!-- Footer -->
</template>

<script>

</script>

<style>
    html { height: 100%; }
    body {
        min-height:100%;
        position:relative;
        padding-bottom: 70px;
    }
.page-footer {
    color: #ffffff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    width: 100%;
}
footer .row {
    background-color: #3e2d8f;
}
footer .footer-wrapper {
    background-color: #3e2d8f;
}
footer .container {
    background-color: #3e2d8f;
    padding-top: 30px;
}
.footer-title {
    font-size: 1.1rem;
    margin-bottom: 5px;
    line-height: 1rem;
}
.footer-subtitle {
    color: #ffffff;
    font-size: 0.9rem;
    border-top: 1px solid #ffffff;
    margin-right: 90px;
}
    .footer-subtitle-2 {
        color: #ffffff;
        font-size: 0.9rem;
        margin-top: 10px;
      margin-right: 40px;
    }
.list-unstyled {
    margin-left: 0;
}

.fa-map::before {
    content: "location_on";
    font-size: 1rem;
    position: relative;
    top: 4px;
}

.mail-icon::before  {
    content: "mail_outline";
    font-size: 1rem;
    position: relative;
    top: 4px;
}

.call-icon::before  {
    content: "call";
    font-size: 1rem;
    position: relative;
    top: 4px;
}
.footer-whatsapp-logo {
    width: 18px;
    position: relative;
    bottom: 2px;
}
.list-about li {
    font-size: 14px;
}
.list-unstyled li a {
    color: #e5e5e5 !important;
    font-size: 15px;
}
    ul.list-about li {
        margin-bottom: 5px;
    }

.list-unstyled li a:hover {
  color: #000000 !important;
}
.footer-copyright {
    font-size: 0.8rem;
}
    .kupit-chekovyu-lenty {
        font-size: 14px;
        color: #3e2f9f;
    }
    .kupit-chekovyu-lenty:hover {
        color: #3e2f9f;
    }

@media (max-width: 1199px) {
    .footer-subtitle {
        margin-right: 45px;
    }
    .footer-subtitle-2 {
        margin-right: 0;
    }
}
@media (max-width: 992px) {
        .footer-subtitle {
            margin-right: 20px;
            border-top: none;
        }

    .footer-subtitle-2 {
        margin-right: 0;
        margin-bottom: 10px;
    }
    }
    @media (max-width: 768px) {
        .list-unstyled {
            text-align: justify;
        }
        .footer-headings {
            text-align: justify;
        }
       ul.list-about li {
           margin-bottom: 10px;
       }
        .footer-subtitle{

            margin-right: 0;
        }
    }
</style>