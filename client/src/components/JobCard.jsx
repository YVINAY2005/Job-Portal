import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const JobCard = ({job, delay = 0}) => {
  const { saveJob, unsaveJob, isJobSaved } = useContext(AppContext);
  const saved = isJobSaved(job._id);

  const handleSaveToggle = () => {
    if (saved) {
      unsaveJob(job._id);
    } else {
      saveJob(job._id);
    }
  };

  return (
    <div className={`bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 fade-in-delay-${delay + 1}`}>
        <div className="mb-3">
            <img src={assets.company_icon} alt="Company Icon" className="w-8 h-8 mb-2" />
            <h4 className="text-lg font-semibold text-gray-800 mb-1">{job.title}</h4>
            <div className="flex items-center gap-4 text-gray-600 text-sm">
                <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded ">{job.location}</span>
                <span className="bg-red-50 border border-blue-200 px-4 py-1.5 rounded  ">{job.level}</span>
            </div>
        </div>
        <p className="text-gray-700 mb-3 text-sm" dangerouslySetInnerHTML={{__html: job.description.slice(0,120)}}></p>
        <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors">Apply Now</button>
            <button className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 transition-colors">Learn more</button>
            <button
              onClick={handleSaveToggle}
              className={`px-3 py-1 rounded text-sm transition-colors ${saved ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {saved ? 'Saved' : 'Save'}
            </button>
        </div>
    </div>
  )
}

export default JobCard
