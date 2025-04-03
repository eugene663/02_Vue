<!-- 가전 페이지 -->
<template>
  <div>
    <h1><i class="fa-solid fa-tv"></i> 가전</h1>
    
    <ProductList category="electronics" title="가전" />

    <ProductAddButton/>

</div>
</template>

<script setup>
import ProductList from '@/components/ProductList.vue';
import ProductAddButton from '@/components/ProductAddButton.vue'
</script>



  