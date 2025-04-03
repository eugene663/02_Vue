<template>
  <div>
    <h2><i class="fa-solid fa-user-tie"></i> 남성 의류</h2>
      <ProductList category="men's clothing" title="남성 의류" />
      <ProductAddButton/>
  </div>
</template>

<script setup>
import ProductList from '@/components/ProductList.vue';
import ProductAddButton from '@/components/ProductAddButton.vue'

</script>
