import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { assets, jobsApplied } from '../assets/assets';
import moment from 'moment/moment';

const Applications = () => {
  const [isEdit,setIsEdit]=useState(false);
  const [Resume,setResume]=useState(null);
  return (
   <>
   <Navbar/>
   <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
    <h2 className='text-2xl font-bold text-gray-800 mb-6'>Your Resume</h2>
    <div className='bg-white p-6 rounded-lg shadow-md mb-8'>
      {isEdit?
      <>
        <label className='flex items-center gap-4 cursor-pointer' htmlFor="resumeUpload">
          <p className='text-gray-700 font-medium'>Selected Resume</p>
          <input id='resumeUpload' onChange={e=>setResume(e.target.files[0])} accept='application/pdf' type="file" hidden />
          <img className='w-8 h-8' src={assets.profile_upload_icon} alt="" />
        </label>
        <button onClick={e=>setIsEdit(false)} className='mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition'>Save</button>
      </>:
      <div className='flex gap-4'>
        <a className='bg-blue-100 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-200 transition' href="">
          Resume
        </a>
        <button onClick={()=>setIsEdit(true)} className='text-gray-500 border border-gray-500 rounded-lg px-6 py-3 hover:bg-gray-50 transition'>
          Edit
        </button>
        </div>}
    </div>

    <h2 className='text-2xl font-bold text-gray-800 mb-6'>Job Applied</h2>
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      <table className='w-full'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='px-6 py-4 text-left text-gray-700 font-semibold'>Company</th>
            <th className='px-6 py-4 text-left text-gray-700 font-semibold'>Job Title</th>
            <th className='px-6 py-4 text-left text-gray-700 font-semibold'>Location</th>
            <th className='px-6 py-4 text-left text-gray-700 font-semibold'>Date</th>
            <th className='px-6 py-4 text-left text-gray-700 font-semibold'>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobsApplied.map((job,index)=>true ?(
            <tr key={index} className='border-t border-gray-200 hover:bg-gray-50'>
              <td className='px-6 py-4 flex items-center gap-3'>
                <img className='w-8 h-8 rounded' src={job.logo} alt="" />
                <span className='text-gray-800'>{job.companyName}</span>
              </td>
              <td className='px-6 py-4 text-gray-800'>{job.title}</td>
              <td className='px-6 py-4 text-gray-600'>{job.location}</td>
              <td className='px-6 py-4 text-gray-600'>{moment(job.date).format('ll')}</td>
              <td className='px-6 py-4'>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  job.status === 'Accepted' ? 'bg-green-100 text-green-800' :
                  job.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {job.status}
                </span>
              </td>
            </tr>
          ):(null))}
        </tbody>
      </table>
    </div>
   </div>
   </>
  )
}

export default Applications
