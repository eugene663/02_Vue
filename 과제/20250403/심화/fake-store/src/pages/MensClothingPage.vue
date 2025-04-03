<template>
  <div>
    <h2>남성 의류</h2>
    <ul v-if="mensClothing.length" class="list-group">
      <ProductItem
        v-for="product in mensClothing"
        :key="product.id"
        :ProductItem="product"
      />
    </ul>
    <p v-else>남성 의류를 불러오는 중...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductItem from '@/components/ProductItem.vue'; // ProductItem 컴포넌트 불러오기
import { get } from '@/api/product.js'; // Fakestore API 요청 함수 가져오기

const mensClothing = ref([]); // 남성 의류 데이터를 저장할 변수

onMounted(async () => {
  try {
    const data = await get("category/men's%20clothing"); // 카테고리 필터링 요청
    console.log('남성 의류 데이터:', data); // 데이터확인
    mensClothing.value = data;
  } catch (error) {
    console.error('남성 의류 목록을 불러오는 데 실패했습니다:', error);
  }
});
</script>

<style scoped>
.list-group {
  padding: 0;
}
</style>
