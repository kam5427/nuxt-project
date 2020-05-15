<template>
    <div class="v-product-page mt-5">
        <div class="container">
            <div class="row">
<!--                <div class="col-12">-->
<!--                    <div class="breadcrumbs">-->
<!--                        <div class="row">-->
<!--                            <div class="col-1">-->
<!--                                <nuxt-link to="/"><h6 style="color: #000000">Главная</h6></nuxt-link>-->
<!--                            </div>-->
<!--                            <div class="col-1">-->
<!--                                <nuxt-link :to="`category/${{currentProduct.category_id}}`"><h6 style="color: #000000">Каталог</h6></nuxt-link>-->
<!--                            </div>-->
<!--                            <div class="col-3">-->
<!--                                <nuxt-link to="/order"><h6 style="color: #000000">{{this.product.pName + " " + this.product.pType}}</h6></nuxt-link>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
                        <div class="v-category-products-description p-3 mt-4 mt-md-0 mt-lg-0 col-lg-7 col-md-8 order-lg-1 order-2">
                            <h1 class="v-category-product-name">{{ product.pName }} {{product.pType}}</h1>
                            <h2 class="v-category-product-description"></h2>
                            <p class="v-category-product-description-text">{{product.pDesc}} </p>
                            <p class="v-category-product-description-min">{{product.pMinPrice}}</p>
                            <p class="v-category-product-description-min">{{ product.pMinOrder}}</p>
                            <h3 class="v-category-product-character mt-3">Характеристики</h3>
                            <p class="v-category-product-character-desc">{{product.pBrand}}</p>
                            <p class="v-category-product-character-desc">{{product.pWidth}}</p>
                            <p class="v-category-product-character-desc">{{product.pLength}}</p>
                            <p class="v-category-product-character-desc">{{product.pDiam}}</p>
                            <p class="v-category-product-character-desc">{{product.pPlot}}</p>
                            <p class="v-category-product-character-desc">{{product.pMaterial}}</p>
                            <p class="v-category-product-character-desc">{{product.pQtyProd}}</p>
                            <p class="v-category-product-character-desc">{{product.pQtyPack}}</p>
                        </div>
                        <div class="product-image col-lg-5 col-md-4 order-lg-2 order-1">
                            <div class="row">
                                <div class="col-12 price-block-padding-0 text-center"><img class="article-image" :src="product.pImg" alt="Чековая лента"></div>
                                <div class="col-12 price-block-padding-0 text-center"> <p class="v-category-product-stock mb-0">{{ product.Stock }}</p></div>
                                <div class="col-12 price-block-padding-0 text-center"> <p class="v-category-product-stock-orange mb-0">{{ product.StockOrange }}</p></div>
                                <div class="col-12 price-block-padding-0 text-center"> <p class="v-category-product-price mb-0">Цена: {{ product.pPrice }} руб/шт</p></div>
                                <div class="col-12" id="accordion">
                                    <div class="">
                                        <div class="opt-price" id="headingOne">
                                            <h5 class="mb-0">
                                                <div class="text-center" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                   Показать оптовые цены
                                                </div>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div class="text-center pb-2 opt-price-spoiler" style="color: #6a3df7; font-weight: bold">
                                            {{product.pOptPrice}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="v-product-cart-btn text-center col-12">
                                   <div class="v-product-cart-btn-wrapper">
                                       <button class="add-btn" @click="addToCart" >
                                           <p class="v-product-cart-btn-text">Купить</p>
                                           <!--                    <img class="product-svg" src="data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' height='19' width='19'%3E%3Cpath d='M18 17.987V7H2v11l16-.013zM4.077 5A5.996 5.996 0 0110 0c2.973 0 5.562 2.162 6.038 5H20v14.986L0 20V5h4.077zm9.902-.005C13.531 3.275 11.86 2 10 2 8.153 2 6.604 3.294 6.144 4.995c.92 0 7.654.03 7.835 0z' fill='%23FFF'/%3E%3C/svg%3E" alt="добавить в корзину">-->
                                       </button>
                                   </div>
                            </div>
                            </div>

                        </div>
                <div class="col-12 order-4 mt-3 tab-block">
               <div class="tabs-desc-wrapper" style="background-color: #ffffff">
                   <ul class="nav nav-tabs nav-tabs-desc" style="background-color: #ffffff" id="myTab" role="tablist">
                       <li class="nav-item" role="presentation">
                           <a class="nav-link active tabs-link-desc" style="color:#000000" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Описание</a>
                       </li>
                       <li class="nav-item" role="presentation">
                           <a class="nav-link tabs-link-desc" style="color:#000000" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Доставка</a>
                       </li>
                       <li class="nav-item" role="presentation">
                           <a class="nav-link tabs-link-desc" style="color:#000000" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Контакты</a>
                       </li>
                   </ul>
                   <div class="tab-content" id="myTabContent">
                       <div class="tab-pane fade show active p-3" id="home" role="tabpanel" aria-labelledby="home-tab"> <p class="v-category-product-description-text"> {{product.pTabDesc}}</p></div>
                       <div class="tab-pane fade p-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                           <ul class="list-unstyled list-delivery">
                           <li><span class="done material-icons" aria-hidden="true"></span><b>Бесплатная</b> доставка при заказе от 5000 руб.</li>
                           <li><span class="done material-icons" aria-hidden="true"></span>Самовывоз в Санкт-Петербурге</li>
                           <li><span class="done material-icons" aria-hidden="true"></span>Стоимость доставки при сумме заказа менее 5000 руб. - 300 руб. в пределах КАД</li>
                           <li><span class="done material-icons" aria-hidden="true"></span>Отправка в регионы транспортной компанией, <b>бесплатная</b> доставка до терминала</li>
                       </ul></div>
                       <div class="tab-pane fade p-3" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                           <ul class="list-unstyled list-tabs-links">
                               <li>
                                   <span class="fa-map material-icons"></span>
                                   <a href="https://yandex.ru/maps/-/CCQlzFgKwD">Адрес самовывоза: г. Санкт-Петербург, 195112, Ударников 38 к.2, лит.Б</a>
                               </li>
                               <li>
                                   <span class="mail-icon material-icons"></span>
                                   <a href="mailto:spb@termolent.ru">spb@termolent.ru - электронный адрес</a>
                               </li>
                               <li>
                                   <span class="call-icon material-icons"></span>
                                   <a href="tel:+79045144646">+7(904)-514-46-46 - Николай</a>
                               </li>
                               <li>
                                   <span class="call-icon material-icons"></span>
                                   <a href="tel:+79045144646">+7(951)-673-33-43 - Склад</a>
                               </li>
                               <li>
                                   <img class="footer-whatsapp-logo" src="~~/assets/svg/whatsapp-logo.svg" alt="">
                                   <a href="https://wa.me/79045144646">+7(904)-514-46-46 - WhatsApp</a>
                               </li>

                           </ul>
                       </div>
                   </div>
               </div>
                </div>
                        <div class="col-12 order-5">
                            <h5 class="v-product-page-questions">
                                Если у вас возникают какие-либо трудности с выбором необходимой продукции, то задайте вопрос нашим специалистам. Они с радостью помогут вам сделать рентабельную покупку.
                            </h5>
                        </div>


            </div>

        </div>


    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: this.product.pName + " " + this.product.pType + " в Санкт-Петербурге | Интернет-магазин termolent.ru",
                meta: [
                    { hid: "description", name: "description", content: this.product.pMeta},
                    { hid: "keywords", name: "keywords", content: this.product.pKeys }
                ]
            }
        },
        props: {
            product: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            addToCart() {
                this.$emit('addToCart', this.product)
            }
        }
    }
