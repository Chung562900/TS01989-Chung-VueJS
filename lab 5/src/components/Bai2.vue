<!-- Bai2.vue -->
<template>
  <div class="p-4">
    <input v-model="userInput" class="form-control" placeholder="Nhập dữ liệu vào đây" />
    <p class="mt-3">Giá trị bạn nhập: <strong>{{ userInput }}</strong></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userInput = ref('FPL')
</script>
