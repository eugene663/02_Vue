<template>
  <div>
    <h1>자식2 Click Count: {{ cnt }}</h1>
    <button @click="increment">클릭 시 1 증가</button>
  </div>
</template>

<script>
export default {
  name: 'ClickCount',

  // provide로 제공된 정보 삽입하기
  inject: ['cnt', 'increment'],
};
</script>
