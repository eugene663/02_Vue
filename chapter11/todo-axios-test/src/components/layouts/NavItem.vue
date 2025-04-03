<!-- NavItem 컴포넌트 -->
<template>
  <!-- 클릭 시 주소 -> "/" , 
             <RouterView> 자리에 Home 컴포넌트 랜더링 -->
  <li class="nav-item">
    <RouterLink :to="props.menu.uri" class="nav-link">
      {{ props.menu.text }}
    </RouterLink>
  </li>
</template>

<script setup>
const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
});
</script>
