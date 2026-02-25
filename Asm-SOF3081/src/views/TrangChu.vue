<template>
  <div class="container">
    <!-- Carousel Banner -->
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

    <!-- Nội dung chính (phần bài viết/video) -->
    <div class="row">
      <div class="col-md-8">
        <!-- Dán phần danh sách bài viết/video ở đây (card grid) -->
        <!-- Ví dụ: -->
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <!-- Các card bài viết... -->
        </div>
      </div>

      <div class="col-md-4">
        <!-- Phần sidebar: bài viết nổi bật... -->
      </div>
    </div>

    <div class="text-center mt-4">
      <router-link to="/baiviet" class="btn btn-outline-primary px-5">
        <i class="fa-solid fa-angles-right"></i> Xem thêm
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrangChu',
  mounted() {
    // Khởi tạo carousel thủ công (đôi khi cần để đảm bảo chạy mượt)
    if (typeof bootstrap !== 'undefined') {
      new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
        interval: 5000, // tự chuyển sau 5 giây
        ride: 'carousel'
      })
    }
  }
}
</script>

<style scoped>
.banner-img {
  height: 420px;
  object-fit: cover;
  border-radius: 8px;
}
</style>