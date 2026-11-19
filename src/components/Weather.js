
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quickCities = ["Pune", "Bhusawal", "Jalgaon", "Mumbai"];

function Weather() {
  const [city, setCity] = useState("Pune");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("metric");

  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchWeather = async (targetCity = city, targetUnit = unit) => {
    const query = targetCity.trim();
    if (!query) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          query
        )}&appid=${API_KEY}&units=${targetUnit}`
      );

      if (!response.ok) {
        throw new Error(
          response.status === 401
            ? "Invalid API key configuration"
            : `City "${query}" not found`
        );
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("Pune", unit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city, unit);
  };

  const handleQuickCity = (selectedCity) => {
    setCity(selectedCity);
    fetchWeather(selectedCity, unit);
  };

  const toggleUnit = () => {
    const nextUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(nextUnit);

    if (weather?.name) {
      fetchWeather(weather.name, nextUnit);
    }
  };

  const tempSymbol = unit === "metric" ? "°C" : "°F";

  const windSpeedFormatted = weather
    ? unit === "metric"
      ? `${(weather.wind.speed * 3.6).toFixed(1)} km/h`
      : `${weather.wind.speed.toFixed(1)} mph`
    : "";

  return (
    <div className="relative h-[100dvh] w-full flex items-center justify-center px-3 sm:px-6 overflow-hidden bg-[#080b14] text-white">

      {/* BACKGROUND LIGHTING */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-150px] left-[10%] w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-150px] right-[10%] w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* WEATHER DASHBOARD */}
      <motion.div
        className="relative z-10 w-full max-w-md max-h-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-2xl shadow-2xl p-4 sm:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-semibold tracking-[0.25em] text-gray-400">
                LIVE TELEMETRY
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Weather{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Pulse
              </span>
            </h2>
          </div>

          <button
            type="button"
            onClick={toggleUnit}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-white/[0.06] border border-white/15 text-cyan-300 hover:bg-white/[0.12] transition"
          >
            {unit === "metric" ? "°C → °F" : "°F → °C"}
          </button>
        </div>

        {/* SEARCH */}
        <form onSubmit={handleSubmit} className="flex gap-2 mb-3">

          <input
            type="text"
            placeholder="Search any city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="min-w-0 flex-1 px-3 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-950 text-sm font-bold hover:brightness-110 active:scale-95 disabled:opacity-50 transition"
          >
            {loading ? "..." : "Search"}
          </button>

        </form>

        {/* QUICK CITIES */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[11px] text-gray-500">Quick:</span>

          {quickCities.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleQuickCity(item)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium border transition ${
                weather?.name?.toLowerCase() === item.toLowerCase()
                  ? "bg-cyan-400/15 border-cyan-400/50 text-cyan-300"
                  : "bg-white/[0.03] border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* LOADING */}
        {loading && (
          <div className="py-8 text-center">
            <div className="w-7 h-7 mx-auto mb-2 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
            <p className="text-xs text-gray-400">
              Syncing atmospheric data...
            </p>
          </div>
        )}

        {/* ERROR */}
        {error && !loading && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/25 text-center">
            <p className="text-xs text-red-400">{error}</p>
          </div>
        )}

        {/* WEATHER DATA */}
        <AnimatePresence mode="wait">
          {weather && !loading && (
            <motion.div
              key={`${weather.name}-${unit}`}
              className="space-y-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >

              {/* MAIN WEATHER */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 p-4 sm:p-5">

                <div className="flex items-center justify-between">

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-2xl sm:text-3xl font-bold">
                        {weather.name}
                      </h3>

                      <span className="px-2 py-0.5 rounded-md text-[10px] bg-white/10 text-gray-300">
                        {weather.sys?.country}
                      </span>
                    </div>

                    <p className="text-xs text-cyan-300 capitalize mt-1">
                      {weather.weather[0].description}
                    </p>

                    <p className="text-5xl font-extrabold tracking-tight mt-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {Math.round(weather.main.temp)}
                      {tempSymbol}
                    </p>
                  </div>

                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                    <img
                      className="w-20 h-20 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt={weather.weather[0].description}
                    />
                  </div>

                </div>
              </div>

              {/* WEATHER METRICS */}
              <div className="grid grid-cols-2 gap-2.5">

                <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">
                    Feels Like
                  </p>
                  <p className="text-lg font-bold mt-1">
                    {Math.round(weather.main.feels_like)}
                    {tempSymbol}
                  </p>
                </div>

                <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">
                    Humidity
                  </p>
                  <p className="text-lg font-bold text-cyan-400 mt-1">
                    {weather.main.humidity}%
                  </p>
                </div>

                <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">
                    Wind Speed
                  </p>
                  <p className="text-lg font-bold text-purple-400 mt-1">
                    {windSpeedFormatted}
                  </p>
                </div>

                <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">
                    Pressure
                  </p>
                  <p className="text-lg font-bold text-gray-200 mt-1">
                    {weather.main.pressure} hPa
                  </p>
                </div>

              </div>

              <p className="text-center text-[10px] text-gray-600 pt-1">
                Weather data powered by OpenWeather
              </p>

            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}

export default Weather;
