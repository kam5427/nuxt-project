<template>
  <div class="row mt-5 v-call">
    <div class="col-12 v-call-title">
      <h2 class="v-call-header">Не нашли что искали?</h2>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-12 call-description">
          Оставьте ваши контактные данные <br>и мы найдем подходящее для Вас <br> решение
        </div>
        <div class="col-12">
          <ValidationObserver v-slot="{ valid }">
          <form v-on:submit.prevent="sendForm" class="row mb-5 align-items-center v-call-form">
            <div class="col-lg-6 col-md-6 col-12 text-center min-height">
              <ValidationProvider :rules="{required: true, alpha: true, min:2}" v-slot="{ errors }" name="Username">
                <input type="text" v-model="ContactForm.name" required :class="[errors[0] ? invalidClass: '' ]" class="call-input name-value" placeholder="Ваше имя"><br>
                <sup class="error-class">{{ errors[0] }}</sup>
              </ValidationProvider>
            </div>
            <div class="col-lg-6 col-md-6 col-12 text-center min-height">
              <ValidationProvider :rules="{regex:/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/}" v-slot="{ errors }" name="Phone">
                <input type="tel" v-model="ContactForm.phone" required :class="[errors[0] ? invalidClass: '' ]" class="call-input tel-value" placeholder="Ваш телефон"><br>
                <sup class="error-class">{{ errors[0] }}</sup>
              </ValidationProvider>
            </div>
            <div class="col-lg-6 col-md-6 col-12 text-center min-height">
                <input type="text" v-model="ContactForm.message" class="call-input name-comment" placeholder="Комментарий">
            </div>
            <!-- Заказать звонок -->
            <div class="phone-button-section col-lg-6 col-md-6 col-12 text-center min-height">
              <button data-toggle="modal" data-target="#callBack" type="submit" :disabled="!valid" class="btn-purple-v-call btn-order-v-call">Заказать звонок</button>
            </div>
          </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
    <!-- Ваша заявка отправлена   -->
    <div class="modal fade" id="callBack" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 style="color: #212529" class="modal-title" id="exampleModalLabel">Заявка отправлена</h5>
          </div>
          <div style="color: #212529" class="modal-body">
            В ближайшее время мы с вами свяжемся!
          </div>
          <div class="modal-footer">
            <button type="button" class="btn call-button-close" data-dismiss="modal">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { ValidationProvider, ValidationObserver} from 'vee-validate'
  export default {
    components: {
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        ContactForm: {
          name : '',
          phone: '',
          message: '',
        },
        invalidClass: 'invalid-class'
      }
    },
    methods: {
      sendForm(e) {
        e.preventDefault()
        const postData = {
          contactInfo: this.ContactForm,
        }
        this.$axios
                .post('https://termolent.ru/mail.php',
                        postData)
                .then(res => {});
        this.ContactForm = {
          name : '',
          phone: '',
          message: '',
        }
      }
    }
  }
</script>

<style>
  .v-call-header {
    color: #ffffff;
  }
  .call-description {
    font-size: 1.2rem;
    padding: 2rem 5rem 2rem 5rem;
    color: #ffffff;
  }
  .call-input {
    border: none;
    border-bottom: 2px solid #000000;
    width: 80%;
    background-color: #f7f7f7;
    padding: 15px 20px;
    margin: 0 auto 0 auto;
  }

  .btn-purple-v-call {
    font-size: 16px;
    background-color: #3e2d8f;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px 10px;
    color: white;
    margin-bottom: 0.2rem;
  }
  .btn-order-v-call {
    font-size: 22px;
    margin: 1.2rem 0;
  }


  input[type="text"], input[type="tel"] , textarea {
    outline: none;
    box-shadow:none !important;
  }

  .call-button-close {
    background-color: #3e2d8f;
    color: #ffffff;
  }
  .modal-header, .modal-footer {
    border: none;
  }

  .error-class {
    color: #ff2f19;
  }

  .min-height {
    max-height: 60px;
    margin-bottom: 3rem;
  }
  .invalid-class {
    border-bottom: 2px solid #ff2f19 !important;
  }
  @media (max-width: 1024px) {
    .v-call-header {
      color: #212529!important;
    }
    .call-description {
      color: #212529!important;
    }
  }
  @media (max-width: 576px) {
    .call-description {
      font-size: 16px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .v-call {
      margin-top: 20px !important;
    }
    .v-call-title h2 {
      font-size: 18px;
    }
    .v-call-form {
      margin-bottom: 0!important;
    }
    .btn-order-v-call {
      font-size: 18px;
      margin: 1.2rem 0;
    }
  }
</style>
