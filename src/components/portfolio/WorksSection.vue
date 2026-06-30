<script setup lang="ts">
import type { ProjectItem } from "../../data/portfolio";

withDefaults(
  defineProps<{
    items: ProjectItem[];
    sectionId?: string;
    title?: string;
    subtitle?: string;
  }>(),
  {
    sectionId: "projects",
    title: "Featured Projects",
    subtitle:
      "Selected builds that combine clean UI, practical engineering, and real product thinking.",
  },
);
</script>

<template>
  <section :id="sectionId" class="section-block projects-section">
    <header class="section-heading">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </header>

    <div class="projects-grid">
      <article
        v-for="project in items"
        :key="project.title"
        class="project-card"
      >
        <div class="project-preview" :class="`tone-${project.tone}`">
          <img
            v-if="project.image"
            :src="project.image"
            :alt="project.alt ?? project.title"
            class="project-image"
            loading="lazy"
          />
          <div v-else class="project-screen"></div>
        </div>

        <div class="project-copy">
          <h3>{{ project.title }}</h3>
          <p v-if="typeof project.description === 'string'">{{ project.description }}</p>
          <ul v-else class="project-details">
            <li v-for="detail in project.description" :key="detail">{{ detail }}</li>
          </ul>
          <ul class="project-stack">
            <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
          </ul>

          <div class="project-links">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              v-if="project.live"
              :href="project.live"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
