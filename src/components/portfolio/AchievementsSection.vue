<script setup lang="ts">
import type { AchievementItem } from "../../data/portfolio";

defineProps<{
  items: AchievementItem[];
}>();
</script>

<template>
  <section id="achievements" class="section-block achievements-section">
    <header class="section-heading">
      <h2>Achievements</h2>
      <p>Milestones, certifications, and progress across my learning journey.</p>
    </header>

    <div class="achievements-grid">
      <article
        v-for="item in items"
        :key="item.title"
        class="achievement-card"
      >
        <div class="achievement-top">
          <span class="achievement-icon" aria-hidden="true">{{ item.symbol }}</span>
          <span class="achievement-badge">{{ item.badge }}</span>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>
