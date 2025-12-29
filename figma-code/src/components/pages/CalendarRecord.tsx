import { ChevronLeft, ChevronRight, Plus, Trash2, Upload } from 'lucide-react';
import { useState } from 'react';

export function CalendarRecord() {
  const [selectedDate, setSelectedDate] = useState(29);
  const [selectedOutfits, setSelectedOutfits] = useState<string[]>(['가디건', '긴바지']);
  const [satisfaction, setSatisfaction] = useState<'cold' | 'good' | 'hot'>('good');

  const outfitOptions = ['가디건', '자켓', '코트', '패딩', '반팔', '긴팔', '긴바지', '반바지', '치마', '운동화', '부츠'];

  const recordedDates = [
    { date: 15, temp: 12, icon: '🧥' },
    { date: 20, temp: 18, icon: '👕' },
    { date: 25, temp: -3, icon: '🧥' },
    { date: 29, temp: 18, icon: '⚡' },
  ];

  const recentRecords = [
    { date: '12월 25일', temp: '-3°C', note: '너무 추웠어요. 패딩 필수!' },
    { date: '12월 20일', temp: '18°C', note: '딱 좋은 날씨. 가디건 하나면 충분' },
    { date: '12월 15일', temp: '12°C', note: '자켓 입고 나갔는데 괜찮았음' },
  ];

  const toggleOutfit = (outfit: string) => {
    setSelectedOutfits(prev =>
      prev.includes(outfit)
        ? prev.filter(o => o !== outfit)
        : [...prev, outfit]
    );
  };

  // Calendar days
  const daysInMonth = 31;
  const startDay = 0; // 0 = Sunday
  const calendarDays = Array.from({ length: startDay }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  return (
    <main className="max-w-[1440px] mx-auto px-20 py-8">
      {/* Summary Card */}
      <div className="bg-white rounded-[28px] p-8 shadow-lg shadow-blue-100/50 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[#1F2A37]">이번 달 요약</h3>
          <button className="px-6 py-3 bg-[#6AA9FF] text-white rounded-2xl hover:bg-[#5B98EF] transition-all shadow-lg shadow-blue-200/50 font-semibold flex items-center gap-2">
            <Plus className="w-5 h-5" />
            오늘 기록 추가
          </button>
        </div>

        <div className="flex gap-4">
          <div className="bg-[#F0F8FF] px-5 py-3 rounded-2xl border border-[#E6EEF9]">
            <span className="text-sm text-[#6B7280]">기록</span>
            <span className="ml-2 font-semibold text-[#1F2A37]">12일</span>
          </div>
          <div className="bg-[#FFF5F8] px-5 py-3 rounded-2xl border border-[#FFE8F0]">
            <span className="text-sm text-[#6B7280]">가장 많이 입은 옷</span>
            <span className="ml-2 font-semibold text-[#1F2A37]">패딩</span>
          </div>
          <div className="bg-[#F6FAFF] px-5 py-3 rounded-2xl border border-[#E6EEF9]">
            <span className="text-sm text-[#6B7280]">가장 추웠던 날</span>
            <span className="ml-2 font-semibold text-[#1F2A37]">-3°C</span>
          </div>
        </div>
      </div>

      {/* Main Layout: Calendar & Record Panel */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Left - Calendar */}
        <div className="bg-white rounded-[28px] p-8 shadow-lg shadow-blue-100/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#1F2A37]">2025년 12월</h3>
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-[#F6FAFF] rounded-xl hover:bg-[#EAF2FF] transition-all flex items-center justify-center">
                <ChevronLeft className="w-5 h-5 text-[#6B7280]" />
              </button>
              <button className="w-10 h-10 bg-[#F6FAFF] rounded-xl hover:bg-[#EAF2FF] transition-all flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-[#6B7280]" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
              <div key={day} className="text-center text-sm text-[#6B7280] font-medium py-2">
                {day}
              </div>
            ))}
            
            {calendarDays.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} />;
              }

              const hasRecord = recordedDates.find(r => r.date === day);
              const isSelected = day === selectedDate;

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={`aspect-square rounded-2xl p-2 transition-all relative ${
                    isSelected
                      ? 'bg-[#EAF2FF] text-[#1F2A37] font-semibold shadow-md'
                      : hasRecord
                      ? 'bg-[#F6FAFF] text-[#1F2A37] hover:bg-[#EAF2FF]'
                      : 'text-[#6B7280] hover:bg-[#F6FAFF]'
                  }`}
                >
                  <div className="text-sm">{day}</div>
                  {hasRecord && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                      <div className="w-1 h-1 bg-[#6AA9FF] rounded-full" />
                      <span className="text-xs">{hasRecord.icon}</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right - Record Panel */}
        <div className="bg-white rounded-[28px] p-8 shadow-lg shadow-blue-100/50">
          <h3 className="text-[#1F2A37] mb-6">12월 29일 기록</h3>

          {/* Auto Weather Info */}
          <div className="bg-[#F6FAFF] rounded-2xl p-4 mb-6 border border-[#E6EEF9]">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="text-[#1F2A37] font-semibold">그날 기온 18°C</div>
                <div className="text-sm text-[#6B7280]">체감 16°C · 번개</div>
              </div>
            </div>
          </div>

          {/* Outfit Selection */}
          <div className="mb-6">
            <label className="block text-[#1F2A37] mb-3">입었던 옷</label>
            <div className="flex flex-wrap gap-2">
              {outfitOptions.map(outfit => (
                <button
                  key={outfit}
                  onClick={() => toggleOutfit(outfit)}
                  className={`px-4 py-2 rounded-xl transition-all ${
                    selectedOutfits.includes(outfit)
                      ? 'bg-[#6AA9FF] text-white'
                      : 'bg-[#F6FAFF] text-[#6B7280] hover:bg-[#EAF2FF]'
                  }`}
                >
                  {outfit}
                </button>
              ))}
            </div>
          </div>

          {/* Satisfaction */}
          <div className="mb-6">
            <label className="block text-[#1F2A37] mb-3">만족도</label>
            <div className="flex gap-3">
              <button
                onClick={() => setSatisfaction('cold')}
                className={`flex-1 py-3 rounded-2xl transition-all ${
                  satisfaction === 'cold'
                    ? 'bg-[#6AA9FF] text-white'
                    : 'bg-[#F6FAFF] text-[#6B7280] hover:bg-[#EAF2FF]'
                }`}
              >
                ❄️ 추웠어요
              </button>
              <button
                onClick={() => setSatisfaction('good')}
                className={`flex-1 py-3 rounded-2xl transition-all ${
                  satisfaction === 'good'
                    ? 'bg-[#6AA9FF] text-white'
                    : 'bg-[#F6FAFF] text-[#6B7280] hover:bg-[#EAF2FF]'
                }`}
              >
                👍 딱 좋아요
              </button>
              <button
                onClick={() => setSatisfaction('hot')}
                className={`flex-1 py-3 rounded-2xl transition-all ${
                  satisfaction === 'hot'
                    ? 'bg-[#6AA9FF] text-white'
                    : 'bg-[#F6FAFF] text-[#6B7280] hover:bg-[#EAF2FF]'
                }`}
              >
                🔥 더웠어요
              </button>
            </div>
          </div>

          {/* Memo */}
          <div className="mb-6">
            <label className="block text-[#1F2A37] mb-3">메모</label>
            <textarea
              className="w-full h-24 px-4 py-3 bg-[#F6FAFF] border border-[#E6EEF9] rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#6AA9FF] placeholder:text-[#6B7280]"
              placeholder="오늘의 날씨와 옷차림에 대한 메모를 남겨보세요"
            />
          </div>

          {/* Photo Upload */}
          <div className="mb-6">
            <label className="block text-[#1F2A37] mb-3">사진</label>
            <div className="border-2 border-dashed border-[#E6EEF9] rounded-2xl p-8 text-center hover:border-[#6AA9FF] transition-all cursor-pointer">
              <Upload className="w-8 h-8 text-[#6B7280] mx-auto mb-2" />
              <p className="text-sm text-[#6B7280]">사진을 업로드하세요</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 bg-[#6AA9FF] text-white rounded-2xl hover:bg-[#5B98EF] transition-all shadow-lg shadow-blue-200/50 font-semibold">
              저장하기
            </button>
            <button className="py-3 bg-white border-2 border-[#E6EEF9] text-[#6B7280] rounded-2xl hover:bg-[#F6FAFF] transition-all font-semibold flex items-center justify-center gap-2">
              <Trash2 className="w-4 h-4" />
              삭제
            </button>
          </div>
        </div>
      </div>

      {/* Recent Records List */}
      <div className="bg-white rounded-[28px] p-8 shadow-lg shadow-blue-100/50">
        <h3 className="text-[#1F2A37] mb-6">내 기록 리스트</h3>
        <div className="space-y-4">
          {recentRecords.map((record, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-5 bg-[#F6FAFF] rounded-3xl hover:bg-[#EAF2FF] transition-all cursor-pointer"
            >
              <div className="w-16 flex-shrink-0">
                <div className="text-sm font-semibold text-[#1F2A37]">{record.date}</div>
              </div>
              <div className="w-20 flex-shrink-0">
                <div className="text-lg font-bold text-[#1F2A37]">{record.temp}</div>
              </div>
              <div className="flex-1">
                <p className="text-[#6B7280]">{record.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
