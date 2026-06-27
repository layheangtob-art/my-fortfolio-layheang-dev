<script setup lang="ts">
import type { TechStackItem } from "../../data/portfolio";

defineProps<{
  items: TechStackItem[];
}>();

function iconSrc(item: TechStackItem) {
  const customIconUrls: Record<string, string> = {
    adobephotoshop: "https://api.iconify.design/logos/adobe-photoshop.svg",
    adobeillustrator: "https://api.iconify.design/logos/adobe-illustrator.svg",
    adobeindesign: "https://api.iconify.design/logos/adobe-indesign.svg",
    adobepremierepro: "https://api.iconify.design/logos/adobe-premiere.svg",
    adobeaftereffects: "https://api.iconify.design/logos/adobe-after-effects.svg",
    adobelightroom: "https://api.iconify.design/logos/adobe-lightroom.svg",
    adobexd: "https://api.iconify.design/logos/adobe-xd.svg",
  };

  const custom = customIconUrls[item.icon];
  if (custom) return custom;

  if (item.color) {
    return `https://cdn.simpleicons.org/${item.icon}/${item.color}`;
  }

  return `https://cdn.simpleicons.org/${item.icon}`;
}
</script>

<template>
  <section id="tech-stack" class="section-block tech-stack-section">
    <header class="section-heading">
      <h2>Tech Stack</h2>
      <p>Technologies and tools I use to design, build, and ship modern web products.</p>
    </header>

    <div class="tech-stack-grid">
      <article
        v-for="item in items"
        :key="item.name"
        class="tech-stack-pill"
      >
        <img
          class="tech-stack-icon"
          :src="iconSrc(item)"
          :alt="`${item.name} icon`"
          width="18"
          height="18"
          loading="lazy"
        />
        <span>{{ item.name }}</span>
      </article>
    </div>
  </section>
</template>
