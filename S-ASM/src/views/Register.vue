<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 400px;">
      <h3 class="text-center mb-4">Đăng Ký</h3>
      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <label>Họ tên</label>
          <input v-model="name" type="text" class="form-control" required>
        </div>
        <div class="mb-3">
          <label>Email</label>
          <input v-model="email" type="email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label>Mật khẩu</label>
          <input v-model="password" type="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-success w-100">Đăng Ký</button>
      </form>
      <p class="mt-3 text-center">
        Đã có tài khoản? <router-link to="/login">Đăng nhập</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { name: '', email: '', password: '' }
  },
  methods: {
    handleRegister() {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      // Kiểm tra email tồn tại
      if(users.find(u => u.email === this.email)) {
        alert('Email đã tồn tại!');
        return;
      }
      
      const newUser = { 
        name: this.name, 
        email: this.email, 
        password: this.password,
        phone: '', // Để trống chờ cập nhật profile
        avatar: '/images/avatar-default.png' // Avatar mặc định
      };
      
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Đăng ký thành công! Vui lòng đăng nhập.');
      this.$router.push('/login');
    }
  }
}
</script>