<template>
  <div class="container">
    <!-- Header 컴포넌트 -->
    <Header />

    <!-- 주소에 따라 라우트된 컴포넌트가 보여질 자리 지정 -->
    <!-- <router-view></router-view> -->
    <RouterView />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
.fa {
  padding: 5px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}
.fa-facebook {
  background: #3b5998;
  color: white;
}
.fa-youtube {
  background: #bb0000;
  color: white;
}
.fa-instagram {
  background: #125688;
  color: white;
}
.container {
  text-align: center;
  margin-top: 10px;
}
</style>
