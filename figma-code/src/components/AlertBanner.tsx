import { AlertCircle } from 'lucide-react';

export function AlertBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-[#FFF5F8] via-[#F0F8FF] to-[#FFF5F8] rounded-3xl p-5 shadow-lg shadow-pink-100/30 border border-[#FFE8F0]">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#FF9BCB] to-[#FFB8D9] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-200/50">
          <AlertCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-[#1F2A37] font-medium">
            오늘 번개가 쳐요. 외출 시 우산 챙겨요!
          </p>
        </div>
      </div>
    </div>
  );
}
