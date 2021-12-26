<template>
  <div class="frm-expert">
    <div class="title-expert">Expert</div>
    <div>
      <table>
        <thead>
          <tr >
            <th class="i">Month</th>
            <th class="i">Month</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$80</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Sum</td>
            <td>$180</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from './components/layouts/BaseHeader.vue'
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'

import { getExperts, searchExperts } from '~/api/Experts'
import Expert from './model/Expert'
import avatar from '/avatar.jpg';
import FormExpert   from './components/Main.vue'

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
  width: 1326px;
  height: 688px;
  left: 57px;
  top: 784px;

  background: #f8dae9;
  border-radius: 20px;
}
.title-expert {
  position: absolute;
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
.i{
     text-align: center;
     left: 100px;
     display: flex;
     align-items: center;
}
</style>