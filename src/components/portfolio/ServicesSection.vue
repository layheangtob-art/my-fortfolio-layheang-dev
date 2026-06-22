<script setup lang="ts">
import type { ServiceItem } from '../../data/portfolio'
import SectionHeader from './SectionHeader.vue'

defineProps<{
  items: ServiceItem[]
}>()
</script>

<template>
  <section id="services" class="section-block">
    <SectionHeader
      eyebrow="My Quality Services"
      title="Services that combine strategy, code, and design"
      centered
    />

    <div class="service-list">
      <article
        v-for="service in items"
        :key="service.title"
        class="service-card"
        :class="{ active: service.active }"
      >
        <div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
        <span class="service-arrow">↗</span>
      </article>
    </div>
  </section>
</template>
