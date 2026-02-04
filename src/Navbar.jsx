import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <header>
        <div id='one' className="w-full h-20 bg-[#2162b0] text-white">
          <ul className='flex justify-center items-center h-full gap-[20px]'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/docs">Docs</Link>
            </li>
            <li>
              <Link to="/content">Content</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

      </header>

    </>
  )
}

export default Navbar