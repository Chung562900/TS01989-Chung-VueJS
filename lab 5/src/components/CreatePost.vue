<template>
  <div>
    <h2>Tạo bài viết mới</h2>
    
    <input 
      v-model="title" 
      placeholder="Tiêu đề bài viết" 
    />
    
    <input 
      v-model="author" 
      placeholder="Tên tác giả" 
    />
    
    <textarea 
      v-model="content" 
      placeholder="Nội dung bài viết"
    ></textarea>
    
    <button @click="submitPost">Đăng bài</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Định nghĩa emit sự kiện để gửi dữ liệu lên component cha
const emit = defineEmits(['add-post'])

// Khai báo các biến reactive
const title  = ref('')
const author = ref('')
const content = ref('')

function submitPost() {
  // Kiểm tra các trường không được để trống
  if (!title.value || !content.value || !author.value) {
    alert('Vui lòng điền đầy đủ tiêu đề, nội dung và tên tác giả!')
    return
  }

  // Tạo object bài viết mới
  const newPost = {
    title: title.value,
    content: content.value,
    author: author.value,
    // có thể thêm: id, createdAt,... nếu cần
  }

  // Phát sự kiện lên component cha kèm dữ liệu
  emit('add-post', newPost)

  // Reset form sau khi gửi
  title.value = ''
  content.value = ''
  author.value = ''
}
</script>

<style scoped>
input, textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>