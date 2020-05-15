<template>
    <section class="delivery-section">
        <div class="container">
            <div class="row">
                <h1 class="delivery-title col-12">Доставка</h1>
                <div class="col-lg-12">
                    <div class="delivery mb-2">
                        <div class="row align-items-center">
                            <div class="col-lg-9 col-12">
                                <div class="delivery-desc">
                                    Мы доставляем нашу продукцию по городу Санкт-Петербург и Ленинградской области.
                                    При заказе от 5000руб доставка <b>бесплатная</b> (в пределах СПБ). Доставка по Санкт-Петербургу осуществляется в <b>день оформления заказа</b> до <b>16:00</b>. Заказы оформленные <b>после</b> 16:00 доставляются на следующий день.
                                </div>
                            </div>
                            <div class="col-lg-3 col-12 text-center">
                                <img class="delivery-image" src="~~/assets/svg/delivery.svg" alt="Доставка">
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-12">

                    <table class="table table-bordered table-striped">
                        <tbody>
                        <tr>
                            <td>
                                <p>Доставка</p>
                            </td>
                            <td>
                                <p>Регион доставки</p>
                            </td>
                            <td>
                                <p>Стоимость доставки, рубли</p>
                            </td>
                        </tr>

                        <tr>
                            <td rowspan="2">
                                <p>от 2500руб</p>
                            </td>
                            <td>
                                <p>Санкт-Петербург</p>
                            </td>
                            <td>
                                <p>300</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Ленинградская область</p>
                            </td>
                            <td>
                                <p>Рассчитывается отдельно</p>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">
                                <p>от 5000руб</p>
                            </td>
                            <td>
                                <p>Санкт-Петербург</p>
                            </td>
                            <td>
                                <p><b>Бесплатно</b></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Ленинградская область</p>
                            </td>
                            <td>
                                <p>600</p>
                            </td>
                        </tr>
<!--                        <tr>-->
<!--                            <td>-->
<!--                                <p>от 5000руб</p>-->
<!--                            </td>-->
<!--                            <td>-->
<!--                                <p>Санкт-Петербург</p>-->
<!--                            </td>-->
<!--                            <td>-->
<!--                                <p>0</p>-->
<!--                            </td>-->
<!--                        </tr>-->
                        </tbody>
                    </table>
                </div>
                <h3 class="delivery-subtitle col-12 mt-2">Самовывоз</h3>

                <div class=" col-12 mb-4 delivery-information">
                    Самовывоз: заказ можно забрать на пункте выдачи по адресу <b>Санкт-Петербург, Ударников 38к2</b> <br>
                    Заказы на сумму меньше <b>2500руб</b> не доставляются, только <b>самовывоз</b>.<br>
                    Режим работы: <b>пн-вс 8:00-22:00</b> <br>Предварительно звонить по номеру: <br><a style="color:black; text-decoration: none;" href="tel:+79045144646"><b>+7(904)-514-46-46</b></a>
                </div>

                <h3 class="delivery-subtitle col-12">Доставка по России</h3>
                <div class="delivery-desc-2 col-12 mb-1 font-weight-bold">Доставка по России возможна от любой суммы заказа</div>
                <div class="delivery-desc-2 col-12 mb-1">Отправим траспортной компанией, бесплатно доставим до пункта отправления:</div>
                <div class="col-12">
                    <div class="row mt-4 align-items-baseline">
                        <div class="col-3 col-lg-4"><img class="delivery-image" src="~~/assets/img/cdek_jpg.jpg" alt=""></div>
                        <div class="col-5 col-lg-4 delivery-company-block"><h5 class="text-center delivery-company">СДЭК</h5></div>
                        <div class="col-4 col-lg-4 text-right"><a href="https://cdek.ru/calculate" target="_blank" class="btn-purple delivery-price-button">Рассчитать</a></div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row mt-4 align-items-baseline">
                        <div class="col-3 col-lg-4"><img class="delivery-image" src="~~/assets/svg/pecom_logo.svg" alt=""></div>
                        <div class="col-5 col-lg-4 delivery-company-block"><h5 class="text-center delivery-company">ПЭК</h5></div>
                        <div class="col-4 col-lg-4 text-right"><a href="https://pecom.ru/services-are/shipping-request/" target="_blank" class="btn-purple delivery-price-button">Рассчитать</a></div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row mt-4 align-items-baseline">
                        <div class="col-3 col-lg-4"><img class="delivery-image" src="~~/assets/img/del_lin.jpg" alt=""></div>
                        <div class="col-5 col-lg-4 delivery-company-block"><h5 class="text-center delivery-company">Деловые линии</h5></div>
                        <div class="col-4 col-lg-4 text-right"><a href="https://www.dellin.ru/requests/" target="_blank" class="btn-purple delivery-price-button">Рассчитать</a></div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row mt-4 align-items-baseline">
                        <div class="col-3 col-lg-4"><img class="delivery-image" src="~~/assets/img/vozovoz.png" alt=""></div>
                        <div class="col-5 col-lg-4 delivery-company-block"><h5 class="text-center delivery-company">Vozovoz</h5></div>
                        <div class="col-4 col-lg-4 text-right"><a href="https://spb.vozovoz.ru/order/create/" target="_blank" class="btn-purple delivery-price-button">Рассчитать</a></div>
                    </div>
                </div>
                <div class="col-12 mt-4">Если Вы используете другой способ доставки до Вас, мы готовы сотрудничать с любой транспортной компанией или курьерской службой офис которой есть в Санкт-Петербурге.</div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Доставка термоленты, чековой ленты, термоэтикеток по Санкт-Петербургу',
                meta: [
                    { hid: "description", name: "description", content: "Доставка чековых лент, термолент, термоэтикеток, лент для терминалов по Санкт-Петербургу" },
                    { hid: "keywords", name: "keywords", content: "Доставка термоэтикетки, чековая лента, кассовая лента, лента, рулоны, по Санкт-Петербургу и Ленинградской области, +7(904) 514-46-46" }
                ]
            }
        }
    }
</script>

<style >
    .delivery-price-button {
        color: #ffffff!important;
        cursor: pointer;
    }
    .delivery-section {
        margin: 70px auto 0 auto;
    }

    .delivery-desc {
        font-size: 20px;
        padding: 0 20px 10px 20px;
    }
    .delivery-image {
        width: 150px;
    }
    .delivery-information {
        font-size: 20px;
        padding-left: 35px;
        padding-right: 35px;
    }

    table {
        border-spacing: 0;
        max-width:100%;
    }
    tbody {
        width: 100%;
    }
    @media (max-width: 576px) {
        .delivery {
            margin-bottom: 20px !important;
        }
        .delivery-section {
            margin-top: 30px;
        }
        .delivery-information {
            font-size: 16px;
        }
        .delivery-title {
            font-size: 18px;
        }
        .delivery-subtitle {
            font-size: 18px;
        }
        .delivery-desc {
            font-size: 16px;
        }
        .delivery-desc-2 {
            font-size: 16px;
            margin-bottom: 20px!important;
        }
        .delivery-image {
            width: 100px;
        }
        .delivery-company {
            font-size: 14px;

        }
        .delivery-company-block {
            padding-right: 0!important;
        }
        table p {
            font-size: 13px;
        }
    }
    @media (max-width: 321px) {
        table p {
            font-size: 12px;
        }
        .delivery-company {
            display: none;
        }
        .btn-purple.delivery-price-button {
            font-size: 12px !important;
        }

    }
</style>