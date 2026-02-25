<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const posts = [
  {
    id: 1,
    title: 'Dinh dưỡng cho người tập gym',
    content: 'Thịt nạc, cá hồi, trứng, sữa và yến mạch giúp tăng cơ và phục hồi nhanh sau tập.'
  },
  {
    id: 2,
    title: 'Ngủ đủ giấc giúp tăng tuổi thọ',
    content: 'Ngủ 7,8 giờ mỗi ngày giúp ổn định nội tiết, giảm stress và tăng khả năng miễn dịch.'
  },
  {
    id: 3,
    title: 'Chạy bộ đúng cách tránh chấn thương',
    content: 'Khởi động kỹ, chọn giày phù hợp và tăng cường độ từ từ để bảo vệ khớp gối.'
  }
]

const post = posts.find(p => p.id == route.params.id)
</script>

<template>
  <div class="container mt-5">
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </div>

    <div v-else>
      <h3>Không tìm thấy bài viết</h3>
    </div>
  </div>
</template>
