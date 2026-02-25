<template>
  <div class="d-flex flex-column min-vh-100">
    <div v-if="!isAuthPage">
      <AppHeader />
      <AppSidebar />
    </div>

    <main class="flex-grow-1" :class="{ 'mt-5 pt-4 mb-5 pb-3': !isAuthPage }">
      <router-view />
    </main>

    <AppFooter v-if="!isAuthPage" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppSidebar from './components/AppSidebar.vue'

export default {
  components: { AppHeader, AppFooter, AppSidebar },
  computed: {
    isAuthPage() {
      return this.$route.path === '/login' || this.$route.path === '/register';
    }
  }
}
</script>