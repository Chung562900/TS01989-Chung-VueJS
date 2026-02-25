<template>
  <!-- Modal Đăng nhập -->
  <div class="modal fade" id="loginModal" tabindex="-1">
    <!-- Copy toàn bộ code modal từ HTML cũ vào đây -->
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-info text-white">
          <h5 class="modal-title"><i class="fa-solid fa-right-to-bracket"></i> Đăng Nhập</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <form class="was-validated">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" placeholder="Nhập email" required>
              <div class="invalid-feedback">Vui lòng nhập email</div>
            </div>
            <div class="mb-3">
              <label class="form-label">Mật khẩu</label>
              <input type="password" class="form-control" placeholder="Nhập mật khẩu" required>
              <div class="invalid-feedback">Vui lòng nhập mật khẩu</div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-info text-white w-100">Đăng Nhập</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Modal Đăng ký (copy tương tự) -->
  <div class="modal fade" id="registerModal" tabindex="-1">
    <!-- ... copy code modal đăng ký từ HTML ... -->
  </div>
</template>

<script>
export default {
  name: 'Modals'
}
</script>