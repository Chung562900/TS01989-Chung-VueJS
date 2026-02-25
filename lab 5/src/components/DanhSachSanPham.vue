<script setup>
// Nhận props từ cha
const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="card p-3">
    <h3>Danh sách sản phẩm</h3>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Tên</th>
          <th>Mô tả</th>
          <th>Giá (VNĐ)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in props.products" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.description }}</td>
          <td>{{ p.price.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
