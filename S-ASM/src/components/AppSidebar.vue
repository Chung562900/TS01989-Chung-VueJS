<template>
  <div class="offcanvas offcanvas-start bg-light" tabindex="-1" id="offcanvasSidebar">
    <div class="offcanvas-header bg-success text-white">
      <h5 class="offcanvas-title">Menu Điều Hướng</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="list-group list-group-flush">
        <router-link to="/" class="list-group-item list-group-item-action" @click="closeMenu">
           Trang chủ
        </router-link>
        <router-link to="/create-post" class="list-group-item list-group-item-action" @click="closeMenu">
           Đăng bài viết
        </router-link>
        <router-link to="/profile" class="list-group-item list-group-item-action" @click="closeMenu">
           Thông tin tài khoản
        </router-link>
        <button @click="logout" class="list-group-item list-group-item-action text-danger">
           Đăng xuất
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      // Đóng menu sau khi click (dùng DOM bootstrap)
      const closeBtn = document.querySelector('.btn-close');
      if(closeBtn) closeBtn.click();
    },
    logout() {
      localStorage.removeItem('currentUser');
      this.closeMenu();
      this.$router.push('/login');
    }
  }
}
</script>