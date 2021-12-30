<template>
  <div class="frm-expert">
    <div class="title-expert">Expert</div>
    <div class="container-expert">
      <div v-for="expert in experts.slice(2, 10)" :key="expert._id">
        <div class="container">
          <img
            :src="expert._source.thumbnail ? expert._source.thumbnail : avatar"
            :alt="expert._source.name + ' image'"
            class="img-expert"
          />
          <div class="overlay">Welcome to javaTpoint.com</div>
        </div>

        <!-- {{ expert._source.name }} -->
      </div>
      <a href="#" class="expert-detail">See more</a>
    </div>
  </div>
  <div class="frm-field">
    <div class="title-expert">Fields</div>
    <div class="container-field">
      <div>
        <img src="/Fields/architect.jpg" alt=" 'image'" class="img-field" />
        <div class="text-field">Architect</div>
      </div>
      <div>
        <img src="/Fields/Astronomy.jpg" alt=" 'image'" class="img-field" />
        <div class="text-field">Astronomy</div>
      </div>
      <div>
        <img src="/Fields/beauty salon.jpg" alt=" 'image'" class="img-field" />
        <div class="text-field">Beauty salon</div>
      </div>
      <div>
        <img src="/Fields/business.jpg" alt=" 'image'" class="img-field" />
        <div class="text-field">Business</div>
      </div>

      <div>
        <img src="/Fields/dentist-office-min.jpg" alt=" 'image'" class="img-field" />
        <div class="text-field">Dentist-office-min</div>
      </div>
      <div>
        <img src="/Fields/education.jpg" alt=" 'image'" class="img-field" />
        <div class="text-field">Education</div>
      </div>
      <div>
        <img src="/Fields/infotech.jpg" alt=" 'image'" class="img-field" />
        <div class="text-field">Infotech</div>
      </div>
      <div>
        <img src="/Fields/restaurant.jpg" alt=" 'image'" class="img-field" />
        <div class="text-field">Restaurant</div>
      </div>
      <div>
        <img src="/Fields/biology.jpg" alt=" 'image'" class="img-field" />
        <div class="text-field">Biology</div>
      </div>
      <!-- {{ expert._source.name }} -->
    </div>
    <a href="#" class="expert-detail detail">See more</a>
  </div>
  <div class="frm-news">
    <div class="title-expert">News</div>
    <div class="container-news">
      <div v-for="expert in 6" :key="expert">
        <table class="news">
          <tr border="5">
            <td colspan="2" class="text-news">This is a title of the news</td>
          </tr>
          <tr>
            <td rowspan="2"><img src="/news.jpg" alt=" 'image'" class="img-news" /></td>
            <td class="textsub">This is the sub-detail of news.</td>
            <td class="datenews">02-01-2021</td>
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
    <a href="#" class="expert-detail newsdetail">View all news</a>
  </div>
  <HomeQuestion />
</template>

<script setup lang="ts">
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
  //  experts.value = await getExpertsField()
})
</script>


<style>
.frm-field {
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
.frm-expert {
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
.frm-news {
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
  position: relative;
}
/* .container-expert:hover .overplay{
   opacity: 1.5;
} */
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
.container-news {
  font-size: 40px;
  min-height: 300px;
  width: 80%;
  margin-left: 35px;
  /* margin-right: 30px; */
  display: grid;
  grid-template-columns: 430px 430px 430px;
  grid-template-rows: 280px;
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
   display: block;
  width: 280px;
  height: 330px;
  left: 587px;
  top: 1061px;
  margin-top: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
}
/* .img-expert:hover {
-webkit-transform: scale(0.8);
-ms-transform: scale(0.8);
transform: scale(0.8);
transition: 1s ease;
} */
.img-field {
  width: 340px;
  height: 230px;
  left: 587px;
  top: 1061px;
  margin-top: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
}
.img-news {
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
  text-align: center;

  /* margin-bottom:0px; */
}
.news {
  background: #ffeff5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 400px;
  height: 200px;
}
.text-news {
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
.textsub {
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
.datenews {
  padding-top: 65px;
  padding-left: 60px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: flex-end;
  text-align: right;

  color: #000000;
}
.newsdetail {
  padding-top: 15px;
  margin-top: 0px;
  left: 590px;
  text-align: center;
}

.overlay {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
 width: 275px;
  color:#f8dae9;
  
  opacity: 0.5;
  transition: 0.9s ease;
  font-size: 25px;
  padding: 20px;
}

.container:hover  .overlay {
  opacity: 3.5;
}
</style>