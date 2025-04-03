<!-- 여성 의류 페이지 -->
<template>
  <div>
    <h2><i class="fa-solid fa-person-dress"></i> 여성 의류</h2>
    <ProductList category="women's clothing" title="여성 의류" />
    <ProductAddButton/>

  </div>
</template>

<script setup>
import ProductList from '@/components/ProductList.vue';
import ProductAddButton from '@/components/ProductAddButton.vue'

</script>
