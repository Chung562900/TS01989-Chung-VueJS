<template>
  <div>
    <!-- Navbar chung (reuse) -->
    <Navbar />

    <!-- Banner Carousel -->
    <div id="carouselExampleIndicators" class="carousel slide mb-4">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div class="carousel-inner rounded shadow-sm">
        <div class="carousel-item active">
          <img
            src="/images/banner1.jpg"
            class="d-block w-100 banner-img"
            alt="Banner 1"
          />
        </div>
        <div class="carousel-item">
          <img
            src="/images/banner2.jpg"
            class="d-block w-100 banner-img"
            alt="Banner 2"
          />
        </div>
        <div class="carousel-item">
          <img
            src="/images/banner3.jpg"
            class="d-block w-100 banner-img"
            alt="Banner 3"
          />
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Danh sách sự kiện (list-group) -->
    <div class="container my-5">
      <div class="list-group">
        <!-- Sự kiện 1 -->
        <router-link
          to="/chitiet-su-kien/1"
          class="list-group-item list-group-item-action border-0 py-3"
        >
          <div class="row g-3 align-items-center">
            <div class="col-md-4">
              <img
                src="/images/redmi-note-15.jpg"
                class="img-fluid rounded"
                alt="Redmi Note 15"
              />
            </div>
            <div class="col-md-8">
              <h6 class="fw-bold mb-1">
                Sự kiện ra mắt Redmi Note 15 Series tại Việt Nam
              </h6>
              <p class="text-muted small mb-1">
                Redmi Note 15 Series mới sẽ chính thức ra mắt tại thị trường Việt Nam vào ngày 15/1...
              </p>
              <small class="text-primary fw-semibold">Chung</small>
              <small class="text-muted ms-2">
                <i class="fa-regular fa-clock"></i> 07/01/2026 12:05
              </small>
            </div>
          </div>
        </router-link>

        <!-- Sự kiện 2 -->
        <router-link
          to="/chitiet-su-kien/2"
          class="list-group-item list-group-item-action border-0 py-3"
        >
          <div class="row g-3 align-items-center">
            <div class="col-md-4">
              <img
                src="/images/oppo-reno-15.jpg"
                class="img-fluid rounded"
                alt="OPPO Reno 15"
              />
            </div>
            <div class="col-md-8">
              <h6 class="fw-bold mb-1">
                Sự kiện ra mắt OPPO Reno15 Series tại Việt Nam
              </h6>
              <p class="text-muted small mb-1">
                Các điện thoại OPPO Reno 15 và OPPO Reno 15 F chuẩn bị cập bến thị trường Việt Nam...
              </p>
              <small class="text-primary fw-semibold">Chung</small>
              <small class="text-muted ms-2">
                <i class="fa-regular fa-clock"></i> 28/12/2025 20:20
              </small>
            </div>
          </div>
        </router-link>

        <!-- Sự kiện 3 -->
        <router-link
          to="/chitiet-su-kien/3"
          class="list-group-item list-group-item-action border-0 py-3"
        >
          <div class="row g-3 align-items-center">
            <div class="col-md-4">
              <img
                src="/images/ces-2026-.jpg"
                class="img-fluid rounded"
                alt="CES 2026"
              />
            </div>
            <div class="col-md-8">
              <h6 class="fw-bold mb-1">Sự kiện CES 2026</h6>
              <p class="text-muted small mb-1">
                Sự kiện CES 2026 sẽ diễn ra từ ngày 6 đến ngày 9 tháng 1 năm 2026...
              </p>
              <small class="text-primary fw-semibold">Hải Nam</small>
              <small class="text-muted ms-2">
                <i class="fa-regular fa-clock"></i> 22/12/2025 09:25
              </small>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Footer chung -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

// Khởi tạo carousel (để chắc chắn hoạt động)
import { onMounted } from 'vue'

onMounted(() => {
  const carousel = document.getElementById('carouselExampleIndicators')
  if (carousel) {
    new bootstrap.Carousel(carousel, {
      interval: 5000, // chuyển slide sau 5 giây
      ride: 'carousel'
    })
  }
})
</script>

<style scoped>
.banner-img {
  height: 420px;
  object-fit: cover;
  border-radius: 8px;
}
</style>