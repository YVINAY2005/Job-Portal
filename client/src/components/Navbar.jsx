import React, { useState } from 'react'
import { assets } from '../assets/assets'
import {useClerk, UserButton, useUser} from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {openSignIn}=useClerk();
    const {user}=useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img className="h-10 w-auto" src={assets.logo} alt="Logo" />
          </div>
          <div className="flex items-center">
            <button onClick={toggleMenu} className="md:hidden p-2 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <span className="block w-5 h-0.5 bg-gray-600 mb-1"></span>
              <span className="block w-5 h-0.5 bg-gray-600 mb-1"></span>
              <span className="block w-5 h-0.5 bg-gray-600"></span>
            </button>
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="bg-blue-50 px-3 py-2 rounded-md flex items-center space-x-4">
                  <Link to="/applications" className="text-gray-700 hover:text-gray-900 font-medium">
                    Applied Jobs
                  </Link>
                  <p className="text-gray-700 font-medium">Hi, {user.firstName} {user.lastName}</p>
                  <UserButton />
                </div>
              ) : (
                <>
                  <button
                    onClick={e => openSignIn()}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Recruiter Login
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          {user ? (
            <div className="bg-blue-50 px-3 py-2 rounded-md">
              <Link
                to="/applications"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Applied Jobs
              </Link>
              <div className="px-3 py-2 text-base font-medium text-gray-700">
                Hi, {user.firstName} {user.lastName}
              </div>
              <div className="px-3 py-2">
                <UserButton />
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={() => {
                  openSignIn();
                  toggleMenu();
                }}
                className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-left"
              >
                Recruiter Login
              </button>
              <button
                onClick={toggleMenu}
                className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-left"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
