import React from 'react'

const Stats = () => {
    const stats = [
  { number: '500+', label: 'Properties Listed' },
  { number: '200+', label: 'Expert Agents' },
  { number: '15+', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' },
]
  return (
        <div className='bg-white py-12 shadow '>
        <div className='max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4'>
        {stats.map((stat)=>(
        <div key={stat.label} className='flex flex-col items-center text-center py-6'>
          <span className='font-heading font-bold text-4xl text-primary'>{stat.number}</span>
          <span className='font-body text-sm text-gray-500 mt-1'>{stat.label}</span>
           </div>
        ))}
    </div>
    </div>
  )
}

export default Stats