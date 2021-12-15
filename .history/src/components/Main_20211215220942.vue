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
  <div class="frm-field">
    <div class="title-expert">Fields</div>
    <div class="container-field">
      <div v-for="expert in 9" :key="expert">
        <img src="/field.jpg" alt=" 'image'" class="img-field" />
        <div class="text-field">Business</div>
        <!-- {{ expert._source.name }} -->
      </div>
    </div>
    <a href="#" class="expert-detail detail">See more</a>
  </div>
  <div class="frm-news">
    <div class="title-expert">Fields</div>
    <div class="container-news">
      <div v-for="expert in 6" :key="expert">
        <table class="news">
          <tr border="5">
            <td colspan="2" class="text-news" >This is a title of the news</td>
          </tr>
          <tr>
            <td >   <img
          src="/field.jpg"
          alt=" 'image'"
          class="img-news"
        /></td>
            <td class=" textsub">This is the sub-detail of news.</td>
          </tr>
        </table>

        <!-- <img
          src="/field.jpg"
          alt=" 'image'"
          class="img-field"
        />
        <div class="text-field">Business</div> -->
        <!-- {{ expert._source.name }} -->
      </div>
    </div>
    <a href="#" class="expert-detail detail">See more</a>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from './components/layouts/BaseHeader.vue'
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'

import { getExperts, searchExperts } from '~/api/Experts'
import Expert from './model/Expert'
import avatar from '/avatar.jpg'

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
.frm-field {
  font-family: sans-serif;
  border: 1px solid #eee;

  padding: 20px 30px;
  margin-top: 100px;
  margin-left: 50px;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;

  width: 1350px;
  height: 1010px;
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
  margin-top: 100px;
  margin-left: 50px;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;

  width: 1350px;
  height: 870px;
  left: 57px;
  top: 784px;

  background: #f8dae9;
  border-radius: 20px;
  text-align: center;
}
.frm-news {
  font-family: sans-serif;
  border: 1px solid #eee;

  padding: 20px 30px;
  margin-top: 100px;
  margin-left: 50px;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;

  width: 1350px;
  height: 750px;
  left: 57px;
  top: 784px;

  background: #f8dae9;
  border-radius: 20px;
  text-align: center;
}
.title-expert {
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
/* .i {
  text-align: center;
  left: 100px;
  display: flex;
  align-items: center;
  margin: ;
} */
.container-expert {
  font-size: 40px;
  min-height: 300px;
  width: 100%;
  margin-left: 10px;
  margin-right: 30px;
  display: grid;
  grid-template-columns: 320px 330px 330px 320px;
  grid-template-rows: 360px 360px;
  grid-gap: 10px;
  grid-template-areas:
    /* Only change code below this line */
    'header header header'
    'advert content content'
    'advert footer footer';
  /* Only change code above this line */
}
.container-field {
  font-size: 40px;
  min-height: 300px;
  width: 80%;
  margin-left: 75px;
  /* margin-right: 30px; */
  display: grid;
  grid-template-columns: 390px 410px 390px;
  grid-template-rows: 280px 280px 280px;
  grid-gap: 10px;
  grid-template-areas:
    /* Only change code below this line */
    'header header header'
    'advert content content'
    'advert footer footer';
  /* align-items: center;
  text-align: center; */
}
.container-news{
  font-size: 40px;
  min-height: 300px;
  width: 80%;
  margin-left: 35px;
  /* margin-right: 30px; */
  display: grid;
  grid-template-columns: 430px 430px 430px;
  grid-template-rows: 280px 280px ;
  grid-gap: 10px;
  grid-template-areas:
    /* Only change code below this line */
    'header header header'
    'advert content content'
    'advert footer footer';
  /* align-items: center;
  text-align: center; */
}
.img-expert {
  /* position: absolute; */
  width: 280px;
  height: 330px;
  left: 587px;
  top: 1061px;
  margin-top: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
}
.img-field {
  width: 340px;
  height: 230px;
  left: 587px;
  top: 1061px;
  margin-top: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
}
.img-news{
  

width: 230px;
height: 120px;
left: 116px;
padding-left: 20px;
top: 0px;
background: url(image.png);
border-radius: 5px;
}
.expert-detail {
  position: relative;
  width: 222px;
  /* height: 90px; */
  left: 600px;
  /* top: 784px; */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
}
.text-field {
  position: absolute;
  /* width: 237px;
height: 30px; */
  /* left: 206px; */
  /* top: 1903px; */
  margin-left: 150px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}
.detail {
  padding-top: 20px;
  margin-top: 8px;
  /* margin-bottom:0px; */
}
.news{
 background: #FFEFF5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
width: 400px;
height:200px;
}
.text-news{
 
/* width: 385px;
height: 48px;
left: 116px;
top: 2807px; */
padding-left: 20px;
padding-top: 10px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 22px;
text-align: left;



color: #000000;

}
.textsub{
 display: flex;
margin-top: 10px;
margin-left: 0px;
padding-left: 6px;
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
 text-align: left;
color: #000000;
}

</style>