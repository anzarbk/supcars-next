"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
// import { GoogleLogin } from 'react-google-login';
import hero from '../../../public/assets/heros/hero-1.jpg' 
import Image from 'next/image';
import google from '../../../public/assets/social media icons/google.png';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()



  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };


  const handleLogin = () => {
    // Handle your registration logic here
    console.log('Login clicked with:', {  email, password });
  };

  // const responseGoogle = (response) => {
  //   // Handle the Google registration response
  //   console.log(response);
  // };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center w-full ">
        {/* Background Image */}
        <div className="w-full h-screen relative" >
          <Image src={hero} alt='hero'  fill={true}></Image>
        </div>

        {/* Registration Form */}
        <div className="absolute flex justify-center p-4 bg-white shadow-md rounded-md border-2 border-black">
        <div className='  flex flex-col items-center '>
          <h1 className="text-2xl font-bold mb-4"> Login Your Account</h1>

         
          {/* Email Field */}
          <input
            type="email"
            placeholder="Email"
              defaultValue={email}
              
            // onChange={handleEmailChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded-md"
          />

          {/* Password Field */}
          <input
            type="password"
            placeholder="Password"
              defaultValue={password}
            // onChange={handlePasswordChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded-md"
          />

          
          {/* Register Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-primary mb-4 text-white p-2 rounded-md hover:bg-black focus:outline-none focus:shadow-outline"
          >
            Login
            </button>
            <button type="button"
              // onClick={() => signIn('google', { callbackUrl: '/' })}
                className="flex gap-4 justify-center bg-black text-white rounded-md w-full  p-2 border border-slate-950">
          <Image src={google} alt={''} width={24} height={24} />
          Login with google
            </button>
            <button
            onClick={() => router.push('/register')}
              className="my-4 text-center text-gray-500">
           or <u>Register</u>
        </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;