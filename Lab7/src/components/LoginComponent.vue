<template>
  <div class="col-sm-4 p-4">
    <h3>Đăng nhập</h3>
    <input v-model="name" class="form-control mb-2" placeholder="Tên">
    <input type="password" v-model="password" class="form-control mb-2" placeholder="Mật khẩu">
    <button @click="login" class="btn btn-primary">Đăng nhập</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['loginSuccess'])

const name = ref('')
const password = ref('')

const login = () => {
  if (name.value && password.value) emit('loginSuccess', name.value)
}
</script>
