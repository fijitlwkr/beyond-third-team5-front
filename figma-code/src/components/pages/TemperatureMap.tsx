import { Wind, Droplets, MapPin } from 'lucide-react';
import { useState } from 'react';

interface City {
  name: string;
  temp: number;
  position: { top: string; left: string };
  outfit: string;
}

export function TemperatureMap() {
  const [selectedCity, setSelectedCity] = useState('서울');
  const [showOutfitIcons, setShowOutfitIcons] = useState(true);
  const [tempMode, setTempMode] = useState<'current' | 'feels' | 'high' | 'low'>('current');

  const cities: City[] = [
    { name: '서울', temp: 18, position: { top: '35%', left: '52%' }, outfit: '가디건 + 긴바지' },
    { name: '부산', temp: 22, position: { top: '70%', left: '70%' }, outfit: '얇은 셔츠 + 반팔' },
    { name: '대구', temp: 20, position: { top: '55%', left: '65%' }, outfit: '니트 + 긴바지' },
    { name: '광주', temp: 21, position: { top: '65%', left: '45%' }, outfit: '가디건 + 긴바지' },
    { name: '대전', temp: 19, position: { top: '48%', left: '50%' }, outfit: '자켓 + 긴바지' },
    { name: '제주', temp: 24, position: { top: '88%', left: '40%' }, outfit: '반팔 + 반바지' },
  ];

  const popularCities = ['서울', '부산', '대구', '광주', '대전', '제주'];

  const selectedCityData = cities.find(c => c.name === selectedCity) || cities[0];

  const getTempColor = (temp: number) => {
    if (temp <= 5) return 'bg-blue-400';
    if (temp <= 10) return 'bg-blue-300';
    if (temp <= 16) return 'bg-green-300';
    if (temp <= 22) return 'bg-yellow-300';
    if (temp <= 27) return 'bg-orange-300';
    return 'bg-red-300';
  };

  return (
    <main className="max-w-[1440px] mx-auto px-20 py-8">
      <div className="grid grid-cols-[1fr_400px] gap-6">
        {/* Left - Map */}
        <div className="bg-white rounded-[28px] p-8 shadow-lg shadow-blue-100/50 relative min-h-[700px]">
          <h3 className="text-[#1F2A37] mb-6">대한민국 기온 지도</h3>
          
          {/* Map Background */}
          <div className="relative w-full h-[600px] bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] rounded-3xl overflow-hidden">
            {/* Map Image Placeholder */}
            <img
              src="https://images.unsplash.com/photo-1733363514919-53b042cb3c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMG1hcHxlbnwxfHx8fDE3NjY5OTExNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="대한민국 지도"
              className="w-full h-full object-contain opacity-20"
            />

            {/* City Markers */}
            {cities.map((city) => (
              <div
                key={city.name}
                className="absolute"
                style={{ top: city.position.top, left: city.position.left }}
              >
                <button
                  onClick={() => setSelectedCity(city.name)}
                  className={`group relative ${
                    selectedCity === city.name ? 'z-20' : 'z-10'
                  }`}
                >
                  {/* Marker */}
                  <div
                    className={`${getTempColor(city.temp)} px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 ${
                      selectedCity === city.name ? 'ring-4 ring-[#6AA9FF] ring-opacity-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[#1F2A37]">{city.temp}°C</span>
                      {showOutfitIcons && <span className="text-lg">🐧</span>}
                    </div>
                  </div>

                  {/* City Name */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-medium text-[#6B7280]">{city.name}</span>
                  </div>

                  {/* Hover Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-white rounded-2xl px-4 py-3 shadow-xl border border-[#E6EEF9] whitespace-nowrap">
                      <div className="font-semibold text-[#1F2A37] mb-1">{city.name} {city.temp}°C</div>
                      <div className="text-sm text-[#6B7280]">추천: {city.outfit}</div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-[#E6EEF9] transform rotate-45" />
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Control Panel */}
        <div className="space-y-6">
          {/* Filters Card */}
          <div className="bg-white rounded-[28px] p-6 shadow-lg shadow-blue-100/50">
            <h4 className="text-[#1F2A37] mb-4">필터</h4>

            {/* Temperature Mode Toggle */}
            <div className="mb-6">
              <label className="block text-sm text-[#6B7280] mb-2">표시 온도</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: 'current', label: '현재' },
                  { value: 'feels', label: '체감' },
                  { value: 'high', label: '최고' },
                  { value: 'low', label: '최저' },
                ].map((mode) => (
                  <button
                    key={mode.value}
                    onClick={() => setTempMode(mode.value as any)}
                    className={`py-2 px-3 rounded-xl transition-all ${
                      tempMode === mode.value
                        ? 'bg-[#6AA9FF] text-white'
                        : 'bg-[#F6FAFF] text-[#6B7280] hover:bg-[#EAF2FF]'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Show Outfit Icons */}
            <div className="flex items-center justify-between">
              <label className="text-sm text-[#6B7280]">옷차림 아이콘 표시</label>
              <button
                onClick={() => setShowOutfitIcons(!showOutfitIcons)}
                className={`w-12 h-6 rounded-full transition-all ${
                  showOutfitIcons ? 'bg-[#6AA9FF]' : 'bg-[#E6EEF9]'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                    showOutfitIcons ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Legend Card */}
          <div className="bg-white rounded-[28px] p-6 shadow-lg shadow-blue-100/50">
            <h4 className="text-[#1F2A37] mb-4">범례</h4>
            <div className="space-y-3">
              {[
                { range: '0~5°C', color: 'bg-blue-400' },
                { range: '6~10°C', color: 'bg-blue-300' },
                { range: '11~16°C', color: 'bg-green-300' },
                { range: '17~22°C', color: 'bg-yellow-300' },
                { range: '23~27°C', color: 'bg-orange-300' },
                { range: '28°C+', color: 'bg-red-300' },
              ].map((item) => (
                <div key={item.range} className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${item.color} rounded-lg shadow-sm`} />
                  <span className="text-sm text-[#6B7280]">{item.range}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected City Detail */}
          <div className="bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] rounded-[28px] p-6 shadow-lg shadow-blue-100/50">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-6 h-6 text-[#6AA9FF]" />
              <div className="flex-1">
                <h4 className="text-[#1F2A37] mb-1">{selectedCityData.name}</h4>
                <div className="text-3xl font-bold text-[#1F2A37] mb-2">{selectedCityData.temp}°C</div>
              </div>
              <div className="text-4xl">🐧</div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Wind className="w-4 h-4 text-[#6B7280]" />
                <span className="text-[#6B7280]">바람</span>
                <span className="text-[#1F2A37] font-medium">3m/s</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Droplets className="w-4 h-4 text-[#6B7280]" />
                <span className="text-[#6B7280]">습도</span>
                <span className="text-[#1F2A37] font-medium">45%</span>
              </div>
            </div>

            <div className="bg-white/80 rounded-2xl p-4">
              <div className="text-sm text-[#6B7280] mb-1">추천 옷차림</div>
              <div className="text-[#1F2A37] font-medium">{selectedCityData.outfit}</div>
            </div>
          </div>

          {/* Quick City Selection */}
          <div className="bg-white rounded-[28px] p-6 shadow-lg shadow-blue-100/50">
            <h4 className="text-[#1F2A37] mb-4">인기 지역 빠른 선택</h4>
            <div className="flex flex-wrap gap-2">
              {popularCities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 rounded-xl transition-all ${
                    selectedCity === city
                      ? 'bg-[#6AA9FF] text-white'
                      : 'bg-[#F6FAFF] text-[#6B7280] hover:bg-[#EAF2FF]'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
