<template>
  <MainHome   />
  <BaseHeader />
  <img alt="Vue logo" class="element-plus-logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
  <!-- <label for="search">Search</label>
  <input id="search" v-model="search" @input="getSuggest" /> -->
  <!-- <div v-for="expert in experts" :key="expert._id">
    <img :src="expert._source.thumbnail ? expert._source.thumbnail : avatar" :alt="expert._source.name + ' image'" />
    {{ expert._source.name }}
  </div> -->
  <!-- <div v-for="expert in experts" :key="expert._id">
    <img :src="expert._source.thumfbnail ? expert._source.thumbnail : avatar" :alt="expert._source.name + ' image'" />
    {{ expert._source.name }}
  </div> -->
</template>

<script setup lang="ts">
import BaseHeader from './components/layouts/BaseHeader.vue'
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'

import { getExperts, searchExperts } from '~/api/Experts'
import Expert from './model/Expert'
import avatar from '/avatar.jpg';
import MainHome   from './components/Main.vue'

const experts = ref<Expert[]>([])
const search = ref('')

const getSuggest = async () => {
  console.log(search.value)
  experts.value = await searchExperts(search.value)
}

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
