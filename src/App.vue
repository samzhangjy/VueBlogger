<template>
  <div id="app" class="content">
    <Navbar />
    <router-view />
    <br v-for="index in 10" :key="index" />
    <div class="wrapper">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>
