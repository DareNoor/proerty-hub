import { Bath, BedDouble, CheckCircle, Mail, MapPin, Maximize, Phone } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPropertyById } from '../services/property.service'

const PropertyDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { property, isLoading } = useSelector((state) => state.properties)
  const [mainImage, setMainImage] = useState(0)

  useEffect(() => {
    dispatch(fetchPropertyById(id))
  }, [dispatch, id])

  if(isLoading) return <div className='min-h-screen flex items-center justify-center'>Loading...</div>
  if(!property) return <div className='min-h-screen flex items-center justify-center'>Property not found</div>

  return (
    <>
      <div className='bg-primary py-12 text-white text-center'>
        <h1 className='font-heading font-bold text-3xl md:text-4xl'>Property Details</h1>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8'>
        
        {/* Left Side */}
        <div className='flex-1'>
          
          {/* Main Image */}
          <div className='mb-6'>
            <img
              src={property.images?.[mainImage] || property.images?.[0]}
              alt={property.title}
              className='w-full h-64 md:h-96 object-cover rounded-xl'
            />
            {/* Thumbnails */}
            <div className='flex gap-3 mt-3 flex-wrap'>
              {property.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumbnail-${index}`}
                  onClick={() => setMainImage(index)}
                  className={`w-20 h-16 md:w-24 md:h-20 object-cover rounded-lg cursor-pointer border-2 ${mainImage === index ? 'border-accent' : 'border-transparent'}`}
                />
              ))}
            </div>
          </div>

          {/* About */}
          <div className='mb-6'>
            <h2 className='font-heading font-semibold text-xl text-gray-800 mb-3'>About This Property</h2>
            <p className='font-body text-gray-500 text-base leading-relaxed'>{property.description}</p>
          </div>

          {/* Features */}
          <div className='mb-6'>
            <h2 className='font-heading font-semibold text-xl text-gray-800 mb-3'>Features & Amenities</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mt-3'>
              {property.features?.map((feature) => (
                <div key={feature} className='flex items-center gap-2 text-sm text-gray-600'>
                  <CheckCircle size={16} className='text-primary' />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className='w-full lg:w-80 shrink-0'>
          
          {/* Price Card */}
          <div className='bg-white rounded-xl shadow-md p-6 mb-6'>
            <p className='text-primary font-bold font-heading text-2xl md:text-3xl'>
              PKR {property.price?.toLocaleString()}
            </p>
            <h2 className='font-heading font-semibold text-xl text-gray-800 mt-2'>{property.title}</h2>
            <p className='flex items-center gap-1 text-gray-500 text-sm mt-2'>
              <MapPin size={16} /> {property.location}, {property.city}
            </p>
            <hr className='my-4' />
            <div className='grid grid-cols-3 gap-3 text-center'>
              <div className='flex flex-col items-center gap-1'>
                <BedDouble size={20} className='text-primary' />
                <span className='font-semibold text-gray-800'>{property.beds}</span>
                <span className='text-xs text-gray-500'>Beds</span>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <Bath size={20} className='text-primary' />
                <span className='font-semibold text-gray-800'>{property.baths}</span>
                <span className='text-xs text-gray-500'>Baths</span>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <Maximize size={20} className='text-primary' />
                <span className='font-semibold text-gray-800'>{property.area}</span>
                <span className='text-xs text-gray-500'>Area</span>
              </div>
            </div>
          </div>

          {/* Agent Card */}
          <div className='bg-white rounded-xl shadow-md p-6'>
            <h3 className='font-heading font-semibold text-lg mb-4'>Contact Agent</h3>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-14 h-14 bg-primary rounded-full flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>A</span>
              </div>
              <div>
                <p className='font-semibold text-gray-800'>Ahmed Khan</p>
                <p className='text-sm text-gray-500'>Senior Property Agent</p>
              </div>
            </div>
            <hr className='my-4' />
            <div className='flex flex-col gap-3'>
              <a href="tel:+923001234567" className='bg-primary text-white rounded py-2 flex items-center justify-center gap-2'>
                <Phone size={13} />
                <span className='font-body'>Call Agent</span>
              </a>
              <a href="mailto:info@luxerealty.com" className='border border-primary text-primary rounded py-2 flex items-center justify-center gap-2'>
                <Mail size={13} />
                <span className='font-body'>Send Email</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default PropertyDetails