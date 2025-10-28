import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const Hero = () => {
  const {setIsSearched,setSearchFilter}=useContext(AppContext);
  const titleRef=useRef(null);
  const locationRef=useRef(null);

  const onSearch=()=>{
    setSearchFilter({
      title:titleRef.current.value,
      location:locationRef.current.value
    })
    setIsSearched(true);
    console.log({
      title:titleRef.current.value,
      location:locationRef.current.value
    });
  
    

  }
  return (
    <section className="bg-white py-20 fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 fade-in">
          Over 10,000+ jobs to apply
        </h2>
        <p className="text-xl text-gray-600 mb-8 fade-in-delay-1">
          Your next Big Career Move Starts Right here - Explore
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-full md:w-auto fade-in-delay-2">
            <img src={assets.search_icon} alt="Search" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search for the jobs"
              className="bg-transparent outline-none flex-1"
              ref={titleRef}
            />
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-full md:w-auto fade-in-delay-3">
            <img src={assets.location_icon} alt="Location" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Location"
              className="bg-transparent outline-none flex-1"
              ref={locationRef}
            />
          </div>
          <button onClick={onSearch} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto fade-in-delay-4">
            Search
          </button>
        </div>
      </div>
      <div className="mt-8 bg-gray-50 p-4 rounded-lg shadow-md fade-in-delay-5">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-12">
          <p className="text-gray-600 font-semibold">Trusted by leading companies:</p>
          <div className="flex flex-wrap items-center space-x-6 space-y-3 md:space-y-0">
            <img src={assets.microsoft_logo} alt="Microsoft" className="h-6 w-auto" />
            <img src={assets.accenture_logo} alt="Accenture" className="h-6 w-auto" />
            <img src={assets.walmart_logo} alt="Walmart" className="h-6 w-auto" />
            <img src={assets.samsung_logo} alt="Samsung" className="h-6 w-auto" />
            <img src={assets.amazon_logo} alt="Amazon" className="h-6 w-auto" />
            <img src={assets.adobe_logo} alt="Adobe" className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Hero
