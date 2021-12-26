<template>
  <SearchExperts />
  <MainHome />
  <Footer />
</template>

<script setup lang="ts">
import MainHome from './components/Main.vue'
import Footer from './components/Footer.vue'
import SearchExperts from './components/SearchExperts.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
