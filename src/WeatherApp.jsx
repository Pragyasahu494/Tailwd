import React, { useEffect, useState } from "react";

const cityName = [
  "Pune", "Mumbai", "Goa", "Delhi", "Nagpur", "Kashmir", "Shimla", "Dehradun",
  "Chennai", "Bangalore", "Hyderabad", "Raipur","Meghalaya", "Jaipur", "Yavatmal",
  "Kolkata", "Jaipur", "Lucknow","Nashik","Mawsynram", "Srinagar", "Mussoorie",
  "Indore", "Bhopal", "Ahmedabad", "Surat", "Ooty", "Munnar", "Coorg", "Darjeeling", 
  "Gangtok", "Rishikesh", "Haridwar", "Udaipur", "Jodhpur", "Amritsar", "Varanasi", 
  "Agra", "Mathura", "Vrindavan","Nainital",, "Kedarnath", "Badrinath", "Gulmarg",
  "Pahalgam", "Sonamarg", "Leh", "Ladakh", "Mahabaleshwar", "Lonavala", "Khandala", 
  "Matheran", "Alibaug", "Dapoli", "Ratnagiri",
];

const WeatherApp = () => {

  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [city, setCity] = useState("Pune");

  const ApiKey = "3ba4a6ce599c41f59ea133847261602";
  const weatherApi = `https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${city}&aqi=no`;

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

  const getBackgroundImage = () => {
    if (!data) return "/sunshine.jpeg";

    const condition = data.current.condition.text.toLowerCase();
    const temperature = data.current.temp_c;

    if (temperature <= 0) {
    return "/snow.jpg";
    }

    if (condition.includes("sunny") || condition.includes("clear")) {
      return "/sunshine.jpeg";
    }

    if (condition.includes("snow") ||condition.includes("freezing") ||condition.includes("sleet") ||condition.includes("ice") ||condition.includes("blizzard") ) {
      return "/snow.jpg";
    }

    if (condition.includes("rain") || condition.includes("drizzle")) {
      return "/Rainy.jpg";
    }

    if (condition.includes("cloud") || condition.includes("overcast")) {
      return "/cloudy.jpg";
    }

    if (condition.includes("mist") || condition.includes("fog") || condition.includes("haze")) {
      return "/mist.jpg";
    }

    return "/sunshine.jpeg";
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative transition-all duration-700"
      style={{
        backgroundImage: `url(${getBackgroundImage()})`
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative bg-white/20 backdrop-blur-lg w-full max-w-md rounded-2xl shadow-2xl p-8 text-white">

        <h1 className="text-3xl font-bold mb-4 text-center bg-amber-50">
          <span className="text-violet-800">W</span>
          <span className="text-indigo-800">E</span>
          <span className="text-blue-800">A</span>
          <span className="text-green-500">T</span>
          <span className="text-yellow-500">H</span>
          <span className="text-orange-500">E</span>
          <span className="text-red-500">R</span>
        </h1>

        <select
          className="w-full p-3 rounded-lg mb-6 bg-white/30 text-black"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          {[...cityName].sort().map((cName, i) => (

          // {cityName.map((cName, i) => (
            <option key={i} value={cName}>
              {cName}
            </option>
          ))}
        </select>

        {loader ? (
          <h2 className="text-center text-lg font-bold">
            Loading...
          </h2>
        ) : (
          data && (
            <>
              <div className="text-center mb-4">
                <h2 className="text-xl font-semibold">
                  {data.location.name}, {data.location.region}
                </h2>
                <p>{data.location.country}</p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={data.current.condition.icon}
                  alt={data.current.condition.text}
                  className="w-20 h-20"
                />
                <p className="text-5xl font-bold">
                  {data.current.temp_c}°C
                </p>
                <p className="text-lg">
                  {data.current.condition.text}
                </p>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
