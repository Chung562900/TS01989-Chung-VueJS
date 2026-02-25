import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import CreatePost from '../views/CreatePost.vue'
import Profile from '../views/Profile.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/', component: Home, meta: { requiresAuth: true } },
  { path: '/create-post', component: CreatePost, meta: { requiresAuth: true } },
  { path: '/profile', component: Profile, meta: { requiresAuth: true } },
  {
  path: '/edit-post/:id',
  name: 'EditPost',
component: () => import('../views/EditPost.vue')
},


  { 
    path: '/post/:id', 
    name: 'PostDetail', 
    component: () => import('../views/PostDetail.vue'),
    meta: { requiresAuth: false }  
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedInUser = localStorage.getItem('currentUser');
  
  if (to.meta.requiresAuth && !loggedInUser) {
    next('/login');
  } else {
    next();
  }
});

export default router