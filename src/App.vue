<script setup lang="ts">
import AppHeader from "./components/portfolio/AppHeader.vue";
import BlogsSection from "./components/portfolio/BlogsSection.vue";
import ContactSection from "./components/portfolio/ContactSection.vue";
import HeroSection from "./components/portfolio/HeroSection.vue";
import ResumeSection from "./components/portfolio/ResumeSection.vue";
import ServicesSection from "./components/portfolio/ServicesSection.vue";
import SiteFooter from "./components/portfolio/SiteFooter.vue";
import SkillsSection from "./components/portfolio/SkillsSection.vue";
import StatsGrid from "./components/portfolio/StatsGrid.vue";
import TestimonialsSection from "./components/portfolio/TestimonialsSection.vue";
import WorksSection from "./components/portfolio/WorksSection.vue";
import {
  blogPosts,
  education,
  experience,
  featuredWorks,
  navItems,
  services,
  skillItems,
  stats,
  testimonials,
} from "./data/portfolio";
</script>

<template>
  <div class="page-shell">
    <div class="bg-orb orb-one"></div>
    <div class="bg-orb orb-two"></div>
    <div class="bg-orb orb-three"></div>

    <main class="page-frame">
      <AppHeader :items="navItems" />
      <HeroSection />
      <StatsGrid :items="stats" />
      <ServicesSection :items="services" />
      <WorksSection :items="featuredWorks" />
      <ResumeSection :experience="experience" :education="education" />
      <SkillsSection :items="skillItems" />
      <TestimonialsSection :items="testimonials" />
      <BlogsSection :items="blogPosts" />
      <ContactSection />
      <SiteFooter />
    </main>
  </div>
</template>
