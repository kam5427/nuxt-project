<template>
    <div class="col-3 sidebar-container sidebar-menu-class">
        <div class="widget-sidebar">
            <h3 class="widget-title mt-2 mb-2">Каталог</h3>
            <h5 class="widget-title mt-3 mb-3">
                <nuxt-link class="sidebar-link" to="/order">КАТЕГОРИИ КАТАЛОГА</nuxt-link>
            </h5>
            <div class="pb-3">
                <ul class="list-unstyled list-custom sidebar-link mt-2 p-1">
                    <li>
                        <a class="sidebar-link dropdown-toggle" data-toggle="collapse" aria-expanded="false" href="#chekovayaLenta">Чековая лента</a>
                    </li>
                    <ul class="collapse list-unstyled" :class="[currentPage.includes('57') || currentPage.includes('80') || currentPage.includes('44') ? showChekovayaClass: '' ]" id="chekovayaLenta">
                        <div class="mt-2 p-1 pl-3"  :class="[currentPage.includes('57') ? activeClass: '' ]">
                            <nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('57') ? activeClassText: '' ]"  to="/category/chekovaya-lenta-57">Чековая лента 57 мм</nuxt-link>
                        </div>

                            <div class="mt-2 p-1 pl-3" :class="[currentPage.includes('80') ? activeClass: '' ]">
                                <nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('80') ? activeClassText: '' ]"  to="/category/chekovaya-lenta-80">Чековая лента 80 мм</nuxt-link>
                            </div>
                        <div class="mt-2 p-1 pl-3" :class="[currentPage.includes('44') ? activeClass: '' ]">
                            <nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('44') ? activeClassText: '' ]"  to="/category/chekovaya-lenta-44">Чековая лента 44 мм</nuxt-link>
                        </div>


                    </ul>
                </ul>
                <div class="mt-2 p-1" :class="[currentPage.includes('category/chekovaya-lenta-bankomatov') ? activeClass: '' ]">
                    <nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('category/chekovaya-lenta-bankomatov') ? activeClassText: '' ]"  to="/category/chekovaya-lenta-bankomatov">Лента для банкоматов</nuxt-link>
                </div>
                <ul class="list-unstyled list-custom sidebar-link mt-2 p-1">
                    <li>
                        <a class="sidebar-link dropdown-toggle" data-toggle="collapse" aria-expanded="false" href="#termoetiketki">Термоэтикетки</a>
                    </li>
                    <ul class="collapse list-unstyled" :class="[currentPage.includes('termo') ? showTermoetiketkiClass: '' ]" id="termoetiketki">
                        <div class="mt-2 p-1 pl-3"  :class="[currentPage.includes('standart') ? activeClass: '' ]">
                            <nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('standart') ? activeClassText: '' ]"  to="/category/termoetiketki-standart">Этикетки ЭКО</nuxt-link>
                        </div>

                        <div class="mt-2 p-1 pl-3" :class="[currentPage.includes('top') ? activeClass: '' ]">
                            <nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('top') ? activeClassText: '' ]"  to="/category/termoetiketki-top">Этикетки ТОП</nuxt-link>
                        </div>
                        <div class="mt-2 p-1 pl-3" :class="[currentPage.includes('eco') ? activeClass: '' ]">
                            <nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('eco') ? activeClassText: '' ]"  to="/category/termoetiketki-eco">Нестандартные</nuxt-link>
                        </div>
                        <div class="mt-2 p-1 pl-3" :class="[currentPage.includes('plg') ? activeClass: '' ]">
                            <nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('plg') ? activeClassText: '' ]"  to="/category/termotransfernye-etiketki-plg">Термотрансферные</nuxt-link>
                        </div>

                    </ul>
                </ul>
                <div class="mt-2 p-1" :class="[currentPage.includes('category/bumaga-formatnya') ? activeClass: '' ]"><nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('category/bumaga-formatnya') ? activeClassText: '' ]" to="/category/bumaga-formatnya">Бумага форматная</nuxt-link></div>
                <div class="mt-2 p-1" :class="[currentPage.includes('category/strejch-plenka') ? activeClass: '' ]"><nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('category/strejch-plenka') ? activeClassText: '' ]" to="/category/strejch-plenka">Стрейч плёнка</nuxt-link></div>
                <div class="mt-2 p-1" :class="[currentPage.includes('category/klejkaya-lenta-skotch') ? activeClass: '' ]"><nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('category/klejkaya-lenta-skotch') ? activeClassText: '' ]" to="/category/klejkaya-lenta-skotch">Клейкая лента (скотч)</nuxt-link></div>
                <div class="mt-2 p-1" :class="[currentPage.includes('pistolety') ? activeClass: '' ]"><nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('pistolety') ? activeClassText: '' ]" to="/category/etiket-pistolety">Этикет пистолеты</nuxt-link></div>
                <div class="mt-2 p-1" :class="[currentPage.includes('category/etiket-lenta') ? activeClass: '' ]"><nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('category/etiket-lenta') ? activeClassText: '' ]" to="/category/etiket-lenta">Этикет лента</nuxt-link></div>
                <ul class="list-unstyled list-custom sidebar-link mt-2 p-1">
                    <li>
                        <a class="sidebar-link dropdown-toggle" data-toggle="collapse" aria-expanded="false" href="#ribbony">Риббоны (красящая лента)</a>
                    </li>
                    <ul class="collapse list-unstyled" :class="[currentPage.includes('ribbony') ? showChekovayaClass: '' ]" id="ribbony">
                        <div class="mt-2 p-1 pl-3"  :class="[currentPage.includes('vosk') && !currentPage.includes('premium') ? activeClass: '' ]">
                            <nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('vosk') && !currentPage.includes('premium') ? activeClassText: '' ]"  to="/category/ribbony-wax-vosk">Риббоны WAX воск (standart)</nuxt-link>
                        </div>
                        <div class="mt-2 p-1 pl-3"  :class="[currentPage.includes('vosk') && currentPage.includes('premium') ? activeClass: '' ]">
                            <nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('vosk') && currentPage.includes('premium') ? activeClassText: '' ]"  to="/category/ribbony-wax-vosk-premium">Риббоны WAX воск (premium)</nuxt-link>
                        </div>
                        <div class="mt-2 p-1 pl-3"  :class="[currentPage.includes('rezin') ? activeClass: '' ]">
                            <nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('rezin') ? activeClassText: '' ]"  to="/category/ribbony-wax-rezin">Риббоны WAX-REZIN (смола и воск)</nuxt-link>
                        </div>
                        <div class="mt-2 p-1 pl-3"  :class="[currentPage.includes('smolyanaya') ? activeClass: '' ]">
                            <nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('smolyanaya') ? activeClassText: '' ]"  to="/category/ribbony-smolyanaya">Риббоны REZIN (смола)</nuxt-link>
                        </div>
                        <div class="mt-2 p-1 pl-3"  :class="[currentPage.includes('tsvetnye') ? activeClass: '' ]">
                            <nuxt-link active-class="active" class="sidebar-link" :class="[currentPage.includes('tsvetnye') ? activeClassText: '' ]"  to="/category/ribbony-tsvetnye">Цветные риббоны</nuxt-link>
                        </div>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeClass: 'active-sidebar',
                activeClassText: 'active-sidebar-text',
                showChekovayaClass: 'show',
                showTermoetiketkiClass: 'show'
            }
        },
        computed: {
            currentPage() {
                return this.$route.path;
            }
        }
    }
</script>

<style>
    .sidebar-menu-class {
        height: auto;
    }
    .list-custom.list-unstyled li a {
        color: #000000!important;
        font-size: 16px!important;
    }
    .sidebar-menu-class {
        background-color: #ffffff;
    }
    .sidebar-link {
        color: #000000;
        font-size: 16px!important;
    }
    .sidebar-link:hover {
        color: #3e2d8f;
    }
    .active-sidebar {
        background-color: #6a3df7;
    }
    a.active-sidebar-text {
        color: #ffffff!important;
    }
    a.active-sidebar-text:hover {
        color: #ffffff!important;
        text-decoration: none;
    }
    @media (max-width: 1199px) {
        .sidebar-link {
            font-size: 14px!important;
        }
    }
    @media (max-width: 991px) {
        .sidebar-menu-class {
            display: none;
        }
    }
</style>