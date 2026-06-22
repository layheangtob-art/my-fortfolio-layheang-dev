<script setup lang="ts">
import type { ResumeItem } from "../../data/portfolio";

defineProps<{
  experience: ResumeItem[];
  education: ResumeItem[];
}>();
</script>

<template>
  <section id="resume" class="resume-grid">
    <div class="resume-column">
      <div class="column-title">
        <p class="eyebrow">My Experience</p>
        <h2>Professional journey</h2>
      </div>

      <article
        v-for="item in experience"
        :key="`${item.title}-${item.period}`"
        class="timeline-card"
      >
        <span class="timeline-period">{{ item.period }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.place }}</p>
      </article>
    </div>

    <div class="resume-column">
      <div class="column-title">
        <p class="eyebrow">My Education</p>
        <h2>Knowledge and school</h2>
      </div>

      <article
        v-for="item in education"
        :key="`${item.title}-${item.period}`"
        class="timeline-card"
      >
        <span class="timeline-period">{{ item.period }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.place }}</p>
      </article>
    </div>
  </section>
</template>
