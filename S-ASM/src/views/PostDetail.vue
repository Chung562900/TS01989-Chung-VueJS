<template>
  <div class="container py-5">
    <div v-if="post" class="card shadow-lg border-0 rounded-4">
      <!-- Ảnh lớn -->
      <img
        :src="post.image || '/images/default-food.jpg'"
        class="card-img-top"
        alt="Ảnh bài viết"
        style="height: 400px; object-fit: cover; border-radius: 16px 16px 0 0;"
      />

      <div class="card-body p-5">
        <h1 class="card-title fw-bold mb-4">{{ post.title }}</h1>

        <div class="d-flex justify-content-between text-muted mb-4 small">
          <div>
            <i class="fa-solid fa-user me-2"></i>
            {{ post.author || 'Ẩn danh' }}
          </div>
          <div>
            <i class="fa-solid fa-calendar-days me-2"></i>
            {{ formatDate(post.createdAt) }}
          </div>
        </div>

        <div class="card-text fs-5 lh-lg" style="white-space: pre-wrap;">
          {{ post.content }}
        </div>

        <div class="mt-5 text-center">
          <router-link to="/" class="btn btn-outline-primary btn-lg px-5">
            <i class="fa-solid fa-arrow-left me-2"></i> Quay lại trang chủ
          </router-link>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-warning text-center py-5">
      <h3>Bài viết không tồn tại hoặc đã bị xóa</h3>
      <router-link to="/" class="btn btn-primary mt-3 px-5">Về trang chủ</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)

onMounted(() => {
  const postId = Number(route.params.id)

  // Lấy tất cả bài viết từ localStorage
  const allPosts = JSON.parse(localStorage.getItem('posts') || '[]')

  // Tìm bài viết theo id
  post.value = allPosts.find(p => p.id === postId)

  if (!post.value) {
    console.log('Không tìm thấy bài viết với id:', postId)
  }
})

const formatDate = (dateString) => {
  if (!dateString) return 'Không có ngày'
  const date = new Date(dateString)
  return date.toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.card {
  border-radius: 16px;
  overflow: hidden;
}

.card-body {
  background: #fff;
}
</style>