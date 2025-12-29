<template>
  <main class="max-w-[1440px] mx-auto px-20 py-8">
    <div class="grid grid-cols-[1fr_400px] gap-6">
      <div class="bg-white rounded-[28px] p-8 shadow-lg shadow-blue-100/50 relative min-h-[700px]">
        <h3 class="text-[#1F2A37] mb-6">대한민국 기온 지도</h3>
        <div class="relative w-full h-[600px] bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1733363514919-53b042cb3c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="대한민국 지도"
            class="w-full h-full object-contain opacity-20"
          />

          <div
            v-for="city in cities"
            :key="city.name"
            class="absolute"
            :style="{ top: city.position.top, left: city.position.left }"
          >
            <button
              type="button"
              class="group relative"
              :class="selectedCity === city.name ? 'z-20' : 'z-10'"
              @click="selectedCity = city.name"
            >
              <div
                class="px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
                :class="[tempColor(city.temp), selectedCity === city.name ? 'ring-4 ring-[#6AA9FF] ring-opacity-50' : '']"
              >
                <div class="flex items-center gap-2">
                  <span class="text-sm font-semibold text-[#1F2A37]">{{ city.temp }}°C</span>
                  <span v-if="showOutfitIcons" class="text-lg">🐧</span>
                </div>
              </div>
              <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span class="text-xs font-medium text-[#6B7280]">{{ city.name }}</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="bg-white rounded-[28px] p-6 shadow-lg shadow-blue-100/50">
          <h4 class="text-[#1F2A37] mb-4">필터</h4>
          <div class="mb-6">
            <label class="block text-sm text-[#6B7280] mb-2">표시 온도</label>
            <div class="grid grid-cols-2 gap-2">
              <button
                v-for="mode in temperatureModes"
                :key="mode.value"
                type="button"
                class="py-2 px-3 rounded-xl transition-all"
                :class="tempMode === mode.value ? 'bg-[#6AA9FF] text-white' : 'bg-[#F6FAFF] text-[#6B7280] hover:bg-[#EAF2FF]'"
                @click="tempMode = mode.value"
              >
                {{ mode.label }}
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <label class="text-sm text-[#6B7280]">옷차림 아이콘 표시</label>
            <button
              type="button"
              class="w-12 h-6 rounded-full transition-all"
              :class="showOutfitIcons ? 'bg-[#6AA9FF]' : 'bg-[#E6EEF9]'"
              @click="showOutfitIcons = !showOutfitIcons"
            >
              <div
                class="w-5 h-5 bg-white rounded-full shadow-sm transition-transform"
                :class="showOutfitIcons ? 'translate-x-6' : 'translate-x-1'"
              />
            </button>
          </div>
        </div>

        <div class="bg-white rounded-[28px] p-6 shadow-lg shadow-blue-100/50">
          <h4 class="text-[#1F2A37] mb-4">범례</h4>
          <div class="space-y-3">
            <div v-for="legend in legends" :key="legend.range" class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg shadow-sm" :class="legend.color" />
              <span class="text-sm text-[#6B7280]">{{ legend.range }}</span>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] rounded-[28px] p-6 shadow-lg shadow-blue-100/50">
          <div class="flex items-start gap-3 mb-4">
            <MapPin class="w-6 h-6 text-[#6AA9FF]" />
            <div class="flex-1">
              <h4 class="text-[#1F2A37] mb-1">{{ currentCity.name }}</h4>
              <div class="text-3xl font-bold text-[#1F2A37] mb-2">{{ currentCity.temp }}°C</div>
            </div>
            <div class="text-4xl">🐧</div>
          </div>

          <div class="space-y-2 mb-4">
            <div class="flex items-center gap-2 text-sm">
              <Wind class="w-4 h-4 text-[#6B7280]" />
              <span class="text-[#6B7280]">바람</span>
              <span class="text-[#1F2A37] font-medium">3m/s</span>
            </div>
            <div class="flex items-center gap-2 text-sm">
              <Droplets class="w-4 h-4 text-[#6B7280]" />
              <span class="text-[#6B7280]">습도</span>
              <span class="text-[#1F2A37] font-medium">45%</span>
            </div>
          </div>

          <div class="bg-white/80 rounded-2xl p-4">
            <div class="text-sm text-[#6B7280] mb-1">추천 옷차림</div>
            <div class="text-[#1F2A37] font-medium">{{ currentCity.outfit }}</div>
          </div>
        </div>

        <div class="bg-white rounded-[28px] p-6 shadow-lg shadow-blue-100/50">
          <h4 class="text-[#1F2A37] mb-4">인기 지역 빠른 선택</h4>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="city in popularCities"
              :key="city"
              type="button"
              class="px-4 py-2 rounded-xl transition-all"
              :class="selectedCity === city ? 'bg-[#6AA9FF] text-white' : 'bg-[#F6FAFF] text-[#6B7280] hover:bg-[#EAF2FF]'"
              @click="selectedCity = city"
            >
              {{ city }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Droplets, MapPin, Wind } from 'lucide-vue-next';
import { computed, ref } from 'vue';

type TempMode = 'current' | 'feels' | 'high' | 'low';

interface City {
  name: string;
  temp: number;
  position: { top: string; left: string };
  outfit: string;
}

const selectedCity = ref('서울');
const showOutfitIcons = ref(true);
const tempMode = ref<TempMode>('current');

const cities: City[] = [
  { name: '서울', temp: 18, position: { top: '35%', left: '52%' }, outfit: '가디건 + 긴바지' },
  { name: '부산', temp: 22, position: { top: '70%', left: '70%' }, outfit: '얇은 셔츠 + 반팔' },
  { name: '대구', temp: 20, position: { top: '55%', left: '65%' }, outfit: '니트 + 긴바지' },
  { name: '광주', temp: 21, position: { top: '65%', left: '45%' }, outfit: '가디건 + 긴바지' },
  { name: '대전', temp: 19, position: { top: '48%', left: '50%' }, outfit: '자켓 + 긴바지' },
  { name: '제주', temp: 24, position: { top: '88%', left: '40%' }, outfit: '반팔 + 반바지' },
];

const temperatureModes = [
  { value: 'current' as TempMode, label: '현재' },
  { value: 'feels' as TempMode, label: '체감' },
  { value: 'high' as TempMode, label: '최고' },
  { value: 'low' as TempMode, label: '최저' },
];

const popularCities = ['서울', '부산', '대구', '광주', '대전', '제주'];

const legends = [
  { range: '0~5°C', color: 'bg-blue-400' },
  { range: '6~10°C', color: 'bg-blue-300' },
  { range: '11~16°C', color: 'bg-green-300' },
  { range: '17~22°C', color: 'bg-yellow-300' },
  { range: '23~27°C', color: 'bg-orange-300' },
  { range: '28°C+', color: 'bg-red-300' },
];

const currentCity = computed(() => cities.find(city => city.name === selectedCity.value) ?? cities[0]);

function tempColor(temp: number) {
  if (temp <= 5) return 'bg-blue-400';
  if (temp <= 10) return 'bg-blue-300';
  if (temp <= 16) return 'bg-green-300';
  if (temp <= 22) return 'bg-yellow-300';
  if (temp <= 27) return 'bg-orange-300';
  return 'bg-red-300';
}
</script>
