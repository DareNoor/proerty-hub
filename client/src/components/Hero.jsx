import { Search } from 'lucide-react'
import React, { useState } from 'react'

const Hero = () => {
    const [activeTab,setActiveTab]=useState('buy')
    const tabs=['buy','rent','commercial']
  return (
<>
<section className='relative min-h-screen'>
    <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage:"url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600')"}}>
    <div className='absolute inset-0 bg-black/50'></div>

    </div>
    <div className='relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4'>
        <h1 className='font-heading text-4xl md:text-6xl font-bold text-white mb-4'>
                Find Your Dream Home

        </h1>
        <p className='font-body text-lg md:text-xl text-white/80 mb8 max-w-2xl'>
            Discover the finest properties across Pakistan with LuxeRealty
        </p>
        <div className='flex gap-2 mb-6'>
            {tabs.map((tab)=>(
                <button key={tab} onClick={()=>setActiveTab(tab)} className={`mt-5 px-6 py-2 rounded font-body text-sm font-medium transition-colors capitalize
                    ${activeTab===tab?'bg-accent text-white':"bg-white/20 text-white hover:bg-white/30"}`}>{tab}</button>
            ))}
        </div>
        <div className='flex items-center bg-white/20 backdrop:blur-sm rounded-lg overflow-hidden max-w-2xl w-full shadow-lg'>
<input 
  className='flex-1 px-5 py-4 font-body text-white placeholder:text-white/70 outline-none bg-transparent'
  placeholder='Search by city, area or property type...'
/>            <button className='bg-accent hover:bg-orange-700 text-white px-6 py-4 transition-colors flex items-center gap-2'>
                <Search size={18}/><span>Search</span> 
            </button>
        </div>
    </div>
</section>
</>  )
}

export default Hero