<template>
  <BaseHeader />
  <img alt="Vue logo" class="element-plus-logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
  <p v-for="expert in experts" :key="expert._id">
    {{ expert._source.name }}
  </p>
</template>

<script setup lang="ts">
import BaseHeader from './components/layouts/BaseHeader.vue'
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'

import { getExperts } from '~/api/Experts'
import Expert from './model/Expert'

const experts = ref<Expert[]>([])

onMounted(async () => {
  experts.value = await getExperts()
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.element-plus-logo {
  width: 50%;
}
</style>
