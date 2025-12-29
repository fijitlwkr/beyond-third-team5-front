<template>
  <main class="max-w-[1440px] mx-auto px-20 py-8">
    <div class="grid grid-cols-2 gap-6 mb-8">
      <HeroCard :penguin-image="penguinImage" />
      <WeatherSummaryCard />
    </div>

    <div class="mb-8">
      <HourlyForecastCard />
    </div>

    <div class="mb-8">
      <AlertBanner />
    </div>

    <div class="grid grid-cols-3 gap-6">
      <PreviewCard type="tomorrow" />
      <PreviewCard type="week" />
      <PreviewCard type="map" />
    </div>
  </main>
</template>

<script setup lang="ts">
import AlertBanner from '../AlertBanner.vue';
import HeroCard from '../HeroCard.vue';
import HourlyForecastCard from '../HourlyForecastCard.vue';
import PreviewCard from '../PreviewCard.vue';
import WeatherSummaryCard from '../WeatherSummaryCard.vue';

const penguinImage =
  'https://images.unsplash.com/photo-1638641569078-bc67cfbcc972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGVuZ3VpbnxlbnwxfHx8fDE3NjY5OTA5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080';
</script>
