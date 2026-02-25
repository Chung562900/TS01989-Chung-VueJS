<template>
  <div class="container py-5">
    <div class="card shadow-lg border-0 rounded-4">
      <div class="card-header bg-warning text-dark py-4">
        <h4 class="mb-0 text-center">Chỉnh sửa bài viết</h4>
      </div>
      <div class="card-body p-4 p-md-5">
        <form @submit.prevent="updatePost" v-if="post.id">
          <div class="mb-4">
            <label class="form-label fw-bold">Tiêu đề bài viết</label>
            <input v-model="post.title" type="text" class="form-control form-control-lg" required />
          </div>

          <div class="mb-4">
            <label class="form-label fw-bold">Hình ảnh minh họa</label>
            <input type="file" @change="onFileChange" accept="image/*" class="form-control" />
            <div v-if="post.image" class="mt-3 text-center">
              <img :src="post.image" class="img-fluid rounded shadow-sm" style="max-height: 300px;" alt="Preview" />
            </div>
          </div>

          <div class="mb-4">
            <label class="form-label fw-bold">Nội dung bài viết</label>
            <textarea v-model="post.content" class="form-control" rows="10" required></textarea>
          </div>

          <div class="text-end">
            <button type="submit" class="btn btn-warning btn-lg px-5" :disabled="isSubmitting">
              <span v-if="isSubmitting"><i class="fa-solid fa-spinner fa-spin me-2"></i>Đang lưu...</span>
              <span v-else><i class="fa-solid fa-save me-2"></i>Lưu thay đổi</span>
            </button>
          </div>
        </form>
        <div v-else class="text-center py-5">
          <h5>Đang tải bài viết...</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isSubmitting = ref(false)

const post = ref({
  id: null,
  title: '',
  image: '',
  content: '',
  author: '',
  userEmail: '',
  createdAt: ''
})

onMounted(() => {
  console.log('[EditPost] Mounted - params.id:', route.params.id)

  const postIdStr = route.params.id
  if (!postIdStr || isNaN(Number(postIdStr))) {
    console.log('[EditPost] ID không hợp lệ:', postIdStr)
    alert('ID bài viết không hợp lệ!')
    router.push('/')
    return
  }

  const postId = Number(postIdStr)
  console.log('[EditPost] postId sau chuyển đổi:', postId)

  const posts = JSON.parse(localStorage.getItem('posts') || '[]')
  console.log('[EditPost] Số bài viết trong localStorage:', posts.length)

  const foundPost = posts.find(p => p.id === postId)
  console.log('[EditPost] Found post:', foundPost)

  if (!foundPost) {
    alert('Bài viết không tồn tại!')
    router.push('/')
    return
  }

  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null')
  console.log('[EditPost] Current user:', currentUser?.email, 'Post userEmail:', foundPost.userEmail)

  if (!currentUser || foundPost.userEmail !== currentUser.email) {
    alert('Bạn không có quyền chỉnh sửa bài viết này!')
    router.push('/')
    return
  }

  post.value = { ...foundPost }
  console.log('[EditPost] Đã load dữ liệu thành công:', post.value)
})

const onFileChange = (e) => {
  const file = e.target.files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (event) => {
    post.value.image = event.target.result
  }
  reader.readAsDataURL(file)
}

const updatePost = () => {
  if (!post.value.title.trim() || !post.value.content.trim()) {
    alert('Tiêu đề và nội dung không được để trống!')
    return
  }

  isSubmitting.value = true

  let posts = JSON.parse(localStorage.getItem('posts') || '[]')
  const index = posts.findIndex(p => p.id === post.value.id)

  if (index !== -1) {
    posts[index] = {
      ...post.value,
      updatedAt: new Date().toISOString()
    }
    localStorage.setItem('posts', JSON.stringify(posts))
    alert('Cập nhật bài viết thành công!')
    router.push('/')
  } else {
    alert('Không tìm thấy bài viết để cập nhật!')
  }

  isSubmitting.value = false
}
</script>