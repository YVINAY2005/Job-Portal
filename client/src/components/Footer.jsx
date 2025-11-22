import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img src={assets.logo} alt="Logo" className="w-30 h-30 mb-4" />
          <p className="text-sm text-gray-400">Your gateway to dream jobs</p>
          <p className="text-sm text-gray-400 mt-2">Copyright @Vinay</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6 cursor-pointer hover:opacity-75" />
            <img src={assets.twitter_icon} alt="Twitter" className="w-6 h-6 cursor-pointer hover:opacity-75" />
            <img src={assets.instagram_icon} alt="Instagram" className="w-6 h-6 cursor-pointer hover:opacity-75" />
          </div>
          <p className="text-sm text-gray-400">Stay connected for the latest job updates</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2023 Job Portal. All rights reserved. | Designed by Vinay</p>
      </div>
    </div>
  )
}

export default Footer
