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
                    <div class="col-lg-3 footer-brand">

                        <!-- Content -->
<!--                        <h5 class="text-uppercase footer-title">ТЕРМОЛЕНТА СПБ</h5>-->
<!--                        <p class="footer-subtitle">Расходные материалы</p>-->
                        <nuxt-link to="/"><img class="navbar-logo-footer" src="~~/assets/svg/logo-white.svg" alt=""></nuxt-link>
                        <p class="footer-subtitle-2">интернет-магазин бумажной продукции и расходных материалов из импортного сырья.</p>
                    </div>
                    <!-- Grid column -->

                    <hr class="clearfix w-100 d-md-none pb-3">

                    <!-- Grid column -->
                    <div class="col-lg-3 mb-3">

                        <!-- Links -->
                        <h5 class="footer-headings">Информация</h5>

                        <ul class="list-unstyled footer-info-section">
                            <li>
                                <nuxt-link class="footer-info-links" to="/">Главная</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="footer-info-links" to="/order">Каталог</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="footer-info-links" to="/about">Контакты</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="footer-info-links" to="/delivery">Доставка</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="footer-info-links" to="/payment">Оплата</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="footer-info-links" to="/cart">Корзина</nuxt-link>
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
                                <nuxt-link class="footer-info-links" to="/category/chekovaya-lenta-57">Чековая лента 57мм</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="footer-info-links" to="/category/chekovaya-lenta-80">Чековая лента 80мм</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="footer-info-links" to="/category/chekovaya-lenta-44">Чековая лента 44мм</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="footer-info-links" to="/category/termoetiketki-standart">Термоэтикетки эко</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="footer-info-links" to="/category/termoetiketki-top">Термоэтикетки топ</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="footer-info-links" to="/category/bumaga-formatnya">Бумага форматная</nuxt-link>
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
                                <a class="footer-info-links" href="https://yandex.ru/maps/-/CCQxmNUddC">г. Санкт-Петербург, 195112, Ударников 38 к.2, лит.Б</a>
                            </li>
                            <li>
                                <span class="mail-icon material-icons"></span>
                                <a class="footer-info-links" href="mailto:spb@termolent.ru">spb@termolent.ru</a>
                            </li>
                            <li>
                                <span class="call-icon material-icons"></span>
                                <a class="footer-info-links" href="tel:+79045144646">+7(904)-514-46-46</a>
                            </li>
                            <li>
                                <img class="footer-whatsapp-logo" src="~~/assets/svg/whatsapp-logo.svg" alt="">
                                <a class="footer-info-links" href="https://wa.me/79045144646">+7(904)-514-46-46</a>
                            </li>
                            <li>
                                <img class="footer-whatsapp-logo" src="~~/assets/svg/telegram-logo.svg" alt="">
                                <a class="footer-info-links" href="https://t.me/termolent">@termolent</a>
                            </li>
                        </ul>



                    </div>
                    <!-- Grid column -->

                </div>
                <!-- Grid row -->

            </div>
            <!-- Footer Links -->

            <!-- Copyright -->
            <div class="footer-copyright text-center py-3">© 2018
                <nuxt-link class="" to="/"> ТЕРМОЛЕНТ</nuxt-link>
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
a.footer-info-links:hover {
    color: white!important;
}
.navbar-logo-footer {
    width: 80%;
}
.footer-brand {
    margin-top: 0.25rem;
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
    .footer-brand {
        margin-top: 1rem;
    }
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
        .navbar-logo-footer {
            width: 75%;
        }
        .list-unstyled {
            text-align: justify;
        }
        .footer-headings {
            text-align: justify;
        }
        .footer-subtitle-2 {
            padding: 0 40px 0 40px;
        }
       ul.list-about li {
           margin-bottom: 10px;
       }
        .footer-subtitle{

            margin-right: 0;
        }
    }
</style>