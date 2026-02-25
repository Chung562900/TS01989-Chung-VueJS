<template>
  <div class="container py-5">
    <div class="card shadow-lg border-0 rounded-4 overflow-hidden">
      <div class="card-header bg-primary text-white py-4">
        <h4 class="mb-0 text-center">Đăng Bài Viết Mới</h4>
      </div>
      <div class="card-body p-4 p-md-5">
        <form @submit.prevent="createPost">
          <div class="mb-4">
            <label class="form-label fw-bold">Tiêu đề bài viết</label>
            <input
              v-model.trim="post.title"
              type="text"
              class="form-control form-control-lg"
              placeholder="Nhập tiêu đề hấp dẫn..."
              required
            />
          </div>

          <div class="mb-4">
            <label class="form-label fw-bold">Hình ảnh minh họa</label>
            <div class="d-flex flex-column flex-md-row align-items-start gap-3">
              <input
                type="file"
                ref="fileInput"
                @change="onFileChange"
                accept="image/*"
                class="d-none"
              />

              <button
                type="button"
                class="btn btn-outline-secondary btn-lg"
                @click="$refs.fileInput.click()"
              >
                <i class="fa-solid fa-image me-2"></i> Chọn ảnh từ máy
              </button>

              <div v-if="post.image" class="mt-3 mt-md-0">
                <img
                  :src="post.image"
                  class="img-thumbnail shadow-sm"
                  style="max-height: 180px; max-width: 100%; object-fit: cover; border-radius: 10px;"
                  alt="Ảnh xem trước"
                />
              </div>
            </div>
            <small v-if="!post.image" class="text-danger mt-2 d-block">
              Vui lòng chọn một hình ảnh minh họa!
            </small>
          </div>

          <div class="mb-4">
            <label class="form-label fw-bold">Nội dung bài viết</label>
            <textarea
              v-model.trim="post.content"
              class="form-control form-control-lg"
              rows="8"
              placeholder="Chia sẻ suy nghĩ, cảm nhận hoặc kinh nghiệm của bạn..."
              required
            ></textarea>
          </div>

          <div class="mb-4">
            <label class="form-label fw-bold">Tác giả</label>
            <input
              v-model="post.author"
              type="text"
              class="form-control bg-light"
              disabled
            />
          </div>

          <div class="text-end">
            <button
              type="submit"
              class="btn btn-primary btn-lg px-5 py-3 fw-bold"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">
                <i class="fa-solid fa-spinner fa-spin me-2"></i> Đang đăng...
              </span>
              <span v-else>
                <i class="fa-solid fa-paper-plane me-2"></i> Đăng Bài
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const fileInput = ref(null)
const isSubmitting = ref(false)

const post = ref({
  title: '',
  image: '',
  content: '',
  author: '',
  userEmail: '',
  createdAt: '',
  id: null
})

onMounted(() => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null')

  if (!currentUser || !currentUser.name || !currentUser.email) {
    alert('Vui lòng đăng nhập để đăng bài!')
    router.push('/login')
    return
  }

  post.value.author = currentUser.name
  post.value.userEmail = currentUser.email
})

const onFileChange = (e) => {
  const file = e.target.files?.[0]
  if (!file) return

  if (file.size > 5 * 1024 * 1024) {
    alert('Ảnh quá lớn! Vui lòng chọn ảnh dưới 5MB.')
    e.target.value = ''
    return
  }

  const reader = new FileReader()
  reader.onload = (event) => {
    post.value.image = event.target.result
  }
  reader.onerror = () => alert('Không thể đọc file ảnh. Vui lòng thử lại.')
  reader.readAsDataURL(file)
}

const createPost = () => {
  if (!post.value.title.trim()) return alert('Vui lòng nhập tiêu đề bài viết!')
  if (!post.value.content.trim()) return alert('Vui lòng nhập nội dung bài viết!')
  if (!post.value.image) return alert('Vui lòng chọn một hình ảnh minh họa!')

  isSubmitting.value = true

  try {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]')

    const newPost = {
      ...post.value,
      id: Date.now(),
      createdAt: new Date().toISOString()
    }

    console.log('Bài viết mới (debug):', newPost) // kiểm tra id có không

    posts.unshift(newPost)
    localStorage.setItem('posts', JSON.stringify(posts))

    setTimeout(() => {
      alert('Đăng bài thành công!')
      isSubmitting.value = false

      // reset form
      post.value.title = ''
      post.value.content = ''
      post.value.image = ''
      if (fileInput.value) fileInput.value.value = ''

      router.push('/')
    }, 800)
  } catch (err) {
    console.error('Lỗi lưu bài viết:', err)
    alert('Có lỗi khi lưu bài viết. Vui lòng thử lại.')
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.card { border-radius: 16px; }
.card-header { font-weight: 600; background: linear-gradient(135deg, #0d6efd, #0b5ed7); }
.form-control:focus { border-color: #0d6efd; box-shadow: 0 0 0 0.25rem rgba(13,110,253,0.25); }
.form-control-lg { font-size: 1.1rem; }
textarea.form-control { resize: vertical; min-height: 180px; }
</style>