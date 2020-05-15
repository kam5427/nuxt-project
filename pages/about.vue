<template>
  <div class="about-wrapper">
  <section class="about-section">
    <div class="container">
      <h1 class="v-about-title">Контактная информация</h1>
      <div class="row">
        <div class="col-12 about-section-description">
          <div class="about-company-title">
            <b>termolent.ru</b> – интернет-магазин по продаже расходных материалов. <b>Качественная</b> бумажная продукция от ведущих <b>мировых производителей из импортного сырья</b>. Официальная дистрибуция ролевой, форматной бумаги и других расходных материалов. Поставляем продукцию <b>по всей России</b>.
          </div>
          <div class="about-text">
           <b> Уважаемые клиенты</b>, мы находимся по адресу
            - <b>пр. Ударников, д. 38к2</b> (Вход со двора, в данный момент, вывеска отсутствует, но найти нас по адресу не представляет труда).
          </div>
          <div class="about-tel">
            <b>Телефон</b>: <a class="tel-number-link-about" href="tel:+79045144646"><b>+7(904)-514-46-46</b> - Николай</a>
          </div>
          <div class="about-tel">
            <b>Телефон</b>: <a class="tel-number-link-about" href="tel:+79045144646"><b>+7(951)-673-33-43</b> - Склад</a>
          </div>
          <div class="about-tel">
            <b>WhatsApp</b> : <a class="whatsapp-number-link-about" href="https://wa.me/79045144646"><img class="whatsapp-logo-about" src="~~/assets/svg/whatsapp-logo.svg" alt="Связь по WhatsApp"> +7(904)-514-46-46</a>
          </div>
          <div class="about-adress">
            <b>Юридический адрес</b>: 195112, г. Санкт-Петербург, Уткин пр. д.13 к.5, помещение 5-Н
          </div>
          <div class="about-adress-delivery">
            <b>Адрес пункта выдачи</b>: 195279, г. Санкт-Петербург, Ударников пр. д.38 к.2
          </div>
          <div class="about-email">
            <b>Электронный адрес</b>: <a class="about-email-link" href="mailto:spb@termolent.ru">spb@termolent.ru</a>
          </div>
          <div class="about-time"><b>Режим работы</b>: пн-вс 8:00-22:00
          </div>
        </div>
      </div>
      <div class="section-map"><script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acd62fcdda9cdd961fea73cee8112761eb0c9f802706b15d4fc5eb7c0544ed79f&amp;width=100%25&amp;height=350&amp;lang=ru_RU&amp;scroll=true"></script></div>
    </div>

    <div class="container"><v-call /></div>
  </section>
  </div>
</template>

<script>
  import vCall from '~~/components/v-call'
  export default {
    components: { vCall },
    head() {
      return {
        title: 'Контактная информация | сайт Термолента +7(904) 514-46-46',
        meta: [
          { hid: "description", name: "description", content: "Контактная информация, Термоленты в Санкт-Петербурге, +7(904) 514-46-46" },
          { hid: "keywords", name: "keywords", content: "Контакты, чековые ленты, Санкт-Петербург, +7(904) 514-46-46" }
        ]
      }
    }
  }
</script>
<style>
  .whatsapp-logo-about {
    width: 27px;
  }
  .about-wrapper {
    background-image: url('~assets/img/chekovaya-lenta-2.jpg');
    background-position: top center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    padding-top: 35px;
    margin-bottom: -45px;
  }
  .whatsapp-number-link-about {
    color: #ffffff !important;
  }
  .whatsapp-number-link-about:hover {
    color: #ffffff;
    text-decoration: none;
  }
  .tel-number-link-about {
    color: #ffffff !important;
  }

  .tel-number-link-about:hover {
    color: #ffffff;
    text-decoration: none;
  }
  .about-section {
    margin: 70px auto 0 auto;
    color: #ffffff!important;
  }
  .about-section-description {
    margin: 10px auto 40px auto;
    font-size: 1.2rem;
    line-height: 2rem;
  }
  .about-email-link {
    color: #ffffff;
    border-bottom: 1px solid #ffffff;
  }

  .about-email-link:hover {
    color: #ffffff;
    text-decoration: none;

  }

  .section-map {
    margin: 0 auto 80px auto;
  }
  @media (max-width: 1024px) {
    .about-wrapper {
      background-image: none;
      padding-top: 0 !important;
    }
    .v-about-title {
      color: #212529!important;
    }
    .whatsapp-number-link-about {
      color: #212529 !important;
    }
    .whatsapp-number-link-about:hover {
      color: #212529 !important;
      text-decoration: none;
    }
    .tel-number-link-about {
      color: #212529 !important;
    }
    .tel-number-link-about:hover {
      color: #212529!important;
      text-decoration: none;
    }
    .about-section {
      color: #212529!important;
    }
    .about-email-link {
      color: #212529;
      border-bottom: 1px solid #212529;
    }
    .about-email-link:hover {
      color: #212529;
      text-decoration: none;

    }
  }
  @media (max-width: 576px) {
    .whatsapp-logo-about {
      width:20px;
    }
    .about-section {
      margin-top: 30px;
    }
    .v-about-title {
      font-size: 18px;
    }
    .about-section-description {
      font-size: 16px;
      line-height: 1.5rem;
    }
  }
</style>
