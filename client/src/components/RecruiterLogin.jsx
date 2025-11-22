import React, { useState } from 'react'
import { assets } from '../assets/assets';

const RecruiterLogin = () => {

    const [state,setState]=useState('Login')
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const [image,setImage]=useState(false);

    const [isNextDataSubmitted,setIsNextDataSubmitted]=useState(false);


  return (
    <div  className='absolute top-0 right-0 left-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <form action="">
            <h1>Recruiter {state}</h1>
            <p>Welcome back ! Please Signin to continue</p>
            <>
            <div>
                <img src={assets.person_icon} alt="" />
                <input onChange={e=>setName(e.target.value)} value={name} type="text" placeholder='Company Name'required />
            </div>
            <div>
                <img src={assets.email_icon} alt="" />
                <input onChange={e=>setEmail(e.target.value)} value={email} type="email" placeholder='EmailId'required />
            </div>
            <div>
                <img src={assets.lock_icon} alt="" />
                <input onChange={e=>setPassword(e.target.value)} value={password} type="password" placeholder='Password'required />
            </div>
            
            </>
            <button>
                {state==="Login"?'login':'Create Account'}
            </button>
        </form>
      
    </div>
  )
}

export default RecruiterLogin
