import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { TodayWeather } from './components/pages/TodayWeather';
import { WeeklyWeather } from './components/pages/WeeklyWeather';
import { CalendarRecord } from './components/pages/CalendarRecord';
import { TemperatureMap } from './components/pages/TemperatureMap';
import { LoginPage } from './components/pages/LoginPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('오늘의 날씨');

  const renderPage = () => {
    switch (currentPage) {
      case '오늘의 날씨':
        return <TodayWeather />;
      case '이번주 날씨':
        return <WeeklyWeather />;
      case '국내 기온지도':
        return <TemperatureMap />;
      case '달력 기록':
        return <CalendarRecord />;
      case '로그인':
        return <LoginPage onNavigate={setCurrentPage} />;
      default:
        return <TodayWeather />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6FAFF] to-[#FFFFFF]">
      {currentPage !== '로그인' && (
        <Navigation activeTab={currentPage} onTabChange={setCurrentPage} />
      )}
      {currentPage === '로그인' && (
        <Navigation simple activeTab={currentPage} onTabChange={setCurrentPage} />
      )}
      {renderPage()}
    </div>
  );
}