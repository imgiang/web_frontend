<!-- <template>
  <FormExpert />

</template>

<script setup lang="ts">
import BaseHeader from './components/layouts/BaseHeader.vue'
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'

import { getExperts, searchExperts } from '~/api/Experts'
import Expert from './model/Expert'
import avatar from '/avatar.jpg';
import ExpertForm   from './components/Main/Experts.vue'



</script>


<style>
.frm-field{
   font-family: sans-serif;
  border: 1px solid #eee;

  padding: 20px 30px;
  margin-top: 1em;
  margin-left: 50px;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
 
  width: 1350px;
  height: 900px;
  left: 57px;
  top: 784px;

  background: #f8dae9;
  border-radius: 20px;
  text-align: center;
}
.frm-expert {
  font-family: sans-serif;
  border: 1px solid #eee;

  padding: 20px 30px;
  margin-top: 1em;
  margin-left: 50px;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
 
  width: 1350px;
  height: 900px;
  left: 57px;
  top: 784px;

  background: #f8dae9;
  border-radius: 20px;
  text-align: center;
}
.title-expert {
  position: relative ;
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
.container-expert{
  font-size: 40px;
  min-height: 300px;
  width: 100%;
  margin-left: 10px;
  margin-right: 30px;
  display: grid;
  grid-template-columns: 320px 330px 330px 320px;
  grid-template-rows:360px  360px  ;
  grid-gap: 10px;
  grid-template-areas:
    /* Only change code below this line */
    'header header header'
    'advert content content'
    'advert footer footer';
  /* Only change code above this line */
}
.container-field{
 font-size: 40px;
  min-height: 300px;
  width: 100%;
  margin-left: 10px;
  margin-right: 30px;
  display: grid;
  grid-template-columns: 320px 330px 330px ;
  grid-template-rows:200px  360px 360px  ;
  grid-gap: 10px;
  grid-template-areas:
    /* Only change code below this line */
    'header header header'
    'advert content content'
    'advert footer footer';
}
.img-expert {
  /* position: absolute; */
  width: 280px;
  height: 330px;
  left: 587px;
  top: 1061px;
  margin-top:30px;
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  border-radius: 10px;
}
.expert-detail{
   position: relative ;
  width: 222px;
  height: 80px;
  left: 580px;
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
</style> -->

<template>
  <div class="frm-expert">
    <div class="title-expert">Expert</div>
    <div class="container-expert">
      <div v-for="expert in experts.slice(2, 10)" :key="expert._id">
        <img
          :src="expert._source.thumbnail ? expert._source.thumbnail : avatar"
          :alt="expert._source.name + ' image'"
          class="img-expert"
        />
        <!-- {{ expert._source.name }} -->
      </div>
      <a href="#" class="expert-detail">See more</a>
    </div>
  </div>
  <Fields/>

</template>

<script setup lang="ts">
import BaseHeader from './components/layouts/BaseHeader.vue'
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'

import { getExperts, searchExperts } from '~/api/Experts'
import Expert from './model/Expert'
import avatar from '/avatar.jpg'
import Field from './components/Fields.vue'
import { createApp } from 'vue'
//import Vegetables from './components/Vegetables.vue'

const vueApp = createApp({
  // register each component
  components: { Field}
})
// import FormExpert from './components/Main.vue'

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
.frm-field{
   font-family: sans-serif;
  border: 1px solid #eee;

  padding: 20px 30px;
  margin-top: 1em;
  margin-left: 50px;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
 
  width: 1350px;
  height: 900px;
  left: 57px;
  top: 784px;

  background: #f8dae9;
  border-radius: 20px;
  text-align: center;
}
.frm-expert {
  font-family: sans-serif;
  border: 1px solid #eee;

  padding: 20px 30px;
  margin-top: 1em;
  margin-left: 50px;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
 
  width: 1350px;
  height: 900px;
  left: 57px;
  top: 784px;

  background: #f8dae9;
  border-radius: 20px;
  text-align: center;
}
.title-expert {
  position: relative ;
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
.container-expert{
  font-size: 40px;
  min-height: 300px;
  width: 100%;
  margin-left: 10px;
  margin-right: 30px;
  display: grid;
  grid-template-columns: 320px 330px 330px 320px;
  grid-template-rows:360px  360px  ;
  grid-gap: 10px;
  grid-template-areas:
    /* Only change code below this line */
    'header header header'
    'advert content content'
    'advert footer footer';
  /* Only change code above this line */
}
.container-field{
 font-size: 40px;
  min-height: 300px;
  width: 100%;
  margin-left: 10px;
  margin-right: 30px;
  display: grid;
  grid-template-columns: 320px 330px 330px ;
  grid-template-rows:200px  360px 360px  ;
  grid-gap: 10px;
  grid-template-areas:
    /* Only change code below this line */
    'header header header'
    'advert content content'
    'advert footer footer';
}
.img-expert {
  /* position: absolute; */
  width: 280px;
  height: 330px;
  left: 587px;
  top: 1061px;
  margin-top:30px;
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  border-radius: 10px;
}
.expert-detail{
   position: relative ;
  width: 222px;
  height: 80px;
  left: 580px;
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
</style>