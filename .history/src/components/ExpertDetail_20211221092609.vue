<template>
  <div class="new">abc</div>
</template>

<script  lang="ts">
// require('@//styles/ExpertDetail.css')

import { ref, onMounted } from 'vue'

import { getExperts, searchExperts } from '~/api/Experts'
import Expert from './model/Expert'
import avatar from '/avatar.jpg';


export default{
name :'ExpDetail'
}
</script>

<style>

</style>