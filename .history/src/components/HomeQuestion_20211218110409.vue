<template>
  <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css" />

  <div class="frm-quest">
    <div class="title-quest">Expert</div>
    <div class="container-quest">
      <div v-for="expert in experts.slice(2, 5)" :key="expert._id">
        <div class="quest-item">
          <p>
            <i class="far fa-question-circle"></i>
            Question:
          </p>
         
        </div>
<div class="quest-item">
         
          <p>
            <i class="fas fa-poll-h"></i>
            Answer:
          </p>
        </div>
        <!-- {{ expert._source.name }} -->
      </div>
      <a href="#" class="expert-detail">See more</a>
    </div>
  </div>
</template>

<script setup lang="ts">
// export default {
// name:'HomeQuestion'
// }

import { ref, onMounted } from 'vue'

import { getExperts, searchExperts } from '~/api/Experts'
import Expert from './model/Expert'

// import FormExpert from './components/Main.vue'

const experts = ref<Expert[]>([])
const search = ref('')

const getSuggest = async () => {
  console.log(search.value)
  experts.value = await searchExperts(search.value)
}

onMounted(async () => {
  experts.value = await getExperts()
  //  experts.value = await getExpertsField()
})
</script>

<style scoped>
.frm-quest {
  font-family: sans-serif;
  border: 1px solid #eee;

  padding: 20px 30px;
  margin-top: 100px;
  margin-left: 55px;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;

  width: 1350px;
  height: auto;
  left: 57px;
  top: 784px;

  background: #f8dae9;
  border-radius: 20px;
  text-align: center;
}
.title-quest {
  position: relative;
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
.container-quest {
  font-size: 40px;
  min-height: 300px;
  width: 100%;
  margin-left: 10px;
  margin-right: 30px;
  display: grid;
  /* grid-template-columns: 320px ;
  grid-template-rows: 360px ;
  grid-gap: 10px;
  grid-template-areas: */
  /* Only change code below this line */
  /* 'header header header'
    'advert content content'
    'advert footer footer'; */
  /* Only change code above this line */
}
.quest-item {
  width: 1268px;
  height: 134px;
  left: -2px;
  top: 0px;
  margin: 20px;
  background: #ffeff5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.quest-item p {
  float: left;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 42px;
  display: flex;
  align-items: center;
  padding: 10px;
  color: #000000;
}
</style>