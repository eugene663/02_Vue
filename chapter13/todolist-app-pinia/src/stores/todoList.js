import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import axios from 'axios';

export const useTodoListStore = defineStore('todoList ', () => {
  //  state
  // axios 요청 주소
  const BASEURI = '/api/todos';

  // 상태 변수로 reactive로 선언하여 반응형으로 만듦
  const state = reactive({ todoList: [] });

  // getter
  const todoList = computed(() => state.todoList);
  const isLoading = computed(() => state.isLoading);

  // 완료된 할인 개수
  const doneCount = computed(() => {
    const filtered = state.todoList.filter((todo) => todo.done);
    return filtered.length;
  });

  // actions
  /********* axios 요청 처리 함수 *********/

  /**
   * TodoList 목록을 서버에서 가져오는 함수
   * @returns {Promise<void>}
   */
  const fetchTodoList = async () => {
    // 로딩 스피너가 보이도록 상태값 변경
    state.isLoading = true;
    try {
      const response = await axios.get(BASEURI);
      if (response.status === 200) {
        state.todoList = response.data;
      } else {
        alert('데이터 조회 실패');
      }
    } catch (error) {
      alert('에러발생:' + error);
    } finally {
      // 로딩 스피너가 보이지 않도록 상태값 변경
      state.isLoading = false;
    }
  };

  /**
   * TodoItem 서버 추가 함수수
   * @param {Object} todo - TodoItem의 정보를 포함하는 객체
   * @param {Function} successCallback - 요청 성공 시 호출될 콜백 함수
   */
  const addTodo = async ({ todo, desc }, successCallback) => {
    state.isLoading = true;
    try {
      const payload = { todo, desc };
      const response = await axios.post(BASEURI, payload);
      if (response.status === 201) {
        state.todoList.push({ ...response.data, done: false });
        successCallback();
      } else {
        alert('Todo 추가 실패');
      }
    } catch (error) {
      alert('에러발생:' + error);
    } finally {
      state.isLoading = false;
    }
  };

  /**
   * TodoItem 서버 수정 함수
   * @param {Object} todo - TodoItem의 정보를 포함하는 객체
   * @param {Function} successCallback - 요청 성공 시 호출될 콜백 함수
   */
  const updateTodo = async ({ id, todo, desc, done }, successCallback) => {
    state.isLoading = true;
    try {
      const payload = { id, todo, desc, done };
      const response = await axios.put(BASEURI + `/${id}`, payload);
      if (response.status === 200) {
        let index = state.todoList.findIndex((todo) => todo.id === id);
        state.todoList[index] = payload;
        successCallback();
      } else {
        alert('Todo변경실패');
      }
    } catch (error) {
      alert('에러발생:' + error);
    } finally {
      state.isLoading = false;
    }
  };

  /**
   * TodoItem 서버 삭제 함수
   * @param {string} id - TodoItem의 id
   */
  const deleteTodo = async (id) => {
    state.isLoading = true;
    try {
      const response = await axios.delete(BASEURI + `/${id}`);
      console.log(response.status, response.data);
      if (response.status === 200) {
        let index = state.todoList.findIndex((todo) => todo.id === id);
        state.todoList.splice(index, 1);
      } else {
        alert('Todo 삭제 실패');
      }
    } catch (error) {
      alert('에러발생:' + error);
    } finally {
      state.isLoading = false;
    }
  };

  /**
   * TodoItem 완료여부 토글 함수
   * @param {string} id - TodoItem의 id
   */
  const toggleDone = async (id) => {
    state.isLoading = true;
    try {
      let todo = state.todoList.find((todo) => todo.id === id);
      let payload = { ...todo, done: !todo.done };
      const response = await axios.put(BASEURI + `/${id}`, payload);
      if (response.status === 200) {
        todo.done = payload.done;
      } else {
        alert('Todo 완료 변경 실패');
      }
    } catch (error) {
      alert('에러발생 :' + error);
    } finally {
      state.isLoading = false;
    }
  };

  return {
    todoList,
    isLoading,
    doneCount,
    fetchTodoList,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleDone,
  };
});
