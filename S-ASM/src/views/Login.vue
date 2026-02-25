<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 400px;">
      <h3 class="text-center mb-4">Đăng Nhập</h3>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label>Email</label>
          <input v-model="email" type="email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label>Mật khẩu</label>
          <input v-model="password" type="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Đăng Nhập</button>
      </form>
      <p class="mt-3 text-center">
        Chưa có tài khoản? <router-link to="/register">Đăng ký ngay</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { email: '', password: '' }
  },
  methods: {
    handleLogin() {
      // Lấy danh sách user từ LocalStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === this.email && u.password === this.password);

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Đăng nhập thành công!');
        this.$router.push('/');
      } else {
        alert('Sai email hoặc mật khẩu!');
      }
    }
  }
}
</script>