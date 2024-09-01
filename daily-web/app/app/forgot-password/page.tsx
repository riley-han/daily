'use client'
import { useState } from 'react';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    return(
        <div className='flex items-center justify-center h-screen bg-[#EDFCF8]'>
            <div >
            <div className='bg-[#21D19F] p-6'>
                <h1>Enter your email</h1>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <button>Send</button>
            </div>

            </div>
        </div>
    )
}


export default ForgotPassword;
