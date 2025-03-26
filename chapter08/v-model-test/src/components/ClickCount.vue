<template>
  <div>
    <h1>자식 Click Count: {{ cnt }}</h1>

    <ChildClickCount />
  </div>
</template>

<script>
import ChildClickCount from './ChildClickCount.vue';
export default {
  name: 'ClickCount',
  components: { ChildClickCount },
  inject: ['cnt', 'increment'],
};
</script>
