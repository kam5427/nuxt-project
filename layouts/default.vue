<template>
  <div>
    <Header />
      <nuxt />
    <Footer/>
  </div>
</template>


<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  head() {
    return {
      link: [
        {rel: "canonical", href: `https://termolent.ru${this.$route.path}` }
      ],
    }
  },
  components: {
    Header,
    Footer
  }
}

</script>

<style>

body {
  background-color: #f7f7f7;
  font-size: 18px;
}

</style>
