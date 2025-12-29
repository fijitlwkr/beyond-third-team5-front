<template>
  <div class="min-h-screen bg-gradient-to-b from-[#F6FAFF] to-[#FFFFFF]">
    <Navigation
      :active-tab="currentPage"
      :simple="currentPage === '로그인'"
      @tab-change="handleTabChange"
    />
    <component :is="activeComponent" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Navigation from './components/Navigation.vue';
import TodayWeather from './components/pages/TodayWeather.vue';
import WeeklyWeather from './components/pages/WeeklyWeather.vue';
import CalendarRecord from './components/pages/CalendarRecord.vue';
import TemperatureMap from './components/pages/TemperatureMap.vue';
import LoginPage from './components/pages/LoginPage.vue';

const currentPage = ref('오늘의 날씨');

const components = {
  오늘의 날씨: TodayWeather,
  '이번주 날씨': WeeklyWeather,
  '국내 기온지도': TemperatureMap,
  '달력 기록': CalendarRecord,
  로그인: LoginPage,
};

const activeComponent = computed(() => components[currentPage.value] ?? TodayWeather);

function handleTabChange(tab: string) {
  currentPage.value = tab;
}
</script>
