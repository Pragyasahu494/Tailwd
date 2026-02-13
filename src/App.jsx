
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CodeOne from './CodeOne'
import Navbar from './Navbar'
import Docs from './Docs'
import CodeTwo from './CodeTwo'
import CodeThree from './CodeThree'
import NewsApp from './NewsApp'
import WeatherApp from './Weather'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/weather' element={<WeatherApp />} />
          <Route path='/' element={<CodeTwo />} />
          <Route path='/news' element={<NewsApp />} />
          <Route path='/docs' element={<Docs />} />
          
          <Route path='/service' element={<CodeOne />}>
            <Route path='web' element={<CodeThree />} />
          </Route>

          <Route path='/contact' element={<CodeOne />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
