<template>
  <h2>Danh sách bài viết</h2>
  
  <div 
    v-for="(post, index) in posts" 
    :key="index"
    class="post"
    :class="{ highlighted: post.title.length > 20 }"
  >
     <h5>{{ index + 1 }}</h5>
    <h3 class="title">{{ post.title }}</h3>
    <p class="content">{{ post.content }}</p>
    <h4 class="author">{{ post.author }}</h4>
  </div>
</template>

<script setup>



defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.post {
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.highlighted {
  border: 2px solid #ccc;
  background-color: #fffacd; /* vàng nhạt nổi bật */
}

.title {
  color: #28a745;          /* xanh lá */
  margin: 0 0 8px 0;
  font-size: 1.4rem;
  font-weight: 600;
}

.content {
  color: #dc3545; 
          /* đ */
  margin: 10px 0;
  white-space: pre-wrap;
  line-height: 1.6;
  font-size: 1.05rem;
}

.author {
  color: #000000;          /* đen */
  font-style: italic;
  margin: 8px 0 0 0;
  font-weight: 500;
  font-size: 1.1rem;
}


</style>

