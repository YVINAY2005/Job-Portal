import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/>
        <Hero/>
        <JobListing/>

    </div>
  )
}

export default Home
