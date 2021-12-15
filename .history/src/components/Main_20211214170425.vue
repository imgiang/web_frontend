<template>
  <div class="frm-expert">
    <div class="title-expert">Expert</div>
    <div class="container">
      <div v-for="expert in experts.slice(2, 11)" :key="expert._id">
        <img
          :src="expert._source.thumbnail ? expert._source.thumbnail : avatar"
          :alt="expert._source.name + ' image'"
          class="img-expert"
        />
        <!-- {{ expert._source.name }} -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from './components/layouts/BaseHeader.vue'
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'

import { getExperts, searchExperts } from '~/api/Experts'
import Expert from './model/Expert'
import avatar from '/avatar.jpg'
import FormExpert from './components/Main.vue'

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
.frm-expert {
  font-family: sans-serif;
  border: 1px solid #eee;

  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
  position: absolute;
  width: 1426px;
  height: 800px;
  left: 57px;
  top: 784px;

  background: #f8dae9;
  border-radius: 20px;
}
.title-expert {
  /* position: absolute; */
  width: 222px;
  height: 80px;
  left: 609px;
  /* top: 784px; */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}
/* .i {
  text-align: center;
  left: 100px;
  display: flex;
  align-items: center;
  margin: ;
} */
.container {
  font-size: 40px;
  min-height: 300px;
  width: 100%;

  display: grid;
  grid-template-columns: 400px 500px 500px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-template-areas:
    /* Only change code below this line */
    'header header header'
    'advert content content'
    'advert footer footer';
  /* Only change code above this line */
}
.img-expert {
  /* position: absolute; */
  width: 400px;
  height: 300px;
  left: 587px;
  top: 1061px;

  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  border-radius: 10px;
}
</style>