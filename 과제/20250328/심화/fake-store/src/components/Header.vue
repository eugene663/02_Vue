<template>
  <nav class="container-fulid">
    <!-- jumbotron -->
    <div class="mt-4 p-5 bg-primary text-white jumbotron">
      <h1>Fullstack Study</h1>
      <p>Vue+자바 기반의 풀스택 기술을 배웁니다.</p>
    </div>

    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <!-- navigation - 왼쪽  -->
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <!-- router-link: 라우터 링크 태그 -->
              <!-- to 속성에 이동할 경로 지정 -->
              <router-link class="nav-link" to="/">Fake Store</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/electronics">가전</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/jewelery">주얼리</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/mensclothing"
                >남성의류</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/womensclothing"
                >여성의류</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  setup() {
    const state = reactive({
      isNavShow: false,
    });
    const navClass = computed(() =>
      state.isNavShow
        ? 'collapse navbar-collapse show'
        : 'collapse navbar-collapse'
    );
    const changeIsNavShow = () => {
      state.isNavShow = !state.isNavShow;
    };

    return { state, navClass, changeIsNavShow };
  },
};
</script>
<style>
.jumbotron {
  background-image: url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg');
}
td > a {
  text-decoration: none;
}
.avatar {
  font-size: 20px;
  color: white;
}
</style>
