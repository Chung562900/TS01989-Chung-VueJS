<template>
  <div class="home-page">
    <!-- Carousel banner -->
    <div id="homeCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
      <!-- Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          type="button"
          data-bs-target="#homeCarousel"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner rounded shadow-sm">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img
            :src="getImageUrl(slide.src)"
            class="d-block w-100 banner-img"
            :alt="slide.alt"
          />
        </div>
      </div>

      <!-- Controls -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Danh sách bài viết -->
    <div class="container my-5">
      <h2 class="text-center mb-5 fw-bold">Bài viết nổi bật</h2>

      <div v-if="posts.length === 0" class="alert alert-info text-center py-4">
        Chưa có bài viết nào. Hãy <router-link to="/create-post">tạo bài viết mới</router-link> nhé!
      </div>

      <div v-else class="row g-4">
        <div v-for="post in posts" :key="post.id || post.title" class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
            <img
              :src="post.image || '/images/default-post.jpg'"
              class="card-img-top"
              alt="Ảnh bài viết"
              style="height: 220px; object-fit: cover;"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-bold mb-3">{{ post.title }}</h5>
              <p class="card-text text-muted small mb-2">
                <i class="fa-solid fa-user me-1"></i> {{ post.author || 'Ẩn danh' }}
              </p>
              <p class="card-text text-muted small mb-3">
                <i class="fa-solid fa-clock me-1"></i> {{ formatDate(post.createdAt) }}
              </p>
              <p class="card-text flex-grow-1">
                {{ post.content.substring(0, 120) }}{{ post.content.length > 120 ? '...' : '' }}
              </p>
            </div>
            <div class="card-footer bg-white border-0 pt-0 pb-4 px-4 text-center d-flex justify-content-between align-items-center">
              <router-link
                :to="getPostLink(post)"
                class="btn btn-outline-primary btn-sm px-4"
              >
                <i class="fa-solid fa-eye me-1"></i> Đọc thêm
              </router-link>

              <!-- Nút sửa/xóa - chỉ hiện nếu là bài của mình -->
              <div v-if="isOwnPost(post)" class="btn-group btn-group-sm">
                <router-link
                  :to="`/edit-post/${post.id}`"
                  class="btn btn-outline-warning"
                >
                  <i class="fa-solid fa-pen-to-square"></i> Sửa
                </router-link>
                <button
                  @click="deletePost(post.id)"
                  class="btn btn-outline-danger"
                >
                  <i class="fa-solid fa-trash-can"></i> Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Banner carousel
const slides = ref([
  { src: 'banner1.jpg', alt: 'Banner công nghệ 1' },
  { src: 'banner2.jpg', alt: 'Banner công nghệ 2' },
  { src: 'banner3.jpg', alt: 'Banner công nghệ 3' },
])

const getImageUrl = (name) => `/images/${name}`

// Danh sách bài viết
const posts = ref([])

// Thông tin người dùng hiện tại
const currentUser = ref(null)

onMounted(() => {
  // Lấy thông tin user đang đăng nhập
  currentUser.value = JSON.parse(localStorage.getItem('currentUser'))

  // Bài viết mặc định (hardcode)
  const defaultPosts = [
    {
      id: 1001,
      title: 'Samsung tung ra Galaxy Z Fold5 và Z Flip5',
      content: 'Samsung vừa ra mắt Galaxy Z Fold5 và Z Flip5 với nhiều cải tiến mới...',
      image: '/images/gap1.jpg',
      author: 'Admin',
      createdAt: '2025-06-15T10:30:00'
    },
    {
      id: 1002,
      title: 'Máy Gaming Tốt Nhất Năm 2026',
      content: 'Khám phá những chiếc máy gaming mạnh mẽ nhất năm 2026...',
      image: '/images/gaming1.jpg',
      author: 'Admin',
      createdAt: '2025-07-20T14:15:00'
    },
    {
      id: 1003,
      title: 'iPhone 15 Pro Max',
      content: 'Trải nghiệm đỉnh cao với iPhone 15 Pro Max mới nhất...',
      image: '/images/ip sam1.jpg',
      author: 'Admin',
      createdAt: '2025-08-05T09:45:00'
    },
    {
      id: 1004,
      title: 'Samsung Galaxy S23 Ultra',
      content: 'Khám phá sức mạnh vượt trội của Samsung Galaxy S23 Ultra...',
      image: '/images/samsung1.png',
      author: 'Admin'
    },
    {
      id: 1005,
      title: 'Các mẹo sử dụng điện thoại hay hơn',
      content: 'Các mẹo hữu ích giúp bạn sử dụng điện thoại hiệu quả hơn...',
      image: '/images/meo1.jpg',
      author: 'Admin'
    },
    {
      id: 1006,
      title: 'Vivo - Tinh hoa máy ảnh đẹp',
      content: 'Vivo giới thiệu dòng điện thoại với camera chất lượng cao...',
      image: '/images/vivo1.png',
      author: 'Admin'
    }
  ]

  // Bài viết từ người dùng (localStorage)
  const userPosts = JSON.parse(localStorage.getItem('posts') || '[]')

  // Gộp: bài người dùng lên đầu, bài mặc định phía sau
  posts.value = [...userPosts, ...defaultPosts]
})

const getPostLink = (post) => {
  if (post.id) {
    return `/post/${post.id}`
  }
  // fallback nếu không có id
  const slug = post.title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
  return `/post/${slug}`
}

const formatDate = (dateString) => {
  if (!dateString) return 'Không xác định'
  const date = new Date(dateString)
  return date.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }) + ' ' + date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
}

// Kiểm tra bài viết có phải của người đang đăng nhập không
const isOwnPost = (post) => {
  return currentUser.value?.email && post.userEmail === currentUser.value.email
}

// Xóa bài viết
const deletePost = (postId) => {
  if (!confirm('Bạn có chắc chắn muốn xóa bài viết này không?')) return

  // Xóa trong localStorage
  let allPosts = JSON.parse(localStorage.getItem('posts') || '[]')
  allPosts = allPosts.filter(p => p.id !== postId)
  localStorage.setItem('posts', JSON.stringify(allPosts))

  // Cập nhật giao diện ngay lập tức
  posts.value = posts.value.filter(p => p.id !== postId)

  alert('Đã xóa bài viết thành công!')
}
</script>

<style scoped>
.banner-img {
  height: 450px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .banner-img {
    height: 300px;
  }
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12) !important;
}

.card-img-top {
  transition: transform 0.4s ease;
}

.card:hover .card-img-top {
  transform: scale(1.08);
}

.btn-group-sm .btn {
  font-size: 0.875rem;
}
</style>