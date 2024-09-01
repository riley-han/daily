'use client'

import React from 'react'





const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-[#EDFCF8]">
            <div className='w-96 bg-[#EDFCF8] shadow-lg rounded-lg overflow-hidden'>
                <div className='bg-[#21D19F] p-6'>
                    <h2 className='text-3xl font-bold text-[#001011] text-center'>Daily</h2>
                </div>
                <div className='p-6 space-y-6'>
                    <h3 className='text-xl font-semibold text-[#001011] text-center'>Login</h3>
                    <div className='space-y-4'>
                        <input type="text" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21D19F]" />
                        <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21D19F]" />
                    </div>
                    <button className='w-full bg-[#21D19F] text-[#001011] py-3 rounded-md hover:bg-[#1cb589] transition duration-300 font-semibold'>Sign In</button>
                    <div className='text-center'>
                        <a href='/app/forgot-password' className='text-sm text-[#001011] hover:text-[#1cb589]'>Forgot password?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;