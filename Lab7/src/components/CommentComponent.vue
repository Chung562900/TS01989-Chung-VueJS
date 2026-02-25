<template>
  <div class="container mt-3 col-sm-7">
    <h4><b>Bình luận bài viết</b></h4>

    <!-- BÀI VIẾT -->
    <div class="card mb-3">
      <img src="/images/eat-clean.png"
           class="card-img-top" style="height:200px; object-fit:cover;">
      <div class="card-body">
        <h5 class="card-title">8 loại rau củ quả giàu canxi</h5>
        <p class="card-text">
          Canxi là khoáng chất thiết yếu với cơ thể người.
          Có nhiều cách để bổ sung canxi, trong đó ăn uống là cách tốt nhất.
        </p>
      </div>
    </div>

    <!-- Ô BÌNH LUẬN -->
    <textarea v-model="comment"
              class="form-control mb-2"
              placeholder="Nhập bình luận của bạn"></textarea>

    <button @click="addComment" class="btn btn-success mb-3">
      Gửi bình luận
    </button>

    <!-- DANH SÁCH BÌNH LUẬN -->
    <h5>Danh sách bình luận:</h5>
    <ul class="list-group">
      <li v-for="(c, index) in comments" :key="index" class="list-group-item">
        <b>{{ username }}</b>: {{ c }}
      </li>
    </ul>

    <button @click="$emit('logout')" class="btn btn-danger mt-3">
      Đăng xuất
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps(['username'])

const comment = ref('')
const comments = ref([])

const addComment = () => {
  if (comment.value.trim()) {
    comments.value.push(comment.value)
    comment.value = ''
  }
}
</script>
