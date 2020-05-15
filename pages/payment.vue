<template>
    <section class="payment-section">
        <div class="container">
            <h1 class="payment-title">Оплата</h1>
            <h3 class="payment-subtitle mb-3">Способы оплаты :</h3>
            <div class="row payment-description">
                <div class="col-12 mb-3">
                    1. <b>Для физических лиц, оплата наличными при получении.</b><br>
                    Вы оплачиваете Ваш заказ при получении наличными курьеру. Вместе с заказом Вы получаете всю необходимую документацию.
                </div>
                <div class="col-12">
                    2. <b>Безналичный расчет для юридических лиц.</b><br>
                    Для этого вам нужно запросить у нашего менеджера счет на оплату товара. При доставке заказа вы получаете все необходимые бухгалтерские документы для отчетности.
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