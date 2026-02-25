<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4 text-primary">
      Kiến thức sức khỏe cộng đồng
    </h1>

    <div class="row">
      <!-- v-for hiển thị danh sách bài viết -->
      <div class="col-md-4" v-for="(item, index) in items" :key="index">
        <div class="card shadow-sm mb-4 h-100">
          <img :src="item.image" class="card-img-top" />

          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-success">{{ item.title }}</h5>
            <p class="card-text flex-grow-1">{{ item.content }}</p>

            <button class="btn btn-info mt-auto">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.jpg'

const items = [
  {
    title: '8 loại rau củ quả giàu canxi',
    content: 'Canxi rất cần thiết cho xương và răng, giúp phòng ngừa loãng xương và hỗ trợ phát triển chiều cao.',
    image: img1
  },
  {
    title: 'Các loại gia vị tốt cho sức khỏe',
    content: 'Gừng, nghệ, tỏi có khả năng kháng viêm, tăng sức đề kháng và tốt cho hệ tiêu hóa.',
    image: img2
  },
  {
    title: '9 loại đậu bổ dưỡng nên dùng',
    content: 'Đậu lăng, đậu đen và đậu xanh rất giàu protein, chất xơ và khoáng chất quan trọng.',
    image: img3
  }
]
</script>
