import { Zap } from 'lucide-react';

interface HeroCardProps {
  penguinImage: string;
}

export function HeroCard({ penguinImage }: HeroCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] rounded-[28px] p-8 overflow-hidden shadow-lg shadow-blue-100/50 h-full flex flex-col justify-between min-h-[480px]">
      {/* Background Cloud Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/40 rounded-full blur-2xl" />

      {/* Lightning Icons */}
      <div className="absolute top-12 right-16">
        <Zap className="w-8 h-8 text-yellow-400 fill-yellow-300" />
      </div>
      <div className="absolute top-24 right-32">
        <Zap className="w-6 h-6 text-yellow-400 fill-yellow-300 opacity-70" />
      </div>

      {/* Penguin Image */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="relative">
          <img
            src={penguinImage}
            alt="정전기 머리 펭귄"
            className="w-80 h-80 object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Speech Bubble */}
      <div className="relative z-10 mt-auto">
        <div className="bg-white rounded-3xl px-6 py-4 shadow-lg inline-block max-w-md">
          <p className="text-[#1F2A37] text-lg">
            오늘 번개가 쳐요! 우산 챙겨요! ⚡
          </p>
          {/* Triangle pointer */}
          <div className="absolute -top-2 left-12 w-4 h-4 bg-white transform rotate-45" />
        </div>
      </div>
    </div>
  );
}
