<template>
  <div class="frm-expert">
    <div class="title-expert">Expert</div>
    <div class="container-expert">
      <div v-for="expert in experts" :key="expert._id">
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
</template>

<script setup lang="ts">
// export default {
// name:'HomeQuestion'
// }
</script>

<style>

</style>