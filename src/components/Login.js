import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
   
    const [isSignInForm, setIsSignInForm] = useState(true);
   
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
      };
  return (
    <div>
      <Header />
      <div className='absolute inset-0 flex justify-center items-center'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='background-logo' />
        <form className='w-3/12 bg-black flex flex-col p-8 opacity-80 absolute text-white'>
          <h1 className='text-white text-2xl font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (<input className='my-2 p-4 bg-gray-700' type='text' placeholder='Enter your name' />)}
          <input className='my-2 p-4 bg-gray-700' type='text' placeholder='Enter your email' />
          <input className='my-2 p-4 bg-gray-700' type='password' placeholder='password' />
          <button className='my-2 bg-red-700 p-4 rounded'>Sign in</button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
