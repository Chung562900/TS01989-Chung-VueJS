<template>
  <div>
    <!-- Navbar (reuse component chung) -->
    <Navbar />

    <!-- Banner Carousel -->
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/images/banner1.jpg" class="d-block w-100" alt="Banner 1" />
        </div>
        <div class="carousel-item">
          <img src="/images/banner2.jpg" class="d-block w-100" alt="Banner 2" />
        </div>
        <div class="carousel-item">
          <img src="/images/banner3.jpg" class="d-block w-100" alt="Banner 3" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Danh sách bài viết (grid) -->
    <div class="container my-5">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <!-- Bài 1 -->
        <div class="col">
          <router-link to="/video1" class="text-decoration-none text-dark">
            <div class="card h-100 shadow-sm">
              <img src="/images/iphone1.jpg" class="card-img-top" alt="iPhone mới nhất" />
              <div class="card-body">
                <h6 class="fw-bold">Đánh giá iPhone mới nhất</h6>
                <p class="small text-muted mb-0">
                  Hiệu năng, camera và pin có thực sự vượt trội?
                </p>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Bài 2 -->
        <div class="col">
          <router-link to="/chitietbai/2" class="text-decoration-none text-dark">
            <div class="card h-100 shadow-sm">
              <img src="/images/samsung1.png" class="card-img-top" alt="Samsung Galaxy" />
              <div class="card-body">
                <h6 class="fw-bold">Samsung Galaxy – Có đáng mua?</h6>
                <p class="small text-muted mb-0">
                  Màn hình AMOLED và camera có gì nổi bật?
                </p>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Bài 3 -->
        <div class="col">
          <router-link to="/chitietbai/3" class="text-decoration-none text-dark">
            <div class="card h-100 shadow-sm">
              <img src="/images/xiaomi1.jpg" class="card-img-top" alt="Xiaomi pin trâu" />
              <div class="card-body">
                <h6 class="fw-bold">Top điện thoại pin trâu 2026</h6>
                <p class="small text-muted mb-0">
                  Dùng cả ngày dài không lo sạc pin.
                </p>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Bài 4 -->
        <div class="col">
          <router-link to="/chitietbai/4" class="text-decoration-none text-dark">
            <div class="card h-100 shadow-sm">
              <img src="/images/ip sam1.jpg" class="card-img-top" alt="So sánh iPhone vs Android" />
              <div class="card-body">
                <h6 class="fw-bold">So sánh iPhone và Android</h6>
                <p class="small text-muted mb-0">
                  Hệ điều hành nào phù hợp với bạn?
                </p>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Bài 5 -->
        <div class="col">
          <router-link to="/chitietbai/5" class="text-decoration-none text-dark">
            <div class="card h-100 shadow-sm">
              <img src="/images/vivo1.png" class="card-img-top" alt="Điện thoại chụp ảnh đẹp" />
              <div class="card-body">
                <h6 class="fw-bold">Điện thoại chụp ảnh đẹp nhất</h6>
                <p class="small text-muted mb-0">
                  Camera nào đang dẫn đầu?
                </p>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Bài 6 -->
        <div class="col">
          <router-link to="/chitietbai/6" class="text-decoration-none text-dark">
            <div class="card h-100 shadow-sm">
              <img src="/images/meo1.jpg" class="card-img-top" alt="Mẹo dùng điện thoại bền" />
              <div class="card-body">
                <h6 class="fw-bold">Mẹo dùng điện thoại bền hơn</h6>
                <p class="small text-muted mb-0">
                  Kéo dài tuổi thọ pin & hiệu năng.
                </p>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Bài 7 -->
        <div class="col">
          <router-link to="/chitietbai/7" class="text-decoration-none text-dark">
            <div class="card h-100 shadow-sm">
              <img src="/images/gaming1.jpg" class="card-img-top" alt="Điện thoại chơi game" />
              <div class="card-body">
                <h6 class="fw-bold">Điện thoại chơi game tốt nhất</h6>
                <p class="small text-muted mb-0">
                  Hiệu năng mạnh, tản nhiệt tốt, pin trâu.
                </p>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Bài 8 -->
        <div class="col">
          <router-link to="/chitietbai/8" class="text-decoration-none text-dark">
            <div class="card h-100 shadow-sm">
              <img src="/images/trung.png" class="card-img-top" alt="Smartphone tầm trung" />
              <div class="card-body">
                <h6 class="fw-bold">Smartphone tầm trung đáng mua</h6>
                <p class="small text-muted mb-0">
                  Giá hợp lý, cấu hình tốt trong năm 2026.
                </p>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Bài 9 -->
        <div class="col">
          <router-link to="/chitietbai/9" class="text-decoration-none text-dark">
            <div class="card h-100 shadow-sm">
              <img src="/images/gap1.jpg" class="card-img-top" alt="Điện thoại gập" />
              <div class="card-body">
                <h6 class="fw-bold">Điện thoại gập có đáng mua?</h6>
                <p class="small text-muted mb-0">
                  Công nghệ mới và trải nghiệm khác biệt.
                </p>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Bài 10 -->
        <div class="col">
          <router-link to="/chitietbai/10" class="text-decoration-none text-dark">
            <div class="card h-100 shadow-sm">
              <img src="/images/meo2.jpg" class="card-img-top" alt="Mẹo tiết kiệm pin" />
              <div class="card-body">
                <h6 class="fw-bold">Mẹo tiết kiệm pin điện thoại</h6>
                <p class="small text-muted mb-0">
                  Giúp pin bền hơn khi sử dụng hằng ngày.
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Footer (reuse component chung) -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

// Nếu cần khởi tạo carousel thủ công (thường thì Bootstrap tự xử lý)
import { onMounted } from 'vue'

onMounted(() => {
  const carousel = document.getElementById('carouselExample')
  if (carousel) {
    new bootstrap.Carousel(carousel, {
      interval: 5000,
      ride: 'carousel'
    })
  }
})
</script>

<style scoped>
.carousel img {
  height: 350px;
  object-fit: cover;
}
</style>