import { ChevronDown, Cloud, CloudRain, Sun, Wind, Zap } from 'lucide-react';
import { useState } from 'react';

export function WeeklyWeather() {
  const [viewMode, setViewMode] = useState<'list' | 'graph'>('list');

  const weeklyData = [
    { day: '월', date: '12/29', icon: 'thunder', high: 18, low: 14, precipitation: '40%', outfit: '가디건 + 긴바지' },
    { day: '화', date: '12/30', icon: 'rain', high: 21, low: 16, precipitation: '60%', outfit: '얇은 자켓 + 우산' },
    { day: '수', date: '12/31', icon: 'cloud', high: 19, low: 15, precipitation: '20%', outfit: '니트 + 긴바지' },
    { day: '목', date: '01/01', icon: 'sun', high: 22, low: 17, precipitation: '5%', outfit: '가디건 + 긴바지' },
    { day: '금', date: '01/02', icon: 'cloud', high: 20, low: 15, precipitation: '10%', outfit: '트렌치 + 니트' },
    { day: '토', date: '01/03', icon: 'cloud', high: 16, low: 8, precipitation: '15%', outfit: '코트 + 목도리' },
    { day: '일', date: '01/04', icon: 'sun', high: 14, low: 2, precipitation: '0%', outfit: '패딩 + 장갑' },
  ];

  const iconMap: { [key: string]: any } = {
    thunder: { Component: Zap, color: 'text-yellow-500 fill-yellow-400' },
    rain: { Component: CloudRain, color: 'text-blue-400' },
    cloud: { Component: Cloud, color: 'text-gray-400' },
    sun: { Component: Sun, color: 'text-orange-400' },
  };

  return (
    <main className="max-w-[1440px] mx-auto px-20 py-8">
      {/* Header Card */}
      <div className="bg-white rounded-[28px] p-8 shadow-lg shadow-blue-100/50 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-[#1F2A37] hover:bg-[#F6FAFF] px-4 py-2 rounded-xl transition-all">
              <span className="text-lg font-semibold">서울</span>
              <ChevronDown className="w-5 h-5" />
            </button>
            <span className="text-[#6B7280]">12/29–01/04</span>
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2 bg-[#F6FAFF] p-1 rounded-2xl">
            <button
              onClick={() => setViewMode('list')}
              className={`px-6 py-2 rounded-xl transition-all ${
                viewMode === 'list'
                  ? 'bg-white text-[#1F2A37] font-semibold shadow-sm'
                  : 'text-[#6B7280]'
              }`}
            >
              리스트 보기
            </button>
            <button
              onClick={() => setViewMode('graph')}
              className={`px-6 py-2 rounded-xl transition-all ${
                viewMode === 'graph'
                  ? 'bg-white text-[#1F2A37] font-semibold shadow-sm'
                  : 'text-[#6B7280]'
              }`}
            >
              그래프 보기
            </button>
          </div>
        </div>

        {/* Summary Chips */}
        <div className="flex gap-3">
          <div className="bg-[#F0F8FF] px-4 py-2 rounded-2xl border border-[#E6EEF9]">
            <span className="text-sm text-[#1F2A37]">비 오는 날 2일</span>
          </div>
          <div className="bg-[#FFF5F8] px-4 py-2 rounded-2xl border border-[#FFE8F0]">
            <span className="text-sm text-[#1F2A37]">큰 일교차 3일</span>
          </div>
          <div className="bg-[#F6FAFF] px-4 py-2 rounded-2xl border border-[#E6EEF9]">
            <span className="text-sm text-[#1F2A37]">최저 -2°C</span>
          </div>
        </div>
      </div>

      {/* Weekly List */}
      <div className="bg-white rounded-[28px] p-8 shadow-lg shadow-blue-100/50 mb-8">
        <h3 className="text-[#1F2A37] mb-6">주간 날씨 상세</h3>
        
        <div className="space-y-4">
          {weeklyData.map((day, index) => {
            const iconConfig = iconMap[day.icon];
            const Icon = iconConfig.Component;
            
            return (
              <div
                key={index}
                className="flex items-center gap-6 p-5 bg-[#F6FAFF] rounded-3xl hover:bg-[#EAF2FF] transition-all group"
              >
                {/* Day & Date */}
                <div className="w-20 flex-shrink-0">
                  <div className="text-lg font-semibold text-[#1F2A37]">{day.day}요일</div>
                  <div className="text-sm text-[#6B7280]">{day.date}</div>
                </div>

                {/* Weather Icon */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <Icon className={`w-8 h-8 ${iconConfig.color}`} />
                </div>

                {/* Temperature */}
                <div className="flex items-baseline gap-2 w-32 flex-shrink-0">
                  <span className="text-2xl font-bold text-[#1F2A37]">{day.high}°</span>
                  <span className="text-lg text-[#6B7280]">/ {day.low}°</span>
                </div>

                {/* Precipitation */}
                <div className="w-24 flex-shrink-0">
                  <div className="bg-[#EAF2FF] px-3 py-2 rounded-full inline-block">
                    <span className="text-sm text-[#6B7280]">강수 {day.precipitation}</span>
                  </div>
                </div>

                {/* Outfit Recommendation */}
                <div className="flex-1 min-w-0">
                  <span className="text-[#1F2A37]">{day.outfit}</span>
                </div>

                {/* Mini Penguin Icon Placeholder */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFF5F8] to-[#FFE8F0] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🐧</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Outfit Summary Section */}
      <div className="mb-8">
        <h3 className="text-[#1F2A37] mb-4">일주일 옷차림 요약</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] rounded-3xl p-6 shadow-lg shadow-blue-100/30">
            <div className="text-4xl mb-3">🧥</div>
            <h4 className="text-[#1F2A37] mb-2">가디건 / 자켓</h4>
            <p className="text-[#6B7280]">3일</p>
          </div>

          <div className="bg-gradient-to-br from-[#FFF5F8] to-[#FFE8F0] rounded-3xl p-6 shadow-lg shadow-pink-100/30">
            <div className="text-4xl mb-3">🧥</div>
            <h4 className="text-[#1F2A37] mb-2">코트 / 패딩</h4>
            <p className="text-[#6B7280]">2일</p>
          </div>

          <div className="bg-gradient-to-br from-[#F6FAFF] to-[#EAF2FF] rounded-3xl p-6 shadow-lg shadow-blue-100/30">
            <div className="text-4xl mb-3">☔</div>
            <h4 className="text-[#1F2A37] mb-2">우산 필요한 날</h4>
            <p className="text-[#6B7280]">2일</p>
          </div>
        </div>
      </div>

      {/* Graph Preview (Placeholder) */}
      <div className="bg-white rounded-[28px] p-8 shadow-lg shadow-blue-100/50">
        <h3 className="text-[#1F2A37] mb-6">온도 변화 그래프 (미리보기)</h3>
        <div className="h-48 bg-gradient-to-br from-[#F6FAFF] to-[#EAF2FF] rounded-3xl flex items-center justify-center">
          <p className="text-[#6B7280]">그래프 보기 모드에서 확인하세요</p>
        </div>
      </div>
    </main>
  );
}
