<script setup lang="ts">
import type { WorkItem } from '../../data/portfolio'
import SectionHeader from './SectionHeader.vue'

defineProps<{
  items: WorkItem[]
}>()
</script>

<template>
  <section id="works" class="section-block">
    <SectionHeader
      eyebrow="My Recent Works"
      title="Selected interfaces and product design pieces"
      centered
    />

    <div class="works-grid">
      <article v-for="work in items" :key="work.title" class="work-card">
        <div class="work-preview" :class="`tone-${work.tone}`">
          <div class="work-screen"></div>
        </div>
        <div class="work-copy">
          <p>{{ work.tag }}</p>
          <h3>{{ work.title }}</h3>
        </div>
      </article>
    </div>
  </section>
</template>
