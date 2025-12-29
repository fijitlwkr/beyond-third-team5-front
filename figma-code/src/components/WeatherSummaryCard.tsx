import { ChevronDown, Wind, Droplets, CloudRain, ShoppingBag, Glasses, Coffee } from 'lucide-react';

export function WeatherSummaryCard() {
  const weatherStats = [
    { icon: Wind, label: '바람', value: '3m/s' },
    { icon: Droplets, label: '습도', value: '40%' },
    { icon: CloudRain, label: '강수', value: '10%' },
  ];

  const outfitItems = [
    { icon: ShoppingBag, label: '가디건' },
    { icon: ShoppingBag, label: '자켓' },
    { icon: Coffee, label: '긴바지' },
    { icon: Glasses, label: '운동화' },
  ];

  return (
    <div className="bg-white rounded-[28px] p-8 shadow-lg shadow-blue-100/50 h-full flex flex-col min-h-[480px]">
      {/* Location & Date */}
      <div className="flex items-center justify-between mb-6">
        <button className="flex items-center gap-2 text-[#1F2A37] hover:bg-[#F6FAFF] px-4 py-2 rounded-xl transition-all">
          <span className="text-lg font-semibold">서울</span>
          <ChevronDown className="w-5 h-5" />
        </button>
        <span className="text-[#6B7280]">12월 29일 (월)</span>
      </div>

      {/* Temperature */}
      <div className="mb-8">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-6xl font-bold text-[#1F2A37]">18°C</span>
        </div>
        <span className="text-[#6B7280]">체감 16°C</span>
      </div>

      {/* Weather Stats */}
      <div className="flex gap-3 mb-8">
        {weatherStats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-2 bg-[#F6FAFF] px-4 py-2 rounded-2xl border border-[#E6EEF9]"
          >
            <stat.icon className="w-4 h-4 text-[#6B7280]" />
            <span className="text-sm text-[#6B7280]">{stat.label}</span>
            <span className="text-sm font-semibold text-[#1F2A37]">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Today's Recommendation */}
      <div className="mt-auto">
        <h3 className="text-[#1F2A37] mb-4">오늘의 추천</h3>
        
        {/* Outfit Icons */}
        <div className="flex gap-3 mb-4">
          {outfitItems.map((item, index) => (
            <div
              key={index}
              className="w-14 h-14 bg-gradient-to-br from-[#FFF5F8] to-[#FFE8F0] rounded-2xl flex items-center justify-center shadow-sm"
            >
              <item.icon className="w-6 h-6 text-[#FF9BCB]" />
            </div>
          ))}
        </div>

        <p className="text-[#6B7280] mb-6">가디건 + 긴바지 + 얇은 자켓</p>

        {/* CTA Button */}
        <button className="w-full bg-[#FF9BCB] text-white py-4 rounded-2xl hover:bg-[#FF7FB3] transition-all shadow-lg shadow-pink-200/50 font-semibold">
          오늘 기록하기
        </button>
      </div>
    </div>
  );
}
