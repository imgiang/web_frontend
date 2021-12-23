<template>
  <img class="background" src="src\assets\carousel.png" />
  <div class="navbar top">
    <p class="logo">ESSME</p>
    <div class="dropdown item">
      <button class="dropbtn">Login</button>
    </div>
    <div class="dropdown item">
      <button class="dropbtn">Languages</button>
      <div class="dropdown-content border-radius-up border-radius-down">
        <a class="border-radius-up">English</a>
        <a class="border-radius-down">Tiếng Việt</a>
      </div>
    </div>
    <div class="dropdown item">
      <button class="dropbtn">Expert</button>
      <div class="dropdown-content border-radius-up border-radius-down">
        <a class="border-radius-up">FQAs</a>
        <a>Order Expert</a>
        <a class="border-radius-down">Expert Info</a>
      </div>
    </div>
    <div class="dropdown item">
      <button class="dropbtn">Home</button>
    </div>
  </div>
</template>

<style>
:root {
  --maincolor: #b9cec7;
  --btncolor: #e6f0ec;
}
.background {
  height: 548px;
  width: 100%;
}
.top {
  left: 30px;
  position: absolute;
  top: 0px;
}
.border-radius-up {
  /* border-top-left-radius: 5px; */
  border-top-right-radius: 5px;
}
.border-radius-down {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.dropbtn {
  background-color: var(--maincolor);
  color: black;
  font-weight: normal;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 150px;
}

/* Dùng trong <div> để định vị nội dung thả xuống */
.dropdown {
  position: relative;
  display: inline-block;
  border-radius: 10px;
}

/* / * Nội dung thả xuống (Ẩn theo mặc định) * / */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--btncolor);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* / * Liên kết bên trong danh sách thả xuống * / */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* / * Thay đổi định dạng của liên kết thả xuống khi di chuột qua * / */
.dropdown-content a:hover {
  background-color: var(--btncolor);
  color: white;
}

/* / * Hiển thị menu thả xuống khi di chuột * / */
.dropdown:hover .dropdown-content {
  display: block;
}

/* / * Thay đổi màu nền của nút thả xuống khi nội dung được hiển thị * / */
.dropdown:hover .dropbtn {
  background-color: var(--btncolor);
}
/*  */
.color {
  background-color: var(--btncolor);
}
.font {
  font-family: Arial, Helvetica, sans-serif;
  font-size: larger;
  color: #000000;
}
.item {
  float: right;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 0cm;
  margin-right: 1cm;
  color: #000000;
}
.logo {
  float: left;
  margin-top: 0.45cm;
  margin-left: 1cm;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: #000000;
}
.navbar {
  margin: 0 auto; /* Căn giữa block element */
  margin-top: 0.5cm;
  width: 95%;
  height: 52px;
  background: var(--maincolor);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
</style>
