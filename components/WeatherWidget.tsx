"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Wind, Droplets } from "lucide-react";

type WeatherData = {
  windSpeed: number;
  temp: number;
};

// Mogadishu, Somalia coordinates
const LAT = 2.0469;
const LON = 45.3182;

function getJumpCondition(windSpeed: number) {
  if (windSpeed < 15) {
    return {
      label: "Good jump conditions",
      ok: true,
    };
  }

  if (windSpeed < 25) {
    return {
      label: "Marginal — check with us",
      ok: false,
    };
  }

  return {
    label: "Jumps likely grounded today",
    ok: false,
  };
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,wind_speed_10m&wind_speed_unit=kmh`
        );

        if (!res.ok) {
          throw new Error("Weather fetch failed");
        }

        const data = await res.json();

        setWeather({
          windSpeed: Math.round(data.current.wind_speed_10m),
          temp: Math.round(data.current.temperature_2m),
        });
      } catch {
        setError(true);
      }
    }

    fetchWeather();
  }, []);

  // Fail silently if weather cannot be loaded
  if (error) {
    return null;
  }

  // Loading state
  if (!weather) {
    return (
      <div className="rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-white/60 font-[family-name:var(--font-ibm-plex)] animate-pulse">
        Checking conditions…
      </div>
    );
  }

  const condition = getJumpCondition(weather.windSpeed);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-2 text-sm font-[family-name:var(--font-ibm-plex)] text-white"
    >
      <span
        className={`h-2 w-2 rounded-full ${
          condition.ok ? "bg-green-400" : "bg-signal"
        }`}
      />

      <span>{condition.label}</span>

      <span className="flex items-center gap-1 text-white/70">
        <Wind size={14} />
        {weather.windSpeed} km/h
      </span>

      <span className="flex items-center gap-1 text-white/70">
        <Droplets size={14} />
        {weather.temp}°C
      </span>
    </motion.div>
  );
}