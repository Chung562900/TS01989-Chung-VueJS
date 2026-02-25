<template>
  <div class="container mt-4">
    <h2 class="mb-4">Ứng dụng Blog</h2>

    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" @toggle-highlight="toggleHighlight" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

const posts = reactive([])

const addPost = (post) => { 
  posts.push(post)
}

const toggleHighlight = (index) => {
  posts[index].highlight = !posts[index].highlight
}
</script>
