import { VscAccount } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";
import { VscArchive } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";
function Myntra() {
    return (
        <>
            <header>
             <div className="w-full h-13 bg-white text-black border-2 border-gray-200 rounded-none shadow-md">
                <ul className="flex justify-center items-center h-full gap-8 text-xl font-bold uppercase ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vbc44FhAydU_jZkvB_Ap8uq_50BMzo_fsg&s" alt="myntra" className="pl-1 w-15 h-10 object-cover gap-7"/>
                    <li className="pl-10">Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Home</li>
                    <li>Beuty</li>
                    <li>GenZ</li>
                    <li className="pr-6">Studio</li>
                    <li className="flex justify-center items-center bg-gray-100 border pr-8 border-gray-300 rounded-md hover:bg-white px-3 py-2 w-100 h-10">
                    <VscSearch className="text-2xl text-gray-500 mr-1" />
                    <input type="text" placeholder="Search for products, brands and more" className="text-[14px] bg-transparent outline-none w-full hover:bg-white"/></li>
                    {/* <li className="relative">
                    <VscSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
                    <input type="text" placeholder="Search for products, brands and more"
                    className="w-80 pl-10 pr-4 py-2 text-xs border border-gray-300 bg-gray-100 rounded-md focus:outline-none hover:bg-white"/></li> */}
                    {/* <li className="capitalize flex flex-col items-left text-xs font-medium"><VscSearch className="text-xl mb-1" /><input type="text" placeholder="search for product,brands and more" className="w-120 border-1 border-gray-300 text-s bg-gray-100 hover:bg-white p-3"/></li> */}
                    {/* <li className="capitalize">Profile</li> */}
                    {/* <li className="capitalize">Login</li>
                    <li className="capitalize flex flex-col items-center text-xs font-medium hover:border-b-2 hover:border-blue-500 pb-1 hover:text-pink-500 cursor-pointer">
                        <VscAccount className="text-xl mb-1" />Profile</li> */}
                    <li className="relative group capitalize flex flex-col items-center text-xs font-medium hover:border-b-2 hover:border-blue-500 pb-3 hover:text-pink-500 cursor-pointer">
                    <VscAccount className="text-xl mb-1" />Profile
    <div className="absolute top-14 hidden group-hover:block bg-white w-60 shadow-lg border border-gray-200 p-4 text-sm normal-case text-black">

        <p className="font-bold">Welcome</p>
        <p className="text-gray-500 text-xs mb-3">
            To access account and manage orders
        </p>

        <button className="border border-blue-500 text-blue-500 px-4 py-1 text-xs font-bold mb-3">
            LOGIN / SIGNUP
        </button>
        <hr className="mb-3"/>
        <ul className="space-y-2">
            <li>Orders</li>
            <li>Wishlist</li>
            <li>Gift Cards</li>
            <li>Contact Us</li>
            <li>Myntra Insider</li>
        </ul>
        </div>
            </li>
                    <li className="capitalize flex flex-col items-center text-xs font-medium hover:text-pink-500 cursor-pointer">
                        <VscHeart className="text-xl mb-1" />Wishlist</li>
                    <li className="capitalize flex flex-col items-center text-xs font-medium hover:text-pink-500 cursor-pointer">
                        <VscArchive className="text-xl mb-1" />Bags</li>
                </ul>
            </div>
            </header>
<div className="w-full bg-gray-100 py-6 flex justify-center">
  <div className="grid grid-cols-2 gap-0 max-w-[2200px]">
  <a href="https://www.myntra.com/shop/men" className="relative block">
  <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
    alt="For Him"
    className="rounded-lg shadow-md hover:scale-105 transition cursor-pointer"/>
  <button className="absolute inset-0 m-auto h-12 w-44 flex items-center justify-center gap-2 bg-white text-black text-lg font-bold rounded-md shadow-md hover:bg-black hover:text-white transition">
    FOR HIM <VscArrowLeft />
  </button>
</a>
       <a href="https://www.myntra.com/shop/women" className="relative block">
      <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
        alt="FOR HER"
        className="rounded-lg shadow-md hover:scale-105 transition cursor-pointer"/>
        <button className="absolute inset-0 m-auto h-12 w-44 flex items-center justify-center gap-2 bg-white text-black text-lg font-bold rounded-md shadow-md hover:bg-black hover:text-white transition">
          FOR HER <VscArrowRight />
        </button>
    </a>

  </div>
</div>
        </>
    )
}
export default Myntra;