<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { TimelineItem } from "../../data/portfolio";

const props = defineProps<{
  sectionId: string;
  title: string;
  icon: "briefcase" | "graduation";
  items: TimelineItem[];
}>();

const timelineRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | undefined;

onMounted(() => {
  const root = timelineRef.value;
  if (!root) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer?.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
  );

  root.classList.add("is-visible");
  root.querySelectorAll(".experience-item").forEach((item) => {
    observer?.observe(item);
  });
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <section :id="sectionId" class="experience-section section-block">
    <header class="experience-header">
      <span class="experience-header-icon" aria-hidden="true">
        <svg
          v-if="icon === 'briefcase'"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
        </svg>
        <svg
          v-else
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
        </svg>
      </span>
      <h2>{{ title }}</h2>
    </header>

    <div ref="timelineRef" class="experience-timeline">
      <div class="experience-timeline-line" aria-hidden="true"></div>

      <article
        v-for="item in items"
        :key="`${item.company}-${item.period}`"
        class="experience-item"
        :class="`accent-${item.accent}`"
      >
        <span class="experience-node" aria-hidden="true"></span>

        <div class="experience-card">
          <header class="experience-card-top">
            <div class="experience-brand">
              <span
                class="experience-logo"
                :class="{ 'experience-logo--image': item.logo }"
              >
                <img
                  v-if="item.logo"
                  :src="item.logo"
                  :alt="`${item.company} logo`"
                />
                <template v-else>{{ item.initials }}</template>
              </span>
              <div class="experience-brand-copy">
                <h3>{{ item.company }}</h3>
                <div class="experience-tags">
                  <span class="experience-role-tag">{{ item.roleTag }}</span>
                  <span v-if="item.isCurrent" class="experience-status">
                    <span
                      class="experience-status-dot"
                      aria-hidden="true"
                    ></span>
                    Current
                  </span>
                </div>
              </div>
            </div>

            <time class="experience-date">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M16 3v4M8 3v4M3 11h18" />
              </svg>
              {{ item.period }}
            </time>
          </header>

          <p class="experience-role">{{ item.title }}</p>

          <ul class="experience-bullets">
            <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
          </ul>

          <a
            v-if="item.website"
            class="experience-link"
            :href="item.website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              aria-hidden="true"
            >
              <path d="M14 5h5v5" />
              <path d="M10 14 19 5" />
              <path d="M19 14v5H5V5h5" />
            </svg>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
