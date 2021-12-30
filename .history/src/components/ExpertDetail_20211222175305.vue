<template>
<mainHomeVue/>
  <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css" />
  <div class="thumnail"> 
    <div class="link-thumnail">
      <div class="i1"><i class="fas fa-home"></i></div>
    <a href="#" class="i1">Home</a>
    
    <div class="i1"><i class="fas fa-chevron-right"></i></div>
    <a href="#" class="i1">Expert</a>
    <div class="i1"><i class="fas fa-chevron-right"></i></div>
     <a href="#" class="i1">Trinh Khanh Huyen</a>
    </div>
     <hr class="new1">
  </div>
 
  <div class="container">
    <div class="new-left">
      <img src="expert.jpg" alt=" 'image'" class="img-expert" />
      <div class="expert-name">Taylor Swift</div>
      <div class="work">RESEARCH ASSISTANT PROFESSOR OF Computer science</div>
      <div class="infor-list">
        <div class="icon-pro"> <i class="fas fa-address-card"></i></div>
        
        <div class="content-infor">PROFESSOR</div>
         </div>
          <div class="infor-list">
               <div class="icon-pro"> <i class="fas fa-map-marker-alt"></i></div>
      
        <div class="content-infor">Center for Urban Science + Progress, New York University, United States</div>
         </div>
          <div class="infor-list">
                           <div class="icon-pro">  <i class="fas fa-envelope"></i></div>

      
        <div class="content-infor">tkh@gmail.com</div>
         </div>
    </div>

    <div class="new-right">
      <div  class="i">
       <div class="item">
         <el-carousel indicator-position="outside" height="450px" >
    
     <el-carousel-item >
     
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
     

    </el-carousel-item>
    <el-carousel-item >
     
        <div class="title">SOCIAL MEDIA</div>
        <div class="info-text">
          <label class="icon-infor"  ><i class="fas fa-globe-europe" ></i></label>
          <div class="link-infor">https://abc.xyz </div>
        </div>
        <div class="info-text">
          <label class="icon-infor"><i class="fab fa-facebook"></i></label>
          <div class="link-infor">https://www.facebook.com/</div>
        </div>
        <div class="info-text">
          <label class="icon-infor"><i class="fab fa-twitter"></i></label>
          <div class="link-infor">https://twitter.com/</div>
        </div>
        <div class="info-text">
          <label class="icon-infor"><i class="fab fa-linkedin-in"></i></label>
          <div class="link-infor">https://www.linkedin.com/</div>

        </div>
     

    </el-carousel-item>
  </el-carousel>
       </div>
      </div>
      <div class="item1">
        <div class="form-order">ORDER EXPERT</div>
        <input type="text" placeholder="Enter your requirement" class="">
      <button class="submit">Send</button>
      </div>
    </div>
  </div>



    <div class="rlt">
        <div class="rlt-cover"> 
            <h1>RELATED EXPERT</h1>
        <div class="items">
            <div class="item-name">DINH CHI NGUYEN</div>
            <div class="item-job">Professional, Doctor</div>
            <div class="item-address">Harvard University, Cambridge University</div>
            <img src="https://wapvippro.net/wp-content/uploads/2020/04/avatar-facebook-vo-danh-8.jpg" alt="" class="item-avt">
        </div>
        <div class="items">
            <div class="item-name">THUY GIANG NGUYEN</div>
            <div class="item-job">Professional, Doctor</div>
            <div class="item-address">Harvard University, Cambridge University</div>
            <img src="https://wapvippro.net/wp-content/uploads/2020/04/avatar-facebook-vo-danh-8.jpg" alt="" class="item-avt">
        </div>
        <div class="items">
            <div class="item-name">THU HUONG DUONG</div>
            <div class="item-job">Professional, Doctor</div>
            <div class="item-address">Harvard University, Cambridge University</div>
            <img src="https://wapvippro.net/wp-content/uploads/2020/04/avatar-facebook-vo-danh-8.jpg" alt="" class="item-avt">
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import mainHomeVue from './layouts/homeFragment/mainHome.vue';
</script>

<style scoped lang="css">
@import '../styles/ExpertDetail.css';
</style>