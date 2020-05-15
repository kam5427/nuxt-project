<template>
    <div class="cart-empty mt-5 text-center">
        <h3>Корзина пустая. <br> Добавьте товар в разделе каталог</h3>
        <div class="return-to-cat text-left">
            <nuxt-link class="all-goods-link text-center" to="/order">
                <h5><img class="arrow-link" src="~~/assets/svg/arrow-link-reverse.svg" alt="Перейти в каталог">Вернуться в каталог</h5>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .cart-empty {
        color:#000;
    }

    a.all-goods-link {
        color: #53575b;
        text-decoration: none;
    }

    .return-to-cat:hover {
        transform: translate(-10px);
        transition: .3s;
    }

    .arrow-link {
        padding: 5px;
        width: 3.5rem;
    }
</style>