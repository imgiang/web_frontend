<template>
  <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css" />

  <div class="container">
    <div class="new-left">
      <img src="expert.jpg" alt=" 'image'" class="img-expert" />
      <div class="expert-name">Taylor Swift</div>
      <div class="work">RESEARCH ASSISTANT PROFESSOR OF Computer science</div>
      <div class="infor-list">
        <i class="fas fa-address-card"></i>
        <div class="content-infor">PROFESSOR</div>
         </div>
          <div class="infor-list">
       <i class="fas fa-map-marker-alt"></i>
        <div class="content-infor">Center for Urban Science + Progress, New York University, United States</div>
         </div>
          <div class="infor-list">
       <i class="fas fa-envelope"></i>
        <div class="content-infor">tkh@gmail.com</div>
         </div>
    </div>

    <div class="new-right">
      
       <div >
         <el-carousel indicator-position="outside" height="500px" class="item">
    <el-carousel-item v-for="item in 2" :key="item">
      <h3>{{ item }}</h3>
      <h3>{{ item }}</h3>
      <h3>{{ item }}</h3>
     

    </el-carousel-item>
  </el-carousel>
       </div>
   
      <div class="item1">cde</div>
    </div>
  </div>
  <div class="carousel">
<el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
   





   <!-- SFGDFFHGFHG -->
      <div class="new-right">
      <div class="item">
        <div class="title">INTRODUCTION</div>
        <div class="info-text">
          <label class="name">APPELLATION:</label>
          <div class="content">Research assistant professor Of computer science</div>
        </div>
        <div class="info-text">
          <label class="name1">POSITION:</label>
          <div class="content1">Assistant Professor</div>
        </div>
        <div class="info-text">
          <label class="name1">AFFILIATE:</label>
          <div class="content1">New York university</div>
        </div>
        <div class="info-text">
          <label class="name1">EXPERTISE:</label>
          <div class="list-item">
            <div class="list-content">Research assistant</div>

            <div class="list-content">Assistant professor</div>
            <div class="list-content">Assistant</div>
            <div class="list-content">Professor</div>
            <div class="list-content">Computer science</div>
         
          </div>
        </div>
      </div>
      <div class="item1">cde</div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="css">
@import '../styles/ExpertDetail.css';
</style>