<template>
  <div class="container col-sm-5 mt-4">
    <h3>Đăng ký người dùng</h3>
    <form @submit.prevent="register">
      <input v-model="user.name" class="form-control mb-2" placeholder="Họ tên">
      <input v-model="user.email" class="form-control mb-2" placeholder="Email">
      <input type="password" v-model="user.password" class="form-control mb-2" placeholder="Mật khẩu">
      <input type="date" v-model="user.dob" class="form-control mb-2">

      <div class="mb-2">
        <label>Giới tính:</label>
        <input type="radio" value="Nam" v-model="user.gender"> Nam
        <input type="radio" value="Nữ" v-model="user.gender"> Nữ
      </div>

      <select v-model="user.language" class="form-control mb-2">
        <option>Việt Nam</option>
        <option>English</option>
      </select>

      <button class="btn btn-success">Đăng ký</button>
    </form>

    <div v-if="submitted" class="mt-3">
      <h5>Thông tin đã đăng ký:</h5>
      <p>Họ tên: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Ngày sinh: {{ user.dob }}</p>
      <p>Giới tính: {{ user.gender }}</p>
      <p>Ngôn ngữ: {{ user.language }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const submitted = ref(false)
const user = reactive({
  name: '', email: '', password: '',
  dob: '', gender: '', language: ''
})

const register = () => {
  submitted.value = true
}
</script>
