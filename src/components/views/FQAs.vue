<template>
  <HeaderVue />
  <div class="flex-container main">
    <article>
      <!--Form Search--->
      <form action="" method="post" class="Frm_Search">
        <!-- <input message placeholder="Search by" class="Search" />
        <button type="submit" value="Submit" class="btn-Search"><i class="fas fa-search"></i></button> -->
        <Search />
        <div class="type-question">
          <div class="item-question">
            <span class="btn-question">Occupation<i class="fas fa-sort-down"></i></span>
            <span class="btn-question">Fields<i class="fas fa-sort-down"></i></span>
            <span class="btn-question">Country<i class="fas fa-sort-down"></i></span>
            <span class="btn-question"><i class="fas fa-filter"></i>Others</span>
            <span class="btn-question"><i class="fas fa-sync-alt"></i>Reset</span>
          </div>
        </div>
      </form>
      <!---->
      <div class="question-answer">
        <br />
        <div class="text-question">
          <p class="text-qa">Question and Answer</p>
        </div>
        <div v-for="(type, index) in types" :key="index">
          <div class="question">
            <br />

            <span class="list-question"><i class="fas fa-question-circle"></i>{{ type.name }}</span>
            <p class="list-answer"><i class="fas fa-list-alt"></i>Answer</p>
          </div>
        </div>
        <div class="showmore"><a href="" class="show-more">Show more</a></div>
      </div>
      <!---->
      <div class="question-for-user">
        <br />
        <p class="text-qa">Your Question</p>
        <form action="" method="post" class="form-user">
          <textarea message placeholder="Enter your question" class="question-user"></textarea>
          <select selected class="selected-fields">
            <option disabled value="">Choose the field...</option>
            <option>Business</option>
            <option>Computer Science</option>
            <option>Data Science</option>
          </select>
          <div class="btn">
            <button type="submit" value="Submit" class="btn-Send">Send</button>
          </div>
        </form>
      </div>
    </article>
    <Footer />
  </div>
</template>

<script lang="ts">
// import HeaderVue from '../layouts/homeFragment/Header.vue'
import HeaderVue from '../layouts/homeFragment/Header.vue'
import Footer from '../layouts/homeFragment/Footer.vue'
import Search from '../layouts/homeFragment/search.vue'
// export default {
//   name: 'FQAs',
//   data() {
//     return {
//       types: [{ name: 'Question 1' }, { name: 'Question 2' }, { name: 'Question 3' }]
//     }
//   },
//   components: { Footer, Search }
// }
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-flow: row wrap;
}
body {
  box-sizing: border-box;
  font-family: Arial;
  margin: 0;
  top: 0;
  bottom: 0;
  padding: 0;
}
.flex-container > * {
  box-sizing: border-box;
}

article {
  flex: 100%;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0,0,0,0.19);*/
  /* margin-top: 80px;*/
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #cfecf5;
  border-radius: 10px;
  /*position: relative;*/
  z-index: 2;
}
footer {
  flex: 100%;
  padding: 20px;
  text-align: center;
  background: #ddd;
}
.Frm_Search {
  text-align: center;
}
.Search {
  background: white;
  width: 900px;
  margin: 10px auto;
  padding: 5px;
  height: 35px;
  border-radius: 10px;
  border: none;
  outline-color: #44d6e9;
  box-shadow: 0px 4px 4px rgba(173, 153, 153, 0.25);
}
.btn-Search {
  margin: 14px;
  padding: 13px;
  width: 120px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #44d6e9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
.search-icon {
  font-size: 18px;
  color: white;
}

/* .type-question{
          background-color: #ddd;
           min-height: 500px;
           margin: 10px; 
           
       }*/
.item-question {
  display: flex;
  justify-content: center;
}
.btn-question {
  margin: 14px;
  padding: 13px;
  width: 120px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
.fa-sort-down,
.fa-filter,
.fa-sync-alt {
  padding-left: 6px;
  padding-right: 6px;
}
.question-icon {
  padding-left: 6px;
  padding-right: 6px;
}
.question-answer {
  background-color: #ecf4f1;
  min-height: 550px;
  margin: 35px;
  border-radius: 10px;
}
.text-qa {
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin: 25px;
}
.question {
  background-color: #d1e0db;
  min-height: 100px;
  margin: 35px;
  border-radius: 10px;
}
.list-question {
  margin: 15px;
}
.list-answer {
  margin: 15px;
}
.fa-question-circle,
.fa-list-alt {
  margin-right: 9px;
}
.question-for-user {
  background-color: #ecf4f1;
  min-height: 300px;
  margin: 35px;
  border-radius: 10px;
}
.form-user {
  min-height: 200px;
  margin: 35px;
  border-radius: 10px;
}
.question-user {
  margin: 10px;
  width: 97%;
  height: 100px;
  outline: none;
  border-radius: 10px;
  background-color: #d1e0db;
}
.selected-fields {
  margin: 10px;
  width: 97%;
  height: 30px;
  border-radius: 3px;
  outline: none;
  background-color: #d1e0db;
}
.btn-Send {
  margin: 14px;
  padding: 13px;
  width: 120px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #44d6e9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
.btn {
  display: flex;
  justify-content: center;
}
.showmore {
  display: flex;
  justify-content: center;
}
.show-more {
  color: black;
}

@media screen and (max-width: 800px) {
  .flex-container,
  .navbar {
    flex-direction: column;
  }
}
</style>

function data() { throw new Error('Function not implemented.'); }
