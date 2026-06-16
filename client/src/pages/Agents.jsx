import React from 'react'
import Agents from '../components/Agents'

const AgentsPage = () => {
  return (
    <>
      <div className='bg-primary py-12 text-white text-center'>
        <h1 className='font-heading font-bold text-3xl md:text-4xl'>Our Agents</h1>
      </div>
      <Agents/>
    </>
  )
}

export default AgentsPage