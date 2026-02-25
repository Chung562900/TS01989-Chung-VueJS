<!-- Bai2.vue -->
<template>
  <div class="card p-3 mb-4">
    <h3>Bài 2: Xác định mùa</h3>

    <input v-model.number="month" type="number" class="form-control mb-2" placeholder="Nhập tháng">

    <p v-if="month < 1 || month > 12" class="text-danger">
      Vui lòng nhập tháng từ 1 đến 12!
    </p>
    <p v-else-if="month == 12 || month <= 2">Mùa Đông</p>
    <p v-else-if="month <= 5">Mùa Xuân</p>
    <p v-else-if="month <= 8">Mùa Hè</p>
    <p v-else>Mùa Thu</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const month = ref('')
</script>
