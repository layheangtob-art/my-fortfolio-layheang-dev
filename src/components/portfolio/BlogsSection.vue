<script setup lang="ts">
import type { BlogPost } from '../../data/portfolio'
import SectionHeader from './SectionHeader.vue'

defineProps<{
  items: BlogPost[]
}>()
</script>

<template>
  <section id="blogs" class="section-block">
    <SectionHeader
      eyebrow="Recent Blogs"
      title="Thoughts about design and development"
      centered
    />

    <div class="blog-grid">
      <article v-for="post in items" :key="post.title" class="blog-card">
        <div class="blog-cover"></div>
        <p>{{ post.tag }}</p>
        <h3>{{ post.title }}</h3>
      </article>
    </div>
  </section>
</template>
