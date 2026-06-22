<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import cambodiaFlag from "../../assets/cambodia-flag.png";
import type { NavItem } from "../../data/portfolio";

defineProps<{
  items: NavItem[];
}>();

const time = ref("00:00:00");
let clockInterval: ReturnType<typeof setInterval> | undefined;

function updateTime() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Phnom_Penh",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const get = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "00";

  time.value = `${get("hour")}:${get("minute")}:${get("second")}`;
}

onMounted(() => {
  updateTime();
  clockInterval = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  if (clockInterval) clearInterval(clockInterval);
});
</script>

<template>
  <header class="site-header">
    <a href="#home" class="logo-wrap" aria-label="Portfolio home">
      <!-- <span class="logo-mark">G</span> -->
      <span class="logo-name">Tob_Layheang</span>
    </a>

    <nav class="top-nav" aria-label="Main navigation"></nav>

    <div class="status-pill" aria-label="Current time in Phnom Penh">
      <span class="status-dot" aria-hidden="true"></span>
      <span class="status-flag" aria-hidden="true">
        <img :src="cambodiaFlag" alt="" width="22" height="15" />
      </span>
      <span class="status-location">Phnom Penh</span>
      <span class="status-divider" aria-hidden="true"></span>
      <time class="status-time" datetime="">{{ time }}</time>
    </div>
  </header>
</template>
