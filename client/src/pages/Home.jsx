import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import AppDownload from '../components/AppDownload'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/>
        <Hero/>
        <JobListing/>
        <AppDownload/>

    </div>
  )
}

export default Home
