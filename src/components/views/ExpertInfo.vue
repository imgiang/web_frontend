<template>
  <HeaderVue />
  <!-- <searchVue /> -->
  <div class="main">
    <!-- <searchVue /> -->
    <!-- <el-row :gutter="20" style="width: 90%">
      <el-col :span="24" :offset="2" class="compo-color">
        <div class="grid-content"></div>
      </el-col>
    </el-row> -->
  </div>
  <!-- <FooterVue /> -->
</template>

<script setup lang="ts">
import HeaderVue from '../layouts/homeFragment/Header.vue'
import searchVue from '../layouts/homeFragment/search.vue'
import FooterVue from '../layouts/homeFragment/Footer.vue'
</script>

<style lang="scss">
// * {
//   background-color: blanchedalmond;
// }
// .compo-color {
//   background: #f8dae9;
// }
// .el-row {
//   margin-bottom: 20px;
//   &:last-child {
//     margin-bottom: 0;
//   }
// }
// .el-col {
//   border-radius: 4px;
// }
// .bg-purple-dark {
//   background: #99a9bf;
// }
// .bg-purple {
//   background: #d3dce6;
// }
// .bg-purple-light {
//   background: #e5e9f2;
// }
// .grid-content {
//   border-radius: 4px;
//   min-height: 36px;
// }
// .row-bg {
//   padding: 10px 0;
//   background-color: #f9fafc;
// }
</style>
