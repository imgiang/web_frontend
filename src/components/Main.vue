<template>
  <HeaderVue />
  <div class="main">
    <div class="frm-expert">
      <div class="title-expert">Expert</div>

      <div class="container-expert">
        <div>
          <img src="/Expert/anh1.jpg" alt=" 'image'" class="img-expert" />
        </div>
        <div>
          <img src="/Expert/anh3.jpg" alt=" 'image'" class="img-expert" />
        </div>
        <div>
          <img src="/Expert/anh4.jpg" alt=" 'image'" class="img-expert" />
        </div>
        <div>
          <img src="/Expert/anh5.jpg" alt=" 'image'" class="img-expert" />
        </div>

        <div>
          <img src="/Expert/anh6.jpg" alt=" 'image'" class="img-expert" />
        </div>
        <div>
          <img src="/Expert/anh7.jpg" alt=" 'image'" class="img-expert" />
        </div>

        <!-- {{ expert._source.name }} -->
      </div>
      <a href="#" class="expert-detail detail">See more</a>
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
          <div class="text-field">Dentist</div>
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
      <a href="#" class="field-detail">See more</a>
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
              <td rowspan="2"><img src="/news/anh1.jpg" alt=" 'image'" class="img-news" /></td>
              <td class="textsub">This is the sub-detail of news.</td>
              <td class="textsub1">02-01-2021</td>
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
      <a href="#" class="news-detail">View all news</a>
    </div>
    <div class="frm-news">
      <div class="title-expert">Events</div>
      <div class="container-news">
        <div v-for="expert in 6" :key="expert">
          <table class="news">
            <tr>
              <td rowspan="2"><img src="/news/anh5.jpg" alt=" 'image'" class="img-events" /></td>
              <td class="textsub">This is a title of the event</td>
              <td class="textsub">Time of the event.</td>
              <td class="textsub">Address</td>
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
      <a href="#" class="news-detail">View all events</a>
    </div>
    <HomeQuestionVue />
  </div>
  <Footer />
</template>

<script  lang="ts">
import { ref, onMounted } from 'vue'

import { getExperts, searchExperts } from '~/api/Experts'
import Expert from '~/model/Expert'
import avatar from '/avatar.jpg'
import HomeQuestionVue from './HomeQuestion.vue'
import HeaderVue from './layouts/homeFragment/Header.vue'
import Footer from './Footer.vue'
export default {
  name: 'MainVue',
  components: { HomeQuestionVue, HeaderVue },
  setup() {
    const experts = ref<Expert[]>([])
    const search = ref('')

    const getSuggest = async () => {
      console.log(search.value)
      experts.value = await searchExperts(search.value)
    }

    // onMounted(async () => {
    //   experts.value = await getExperts()
    //   //  experts.value = await getExpertsField()
    // })

    return {
      experts,
      search,
      getSuggest
    }
  }
}
</script>


<style  scoped lang="css">
@import '../styles/Mainhome.css';
</style>