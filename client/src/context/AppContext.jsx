import React, { createContext, useEffect, useState } from 'react'
import { jobsData } from '../assets/assets';

export const AppContext=createContext();

export const AppContextProvider=(props)=>{
    const [searchFilter,setSearchFilter]=useState({
        title:"",
        location:""
    });
    const [isSearched,setIsSearched]=useState(false);
    const [jobs ,setJobs]=useState([]);
    const [savedJobs, setSavedJobs] = useState([]);

    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

    // Function to fetch jobs
    const fetchJobs=async()=>{
        setJobs(jobsData)

    }

    // Function to save a job
    const saveJob = (jobId) => {
        if (!savedJobs.includes(jobId)) {
            setSavedJobs(prev => [...prev, jobId]);
        }
    };

    // Function to unsave a job
    const unsaveJob = (jobId) => {
        setSavedJobs(prev => prev.filter(id => id !== jobId));
    };

    // Helper to check if job is saved
    const isJobSaved = (jobId) => savedJobs.includes(jobId);

    useEffect(()=>{
        fetchJobs();

    },[])



    const value={
        searchFilter,setSearchFilter,
        isSearched,setIsSearched,
        jobs ,setJobs,
        savedJobs, saveJob, unsaveJob, isJobSaved,
        showRecruiterLogin, setShowRecruiterLogin
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
  