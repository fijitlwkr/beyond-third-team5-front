import { HeroCard } from '../HeroCard';
import { WeatherSummaryCard } from '../WeatherSummaryCard';
import { HourlyForecastCard } from '../HourlyForecastCard';
import { AlertBanner } from '../AlertBanner';
import { PreviewCard } from '../PreviewCard';

export function TodayWeather() {
  const penguinImage = 'https://images.unsplash.com/photo-1638641569078-bc67cfbcc972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGVuZ3VpbnxlbnwxfHx8fDE3NjY5OTA5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080';

  return (
    <main className="max-w-[1440px] mx-auto px-20 py-8">
      {/* Hero Section - 2 Column Grid */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <HeroCard penguinImage={penguinImage} />
        <WeatherSummaryCard />
      </div>

      {/* Hourly Forecast Section */}
      <div className="mb-8">
        <HourlyForecastCard />
      </div>

      {/* Alert Banner */}
      <div className="mb-8">
        <AlertBanner />
      </div>

      {/* Bottom Preview Cards - 3 Column Grid */}
      <div className="grid grid-cols-3 gap-6">
        <PreviewCard type="tomorrow" />
        <PreviewCard type="week" />
        <PreviewCard type="map" />
      </div>
    </main>
  );
}
