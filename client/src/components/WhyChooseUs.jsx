import { HeadphonesIcon, Shield, Star, Users } from 'lucide-react'
import React from 'react'

const WhyChooseUs = () => {
    const features = [
  { icon: <Shield size={28}/>, title: 'Trusted Agency', desc: 'Over 15 years of experience in Pakistan real estate market' },
  { icon: <Users size={28}/>, title: 'Expert Agents', desc: '200+ professional agents ready to help you find your dream home' },
  { icon: <Star size={28}/>, title: 'Premium Listings', desc: 'Handpicked verified properties across all major cities' },
  { icon: <HeadphonesIcon size={28}/>, title: '24/7 Support', desc: 'Round the clock customer support for all your queries' },
]
  return (
    
    <section className='py-16 bg-white'>
        <div className='text-center mb-12'>
            <h2 className='font-heading font-bold text-3xl md:text-4xl text-primary'>Why Choose Luxe<span className='text-accent'>Realty</span> </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2'>
       {features.map((feature)=>(
        <div key={feature.title} className='bg-cream rounded-xl p-6 shadow-md hover:shadow-xl transition text-center flex flex-col itecc
        gap-3'>
                <span className='w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto text-primary'>{feature.icon}</span>
                <span className='font-heading font-semibold text-gray-800 mt-1'>{feature.title}</span>
                <span className='text-sm text-gray-500 mt-1  '>{feature.desc}</span>

        </div>
       ))}
        </div>
    </section>
  )
}

export default WhyChooseUs