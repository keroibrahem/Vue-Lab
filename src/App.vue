<template>
  <div class="d-flex flex-column min-vh-100">
    <Header />
    <router-view class="flex-grow-1"/>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>