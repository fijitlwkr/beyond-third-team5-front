import { useState } from 'react';

interface LoginPageProps {
  onNavigate?: (tab: string) => void;
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6FAFF] to-[#FFFFFF] flex items-center justify-center px-20 py-12">
      {/* Main Container */}
      <div className="w-full max-w-[1100px] grid grid-cols-2 gap-8">
        {/* Left - Illustration */}
        <div className="bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] rounded-[28px] p-12 shadow-lg shadow-blue-100/50 flex flex-col justify-center items-center relative overflow-hidden">
          {/* Background Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/40 rounded-full blur-2xl" />

          {/* Penguin Image */}
          <div className="relative z-10 mb-8">
            <img
              src="https://images.unsplash.com/photo-1638641569078-bc67cfbcc972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGVuZ3VpbnxlbnwxfHx8fDE3NjY5OTA5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="펭귄 캐릭터"
              className="w-80 h-80 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Copy */}
          <div className="relative z-10 text-center">
            <h2 className="text-[#1F2A37] text-2xl mb-3">
              기록이 쌓일수록,<br />나만의 옷차림이 똑똑해져요.
            </h2>
            <p className="text-[#6B7280]">
              날씨와 체감 온도를 기록하고<br />나에게 딱 맞는 옷차림을 찾아보세요
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-white rounded-[28px] p-12 shadow-lg shadow-blue-100/50">
          {/* Tabs */}
          <div className="flex gap-2 bg-[#F6FAFF] p-1 rounded-2xl mb-8">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-3 rounded-xl transition-all ${
                mode === 'login'
                  ? 'bg-white text-[#1F2A37] font-semibold shadow-sm'
                  : 'text-[#6B7280]'
              }`}
            >
              로그인
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`flex-1 py-3 rounded-xl transition-all ${
                mode === 'signup'
                  ? 'bg-white text-[#1F2A37] font-semibold shadow-sm'
                  : 'text-[#6B7280]'
              }`}
            >
              회원가입
            </button>
          </div>

          {/* Login Form */}
          {mode === 'login' && (
            <div>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-[#1F2A37] mb-2">이메일</label>
                  <input
                    type="email"
                    placeholder="이메일을 입력하세요"
                    className="w-full px-4 py-3 bg-[#F6FAFF] border border-[#E6EEF9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6AA9FF] placeholder:text-[#6B7280]"
                  />
                </div>
                <div>
                  <label className="block text-[#1F2A37] mb-2">비밀번호</label>
                  <input
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    className="w-full px-4 py-3 bg-[#F6FAFF] border border-[#E6EEF9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6AA9FF] placeholder:text-[#6B7280]"
                  />
                </div>
              </div>

              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-5 h-5 rounded border-[#E6EEF9] text-[#6AA9FF] focus:ring-[#6AA9FF]"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-[#6B7280]">
                  로그인 상태 유지
                </label>
              </div>

              <button className="w-full bg-[#6AA9FF] text-white py-4 rounded-2xl hover:bg-[#5B98EF] transition-all shadow-lg shadow-blue-200/50 font-semibold mb-6">
                로그인
              </button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#E6EEF9]" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-[#6B7280]">또는</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full bg-white border-2 border-[#E6EEF9] text-[#1F2A37] py-3 rounded-2xl hover:bg-[#F6FAFF] transition-all font-medium flex items-center justify-center gap-2">
                  <div className="w-5 h-5 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full" />
                  Google로 계속하기
                </button>
                <button className="w-full bg-[#FEE500] text-[#1F2A37] py-3 rounded-2xl hover:bg-[#FDDC00] transition-all font-medium flex items-center justify-center gap-2">
                  <div className="w-5 h-5 bg-[#1F2A37] rounded-full" />
                  Kakao로 계속하기
                </button>
              </div>

              <div className="text-center">
                <button className="text-sm text-[#6AA9FF] hover:underline">
                  비밀번호를 잊으셨나요?
                </button>
              </div>
            </div>
          )}

          {/* Signup Form */}
          {mode === 'signup' && (
            <div>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-[#1F2A37] mb-2">닉네임</label>
                  <input
                    type="text"
                    placeholder="닉네임을 입력하세요"
                    className="w-full px-4 py-3 bg-[#F6FAFF] border border-[#E6EEF9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6AA9FF] placeholder:text-[#6B7280]"
                  />
                </div>
                <div>
                  <label className="block text-[#1F2A37] mb-2">이메일</label>
                  <input
                    type="email"
                    placeholder="이메일을 입력하세요"
                    className="w-full px-4 py-3 bg-[#F6FAFF] border border-[#E6EEF9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6AA9FF] placeholder:text-[#6B7280]"
                  />
                </div>
                <div>
                  <label className="block text-[#1F2A37] mb-2">비밀번호</label>
                  <input
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    className="w-full px-4 py-3 bg-[#F6FAFF] border border-[#E6EEF9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6AA9FF] placeholder:text-[#6B7280]"
                  />
                </div>
                <div>
                  <label className="block text-[#1F2A37] mb-2">비밀번호 확인</label>
                  <input
                    type="password"
                    placeholder="비밀번호를 다시 입력하세요"
                    className="w-full px-4 py-3 bg-[#F6FAFF] border border-[#E6EEF9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6AA9FF] placeholder:text-[#6B7280]"
                  />
                </div>
              </div>

              <button className="w-full bg-[#FF9BCB] text-white py-4 rounded-2xl hover:bg-[#FF7FB3] transition-all shadow-lg shadow-pink-200/50 font-semibold mb-6">
                회원가입
              </button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#E6EEF9]" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-[#6B7280]">또는</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-white border-2 border-[#E6EEF9] text-[#1F2A37] py-3 rounded-2xl hover:bg-[#F6FAFF] transition-all font-medium flex items-center justify-center gap-2">
                  <div className="w-5 h-5 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full" />
                  Google로 계속하기
                </button>
                <button className="w-full bg-[#FEE500] text-[#1F2A37] py-3 rounded-2xl hover:bg-[#FDDC00] transition-all font-medium flex items-center justify-center gap-2">
                  <div className="w-5 h-5 bg-[#1F2A37] rounded-full" />
                  Kakao로 계속하기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
