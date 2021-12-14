<template>
  <BaseHeader />
  <BackupRestore />
  <label for="search">Search</label>
  <input id="search" v-model="search" @input="getSuggest" />
  <div v-for="expert in experts" :key="expert._id">
    <img :src="expert._source.thumbnail ? expert._source.thumbnail : avatar" :alt="expert._source.name + ' image'" />
    {{ expert._source.name }}
    <button @click="deleteExpertById(expert._id)">Delete</button>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from './components/layouts/BaseHeader.vue'
import BackupRestore from '~/views/BackupRestore.vue';
import { ref, onMounted } from 'vue'

import { getExperts, searchExperts, deleteExpertById } from '~/api/Experts'
import Expert from './model/Expert'
import avatar from '/avatar.jpg'

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
