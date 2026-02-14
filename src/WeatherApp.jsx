import React, { useEffect, useState } from "react";

const cityName = ["Pune", "Mumbai", "Goa", "Delhi", "Yavatmal"];

const WeatherApp = () => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [city, setCity] = useState("Pune");

  const weatherApi = `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}&aqi=no`;

  const getWeather = async () => {
    try {
      setLoader(true);
      const response = await fetch(weatherApi);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  // 🎯 Background Logic
  const condition = data?.current?.condition?.text?.toLowerCase() || "";
  const isDay = data?.current?.is_day === 1;

  let bgImage = "";

  if (condition.includes("rain")) {
    bgImage =
      "bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21')]";
  } else if (condition.includes("cloud")) {
    bgImage =
      "bg-[url('https://images.unsplash.com/photo-1499346030926-9a72daac6c63')]";
  } else if (condition.includes("snow")) {
    bgImage =
      "bg-[url('https://images.unsplash.com/photo-1608889175119-0b7f84fca2cc')]";
  } else if (condition.includes("fog") || condition.includes("mist")) {
    bgImage =
      "bg-[url('https://images.unsplash.com/photo-1482192596544-9eb780fc7f66')]";
  } else {
    bgImage =
      "bg-[url('https://images.unsplash.com/photo-1502082553048-f009c37129b9')]";
  }

  return (
    <div
      className={`min-h-screen bg-cover bg-center transition-all duration-500 ${bgImage} 
      ${isDay ? "text-black" : "bg-black text-white"}`}
    >
      <div className="backdrop-brightness-75 min-h-screen p-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">Weather App</h1>

        <select
          className="max-w-xl py-3 px-4 border rounded-lg mb-6"
          onChange={(e) => setCity(e.target.value)}
        >
          {cityName.map((cName, i) => (
            <option key={i} value={cName}>
              {cName}
            </option>
          ))}
        </select>

        {loader ? (
          <h1 className="text-2xl font-bold mt-10">Loading...</h1>
        ) : (
          data && (
            <div className="bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-lg text-center">
              <h2 className="text-2xl font-semibold">
                {data.location.name}, {data.location.region}
              </h2>

              <p className="text-lg">
                {new Date(data.current.last_updated).toLocaleString()}
              </p>

              <img
                src={data.current.condition.icon}
                alt={data.current.condition.text}
                className="mx-auto my-4"
              />

              <p className="text-xl font-bold">
                {data.current.temp_c}°C
              </p>

              <p>{data.current.condition.text}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
