<template>
  <div class="container">
    <!-- Header 컴포넌트 -->
    <Header />

    <!-- 주소에 따라 라우트된 컴포넌트가 보여질 자리 지정 -->
    <!-- <router-view></router-view> -->
    <RouterView />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: { Header },
};
</script>

<style>
.container {
  text-align: center;
  margin-top: 10px;
}
</style>
