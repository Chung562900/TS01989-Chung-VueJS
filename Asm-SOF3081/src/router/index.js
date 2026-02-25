import { createRouter, createWebHistory } from 'vue-router'
import TrangChu from '../views/TrangChu.vue'
import BaiViet from '../views/BaiViet.vue'
import SuKien from '../views/SuKien.vue'
import GioiThieu from '../views/GioiThieu.vue'
import Video1 from '../views/Video1.vue'
import Tao from '../views/Tao.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'trangchu', component: TrangChu },
    { path: '/baiviet', name: 'baiviet', component: BaiViet },
    { path: '/sukien', name: 'sukien', component: SuKien },
    { path: '/gioithieu', name: 'gioithieu', component: GioiThieu },
    { path: '/video1', name: 'video1', component: Video1 },
    { path: '/tao', name: 'tao', component: Tao },
    // Thêm route cho các video-detail?id=X (nếu cần dynamic, dùng :id)
    { path: '/chitietbai/:id', name: 'chitietbai', component: Video1 }  // Ví dụ dùng chung component
  ]
})

export default router