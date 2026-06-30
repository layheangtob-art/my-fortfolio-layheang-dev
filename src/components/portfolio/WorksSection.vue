<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { ProjectItem } from "../../data/portfolio";
import ProjectCard from "./ProjectCard.vue";

const props = withDefaults(
  defineProps<{
    items: ProjectItem[];
    sectionId?: string;
    title?: string;
    subtitle?: string;
    carousel?: boolean;
  }>(),
  {
    sectionId: "projects",
    title: "Featured Projects",
    subtitle:
      "Selected builds that combine clean UI, practical engineering, and real product thinking.",
    carousel: false,
  },
);

const activeIndex = ref(0);
const touchStartX = ref(0);

function goTo(index: number) {
  if (!props.items.length) return;
  const total = props.items.length;
  activeIndex.value = ((index % total) + total) % total;
}

function goNext() {
  goTo(activeIndex.value + 1);
}

function goPrev() {
  goTo(activeIndex.value - 1);
}

function onTouchStart(event: TouchEvent) {
  touchStartX.value = event.changedTouches[0]?.clientX ?? 0;
}

function onTouchEnd(event: TouchEvent) {
  const touchEndX = event.changedTouches[0]?.clientX ?? 0;
  const delta = touchEndX - touchStartX.value;

  if (Math.abs(delta) < 48) return;
  if (delta < 0) goNext();
  else goPrev();
}

function onKeydown(event: KeyboardEvent) {
  if (!props.carousel) return;
  if (event.key === "ArrowRight") goNext();
  if (event.key === "ArrowLeft") goPrev();
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
  <section :id="sectionId" class="section-block projects-section">
    <header class="section-heading">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </header>

    <div v-if="carousel" class="projects-carousel">
      <div class="projects-carousel__header">
        <p class="projects-carousel__count">
          {{ activeIndex + 1 }} / {{ items.length }}
        </p>
        <div class="projects-carousel__controls">
          <button
            type="button"
            class="projects-carousel__button"
            aria-label="Previous project"
            @click="goPrev"
          >
            ‹
          </button>
          <button
            type="button"
            class="projects-carousel__button"
            aria-label="Next project"
            @click="goNext"
          >
            ›
          </button>
        </div>
      </div>

      <div
        class="projects-carousel__viewport"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
      >
        <div
          class="projects-carousel__track"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
        >
          <ProjectCard
            v-for="project in items"
            :key="project.title"
            :project="project"
            layout="carousel"
            class="projects-carousel__slide"
          />
        </div>
      </div>

      <div class="projects-carousel__dots" role="tablist" :aria-label="`${title} slides`">
        <button
          v-for="(project, index) in items"
          :key="project.title"
          type="button"
          class="projects-carousel__dot"
          :class="{ 'is-active': index === activeIndex }"
          :aria-label="`Go to ${project.title}`"
          :aria-selected="index === activeIndex"
          role="tab"
          @click="goTo(index)"
        />
      </div>
    </div>

    <div v-else class="projects-grid">
      <ProjectCard
        v-for="project in items"
        :key="project.title"
        :project="project"
      />
    </div>
  </section>
</template>
