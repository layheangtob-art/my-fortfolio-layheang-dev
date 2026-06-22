<script setup lang="ts">
import type { StatItem } from '../../data/portfolio'

defineProps<{
  items: StatItem[]
}>()
</script>

<template>
  <section class="stats-grid">
    <article v-for="item in items" :key="item.label" class="stat-item">
      <strong>{{ item.value }}</strong>
      <span>{{ item.label }}</span>
    </article>
  </section>
</template>
