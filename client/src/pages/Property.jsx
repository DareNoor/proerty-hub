import React, { useEffect, useState } from 'react'
import { Bath, BedDouble, MapPin, Maximize } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProperties } from '../services/property.service'
import { Link } from 'react-router-dom'

const Property = () => {
  const dispatch = useDispatch()
  const { properties, isLoading } = useSelector((state) => state.properties)
  
  const [filters, setFilters] = useState({
    city: '', type: '', beds: '', minPrice: '', maxPrice: '', sort: ''
  })

  useEffect(() => {
    dispatch(fetchProperties(filters))
  }, [dispatch, filters])

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='bg-primary py-12 text-white text-center'>
        <h1 className='font-heading font-bold text-3xl md:text-4xl'>All Properties</h1>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8'>
        
        {/* Filters Sidebar */}
        <div className='w-full lg:w-72 shrink-0'>
          <div className='bg-white rounded-xl shadow-md p-6'>
            <h3 className='font-heading font-semibold text-lg mb-4'>Filters</h3>

            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Property Type</label>
              <select name='type' value={filters.type} onChange={handleFilterChange} className='w-full border border-gray-200 rounded px-3 py-2 text-sm'>
                <option value=''>All Types</option>
                <option value='sale'>Sale</option>
                <option value='rent'>Rent</option>
                <option value='commercial'>Commercial</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Price Range</label>
              <select name='price' onChange={(e) => {
                const [min, max] = e.target.value.split('-')
                setFilters({ ...filters, minPrice: min, maxPrice: max })
              }} className='w-full border border-gray-200 rounded px-3 py-2 text-sm'>
                <option value='-'>Any Price</option>
                <option value='0-5000000'>Under 50 Lac</option>
                <option value='5000000-10000000'>50 Lac - 1 Crore</option>
                <option value='10000000-30000000'>1 Crore - 3 Crore</option>
                <option value='30000000-999999999'>Above 3 Crore</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Bedrooms</label>
              <select name='beds' value={filters.beds} onChange={handleFilterChange} className='w-full border border-gray-200 rounded px-3 py-2 text-sm'>
                <option value=''>Any</option>
                <option value='1'>1 Bedroom</option>
                <option value='2'>2 Bedrooms</option>
                <option value='3'>3 Bedrooms</option>
                <option value='4'>4+ Bedrooms</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Cities</label>
              <select name='city' value={filters.city} onChange={handleFilterChange} className='w-full border border-gray-200 rounded px-3 py-2 text-sm'>
                <option value=''>All Cities</option>
                <option value='Lahore'>Lahore</option>
                <option value='Karachi'>Karachi</option>
                <option value='Islamabad'>Islamabad</option>
              </select>
            </div>

          </div>
        </div>

        {/* Properties Grid */}
        <div className='flex-1'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6'>
            <p className='font-body text-sm md:text-base text-gray-600'>
              Showing {properties.length} Properties
            </p>
            <select name='sort' onChange={(e) => setFilters({ ...filters, sort: e.target.value })} className='border border-gray-200 rounded px-3 py-2 text-sm'>
              <option value=''>Sort by</option>
              <option value='latest'>Latest</option>
              <option value='low'>Price Low-High</option>
              <option value='high'>Price High-Low</option>
            </select>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {properties.map((property) => (
              <Link to={`/property/${property._id}`} key={property._id}>
                <div className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition'>
                  <div className='relative'>
                    <img src={property.images[0]} alt={property.title} className='w-full h-56 object-cover' />
                    <span className='absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded text-xs capitalize'>{property.type}</span>
                  </div>
                  <div className='p-5'>
                    <p className='text-primary font-bold font-heading text-xl'>PKR {property.price?.toLocaleString()}</p>
                    <h3 className='font-heading font-semibold text-gray-800 mt-1'>{property.title}</h3>
                    <p className='text-sm text-gray-500 mt-1 flex items-center gap-1'>
                      <MapPin size={16} />{property.location}
                    </p>
                    <hr className='my-3' />
                    <div className='flex gap-4 text-sm text-gray-500'>
                      <span className='flex items-center gap-1'><BedDouble size={15} />{property.beds}</span>
                      <span className='flex items-center gap-1'><Bath size={15} />{property.baths}</span>
                      <span className='flex items-center gap-1'><Maximize size={15} />{property.area}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default Property