<template>
  <div>
    <h3>Danh sách học sinh</h3>
    <table class="table table-bordered table-hover mt-3">
      <thead class="table-light">
        <tr>
          <th>Họ và tên</th>
          <th>Điểm</th>
          <th>Ngày sinh</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(stu, index) in students" :key="index">
          <td>{{ stu.name }}</td>
          <td>{{ stu.score }}</td>
          <td>{{ stu.dob }}</td>
          <td>
            <button class="btn btn-warning btn-sm me-2" @click="edit(index)">Sửa</button>
            <button class="btn btn-danger btn-sm" @click="remove(index)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  students: Array
})

const emit = defineEmits(['edit', 'delete'])

function edit(index) {
  emit('edit', index)
}

function remove(index) {
  emit('delete', index)
}
</script>