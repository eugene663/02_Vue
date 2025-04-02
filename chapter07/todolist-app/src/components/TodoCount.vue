<template>
  <div class="row mb-3">
    <div class="col-md text-center">
      전체 todo 개수 : <span>{{ todoCount ? todoCount.length : 0 }}</span>
    </div>
    <div class="col-md text-center">
      완료 todo 개수 :
      <span :class="{ completed: completedCount > 0 }">{{
        completedCount
      }}</span>
    </div>
    <div class="col-md text-center">
      미완료 todo 개수 :
      <span :class="{ notCompleted: todoCount.length - completedCount > 0 }">
        {{ todoCount.length - completedCount }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoCount',
  props: {
    todoCount: { type: Array, required: true },
  },
  computed: {
    completedCount() {
      // todoCount가 정의되어 있을 경우만 필터링 수행
      return this.todoCount && this.todoCount.length
        ? this.todoCount.filter((todo) => todo.completed).length
        : 0;
    },
  },
};
</script>
