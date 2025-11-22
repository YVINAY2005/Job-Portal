import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className="bg-blue-50 py-8 px-4 shadow-lg rounded-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Download Our App for Better Experience
          </h2>
          <p className="text-gray-600 text-lg">
            Get the latest jobs and apply directly from your mobile device.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#" className="inline-block">
            <img src={assets.play_store} alt="Download on Google Play" className="h-12 hover:scale-105 transition-transform" />
          </a>
          <a href="#" className="inline-block">
            <img src={assets.app_store} alt="Download on App Store" className="h-12 hover:scale-105 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppDownload
