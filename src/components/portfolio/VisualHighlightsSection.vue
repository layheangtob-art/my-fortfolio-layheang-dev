<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { HighlightItem } from '../../data/portfolio'

defineProps<{
  items: HighlightItem[]
}>()

const activeImage = ref<{ src: string; alt: string } | null>(null)

function openImage(item: HighlightItem) {
  if (!item.image) return
  activeImage.value = { src: item.image, alt: item.alt ?? item.title }
}

function closeImage() {
  activeImage.value = null
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeImage()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
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
        :class="[
          `tone-${item.tone}`,
          `span-${item.span}`,
          { 'highlight-card--interactive': item.image },
        ]"
        :tabindex="item.image ? 0 : undefined"
        :role="item.image ? 'button' : undefined"
        :aria-label="item.image ? `View ${item.title}` : undefined"
        @click="openImage(item)"
        @keydown.enter="openImage(item)"
        @keydown.space.prevent="openImage(item)"
      >
        <div class="highlight-media" :aria-hidden="!item.image">
          <img
            v-if="item.image"
            :src="item.image"
            :alt="item.alt ?? item.title"
            loading="lazy"
          />
        </div>
        <p>{{ item.title }}</p>
      </article>
    </div>

    <Teleport to="body">
      <div
        v-if="activeImage"
        class="highlight-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="activeImage.alt"
        @click.self="closeImage"
      >
        <button type="button" class="highlight-lightbox__close" aria-label="Close" @click="closeImage">
          ×
        </button>
        <img :src="activeImage.src" :alt="activeImage.alt" class="highlight-lightbox__image" />
      </div>
    </Teleport>
  </section>
</template>
