import { Phone } from 'lucide-react'
import React from 'react'

const Agents = () => {
    const agents = [
  { id: 1, name: 'Ahmed Khan', role: 'Senior Agent', phone: '+92 300 111 2222', email: 'ahmed@luxerealty.com', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
  { id: 2, name: 'Sara Ali', role: 'Property Consultant', phone: '+92 300 333 4444', email: 'sara@luxerealty.com', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
  { id: 3, name: 'Usman Malik', role: 'Real Estate Expert', phone: '+92 300 555 6666', email: 'usman@luxerealty.com', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
]
  return (
  <section className='py-16 bg-white'>
        <div className='text-center mb-12'>
            <h2 className='font-heading font-bold text-3xl md:text-4xl text-primary'>Meet Our Agents</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2'>
       {agents.map((agent)=>(
        <div key={agent.id} className='bg-white rounded-xl shadow-md hover:shadow-xl transition text-center overflow-hidden'>
            <div className='bg-primary h-24 relative'>
<img src={agent.image} alt={agent.name} className='absolute object-top w-24 h-24 rounded-full object-cover mx-auto -bottom-10 left-1/2 -translate-x-1/2 border-4 border-white'/>
</div>
    <div className='p-6 pt-12'>
                <h3 className='font-heading font-semibold text-gray-800 text-lg'>{agent.name}</h3>
                <p className='text-sm text-accent font-medium mt-1  '>{agent.role}</p>
               <hr className='my-3'/>
               <div className='flex justify-center gap-4 text-sm text-gray-500'>
                <span className='flex items-center gap-1 '><Phone size={14}/>{agent.phone}</span>
</div>
        </div></div>
       ))}
        </div>
    </section>  )
}

export default Agents