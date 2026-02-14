import React from "react";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      
      {/* Header */}
      <header className="flex justify-end items-center p-4 space-x-4 text-sm">
        <a href="#" className="hover:underline">Gmail</a>
        <a href="#" className="hover:underline">Images</a>
        <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
          Sign in
        </button>
      </header>

      {/* Main */}
      <main className="flex flex-col items-center justify-center flex-grow">
        
        {/* Logo */}
        <h1 className="text-6xl font-bold mb-8">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </h1>

        {/* Search Box */}
        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="Search Google or type a URL"
            className="w-full px-5 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button className="bg-gray-100 px-6 py-2 rounded hover:shadow transition">
            Google Search
          </button>
          <button className="bg-gray-100 px-6 py-2 rounded hover:shadow transition">
            I'm Feeling Lucky
          </button>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-sm text-gray-600 p-4">
        <div className="flex justify-between flex-wrap">
          <div className="space-x-4">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Advertising</a>
            <a href="#" className="hover:underline">Business</a>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Settings</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
