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
  <div  class="frm-field">
    <div class="title-expert">Expert</div>
    <div class="container-field">
      <div v-for="expert in 9" :key="expert">
        <img
          src="/field.jpg"
          alt=" 'image'"
          class="img-expert"
        />
        <!-- {{ expert._source.name }} -->
      </div>
    </div>
  </div>
</template>
