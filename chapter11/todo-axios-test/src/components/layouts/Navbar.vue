<!-- Navbar 컴포넌트 -->
<template>
  <nav class="navbar navbar-expand bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <NavItem v-for="menu in menus" :menu="menu" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import NavItem from './NavItem.vue';

// NavItem에 전달할 주소/text 객체 배열
const menus = [
  { uri: '/', text: 'Home' },
  { uri: '/all', text: 'All' },
  { uri: '/get/1', text: 'Get' },
  { uri: '/post', text: 'Post' },
];
</script>
