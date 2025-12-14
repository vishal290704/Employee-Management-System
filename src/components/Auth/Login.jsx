import React from 'react'
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        setEmail("");
        setPassword("");
    }

  return (
    <div className='bg-black flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-blue-600 rounded-xl  p-20'>
            <form 
            onSubmit={(e) => {
                submitHandler(e);
            }}
            className='flex flex-col items-center w-70 justify-center'>  
                <input
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}  
                 required 
                 className='text-white w-full outline-none bg-transparent border-2 border-blue-600 rounded-full px-6 py-3 mb-3 text-xl placeholder:text-gray-400' type = "email" placeholder='Enter your email'>
                </input> 

                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                required 
                className='text-white w-full outline-none bg-transparent border-2 border-blue-600 rounded-full px-6 py-3 mb-3 text-xl placeholder:text-gray-400' type = "password" placeholder='Enter your password'>
                </input>

                <button className='w-full outline-none bg-red-500 border-none rounded-full px-6 py-3 mb-3 text-xl !text-gray-300' type='submit'>Login</button>
            </form>
 
        </div>
    </div>
  )
}

export default Login