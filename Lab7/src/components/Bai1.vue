<template>
  <div class="container mt-4 col-sm-6">
    <h3>Quản lý công việc</h3>

    <!-- FORM -->
    <form @submit.prevent="addTask" class="d-flex mb-3">
      <input v-model="newTask" class="form-control me-2" placeholder="Nhập công việc">
      <button class="btn btn-primary">Thêm công việc</button>
    </form>

    <!-- DANH SÁCH -->
    <ul class="list-group">
      <li v-for="(task, index) in tasks" :key="index"
          class="list-group-item d-flex justify-content-between">
        {{ task }}
        <button @click="removeTask(index)" class="btn btn-danger btn-sm">Xóa</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref([])

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const removeTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>
