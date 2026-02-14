import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Tailwind from "./Tailwind";
import NewsApp from "./NewsApp";
import WeatherApp from "./WeatherApp";
import Docs from "./Docs";
import CodeOne from "./CodeOne";
import CodeTwo from "./CodeTwo";
import CodeThree from "./CodeThree";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="/tailwind" element={<Tailwind />} />
        <Route path="/news" element={<NewsApp />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/service" element={<CodeOne />} />
        <Route path="/web" element={<CodeThree />} />
        <Route path="/contact" element={<CodeTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
