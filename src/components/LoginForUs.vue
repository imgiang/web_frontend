<template>
  <body>
    <!-- <img class="img img__login_background" src="src\assets\login_backgroung.png" alt=""> -->
    <!-- Navbar -->
    <div class="nav_login">
      <ul class="nav_login-list nav_login-list-one">
        <li class="nav_login-item">ESSME</li>
      </ul>
      <ul class="nav_login-list nav_login-list-second">
        <li class="nav_login-item">Home</li>
        <li class="nav_login-item">Expert</li>
        <li class="nav_login-item">Languages</li>
        <li class="nav_login-item">
          <img class="img img__login_icon--small_size" src="src\assets\facebook.png" alt="" />
        </li>
        <li class="nav_login-item">
          <img class="img img__login_icon--small_size" src="src\assets\twitter.png" alt="" />
        </li>
        <li class="nav_login-item">
          <img class="img img__login_icon--small_size" src="src\assets\instagram.png" alt="" />
        </li>
      </ul>
    </div>
    <!-- main box chinh -->
    <div class="login_main_center-layout">
      <h3 class="center-layout__item">Sign In</h3>

      <div class="signIn-google">
        <img
          class="img img__login_icon--large_size icon-google"
          src="https://gonline.vn/wp-content/uploads/2019/03/google-icon-1-2-1360x1360.png"
          alt=""
        />
        <p class="gg-text-signinWith">Sign In With Google</p>
      </div>
    </div>
    <!-- footer nav -->
    <div class="nav_login_bottom">
      <ul class="nav_login_bottom-list">
        <li class="nav_login_bottom-item">ESSME</li>
        <li class="nav_login_bottom-item">ABOUT US</li>
        <li class="nav_login_bottom-item">BLOG</li>
      </ul>
    </div>
  </body>
</template>
<script lang="ts">
// import * as Module from 'module';
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
  background-image: url(../assets/login_background.png);
  background-repeat: no-repeat;
  background-size: 100%;
}
.img__login_background {
  width: 100%;
  height: 100%;
}
.nav_login-list {
  list-style: none;
  padding-left: 0;
  // margin: auto 16px;

  // margin: 0 8px;
}
.nav_login {
  position: relative;
  width: 100%;
  top: 23px;
  min-height: 50px;
  display: inline-flex;
  justify-content: space-between;
}
.nav_login-item {
  color: rgba(0, 0, 0, 1);
  list-style: none;
  margin: 0 8px;
  display: inline-flex;
  // align-self: center;
}
.nav_login-item:first-child {
  margin-left: 150px;
}
.nav_login-list-one {
  font-size: 1.2rem;
}
.nav_login-item:last-child {
  margin-right: 110px;
}
.img__login_icon--small_size {
  width: 18px;
  height: 20px;
}
.img__login_icon--large_size {
  width: 40px;
  height: 40px;
}
.icon
// BOTTOM NAV
.nav_login_bottom {
  width: 100%;
  position: flex;
  bottom: 4mm;
  display: flex;
}
.nav_login_bottom-list {
  list-style: none;
  display: inline-flex;
}
.nav_login_bottom-item {
  margin: 0 8px;
}
.login_main_center-layout {
  background-color: rgb(192, 227, 194);
  flex-direction: column;
  margin: 70px auto 0 auto;
  padding: 32px 0;
  max-width: 400px;
  height: 250px;
  display: flex;
  border-radius: 30px;
}
.center-layout__item:first-child {
  margin: 0 auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  align-self: flex-start;
}
.center-layout__item:last-child {
  margin: 0 auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  align-self: flex-start;
}
.signIn-google {
  height: 30%;
  width: 75%;
  margin-top: 10%;
  background-color: #90aaa1;
  display: flex;
  align-self: center;
  border-radius: 20px;
  justify-content: center;
}
.icon-google {
  align-self: center;
}
.gg-text-signinWith {
  width: 60%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
}
</style>
