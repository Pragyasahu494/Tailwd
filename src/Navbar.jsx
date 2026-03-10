import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <header>
        <div id='one' className="w-full h-15 bg-[#052853] text-white">
          <ul className='flex justify-center items-center h-full gap-5 text-[20px]'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">NEWS</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/tailwind">Tailwind</Link>
            </li>
            <li>
              <Link to="/converter">Converter</Link>
            </li>
            <li>
              <Link to="/myntra">Myntra</Link>
            </li>
          </ul>
        </div>

      </header>

    </>
  )
}

export default Navbar