<script setup lang="ts">
import type { SkillItem } from '../../data/portfolio'
import SectionHeader from './SectionHeader.vue'

defineProps<{
  items: SkillItem[]
}>()
</script>

<template>
  <section class="section-block skills-block">
    <SectionHeader eyebrow="My Skills" title="Tools and platforms I work with" centered />

    <div class="skills-grid">
      <article v-for="item in items" :key="item.name" class="skill-card">
        <div class="skill-icon">{{ item.name.slice(0, 1) }}</div>
        <strong>{{ item.level }}</strong>
        <span>{{ item.name }}</span>
      </article>
    </div>
  </section>
</template>
