<template>
  <!-- 할일 항목을 표시하는 li 컴포넌트 -->
  <li
    :class="
      todoItem.done
        ? 'list-group-item list-group-item-success'
        : 'list-group-item'
    "
  >
    <!-- 내용을 표시하는 span -->
    <span :class="item">
      {{ ProductItem.title }}
    </span>
  </li>
</template>

<script setup>
import { useRouter } from 'vue-router';

// 부모 컴포넌트로부터 전달받은 props를 정의
defineProps({
  ProductItem: { type: Object, required: true },
});

const router = useRouter();
</script>

<style scoped>
.product-image {
  width: 50px; /* 원하는 크기로 조절 */
  height: 50px;
  object-fit: contain;
  margin-right: 10px;
}
</style>
