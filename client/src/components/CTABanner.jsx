import React from 'react'
import { Link } from 'react-router-dom'

const CTABanner = () => {
  return (
<section className='bg-primary py-16 text-center'>
    <div className='max-w-7xl mx-auto px-4'>
        <h2 className='font-heading font-semibold text-white text-4xl text-center'>
            Ready to Find Your Dream Property?
        </h2>
        <p className='text-sm text-white/70 font-medium mt-5 text-center max-w-2xl mx-auto'>
        Let our expert agents guide you through Pakistan's finest real estate listings — from DHA to Bahria Town and beyond.
        </p>
        <div className='flex justify-center gap-4 mt-8'>
            <button className='bg-accent hover:bg-orange-700 text-white font-body font-medium px-6 py-3 rounded transition-colors'>
  Browse Properties
</button>
<Link to='/contact' className='border border-white text-white hover:bg-white hover:text-primary font-body font-medium px-6 py-3 rounded transition-colors'>
  Contact Us
</Link>     </div>
        
    </div>
</section>  
)
}

export default CTABanner