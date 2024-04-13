import React, { useRef, useState } from 'react';
import Header from './Header';
import { isEmailPasswordNameValid, isEmailPasswordValid } from '../utils/validation';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const [ErrorMessage,setErrorMessage] = useState(null);
    const [isSignInForm, setIsSignInForm] = useState(true);
   const email = useRef(null);
   const password = useRef(null);
   const name = useRef(null);
    const handleFormSubmit = () =>{
        //check validations
        let message;
if (!isSignInForm) {
    message = isEmailPasswordNameValid(email.current.value, password.current.value, name?.current?.value);
} else {
    message = isEmailPasswordValid(email.current.value, password.current.value);
}
setErrorMessage(message);
if(message) return;

if(!isSignInForm){
    //Sign-Up Logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)

  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode + "-" + errorMessage);
  });

}
else{
    //Sign-In Logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
}



    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
      };
  return (
    <div>
      <Header />
      <div className='absolute inset-0 flex justify-center items-center'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='background-logo' />
        <form onSubmit={(e)=> e.preventDefault()}  className='w-3/12 bg-black flex flex-col p-8 opacity-85 absolute text-white'>
          <h1 className='text-white text-2xl font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (<input ref={name} className='my-2 p-4 bg-gray-700' type='text' placeholder='Enter your name' />)}
          <input ref={email} className='my-2 p-4 bg-gray-700' type='text' placeholder='Enter your email' />
          <input ref={password} className='my-2 p-4 bg-gray-700' type='password' placeholder='password' />
          <p className='text-red-500 font-semibold text-lg text-center'>{ErrorMessage}</p>
          <button className='my-2 bg-red-700 p-4 rounded' onClick={handleFormSubmit}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
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
