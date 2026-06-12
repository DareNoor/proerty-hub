import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
<div className='min-h-screen flex flex-col items-center justify-center bg-cream'>
  <h1 className='font-heading font-bold text-9xl text-primary'>404</h1>
  <h2 className='font-heading font-bold text-2xl text-gray-800 mt-4'>Page Not Found</h2>
  <p className='text-gray-500 mt-2'>The page you are looking for doesn't exist</p>
  <Link to='/' className='bg-accent text-white px-6 py-3 rounded mt-8'>Go Back Home</Link>
</div>  )
}

export default NotFound