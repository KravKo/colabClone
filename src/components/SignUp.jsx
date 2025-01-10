import React from 'react';
import Logo from '../assets/logo.png';
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";

export default function SignUp({ handelToggle }) {
  return (
    <div className='main flex h-[100vh]'>
        {/* Left half */}
        <div className="w-[50%] bg-red-700 flex items-center justify-center text-white">
            <div className='right-main flex flex-col items-center justify-center'> 
                {/* motto */}
            <div className="text-4xl w-[550px] text-center font-bold">
                Join the Nepal’s best blood providing platform
            </div>
            {/* describe */}
            <div className="text-md mt-5 w-[300px] ml-8">
                Enter you personal details with us and start journey with us
            </div>
            {/* sign up button */}
            {/* code not understood for hover effect using relative absolute */}
            <div className="mt-5 text-xl rounded-3xl border-white border-2 p-2 font-bold px-5 shadow-[2px_3px_4px_rgba(0,0,0,0.2)] relative overflow-hidden group hover:text-red-700">
                    <button onClick={handelToggle} className="relative z-10">
                    SIGN IN
                    </button>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
                </div>
            </div>

            </div>
        </div>
        {/* Right Half */}
        <div className="left-half w-[50%] flex flex-col align-center justify-center ">
                {/* Logo */}
                <div className="logo items-center justify-center flex w-full mt-14">
                    <img src={Logo} alt="" className='h-28'/>
                </div>
                {/* Sign In Options */}
                <div className="sign-in-options  w-full mt-5 flex flex-col items-center justify-center">
                    <div className="sign-in text-4xl font-bold text-center">
                        Sign Up
                    </div>
                    <div className="options flex justify-center items-center mt-5 space-x-3">
                        <div className='p-[3px] shadow-[2px_2px_2px_rgba(0,0,0,0.2)] h-10 w-10 flex border-solid border-[1px] border-slate-300 items-center justify-center rounded-2xl' ><CiFacebook size={42} style={{strokeWidth: 0.7}} /></div>
                        <div className='p-[3px] shadow-[2px_2px_2px_rgba(0,0,0,0.2)] h-10 w-10 flex border-solid border-[1px] border-slate-300 items-center justify-center rounded-2xl' ><CiLinkedin size={42} style={{strokeWidth: 0.7}}/></div>
                        <div className='p-[3px] shadow-[2px_2px_2px_rgba(0,0,0,0.2)] h-10 w-10 flex border-solid border-[1px] border-slate-300 items-center justify-center rounded-2xl' ><FaGoogle size={28} style={{strokeWidth: 0.7}}/></div>
                    </div>
                    
                </div>

                {/* Sign In Form? */}
                <div className="sign-in-form flex flex-col items-center justify-center mt-5 space-y-2">
                    <input type="name" className='bg-[#E4DEDE] w-[50%] h-12 rounded-[7px] p-4' placeholder='Name'/>
                    <input type="number" className='bg-[#E4DEDE] w-[50%] h-12 rounded-[7px] p-4' placeholder='Password'/>
                    <input type="email" className='bg-[#E4DEDE] w-[50%] h-12 rounded-[7px] p-4' placeholder='Email'/>
                    <input type="email" className='bg-[#E4DEDE] w-[50%] h-12 rounded-[7px] p-4' placeholder='Email'/>
                    <input type="email" className='bg-[#E4DEDE] w-[50%] h-12 rounded-[7px] p-4' placeholder='Email'/>
                </div>
                
                {/* Confirm sign in */}
                <div className="mt-5 text-xl text-white w-32 font-semibold bg-red-600 flex self-center items-center justify-center pt-2 pb-2 rounded-2xl">
                    <button >
                        SIGN UP
                    </button>
                </div>
        </div>
        
    </div>
  )
}
