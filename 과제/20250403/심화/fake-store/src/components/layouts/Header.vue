<!-- 헤더 컴포넌트 -->
<template>
  <div class="back p-5 bg-primary text-white">
    <h1>
      <span>{{ config.title }}</span>
    </h1>
    <p>
      <span>{{ config.subtitle }}</span>
    </p>
  </div>
</template>

<script setup>
// src/config/index.js 모듈에서 데이터 가져오기
import config from '@/config';
</script>

<!-- 해당 컴포넌트에서만 적용되는 스타일 -->
<style scoped>
.back {
  background-image: url('@/assets/bg_image.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 2rem;
}
</style>
