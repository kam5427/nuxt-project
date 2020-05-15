<template>
    <section class="error-section">
        <div class="container">
            <div class="text-center">
                <h1>Ошибка</h1>
                <h2> {{error.statusCode}} Страница не найдена</h2>
                <div class="back-to-main">
                    <nuxt-link class="back-to-main-link" to="/">
                        <h5>
                            <img class="arrow-link-error" src="~~/assets/svg/arrow-link-reverse.svg" alt="Вернуться на главную">Вернуться на главную
                        </h5>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            error: {
                type: Object,
                default: null
            }
        }
    }
</script>

<style>
    .error-section {
        margin: 70px auto 60px auto;
    }

    .back-to-main:hover {
        transform: translate(-10px);
        transition: .3s;
    }
    .back-to-main-link  {
        color: #53575b;
        text-decoration: none;
    }

    .back-to-main-link:hover {
        color: #53575b;
        text-decoration: none;
    }

    .arrow-link-error {
        padding: 5px;
        width: 3.5rem;
    }
</style>