<template>
  <div class="container py-5">
    <h2 class="text-center mb-5 fw-bold">Thông Tin Cá Nhân</h2>

    <div class="card mx-auto shadow-sm" style="max-width: 600px; background-color: #fff0f5;">
      <div class="card-body p-4">
        <!-- Ảnh đại diện -->
        <div class="text-center mb-5">
          <div class="position-relative d-inline-block">
            <img
              :src="user.avatar || '/images/monvn.jpg'"
              class="rounded-circle border border-3 border-primary shadow"
              width="140"
              height="140"
              style="object-fit: cover;"
              alt="Ảnh đại diện"
            />

            <!-- Nút chỉnh sửa ảnh -->
            <button
              type="button"
              class="btn btn-sm rounded-circle position-absolute bottom-0 end-0"
              style="width: 40px; height: 40px; line-height: 40px; background-color: #a0d8ef; border: none;"
              @click="$refs.avatarInput.click()"
              title="Thay đổi ảnh đại diện"
            >
              <i class="fa-solid fa-camera text-white"></i>
            </button>

            <input
              type="file"
              ref="avatarInput"
              @change="onAvatarChange"
              accept="image/*"
              class="d-none"
            />
          </div>

          <!-- Preview ảnh mới -->
          <div v-if="avatarPreview" class="mt-3">
            <small class="text-muted">Ảnh xem trước:</small><br />
            <img
              :src="avatarPreview"
              class="rounded-circle mt-2"
              width="100"
              height="100"
              style="object-fit: cover; border: 2px solid #a0d8ef;"
            />
          </div>
        </div>

        <!-- Form -->
        <form @submit.prevent="updateProfile">
          <div class="mb-4">
            <label class="form-label fw-bold">Họ tên</label>
            <input v-model="user.name" type="text" class="form-control" required />
          </div>

          <div class="mb-4">
            <label class="form-label fw-bold">Email</label>
            <input v-model="user.email" type="email" class="form-control" disabled />
          </div>

          <div class="mb-4">
            <label class="form-label fw-bold">Mật khẩu mới</label>
            <input v-model="user.password" type="password" class="form-control" placeholder="Để trống nếu không đổi" />
          </div>

          <div class="mb-4">
            <label class="form-label fw-bold">Số điện thoại</label>
            <input v-model="user.phone" type="text" class="form-control" />
          </div>

          <!-- Nút Cập nhật - màu xanh dương nhạt -->
          <button type="submit" class="btn w-100 py-2 fw-bold" style="background-color: #a0d8ef; color: white; border: none;">
            Cập nhật thông tin
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const avatarInput = ref(null)
const avatarPreview = ref(null)

const user = ref({
  name: '',
  email: '',
  password: '',
  phone: '',
  avatar: ''
})

onMounted(() => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  
  if (currentUser) {
    user.value = { ...currentUser }
    if (!user.value.phone) user.value.phone = "0983443422"
    if (user.value.email === 'chungtlts01989@gmail.com') {
      user.value.name = "Trần Lê Chung"
      user.value.password = "123456"
    }
  } else {
    router.push('/login')
  }
})

const onAvatarChange = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (event) => {
    avatarPreview.value = event.target.result
    user.value.avatar = event.target.result
  }
  reader.readAsDataURL(file)
}

const updateProfile = () => {
  localStorage.setItem('currentUser', JSON.stringify(user.value))

  let users = JSON.parse(localStorage.getItem('users') || '[]')
  const index = users.findIndex(u => u.email === user.value.email)
  if (index !== -1) {
    users[index] = { ...user.value }
    localStorage.setItem('users', JSON.stringify(users))
  }

  alert('Cập nhật thông tin thành công!')
  avatarPreview.value = null
}
</script>

<style scoped>
.card {
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #ffe4e9;
}

.form-control {
  border-radius: 8px;
}

.form-control:focus {
  border-color: #a0d8ef;
  box-shadow: 0 0 0 0.25rem rgba(160, 216, 239, 0.25);
}
</style>