import { Calendar, TrendingUp, MapPin } from 'lucide-react';

interface PreviewCardProps {
  type: 'tomorrow' | 'week' | 'map';
}

const cardConfig = {
  tomorrow: {
    title: '내일의 날씨',
    icon: Calendar,
    gradient: 'from-[#FFF5F8] to-[#FFE8F0]',
    iconColor: 'text-[#FF9BCB]',
    preview: '맑음 · 최고 20°C',
  },
  week: {
    title: '이번주 날씨',
    icon: TrendingUp,
    gradient: 'from-[#F0F8FF] to-[#E6F3FF]',
    iconColor: 'text-[#6BA3FF]',
    preview: '평균 18°C · 목요일 비',
  },
  map: {
    title: '국내 기온지도',
    icon: MapPin,
    gradient: 'from-[#F6FAFF] to-[#EAF2FF]',
    iconColor: 'text-[#5B8DEF]',
    preview: '서울 18°C · 부산 21°C',
  },
};

export function PreviewCard({ type }: PreviewCardProps) {
  const config = cardConfig[type];
  const Icon = config.icon;

  return (
    <div className={`bg-gradient-to-br ${config.gradient} rounded-3xl p-6 shadow-lg shadow-blue-100/30 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
          <Icon className={`w-6 h-6 ${config.iconColor}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-[#1F2A37] mb-1">{config.title}</h3>
          <p className="text-sm text-[#6B7280]">{config.preview}</p>
        </div>
      </div>
      
      {/* Mini Preview Visualization */}
      <div className="mt-4 flex gap-2">
        <div className="flex-1 h-2 bg-white/50 rounded-full overflow-hidden">
          <div className="h-full bg-white/80 rounded-full" style={{ width: '60%' }} />
        </div>
        <div className="flex-1 h-2 bg-white/50 rounded-full overflow-hidden">
          <div className="h-full bg-white/80 rounded-full" style={{ width: '40%' }} />
        </div>
        <div className="flex-1 h-2 bg-white/50 rounded-full overflow-hidden">
          <div className="h-full bg-white/80 rounded-full" style={{ width: '80%' }} />
        </div>
      </div>
    </div>
  );
}
