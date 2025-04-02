<template>
  <div>
    X: <input type="text" v-model.number="x" /> <br />
    <div>2배 값: {{ result }}</div>
    <div>
      이전값: {{ oldValue }}
      <br />
      현재값: {{ newValue }}
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  name: 'Calc5',
  setup() {
    const x = ref(0);
    const result = ref(0);
    const newValue = ref(0);
    const oldValue = ref(0);
    watch(x, (current, old) => {
      console.log(`${old} => ${current}`);
      result.value = current * 2;
      newValue.value = current;
      oldValue.value = old;
    });
    332;

    return { x, result, newValue, oldValue };
  },
};
</script>
