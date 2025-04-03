<template>
  <div>
    <h2>상품 목록</h2>
    <ul class="list-group">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :ProductItem="product"
      />
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductItem from './ProductItem.vue';
import { get } from '@/api/product.js'; // Fakestore API 연동

const products = ref([]); // 상품 리스트를 저장할 반응형 변수

onMounted(async () => {
  try {
    products.value = await get(); // API 호출하여 상품 리스트 가져오기
  } catch (error) {
    console.error('상품 목록을 불러오는 데 실패했습니다:', error);
  }
});
</script>

<style scoped>
.list-group {
  padding: 0;
}
</style>
