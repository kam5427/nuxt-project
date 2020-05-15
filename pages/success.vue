<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center success-message">
                <h1>Ваша заявка успешно оформлена</h1>
                <img class="mt-1 success-img" src="~~/assets/svg/success.svg" alt="Успешно">
                <h2>В ближайшее время с Вами свяжутся!</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Заявка успешно оформлена',
                meta: [
                    { hid: "robots", name: "robots", content: "noindex" }
                ]
            }
        },
    }
</script>

<style>
    .success-message {
        margin-top: 80px;
    }
    .success-img {
        width: 40px;
    }
</style>