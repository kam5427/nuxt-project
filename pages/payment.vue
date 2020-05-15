<template>
    <section class="payment-section">
        <div class="container">
            <h1 class="payment-title">Оплата</h1>
            <h3 class="payment-subtitle mb-3">Способы оплаты :</h3>
            <div class="row payment-description">
                <div class="col-12 mb-3">
                    1. <b>Для физических лиц, оплата наличными при получении.</b><br>
                    Вы оплачиваете Ваш заказ при получении наличными курьеру или в пункте самовывоза. Вместе с заказом Вы получаете всю необходимую документацию.
                </div>
                <div class="col-12">
                    2. <b>Безналичный расчет для ИП и организаций.</b><br>
                    После оформления заказа будет сформирован счёт на оплату, который Вы можете распечатать и оплатить. Все необходимые для бухгалтерии документы (оригинал счёта на оплату, накладная, товарный чек) выдаются
                    вместе с заказом при получении. При получении товара, необходимо предоставить доверенность или поставить печать организации на отгрузочные документы.
                    <b>Безналичный расчет возможен от любой суммы заказа.</b>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Оплата термоленты, чековой ленты',
                meta: [
                    { hid: "description", name: "description", content: "Оплата чековых лент, термолент" },
                    { hid: "keywords", name: "keywords", content: "Оплата чековых лент, термолент, наличная, безналичная оплата, Санкт-Петербург, +7(904) 514-46-46" }
                ]
            }
        }
    }
</script>

<style>
    .payment-section {
        margin: 70px auto 70px auto;
    }
    @media (max-width: 576px) {
        .payment-title {
            font-size: 18px;
        }
        .payment-subtitle {
            font-size: 16px;
        }
        .payment-section {
            margin-top: 30px;
        }
        .payment-description {
            font-size: 14px;
        }

    }
</style>