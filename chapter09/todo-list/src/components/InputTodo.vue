<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="할 일을 입력하세요"
          v-model.trim="todo"
          @keyup.enter="addTodoHandler"
        />
        <span class="btn btn-primary input-group-addon" @click="addTodoHandler">
          추가
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTodo',
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    addTodoHandler() {
      if (this.todo.length >= 3) {
        this.$emit('add-todo', this.todo);
        this.todo = ''; // 입력 필드 초기화
      }
    },
  },
};
</script>
