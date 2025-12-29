import { Search } from 'lucide-react';

interface NavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  simple?: boolean;
}

export function Navigation({ activeTab = '오늘의 날씨', onTabChange, simple = false }: NavigationProps) {
  const tabs = ['오늘의 날씨', '이번주 날씨', '국내 기온지도', '달력 기록'];

  if (simple) {
    return (
      <nav className="w-full h-[72px] bg-white/80 backdrop-blur-sm border-b border-[#E6EEF9] sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-20 h-full flex items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-[20px] font-semibold text-[#1F2A37]">자란날씨</h1>
          </div>
          <button className="text-[#6B7280] hover:text-[#1F2A37]" onClick={() => onTabChange?.('오늘의 날씨')}>
            오늘의 날씨로 돌아가기
          </button>
        </div>
      </nav>
    );
  }

  return (
    <nav className="w-full h-[72px] bg-white/80 backdrop-blur-sm border-b border-[#E6EEF9] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-20 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-[20px] font-semibold text-[#1F2A37]">자란날씨</h1>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange?.(tab)}
              className={`px-4 py-2 rounded-full transition-all ${
                tab === activeTab
                  ? 'bg-[#EAF2FF] text-[#1F2A37] font-semibold'
                  : 'text-[#6B7280] hover:bg-[#F6FAFF]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search & Login */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
            <input
              type="text"
              placeholder="도시 검색"
              className="w-[200px] pl-10 pr-4 py-2 bg-[#F6FAFF] border border-[#E6EEF9] rounded-full placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#EAF2FF]"
            />
          </div>
          <button 
            onClick={() => onTabChange?.('로그인')}
            className="px-5 py-2 rounded-full bg-white border border-[#E6EEF9] text-[#1F2A37] hover:bg-[#F6FAFF] transition-all"
          >
            로그인
          </button>
        </div>
      </div>
    </nav>
  );
}