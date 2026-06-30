<script setup lang="ts">
import AppHeader from "./components/portfolio/AppHeader.vue";
import AchievementsSection from "./components/portfolio/AchievementsSection.vue";
import HeroSection from "./components/portfolio/HeroSection.vue";
import SiteFooter from "./components/portfolio/SiteFooter.vue";
import SkillsSection from "./components/portfolio/SkillsSection.vue";
import StatsGrid from "./components/portfolio/StatsGrid.vue";
import TimelineSection from "./components/portfolio/TimelineSection.vue";
import VisualHighlightsSection from "./components/portfolio/VisualHighlightsSection.vue";
import WorksSection from "./components/portfolio/WorksSection.vue";
import {
  achievements,
  education,
  experience,
  featuredProjects,
  navItems,
  stats,
  techStack,
  uxUiProjects,
  visualHighlights,
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
      <TimelineSection
        section-id="experience"
        title="Experience"
        icon="briefcase"
        :items="experience"
      />
      <TimelineSection
        section-id="education"
        title="Education"
        icon="graduation"
        :items="education"
      />
      <SkillsSection :items="techStack" />
      <VisualHighlightsSection :items="visualHighlights" />
      <WorksSection :items="featuredProjects" carousel />
      <WorksSection
        section-id="ux-ui"
        title="Featured UX/UI"
        subtitle="Selected designs that focus on clarity, usability, and polished visual storytelling."
        :items="uxUiProjects"
        carousel
      />
      <AchievementsSection :items="achievements" />
      <SiteFooter />
    </main>
  </div>
</template>
