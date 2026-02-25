<template>
  <Navbar />
  <router-view />  <!-- Nội dung trang sẽ render ở đây -->
  <Footer />
  <Modals />  <!-- Modal global -->
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Modals from './components/Modals.vue'

export default {
  name: 'App',
  components: { Navbar, Footer, Modals }
}
</script>