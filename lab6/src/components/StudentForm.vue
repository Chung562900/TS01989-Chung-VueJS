<template>
  <div>
    <h3>Thêm học sinh</h3>

    <form @submit.prevent="submitForm" class="mt-3">
      <div class="mb-3">
        <label for="name" class="form-label">Họ tên:</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="form.name"
          required
        />
      </div>

      <div class="mb-3">
        <label for="score" class="form-label">Điểm:</label>
        <input
          type="number"
          min="0"
          max="10"
          step="0.1"
          class="form-control"
          id="score"
          v-model.number="form.score"
          required
        />
      </div>

      <div class="mb-3">
        <label for="dob" class="form-label">Ngày sinh:</label>
        <input
          type="date"
          class="form-control"
          id="dob"
          v-model="form.dob"
          required
        />
      </div>

      <button type="submit" class="btn btn-success w-100 py-2">
        {{ isEditing ? 'Cập nhật' : 'Thêm' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  student: {
    type: Object,
    default: () => ({ name: '', score: null, dob: '' })
  },
  isEditing: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['submit'])

const form = reactive({
  name: props.student.name,
  score: props.student.score,
  dob: props.student.dob
})

// Đồng bộ form khi props.student thay đổi (khi nhấn Sửa)
watch(
  () => props.student,
  (newStudent) => {
    form.name = newStudent.name
    form.score = newStudent.score
    form.dob = newStudent.dob
  },
  { deep: true }
)

function submitForm() {
  // Truyền bản sao để tránh mutate trực tiếp props
  emit('submit', { ...form })
}
</script>