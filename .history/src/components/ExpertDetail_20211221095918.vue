<template>
  <div class="new">abc</div>
</template>

<script  lang="ts">
// require('@//styles/ExpertDetail.css')

import { ref, onMounted } from 'vue'

import { getExperts, searchExperts } from '~/api/Experts'
import Expert from '~/model/Expert'
import avatar from '/avatar.jpg';
//  import MainHome   from './components/Main.vue'
import ExpDetail from './components/ExpertDetail.vue'
const experts = ref<Expert[]>([])
const search = ref('')

const getSuggest = async () => {
  console.log(search.value)
  experts.value = await searchExperts(search.value)
}

onMounted(async () => {
  experts.value = await getExperts()
})
export default{
name :'ExpDetail'
}
</script>

<style>

</style>