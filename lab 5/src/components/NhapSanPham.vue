<script setup>
import { reactive } from 'vue'

// Khai báo emit
const emit = defineEmits(['add-product'])

const product = reactive({
  name: '',
  description: '',
  price: ''
})

const submitForm = () => {
  if (!product.name || !product.description || !product.price) {
    alert("Vui lòng nhập đầy đủ thông tin!")
    return
  }

  // Gửi dữ liệu lên component cha
  emit('add-product', {
    name: product.name,
    description: product.description,
    price: Number(product.price)
  })

  // Reset form
  product.name = ''
  product.description = ''
  product.price = ''
}
</script>

<template>
  <div class="card p-3 mb-4">
    <h3>Nhập sản phẩm phần cứng</h3>

    <input v-model="product.name" class="form-control mb-2" placeholder="Tên sản phẩm" />
    <input v-model="product.description" class="form-control mb-2" placeholder="Mô tả" />
    <input v-model="product.price" type="number" class="form-control mb-2" placeholder="Giá" />

    <button @click="submitForm" class="btn btn-primary">Thêm sản phẩm</button>
  </div>
</template>
