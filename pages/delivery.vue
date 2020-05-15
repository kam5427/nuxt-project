<template>
    <section class="delivery-section">
        <div class="container">
            <div class="row">
                <h1 class="delivery-title col-12">Доставка</h1>
                <div class="col-lg-12">
                    <div class="delivery mb-2">
                        <div class="row">
                            <div class="col-lg-9 col-12">
                                <div class="delivery-desc">
                                    Мы доставляем нашу продукцию по городу Санкт-Петербург и Ленинградской области.
                                    При заказе от 5000руб доставка бесплатная (в пределах СПБ).
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
                                <p>от 2000руб</p>
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
                                <p>400</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>до 2000руб</p>
                            </td>
                            <td>
                                <p>Санкт-Петербург</p>
                            </td>
                            <td>
                                <p>Обсуждаемо <br> либо самовывоз</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>от 5000руб</p>
                            </td>
                            <td>
                                <p>Санкт-Петербург</p>
                            </td>
                            <td>
                                <p>0</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <h3 class="delivery-subtitle col-12">Самовывоз</h3>

                <div class="delivery-desc-2 col-12 mb-5">
                    Самовывоз: Санкт-Петербург, Ударников 38к2 Предварительно звонить по номеру: +7-904-514-46-46
                </div>
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

    .delivery-section {
        margin: 70px auto 0 auto;
    }

    .delivery-desc {
        font-size: 24px;
        padding: 0 20px 10px 20px;
    }
    .delivery-image {
        width: 150px;
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
        table p {
            font-size: 13px;
        }
    }
    @media (max-width: 321px) {
        table p {
            font-size: 12px;
        }
    }
</style>