<template>
  <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css" />

  <div class="frm-quest">
    <div class="title-quest">FQAs</div>
    <div class="container-quest">
      <div v-for="expert in 3" :key="expert">
        <div class="quest-item">
          <div class="item">
            <i class="far fa-question-circle"></i>
            Question:
          </div>
          <br />
          <div class="i">
            <i class="fas fa-poll-h"></i>
            Answer:
          </div>
        </div>

        <!-- {{ expert._source.name }} -->
      </div>
      <a href="#" class="fqas-detail">See more</a>
    </div>
  </div>
  <div class="frm-input">
    <div class="title-quest1">Your Question</div>
    <div class="container-quest">
      <input type="text" placeholder="Enter your question" class="input-quest" />
      <input type="text" placeholder="Enter the field" class="input-quest" style="height: 50px" />
      <button class="submit">Send</button>
    </div>
  </div>
</template>

<script  lang="ts">
export default {
  name: 'HomeQuestionVue'
}
import ChooseFieldVue from './ChooseField.vue'
import { ref, onMounted } from 'vue'

import { getExperts, searchExperts } from '~/api/Experts'

import Expert from '~/model/Expert'

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

  user-select: none;
  overflow-x: auto;

  width: 85%;
  margin: auto;
  margin-top: 100px;

  margin-bottom: 40px;
  height: auto;
  left: 57px;
  top: 784px;

  background: #d1e0db;

  border-radius: 20px;
  text-align: center;
}
.frm-input {
  font-family: sans-serif;
  border: 1px solid #eee;

  padding: 20px 30px;

  user-select: none;
  overflow-x: auto;

  width: 85%;
  margin: auto;
  margin-top: 100px;

  margin-bottom: 40px;
  height: auto;
  left: 57px;
  top: 784px;

  background: #d1e0db;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.title-quest {
  position: relative;
  width: 222px;
  height: 80px;
  left: 585px;
  /* top: 784px; */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  /* align-items: center; */
  text-align: center;

  color: #000000;
}
.title-quest1 {
  position: relative;
  width: 222px;
  height: 80px;
  left: 535px;
  /* top: 784px; */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  /* align-items: center; */
  text-align: center;

  color: #000000;
}
.container-quest {
  font-size: 40px;
  height: auto;
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
.container-quest input {
}
.quest-item {
  width: 95%;
  height: 134px;
  left: -2px;
  top: 0px;
  margin: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.item {
  float: left;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  /* line-height: 42px;
  display: flex;
  align-items: center; */
  padding-left: 10px;
  padding-top: 10px;
  color: #000000;
}
.i {
  float: left;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  /* line-height: 42px;
  display: flex;
  align-items: center; */

  padding-top: 10px;
  color: #000000;
  padding-left: 35px;
}
.input-quest {
  width: 90%;
  height: 165px;
  left: 60px;
  top: 68px;

  background: #ffffff;
  border-radius: 10px;
  margin-left: 50px;
  margin-bottom: 25px;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;

  color: #000000;
  padding-left: 10px;
}
.fqas-detail {
  position: relative;
  /* width: 222px; */
  /* height: 10px; */
  left: 570px;
  bottom: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 25px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #000000;
  /* padding: 25px; */
  /* margin-top: 20px; */
  border-radius: 10px;
  width: 300px;
  height: 50px;
}
.submit {
  width: 133px;
  height: 40px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 0 auto;
  font-size: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
}
</style>