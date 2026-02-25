<template>
  <nav class="navbar navbar-expand-md navbar-light bg-info">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="/src/assets/images/logo1.png" alt="Logo" style="height: 50px;">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/baiviet"><i class="fa-solid fa-list"></i> Bài viết</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/sukien"><i class="fa-solid fa-calendar-days"></i> Sự kiện</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/gioithieu"><i class="fa-solid fa-circle-info"></i> Giới thiệu</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
              <i class="fa-solid fa-user"></i> Tài khoản
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Đăng nhập</a>
              </li>
              <li>
                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#registerModal">Đăng ký</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>