</script>

<style>
    .list-unstyled.list-tabs-links li a {
        color: #000000!important;
        font-size: 16px;
    }
    .tab-block {
        padding-left: 0px!important;
    }

    .done::before {
      top: 5px!important;
        margin-right: 5px;
      position: relative;
        font-size: 22px;
    }

    .opt-price {
        cursor: pointer;
        padding: 10px;
        background-color: #ffffff;
    }
    .opt-price:hover {
        color: #3e2d8f;

    }
    .opt-price-spoiler {
        background-color: #ffffff;
    }
    .v-category-product-stock {
        color: #01a715;
        background-color: #ffffff;
        font-size: 18px;
    }
    .v-category-product-stock-orange {
        color: #ff4500;
        background-color: #ffffff;
        font-size: 18px;
    }
    .v-category-products-description {
        background-color: #ffffff;
    }
    .v-product-cart-btn-wrapper {
        background-color: #ffffff;
        padding: 10px;
    }
    .v-product-cart-btn button {
        background-color: #6a3df7;
        border: none;
        border-radius: 4px;
        min-width: 200px;
    }
    .v-product-cart-btn button:hover {
        background-color: #3e2d8f;
    }
    .v-product-cart-btn button:focus {
        background-color: #16c67a;
    }
    .v-product-cart-btn-text {
        margin: 0;
        color:#ffffff;
        font-size: 1.4rem;
    }
    .v-category-product-name {
        font-size: 1.6rem;
        color: #6a3df7;
    }
    .v-category-product-price {
        font-size: 1.4rem;
        color: #6a3df7;
        background-color: #ffffff;
    }
    .v-category-product-description {
        font-size: 1.4rem;
        color: #6a3df7;
    }
    .v-category-product-description-min {
        font-weight: bold;
        margin-bottom: 10px;
    }
    .v-category-product-character {
        font-size: 1.2rem;
        color: #6a3df7;
    }
    .v-category-product-character-desc {
        margin-bottom: 8px;
    }
    .article-image {
        width: 100%;
    }
    .v-category-product-description-text {
        margin-bottom: 15px;
    }
    .v-product-page-questions {
        padding: 15px 15px 15px 15px;
        margin-left: -15px;
        background-color:  #ffffff;
        color: #6a3df7;
        margin-top: 30px;
    }
    @media (max-width: 576px) {
        .v-category-product-name {
            font-size: 22px;
            text-align: center;
            margin-bottom: 1rem;
        }
        .v-category-product-stock {
            margin-top: 15px;
            padding: 10px;
        }
        .price-block-padding-0 {
            padding-right: 0;
            padding-left: 0;
        }
        ul.nav-tabs-desc {
            font-size: 16px;
        }
        .list-unstyled.list-tabs-links li a {
            color: #000000!important;
            font-size: 16px!important;
        }
        .list-unstyled.list-delivery li {
            font-size: 16px!important;
        }
        .v-category-products-description {
            padding-left: 1rem!important;
            padding-right: 1rem!important;
        }
        .tab-block {
            padding-left: 0px!important;
            padding-right: 0px!important;
        }
        .v-product-page {
            margin-top: 1.5rem!important;
        }
        .article-image {
            width: 70%;
        }
        .v-product-cart-btn-text {
            margin: 0;
            color:#ffffff;
            font-size: 20px!important;
        }
        .v-category-product-price {
            font-size: 18px!important;
        }
        .v-product-cart-btn button:hover {
            background-color: #01a715;
        }
        .v-product-page-questions {
            font-size: 14px;
            margin-left: 0;
        }
    }
    @media (max-width: 376px) {
        .v-category-product-name {
            font-size: 18px;
            text-align: center;
        }
        .v-category-product-description {
            font-size: 16px;
        }
        .v-category-product-description-text {
            font-size: 16px;
        }
        .v-category-product-description-min {
            font-size: 15px;
        }
    }
</style>