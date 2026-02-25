<script setup>
const posts = [
  {
    id: 1,
    title: 'Dinh dưỡng cho người tập gym'
  },
  {
    id: 2,
    title: 'Ngủ đủ giấc giúp tăng tuổi thọ'
  },
  {
    id: 3,
    title: 'Chạy bộ đúng cách tránh chấn thương'
  }
]
</script>

<template>
  <div class="container mt-5">
    <h2>Danh sách Blog</h2>

    <ul class="list-group">
      <li
        v-for="p in posts"
        :key="p.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ p.title }}

        <router-link
          :to="{ name: 'BlogPost', params: { id: p.id } }"
          class="btn btn-sm btn-outline-primary"
        >
          Xem
        </router-link>
      </li>
    </ul>
  </div>
</template>
