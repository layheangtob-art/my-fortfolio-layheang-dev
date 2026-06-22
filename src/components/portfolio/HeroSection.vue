<template>
  <section id="home" class="hero-card">
    <div class="hero-copy">
      <p class="eyebrow">I am UI Guide</p>
      <h1>Web Developer +<br />UX Designer</h1>
      <p class="hero-text">
        I create polished digital experiences with a strong focus on interface
        clarity, frontend development, and practical product thinking.
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
import heroImage from "../../assets/hero.png";
</script>
