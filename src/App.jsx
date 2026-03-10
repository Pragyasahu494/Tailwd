import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Tailwind from "./Tailwind";
import NewsApp from "./NewsApp";
import WeatherApp from "./WeatherApp";
import Docs from "./Docs";
import CodeTwo from "./CodeTwo";
import CodeThree from "./CodeThree";
import Home from "./Home";
import Converter from './Converter';
import Myntra from "./Myntra";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tailwind" element={<Tailwind />} />
        <Route path="/news" element={<NewsApp />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/web" element={<CodeThree />} />
        <Route path="/contact" element={<CodeTwo />} />
        <Route path='/converter' element={<Converter/>} />
        <Route path='/myntra' element={<Myntra/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
