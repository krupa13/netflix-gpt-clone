import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img 
            src='https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg'
            alt='logo'/>
      </div>
      <form className='w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-70'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {
          !isSignInForm && (
          <input 
            className='p-4 my-4 w-full bg-gray-700'
            type='text'
            placeholder='Full Name'
          />
        )}
        <input 
          className='p-4 my-4 w-full bg-gray-700'
          type='text'
          placeholder='Email Address'
        />
        <input 
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700'
        />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
          Sign In
        </button>
        <p>New to Netflix? 
          <span 
            className='text-red-700 mr-[15px] cursor-pointer font-bold'
            onClick={handleSignUp}>
            Sign Up Now
          </span>
        </p>
      </form>
    </div>
  )
}

export default Login
