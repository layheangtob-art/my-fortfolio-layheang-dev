<script setup lang="ts">
import type { TestimonialItem } from '../../data/portfolio'
import SectionHeader from './SectionHeader.vue'

defineProps<{
  items: TestimonialItem[]
}>()
</script>

<template>
  <section class="section-block stories-grid">
    <div>
      <SectionHeader
        eyebrow="My Client's Stories"
        title="What people say about working with me"
      />
    </div>

    <div class="stories-cards">
      <article v-for="item in items" :key="item.name" class="story-card">
        <div class="story-avatar"></div>
        <p class="story-quote">{{ item.quote }}</p>
        <h3>{{ item.name }}</h3>
        <span>{{ item.role }}</span>
      </article>
    </div>
  </section>
</template>
