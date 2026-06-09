import React from 'react'
import Stats from '../components/Stats'
import Agents from '../components/Agents'
import { Heart, Shield, Star } from 'lucide-react'

const About = () => {
  const values = [
  { icon: <Shield size={28}/>, title: 'Integrity', desc: 'We believe in complete transparency and honesty in every transaction' },
  { icon: <Star size={28}/>, title: 'Excellence', desc: 'We deliver the highest quality service to every client, every time' },
  { icon: <Heart size={28}/>, title: 'Trust', desc: 'Building long-term relationships based on trust and reliability' },
]
  return (
    <>
    <div className='bg-primary py-12 text-white text-center'>
  <h1 className='font-heading font-bold text-3xl md:text-4xl'>About Us</h1>
</div>
    <div className=' py-16 max-w-7xl mx-auto px-4 '>
      <div className='flex flex-col lg:flex-row gap-12 items-center'>
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" alt="Contact Image" className='w-full lg:flex-1 h-96 object-cover rounded-xl'/>
        <div className='flex-1'>
      <h2 className='font-heading font-semibold text-3xl md:text-4xl text-primary mb-4'>
            Our Story
          </h2>
      <p className='font-body text-gray-500 text-base leading-relaxed'>
            LuxeRealty was founded in 2009 with a simple mission — to make finding your dream property in Pakistan easy, transparent, and stress-free. Over the past 15 years, we have helped thousands of families and investors find their perfect homes and commercial spaces across Lahore, Karachi, and Islamabad.

Our team of 200+ expert agents brings deep local knowledge and unmatched dedication to every client. Whether you are buying, selling, or renting — LuxeRealty is your trusted partner every step of the way.
          </p>
        </div>
      </div>
    </div>
    <Stats/>
<div className='py-16 '>
  <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-12'>
            <h2 className='font-heading font-bold text-3xl md:text-4xl text-primary  mt-4'>Our Values </h2>
        </div>
 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 mb-4  '>
       {values.map((value)=>(
        <div key={value.title} className='bg-cream rounded-xl p-6 shadow-md hover:shadow-xl transition text-center flex flex-col items-center
        gap-3'>
                <span className='w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto text-primary'>{value.icon}</span>
                <span className='font-heading font-semibold text-gray-800 mt-1'>{value.title}</span>
                <span className='text-sm text-gray-500 mt-1  '>{value.desc}</span>

        </div>
       ))}
        </div>
        </div>
    </div>
    <Agents/>
   
    </>
  )
}

export default About