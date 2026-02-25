<!-- Bai1.vue -->
<template>
  <div class="card p-3 mb-4">
    <h3>Bài 1: Xếp loại học lực</h3>

    <input v-model.number="score" type="number" class="form-control mb-2" placeholder="Nhập điểm trung bình">

    <p v-if="score < 5">Xếp loại: Yếu</p>
    <p v-else-if="score < 6.5">Xếp loại: Trung bình</p>
    <p v-else-if="score < 8">Xếp loại: Khá</p>
    <p v-else-if="score < 9">Xếp loại: Giỏi</p>
    <p v-else>Xếp loại: Xuất sắc</p>
    
    
  </div>
  <p v-if="score < 5">Xếp loại: không Đạt</p>

    <p v-else>Xếp loại: Đạt</p>
</template>

<script setup>
import { ref } from 'vue'
const score = ref(0)
</script>
