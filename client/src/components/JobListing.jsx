import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { assets, JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard';

const JobListing = () => {
    const {isSearched,searchFilter,setSearchFilter,jobs}=useContext(AppContext);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [currentPage,setCurrentPage]=useState(1)
    const [selectedCategories,setSelectedCategories]=useState([]);
    const [selectedLocations,setSelectedLocations]=useState([]);

    const [filteredJobs,setFilteredJobs]=useState(jobs);

    const totalPages = Math.ceil(filteredJobs.length / 6);
    const startIndex = (currentPage - 1) * 6;
    const currentJobs = filteredJobs.slice(startIndex, startIndex + 6);


    const handleCategoryChange = (category) => {
      setSelectedCategories(
        prev =>prev.includes(category)
          ? prev.filter(cat => cat !== category)
          : [...prev, category]
      )
    }

    const handleLocationChange = (location) => {
     setSelectedLocations(
        prev =>prev.includes(location)
          ? prev.filter(loc => loc !== location)
          : [...prev, location]
      )
    }

    useEffect(() => {
      const matchesCategory= job => selectedCategories.length === 0 || selectedCategories.includes(job.category);
      const matchesLocation= job => selectedLocations.length === 0 || selectedLocations.includes(job.location);
      const matchesFilter= job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());

      const matchesSearchLocation= job => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());
      const newFilteredJobs=jobs.slice().reverse().filter(job => matchesCategory(job) && matchesLocation(job) && matchesFilter(job) && matchesSearchLocation(job));
      setFilteredJobs(newFilteredJobs);
      setCurrentPage(1); // Reset to first page on filter change

    },[jobs, selectedCategories, selectedLocations, searchFilter]);


  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 min-h-screen fade-in-delay-1">
      {/* side Bar Filter */}
      <div className={`${isFiltersOpen ? 'block' : 'hidden'} md:block w-full md:w-1/4 bg-white p-3 rounded-lg shadow-md`}>
        <button onClick={() => setIsFiltersOpen(false)} className="md:hidden mb-4 px-4 py-2 bg-red-600 text-white rounded">Close Filters</button>
        {/* Search Filter From Hero Component*/ }
        {
            isSearched &&(searchFilter.title !=="" || searchFilter.location!=="")&&(
              <>
              <h3 className="text-lg font-semibold mb-4">Current Search</h3>
              <div className="space-y-2">
                {searchFilter.title &&(
                  <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {searchFilter.title}
                    <img src={assets.cross_icon} alt="Remove" className="ml-2 w-4 h-4 cursor-pointer" />
                  </span>
                )}
                {searchFilter.location &&(
                  <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {searchFilter.location}
                    <img onClick={e=>setSearchFilter(prev=>({...prev,location:""}))} src={assets.cross_icon} alt="Remove" className="ml-2 w-4 h-4 cursor-pointer" />
                  </span>
                )}
              </div>
              </>
            )
        }
        {/* Category Filter */}
        <div className="mt-6">
          <h4 className="text-md font-semibold mb-3">Search by Category</h4>
          <ul className="space-y-2">
            {
              JobCategories.map((category,index)=>(
                <li key={index} className="flex items-center">
                  <input type="checkbox" 
                   id={`category-${index}`} 
                   className="mr-2"
                   onChange={()=>handleCategoryChange(category)}
                   checked={selectedCategories.includes(category)} />
                  <label htmlFor={`category-${index}`} className="text-gray-700">{category}</label>
                </li>
              ))
            }
          </ul>
        </div>

        {/* Category Location */}
        <div className="mt-6">
          <h4 className="text-md font-semibold mb-3">Search by Location</h4>
          <ul className="space-y-2">
            {
              JobLocations.map((location,index)=>(
                <li key={index} className="flex items-center">
                  <input type="checkbox" 
                  id={`location-${index}`} 
                  className="mr-2"
                  onChange={()=>handleLocationChange(location)}
                   checked={selectedLocations.includes(location)} />
                  <label htmlFor={`location-${index}`} className="text-gray-700">{location}</label>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      {/* Job Listing */}
      <section className="w-full md:w-3/4">
        <button onClick={() => setIsFiltersOpen(true)} className={`${isFiltersOpen ? 'hidden' : 'block'} md:hidden mb-4 px-4 py-2 bg-blue-600 text-white rounded`}>Show Filters</button>
        <h3 className="text-2xl font-bold mb-2">Latest Jobs</h3>
        <p className="text-gray-600 mb-6">Get your desired job from top Companies</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<<<<<<< HEAD
          {currentJobs.map((job,index)=>(
            <JobCard key={ job._id} job={job}  />
=======
          {jobs.slice((currentPage-1)*6,currentPage*6).map((job,index)=>(
            <JobCard key={index} job={job} delay={index % 5} />
>>>>>>> 374fa398bba0b5c43c8f5211555fa3fe7a07713b
          ))}
        </div>

        {/* Pagination */}
        {
<<<<<<< HEAD
          filteredJobs.length >0 &&(
            <div className="flex items-center justify-center gap-2 mt-8">
              <a href="#job-list" className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition">
                <img onClick={()=> setCurrentPage(Math.max(currentPage-1,1))} src={assets.left_arrow_icon} alt="" />
              </a>
      {Array.from({length:Math.ceil(filteredJobs.length/6)}).map((_,index)=>(
                <a key={index} href="#job-list">
                  <button onClick={()=> setCurrentPage(index+1)} className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">{index+1}</button>
                </a>
              ))}
               <a href="#job-list" className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition">
                <img onClick={()=> setCurrentPage(Math.min(currentPage+1,Math.ceil(filteredJobs.length/6)))} src={assets.right_arrow_icon} alt="" />
=======
          jobs.length >0 &&(
            <div className="flex justify-center items-center gap-2 mt-8">
              <a href="#job-list" className="p-2 hover:bg-gray-100 rounded transition-colors">
                <img onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))} src={assets.left_arrow_icon} alt="Previous" className="w-6 h-6 cursor-pointer" />
              </a>
      {Array.from({length:Math.ceil(jobs.length/6)}).map((_,index)=>(
                <a href="#job-list" key={index}>
                  <button onClick={()=>setCurrentPage(index+1)} className={`px-3 py-2 rounded transition-colors ${currentPage ===index+1 ?'bg-blue-500 text-white':'text-gray-500 hover:bg-gray-200'}`}>{index+1}</button>
                </a>
              ))}
               <a href="#job-list" className="p-2 hover:bg-gray-100 rounded transition-colors">
                <img onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(jobs.length / 6)))} src={assets.right_arrow_icon} alt="Next" className="w-6 h-6 cursor-pointer" />
>>>>>>> 374fa398bba0b5c43c8f5211555fa3fe7a07713b
              </a>
            </div>
          )
        }
      </section>
    </div>
  )
}

export default JobListing;
