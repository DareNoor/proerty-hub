import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
<>
 
<div className='min-h-screen flex items-center justify-center bg-cream'>
  <div className='bg-white rounded-xl shadow-md p-8 w-full max-w-md'>
    <div className='flex items-center gap-2 justify-center mb-6 '>
      <Link to='/' className='flex items-center gap-2'>
        <div className='w-9 h-9 bg-primary rounded-sm flex items-center justify-center'>
          <span className='text-white font-heading font-bold text-lg'>L</span>
        </div>
        <div>
          <span className='font-heading font-bold text-xl text-primary'>Luxe</span>
          <span className='font-heading font-bold text-xl text-accent'>Realty</span>
        </div>

      </Link>
       </div>
      <h2 className='font-heading font-bold text-2xl text-center text-primary'>Welcome Back</h2>
      <p className='text-gray-500 text-sm text-center mt-1 mb-6'>Login to your account</p>
      <div className='flex flex-col gap-4'>
        <label >Enter Your Email</label>
       <input type="email" className='border px-4 py-3 text-sm outline-none' placeholder='Your Email'/>
               <label >Enter Your Password</label>
        <input type="password" className='border px-4 py-3 text-sm outline-none' placeholder='Your Password'/>
        <button className='bg-accent text-white py-3 rounded w-full'>Login</button>
        <p className='text-center mt-4 text-sm'>Don't have an account?" + Register Link</p>

      </div>
   
  </div>
</div>
</>
  )
}

export default Login