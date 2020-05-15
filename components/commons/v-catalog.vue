<template>

  <div class="v-catalog col-md-6 col-6 mr-0 ml-0 mr-md-0 ml-md-0 col-lg-4 col-xl-3 mb-5">
    <!-- <nuxt-link class="category-link" :to="`/category/${category.cSlug}`"> -->
    <nuxt-link class="category-link" no-prefetch :to="`/category/${category_data.id}`">
      <div class="card">
        <div class="row">
          <div class="col-12 text-center">
            <img class="card-cat-img" alt="термолента" :src="category_data.cImg" />
          </div>

          <div class="col-12 category-data">
            <h5 class="category-name pl-1">{{ category_data.cName }}</h5>
<!--            <div class="btp text-right"><button class="mt-4 btn-cat"><img class="arrow" src="~~/assets/svg/arrow.svg" alt="перейти в категорию"> </button></div>-->
          </div>
        </div>
      </div>
    </nuxt-link>

  </div>



</template>
<script>
export default {
  props: {
    category_data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style>
.category-name {
  font-size: 15px;
}
a.category-link {
  color: #6c757d;
  text-decoration: none;
}

.card-cat-img {
  width: 75%;
}

.card {
  padding: 15px 15px;
  border: none;
  /*border-radius: 8px;*/
  border-radius: 0;
  box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, .2);
}

.card:hover {
  transform: scale(1.1);
  transition: .3s;
  background-color: #3e2d8f;
  color: #ffffff;
}

.card h5 {
  height: 42px;
}

h5 {
  font-size: 1.1rem;
}

.arrow {
  margin-top: -4px;
  transform: scale(1.3);
}

.btp {
  padding: 10px 30px 15px 10px;
  margin-top: 15px;
}

.btn-cat {
  background-color: #6a3df7;
  height: 2rem;
  width: 3rem;
  border: none;
  color: #ffffff;
  border-radius: 5px;
}

@media (max-width: 576px) {
  .card-cat-img {
    width: 100%;
  }
  .card:hover {
    transform: none;
    transition: none;
  }
  .v-catalog {
    margin-bottom: 10px!important;
    padding-right: 5px!important;
    padding-left: 5px!important;
  }
  .btp {
    display: none;
  }
  .card {
    min-height: 195px;
    border-radius: 0!important;
  }
  .card h5 {
    height: 45px!important;
  }
  h5.category-name {
    text-align: center!important;
    padding-bottom: 10px!important;
    font-size: 15px !important;
  }
}
@media (max-width: 450px){
  h5.category-name {
    font-size: 14px !important;
  }
  .btn-cat {
    margin-top: 10px !important;
  }
  .btp {
    margin-top: 0;
  }
}

@media (max-width: 376px) {
  .card h5 {
    height: 25px!important;
  }
  h5.category-name {
    font-size: 12px !important;
  }
  .btp {
    margin-top: 0;
    padding: 5px 30px 5px 10px;
    height: 40px;
  }
  .category-data {
    padding: 0 5px;
    max-height: 70px;
  }
  .card h5 {
    height: 10px;
  }
  .btn-cat {
    height: 1.2rem;
    width: 2.5rem;
    margin-top: 10px !important;
  }
  .arrow {
    width: 1rem;
    margin-top: -16px;
  }
}

@media (max-width: 297px) {
  .category-name {
    font-size: 10px !important;
  }
}
</style>
