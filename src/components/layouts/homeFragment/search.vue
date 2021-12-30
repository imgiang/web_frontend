<template>
  <p>
    <input class="search" type="text" placeholder="Search Expert or Field..." />
    <button class="btn-search">
      <img class="img" src="https://www.freeiconspng.com/uploads/search-icon-png-0.png" />
    </button>
  </p>
</template>
<style>
.img {
  height: 40px;
  margin-top: 1mm;
  text-align: center;
}
.btn-search {
  position: absolute;
  background: #efb0c9;
  margin-left: 2cm;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  outline: none;
  border: none;
  margin-top: none;
  text-align: center;
  height: 55px;
  width: 130px;
}
.search {
  margin-left: -3cm;
  background: #efb0c9;
  outline: none;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  /* margin-top: 100px; */
  width: 60%;
  height: 55px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  padding-left: 2cm;
}

button:hover {
  background: #d8aad2;
}
input:hover {
  background: #d8aad2;
}
.search:click {
  background: #f8dae9;
}
</style>
