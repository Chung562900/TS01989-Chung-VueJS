<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { setAuth } from '../router'

const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')

const account = {
  email: 'admin@gmail.com',
  password: '123',
  name: 'Đỗ Hoàng Thiên Định'
}

function login() {
  error.value = ''

  if (email.value === account.email && password.value === account.password) {
    setAuth(true)
    localStorage.setItem('user', JSON.stringify(account))
    router.push('/dashboard')
  } else {
    error.value = 'Sai tài khoản hoặc mật khẩu'
  }
}
</script>

<template>
  <div class="container mt-5" style="max-width:400px">
    <h3>Đăng nhập</h3>

    <input class="form-control mb-3" v-model="email" placeholder="Email">
    <input type="password" class="form-control mb-3" v-model="password" placeholder="Mật khẩu">

    <button class="btn btn-primary w-100" @click="login">
      Đăng nhập
    </button>

    <p class="text-danger mt-3" v-if="error">{{ error }}</p>

    <hr>

    <h7>
      Tài khoản test: admin@gmail.com / 123
    </h7>
  </div>
</template>
