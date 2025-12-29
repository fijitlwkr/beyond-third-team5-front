import { Cloud, CloudRain, Zap, Sun } from 'lucide-react';

interface HourlyForecast {
  time: string;
  icon: 'cloud' | 'rain' | 'thunder' | 'sun';
  temp: string;
  precipitation: string;
}

const forecasts: HourlyForecast[] = [
  { time: '8AM', icon: 'cloud', temp: '16°', precipitation: '5%' },
  { time: '12PM', icon: 'sun', temp: '18°', precipitation: '0%' },
  { time: '4PM', icon: 'thunder', temp: '17°', precipitation: '40%' },
  { time: '7PM', icon: 'rain', temp: '15°', precipitation: '60%' },
  { time: '10PM', icon: 'cloud', temp: '14°', precipitation: '20%' },
];

const iconMap = {
  cloud: Cloud,
  rain: CloudRain,
  thunder: Zap,
  sun: Sun,
};

export function HourlyForecastCard() {
  return (
    <div className="w-full">
      <h3 className="text-[#1F2A37] mb-4">시간대별 예보</h3>
      
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {forecasts.map((forecast, index) => {
          const Icon = iconMap[forecast.icon];
          
          return (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-3xl p-5 shadow-lg shadow-blue-100/30 min-w-[140px] hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center gap-3">
                <span className="text-[#6B7280] font-medium">{forecast.time}</span>
                
                <div className="w-12 h-12 bg-gradient-to-br from-[#F6FAFF] to-[#EAF2FF] rounded-2xl flex items-center justify-center">
                  <Icon className={`w-6 h-6 ${
                    forecast.icon === 'thunder' ? 'text-yellow-500 fill-yellow-400' :
                    forecast.icon === 'rain' ? 'text-blue-400' :
                    forecast.icon === 'sun' ? 'text-orange-400' :
                    'text-gray-400'
                  }`} />
                </div>
                
                <span className="text-2xl font-semibold text-[#1F2A37]">{forecast.temp}</span>
                
                <div className="bg-[#EAF2FF] px-3 py-1 rounded-full">
                  <span className="text-xs text-[#6B7280]">{forecast.precipitation}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
