import { Bath, BedDouble, MapPin, Maximize } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProperties } from '../services/property.service'

const FeaturedProperties = () => {
  const dispatch=useDispatch()
  const {properties}=useSelector((state)=>state.properties)
  useEffect(()=>{
    dispatch(fetchProperties())
  },[dispatch])
//     const properties = [
//   {
//     id: 1,
//     title: 'Modern Villa in DHA',
//     price: 'PKR 2.5 Crore',
//     location: 'DHA Phase 6, Lahore',
//     beds: 4,
//     baths: 3,
//     area: '10 Marla',
//     type: 'Sale',
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
//   },
//   {
//     id: 2,
//     title: 'Modern Villa in DHA',
//     price: 'PKR 1.5 Crore',
//     location: 'Model Town, Lahore',
//     beds: 4,
//     baths: 3,
//     area: '10 Marla',
//     type: 'Sale',
//     image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'
//   },
//   {
//     id: 3,
//     title: 'Modern Villa in DHA',
//     price: 'PKR 3.5 Crore',
//     location: 'Johar Town, Lahore',
//     beds: 4,
//     baths: 3,
//     area: '10 Marla',
//     type: 'Rent',
//     image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
//   },
// ]
  return (
    <>
    <section className='bg-cream py-16 '>
        <div className='text-center mb-12'>
            <h2 className='font-heading font-bold text-3xl md:text-4xl text-primary'>
                    Featured Properties
            </h2>
            <p className='font-body text-gray-500 mt-3 max-w-xl mx-auto'>
                    Handpicked premium properties across Pakistan's top locations

            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2'>
            {properties.slice(0,3).map((property)=>(
              <Link to={`/property/${property._id}`} key={property._id}>
<div key={property.id} className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition'>
        <div className='relative'>
            <img src={property.images[0]} alt={property.title} className='w-full h-56 object-cover'/>
            <span className='absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded text-xs'>{property.type}</span>
        </div>
        <div className='p-5'>
            <p className='text-primary font-bold font-heading text-xl'>
               {property.price}
            </p>
            <h3 className='font-heading font-semibold text-gray-800 mt-1'>
                {property.title}
            </h3>
            <p className='text-sm text-gray-500 mt-1 flex items-center gap-1 '>
                <MapPin size={18}/>
                {property.location}
            </p>
            <hr className='my-3'/>
            <div className='flex gap-4 text-sm text-gray-500'>
                <span className='flex items-center gap-1'><BedDouble size={15}/>{property.beds}</span>
                <span className='flex items-center gap-1'><Bath size={15}/>{property.baths}</span>
                <span className='flex items-center gap-1'><Maximize size={15}/>{property.area}</span>
            </div>
        </div>
        
    </div></Link>
            ))}
        </div>
    </section>
    
    </>
  )
}

export default FeaturedProperties