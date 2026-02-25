<template>
  <nav class="navbar navbar-expand-md navbar-light bg-info shadow-sm">
    <div class="container">
      <!-- LOGO -->
      <router-link class="navbar-brand" to="/">
        <img src="/images/logo1.png" alt="Logo" style="height: 70px;" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- Menu bên phải (ms-auto) -->
        <ul class="navbar-nav ms-auto align-items-center">
          <!-- Trang chủ -->
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="fa-solid fa-home me-1"></i> Trang chủ
            </router-link>
          </li>

          <!-- Tạo bài viết (chỉ hiện khi đã đăng nhập) -->
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link" to="/create-post">
              <i class="fa-solid fa-pen-to-square me-1"></i> Tạo bài viết
            </router-link>
          </li>

          <!-- Dropdown Tài khoản -->
          <li class="nav-item dropdown" v-if="isLoggedIn">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa-solid fa-user me-1"></i>
              {{ userName || 'Tài khoản' }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <router-link class="dropdown-item" to="/profile">
                  <i class="fa-solid fa-user-circle me-2"></i> Thông tin cá nhân
                </router-link>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <button class="dropdown-item text-danger" @click="logout">
                  <i class="fa-solid fa-right-from-bracket me-2"></i> Đăng xuất
                </button>
              </li>
            </ul>
          </li>

          <!-- Đăng nhập / Đăng ký (chỉ hiện khi chưa đăng nhập) -->
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" to="/login">
              <i class="fa-solid fa-right-to-bracket me-1"></i> Đăng nhập
            </router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" to="/register">
              <i class="fa-solid fa-user-plus me-1"></i> Đăng ký
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

// Kiểm tra trạng thái đăng nhập từ localStorage
const isLoggedIn = computed(() => {
  return !!localStorage.getItem('currentUser')
})

// Lấy tên người dùng (nếu có)
const userName = computed(() => {
  const user = JSON.parse(localStorage.getItem('currentUser'))
  return user?.name || ''
})

const router = useRouter()

const logout = () => {
  if (confirm('Bạn có chắc muốn đăng xuất?')) {
    localStorage.removeItem('currentUser')
    router.push('/login')
  }
}
</script>

<style scoped>
.navbar {
  z-index: 1000;
}

.nav-link {
  font-weight: 500;
  transition: all 0.2s;
}

.nav-link:hover {
  color: #fff !important;
  opacity: 0.9;
}
</style>