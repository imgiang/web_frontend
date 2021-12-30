<template>
<HeaderVue />
<div class="main">

<div   >
    <searchVue />
  
    
    
       <ExpertDetailVue/>
 
    
  
                
</div>
 <FooterVue/>
</div>

 

 
</template>
<script setup lang="ts">
import HeaderVue from './layouts/homeFragment/Header.vue';
import searchVue from './layouts/homeFragment/search.vue';
import ExpertDetailVue from './ExpertDetail.vue';
import FooterVue from './Footer.vue';
</script>
<style lang="scss" scoped>
.main{
  background-color: #fafafa;
  
  margin: auto;
}

</style>