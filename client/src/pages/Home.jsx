import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  const { jobs } = useContext(AppContext);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  return (
    <div>
      <Navbar />
      <Hero />
      <JobListing />
      <AppDownload />
      <Footer />
    </div>
  )
}

export default Home
