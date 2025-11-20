import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className="bg-blue-50 py-8 px-4 shadow-lg rounded-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Download mobile app for better experience</h1>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:scale-105 transition-transform">
              <img src={assets.play_store} alt="Play Store" className="w-32 h-10 rounded-lg shadow-md" />
            </a>
            <a href="#" className="hover:scale-105 transition-transform">
              <img src={assets.app_store} alt="App Store" className="w-32 h-10 rounded-lg shadow-md" />
            </a>
          </div>
        </div>
        <img src={assets.app_main_img} alt="App Main Image" className="hidden md:block w-full max-w-xs md:max-w-xs rounded-lg shadow-lg" />
      </div>
    </div>
  )
}

export default AppDownload
