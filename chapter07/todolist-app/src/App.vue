<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />
        <TodoCount :todoCount="todoList" />
        <TodoList
          :todoList="sortedList"
          @delete-todo="deleteTodo"
          @toggle-completed="toggleCompleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';
import TodoCount from './components/TodoCount.vue';

export default {
  name: 'App',
  components: { InputTodo, TodoList, TodoCount },
  data() {
    return {
      todoList: [
        { id: Date.now(), todo: '자전거 타기', completed: false },
        { id: Date.now() + 1, todo: '딸과 공원 산책', completed: true },
        { id: Date.now() + 2, todo: '일요일 애견 카페', completed: false },
        { id: Date.now() + 3, todo: 'Vue 원고 집필', completed: false },
      ],
    };
  },
  methods: {
    addTodo(todo) {
      if (todo.length >= 2) {
        this.todoList.push({ id: Date.now(), todo, completed: false });
      }
    },
    deleteTodo(id) {
      let index = this.todoList.filter((item) => item.id !== id);
      this.todoList.splice(index, 1);
    },
    toggleCompleted(id) {
      let index = this.todoList.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.todoList[index].completed = !this.todoList[index].completed;
      }
    },
  },
  // computed: data가 변할 때 자동으로 계산
  // -> 계산되서 return 된 값은 <template>에서 함수명으로 사용
  computed: {
    // 정렬
    sortedList() {
      this.todoList.sort((t1, t2) => {
        // true > false  -> 결과 : true
        if (t1.completed > t2.completed) {
          return 1; // 양수 반환 시 자리 바뀜 (t1, t2 -> t2, t1)
        }

        if (t1.completed < t2.completed) {
          return -1; // 음수 반환 시 자리 바꿈 X
        }

        // 위 if문 실행 X === completed가 같을 경우
        // -> 문자열 오름 차순 정렬

        // 모두 소문자로 변경(대소문자 구분 X)
        const todo1 = t1.todo.toLowerCase();
        const todo2 = t2.todo.toLowerCase();

        if (todo1 > todo2) return 1; // 자리 교체
        else if (todo1 === todo2) return 0; // 유지
        else return -1; // 유지
      });

      // 정렬된 todoList 반환
      return this.todoList;
    },
  },
};
</script>
