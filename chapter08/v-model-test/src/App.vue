<template>
  <div>
    <InputName v-model:name="searchName" />
    <h3>검색어 : {{ searchName }}</h3>
  </div>
  <hr />
  <h1>부모 Click Count: {{ count }}</h1>
  <!-- 자식 Click Count -->
  <ClickCount />
</template>
<script>
import InputName from './components/InputName.vue';
import ClickCount from './components/ClickCount.vue';
import { computed } from 'vue';
export default {
  name: 'App',

  // 자식 컴포넌트 등록
  components: { InputName, ClickCount },
  data() {
    return { searchName: 'John', count: 0 };
  },
  // 하위 컴포넌트에게 제공
  provide() {
    return {
      // count 변경 시 하위 컴포넌트 재랜더링
      cnt: computed(() => this.count),
      // increment() 호출 시 App.vue의 count 1 증가
      increment: () => this.count++,
    };
  },
};
</script>
