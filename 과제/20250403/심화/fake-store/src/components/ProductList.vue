<template>
  <div class="mt-3">
    <ul v-if="products.length" class="list-group">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :ProductItem="product"
      />
    </ul>
    <p v-else>상품을 불러오는 중...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductItem from '@/components/ProductItem.vue';
import { get } from '@/api/product.js';

// props로 category와 title을 받음
const props = defineProps({
  category: { type: String, required: true },
  title: { type: String, required: true }, 
});

const products = ref([]);

onMounted(async () => {
  try {
    const data = await get(`category/${encodeURIComponent(props.category)}`);
    console.log(`${props.title} 데이터:`, data);
    products.value = data;
  } catch (error) {
    console.error(`${props.title} 데이터를 불러오는 데 실패했습니다:`, error);
  }
});
</script>

<style>
ul{
  list-style-type: none;
  margin:10px;
}
</style>