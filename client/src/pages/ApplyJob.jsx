import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets, jobsData } from '../assets/assets';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import kconvert from 'k-convert';
import moment from 'moment';
import JobCard from '../components/JobCard';
import Footer from '../components/Footer';
const ApplyJob = () => {
  const {id}=useParams();

  const [jobData,setJobData]=React.useState(null);
  const { jobs }= useContext(AppContext);

  const fetchJobs=async()=>{
    const data=jobs.filter(job=>job._id===id);
    if(data.length!==0){
      setJobData(data[0]);
      console.log(data[0]);
      
    }

  }
  useEffect(() => {
    
    if (jobs.length>0){
      fetchJobs();
    }
  }, [id, jobs]);


  return jobData?(
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col lg:flex-row gap-6 p-6">
      {/* Left Section: Job Details and Description */}
      <div className="flex-1 border border-gray-300 shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-start shadow-lg mb-6">
          <div className="flex-1">
            <div className="mb-2">
              <img src={jobData.companyId.image} alt="" className="w-12 h-12 object-cover rounded" />
            </div>
            <h1 className="text-2xl font-bold mb-2">{jobData.title}</h1>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-1">
                <img src={assets.suitcase_icon} alt="" className="w-6 h-6" />
                <span className="text-gray-700">{jobData.companyId.name}</span>
              </div>
              <div className="flex items-center space-x-3 p-1">
                <img src={assets.location_icon} alt="" className="w-6 h-6" />
                <span className="text-gray-700">{jobData.location}</span>
              </div>
              <div className="flex items-center space-x-3 p-1">
                <img src={assets.person_icon} alt="" className="w-6 h-6" />
                <span className="text-gray-700">{jobData.level}</span>
              </div>
              <div className="flex items-center space-x-3 p-1">
                <img src={assets.money_icon} alt="" className="w-6 h-6" />
                <span className="text-gray-700">CTC: {kconvert.convertTo(jobData.salary)}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Apply now</button>
            <p className="text-gray-500">Posted {moment(jobData.date).fromNow()}</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Job Description</h2>
          <div dangerouslySetInnerHTML={{__html: jobData.description}}></div>
        </div>
      </div>
      {/* Right Section: More Jobs Cards */}
      <div className="lg:w-1/3 border border-gray-300 shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">More jobs from {jobData.companyId.name}</h2>
        <div className="space-y-4">
          {jobs.filter(job=>job.companyId._id===jobData.companyId._id && job._id!==jobData._id).filter(job => true).slice(0,4).map((job,index)=><JobCard key={index} job={job} />)}
        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer/>
    </>
    
  ):(<Loading/>)
}

export default ApplyJob
