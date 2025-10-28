import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { assets, JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard';

const JobListing = () => {
    const {isSearched,searchFilter,setSearchFilter,jobs}=useContext(AppContext);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [currentPage,setCurrentPage]=useState(1)
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
                  <input type="checkbox" name='' id={`category-${index}`} className="mr-2" />
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
                  <input type="checkbox" name='' id={`location-${index}`} className="mr-2" />
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
          {jobs.map((job,index)=>(
            <JobCard key={index} job={job} delay={index % 5} />
          ))}
        </div>

        {/* Pagination */}
        {
          jobs.length >0 &&(
            <div>
              <a href="#job-list">
                <img src={assets.left_arrow_icon} alt="" />
              </a>
      {Array.from({length:Math.ceil(jobs.length/6)}).map((_,index)=>(
                <a href="#job-list">
                  <button>{index+1}</button>
                </a>
              ))}
               <a href="#job-list">
                <img src={assets.right_arrow_icon} alt="" />
              </a>
            </div>
          )
        }
      </section>
    </div>
  )
}

export default JobListing;
