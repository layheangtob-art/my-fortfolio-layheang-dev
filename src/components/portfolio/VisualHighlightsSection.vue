<script setup lang="ts">
import type { HighlightItem } from "../../data/portfolio";

defineProps<{
  items: HighlightItem[];
}>();
</script>

<template>
  <section id="highlights" class="section-block highlights-section">
    <header class="section-heading">
      <h2>Visual Highlights</h2>
      <p>Selected snapshots from design work, builds, and creative experiments.</p>
    </header>

    <div class="highlights-grid">
      <article
        v-for="item in items"
        :key="item.title"
        class="highlight-card"
        :class="[`tone-${item.tone}`, `span-${item.span}`]"
      >
        <div class="highlight-media" aria-hidden="true"></div>
        <p>{{ item.title }}</p>
      </article>
    </div>
  </section>
</template>
