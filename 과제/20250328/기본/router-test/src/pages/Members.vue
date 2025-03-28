<template>
  <div class="card card-body">
    <h2>이날치 멤버</h2>
    <div class="row">
      <div
        v-for="m in members"
        :key="m.id"
        class="col-6 col-xs col-sm-4 col-md-3 col-lg-2"
      >
        <router-link :to="'/members/' + m.id">
          <img
            :src="m.photo"
            :title="m.name"
            class="img-thumbnail"
            style="width: 90px; height: 110px"
          />
          <br />
          <h6 class="display-7">{{ m.name }}</h6>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import members from '@/members.json';

const setup = () => {
  return { members };
};
</script>
