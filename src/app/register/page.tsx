"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import hero from '../../../public/assets/heros/hero-1.jpg' 
import google from '../../../public/assets/social media icons/google.png';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [commonError, setCommonError] = useState('');
  const router = useRouter()


  // #################### ASSIGNING THE STATE
  
  const handleFirstNameChange = (e: any) => {
    setFirstNameError('')
    setCommonError('')
    setFirstName(e?.target.value);
  };

  const handleLastNameChange = (e:any) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmailError('')
    setCommonError('')
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPasswordError('')
    setCommonError('')
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPasswordError('')
    setCommonError('')
    setConfirmPassword(e.target.value);
  };

//#################  HANDLE THE REGISTER 

  const handleRegister = async () => {
    try {
    if (!firstName) {
      setFirstNameError("required !")
      return;
    }
    if (!email) {
      setEmailError("required !")
      return;
    }
    if (!password) {
      setPasswordError("required !")
      return
    }
    if (!confirmPassword) {
      setConfirmPasswordError("required !")
      return
    }
    if (password !== confirmPassword) {
      setCommonError("password isnt match !")
      return
    }
    if (!firstName || !email || !password || !confirmPassword) {
      setCommonError("please fill the fields !")
      return
    }
    const userData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    console.log(userData);
    
      const Response = await axios.post('/api/register', userData);
      if (Response.status == 200) {
        router.push('/');
      }

    } catch (error:any) {
      setCommonError(error?.response?.data?.message);
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex w-full items-center justify-center">
        {/* Background Image */}
        <div className="w-full h-screen relative" ><Image src={hero} alt='hero'  objectFit="cover" className="h-screen"
          style={{
              width: '100%',
       
                }}></Image></div>

        {/* Registration Form */}
      <div className="absolute border-2 border-black flex items-center bg-white p-4 shadow-md rounded-md">
        <div className='my-auto max-w-96 flex flex-col items-center mx-auto'>
          <h1 className="text-2xl font-bold mb-4">Register Your Account</h1>
          <input
            type="text"
            placeholder="First Name"
              // value={firstName}
              defaultValue={firstName}
              onChange={handleFirstNameChange}
            className="w-full mb-2 mt-2 p-2 border border-gray-300 rounded-md"
              required />
            {firstNameError? <span className='text-red-600'>{firstNameError}</span>: ''}
          <input
            type="text"
            placeholder="Last Name"
              // value={lastName}
              defaultValue={lastName}
            onChange={handleLastNameChange}
            className="w-full mb-2 mt-2 p-2 border border-gray-300 rounded-md"
            />
            
          <input
            type="email"
            placeholder="Email"
              // value={email}
              defaultValue={email}
            onChange={handleEmailChange}
            className="w-full mb-2 mt-2 p-2 border border-gray-300 rounded-md"
              required />
            {emailError ? <span className='text-red-600 '>{emailError}</span>:''}
          <input
            type="password"
            placeholder="Password"
              // value={password}
              defaultValue={password}
            onChange={handlePasswordChange}
            className="w-full mb-2 mt-2 p-2 border border-gray-300 rounded-md"
              required />
            {passwordError ? <span className='text-red-600'>{passwordError}</span>:''}
          <input
            type="password"
            placeholder="Confirm Password"
              // value={confirmPassword}
              defaultValue={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="w-full mb-2 mt-2 p-2 border border-gray-300 rounded-md"
              required />
            {confirmPasswordError ?<span className='text-red-600 mb-2'>{confirmPasswordError}</span>:""}
            {commonError? <span className='text-red-600 mb-2'>{commonError}</span>:""}          
          <button onClick={handleRegister} className="w-full bg-primary text-white p-2 rounded-md hover:bg-black focus:outline-none focus:shadow-outline">Register</button>
           <button type="button"
              // onClick={() => signIn('google', { callbackUrl: '/' })}
                className="flex mt-2 gap-4 justify-center bg-black text-white rounded-md w-full  p-2  hover:bg-white hover:text-black focus:outline-none focus:shadow-outline">
          <Image src={google} alt={''} width={24} height={24} />
          Login with google
            </button>
            <button
            onClick={() => router.push('/login ')}
              className="my-4 text-center text-gray-500">
           or <br/> <u>Login</u>
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Register;