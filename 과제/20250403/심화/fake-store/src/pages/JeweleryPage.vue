<!-- 주얼리 페이지 -->
<template>
  <div>
    <h1><i class="fa-solid fa-gem"></i> 주얼리</h1>
    <ProductList category="jewelery" title="주얼리" />
  <ProductAddButton/>
  </div>
</template>

<script setup>
import ProductList from '@/components/ProductList.vue';
import ProductAddButton from '@/components/ProductAddButton.vue'

</script>
