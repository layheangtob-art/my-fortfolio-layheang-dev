<template>
  <section id="home" class="hero-card">
    <div class="hero-copy">
      <p class="eyebrow">HELLO, I'M <span>LayHeang_Tob</span></p>
      <h1 class="hero-title">
        <span class="hero-title-line">
          {{ displayedLines[0] }}<span
            v-if="showCaret && activeLine === 0"
            class="typewriter-caret"
          />
        </span>
        <span class="hero-title-line">
          {{ displayedLines[1] }}<span
            v-if="showCaret && activeLine === 1"
            class="typewriter-caret"
          />
        </span>
      </h1>
      <p class="hero-text  ">
        IT Engineering student at Royal University of Phnom Penh crafting elegant digital experiences with modern web technologies. Passionate about clean code, great design, and building things that matter.
      </p>
    </div>

    <div class="hero-visual">
      <div class="portrait-frame">
        <img :src="heroImage" alt="Developer portrait" class="portrait-image" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import heroImage from "../../assets/hero.png";

const lines = ["Web Developer +", "UX Designer"] as const;
const displayedLines = ref<[string, string]>(["", ""]);
const showCaret = ref(true);
const activeLine = ref(0);

const typeSpeedMs = 75;
const deleteSpeedMs = 45;
const pauseBetweenLinesMs = 400;
const pauseAfterTypingMs = 1800;
const pauseAfterDeletingMs = 500;

let timeoutId: ReturnType<typeof setTimeout> | undefined;
let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;

function schedule(callback: () => void, delay: number) {
  timeoutId = setTimeout(callback, delay);
}

function updateDisplay() {
  activeLine.value = lineIndex;
  displayedLines.value[lineIndex] = lines[lineIndex].slice(0, charIndex);
}

function tick() {
  const line = lines[lineIndex];

  if (!isDeleting) {
    if (charIndex < line.length) {
      charIndex += 1;
      updateDisplay();
      schedule(tick, typeSpeedMs);
      return;
    }

    if (lineIndex < lines.length - 1) {
      schedule(() => {
        lineIndex += 1;
        charIndex = 0;
        tick();
      }, pauseBetweenLinesMs);
      return;
    }

    schedule(() => {
      isDeleting = true;
      lineIndex = lines.length - 1;
      charIndex = lines[lineIndex].length;
      tick();
    }, pauseAfterTypingMs);
    return;
  }

  if (charIndex > 0) {
    charIndex -= 1;
    updateDisplay();
    schedule(tick, deleteSpeedMs);
    return;
  }

  if (lineIndex > 0) {
    schedule(() => {
      lineIndex -= 1;
      charIndex = lines[lineIndex].length;
      tick();
    }, pauseBetweenLinesMs);
    return;
  }

  schedule(() => {
    isDeleting = false;
    lineIndex = 0;
    charIndex = 0;
    tick();
  }, pauseAfterDeletingMs);
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    displayedLines.value = [...lines];
    showCaret.value = false;
    return;
  }

  tick();
});

onUnmounted(() => {
  if (timeoutId !== undefined) {
    clearTimeout(timeoutId);
  }
});
</script>
