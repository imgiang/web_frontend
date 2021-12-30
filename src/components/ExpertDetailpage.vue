<template>
  <div>
    <HeaderVue />
    <div class="main">
      <ExpertDetailVue />
    </div>
    <FooterVue />
  </div>
  <div class="footer"></div>
</template>

<script lang="ts">
import searchVue from './layouts/homeFragment/search.vue'
import HeaderVue from './layouts/homeFragment/Header.vue'
import ExpertDetailVue from './ExpertDetail.vue'
import FooterVue from './Footer.vue'
export default {
  name: 'ExpertDetailpageVue',
  components: { ExpertDetailVue, HeaderVue, searchVue, FooterVue }
}
</script>

<style>
</style>