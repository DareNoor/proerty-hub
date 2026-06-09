import { Bath, BedDouble, CheckCircle, Mail, MapPin, Maximize, Phone } from 'lucide-react'
import React from 'react'

const PropertyDetails = () => {
  const features = ['Swimming Pool', 'Garden', 'Garage', 'Security', 'Generator', 'Gas']
  return (
    <>
<div className='bg-primary py-12 text-white text-center '>
      <h1 className='font-heading font-bold text-3xl md:text-4xl '>Property Details</h1>
    </div> 
    <div className='max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8'>
      <div className='flex-1'>
        <div className='mb-6'>
          <img src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800' className='w-full h-96 object-cover rounded-xl' />
          <div className='flex gap-3 mt-3'>
          <img
  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800"
  className='w-24 h-20 object-cover rounded-lg cursor-pointer'
/>

<img
  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
  className='w-24 h-20 object-cover rounded-lg cursor-pointer'
/>

<img
  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
  className='w-24 h-20 object-cover rounded-lg cursor-pointer'
/>
          </div>
        </div>
         <div className='mb-6 '>
      <h2 className='font-heading font-semibold text-xl text-gray-800 mb-3'>
        About This Property
      </h2>
      <p className='font-body text-gray-500 text-sm leading-relaxed'>
        This stunning modern villa is located in the heart of DHA Phase 6, Lahore. 
Featuring spacious rooms, high-end finishes, and a beautifully landscaped garden. 
Perfect for families looking for luxury and comfort in a prime location.
      </p>
     </div>
     <div className='mb-6'>
      <h2 className='font-heading font-semibold text-xl text-gray-800 mb-3'>
Features & Amenities
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mt-3'>
      {features.map((feature)=>(
        <div key={feature} className='flex items-center gap-2 text-sm text-gray-600'>
          <CheckCircle size={16} className='text-primary'/>
          <span>{feature}</span>
        </div>
      ))}
      </div>
     </div>
      </div>
    <div className='w-full lg:w-80 shrink-0'>
     <div className='bg-white rounded-xl shadow-md p-6 mb-6'>
      <p className='text-primary font-bold font-heading text-3xl'>PKR 2.5 Crore</p>
      <h2 className='font-heading font-semibold text-xl text-gray-800 mt-2'>Modern Villa in DHA</h2>
      <p className='flex items-center gap-1 text-gray-500 text-sm mt-2'>
        <MapPin size={16}/> DHA Phase 6, Lahore
      </p>
      <hr className='my-4'/>
      <div className='grid grid-cols-3 gap-3 text-center'>
        <div className='flex flex-col items-center gap-1'>
          <BedDouble size={20} className='text-primary'/>
          <span className='font-semibold text-gray-800'>4</span>
          <span className='text-xs text-gray-500'>Beds</span>
        </div>
         <div className='flex flex-col items-center gap-1'>
          <Bath size={20} className='text-primary'/>
          <span className='font-semibold text-gray-800'>3</span>
          <span className='text-xs text-gray-500'>Baths</span>
        </div>
         <div className='flex flex-col items-center gap-1'>
          <Maximize size={20} className='text-primary'/>
          <span className='font-semibold text-gray-800'>10 Marla</span>
          <span className='text-xs text-gray-500'>Area</span>
        </div>
      </div>
     </div>
     <div className='bg-white rounded-xl shadow-md p-6'>
      <h3 className='font-heading font-semibold text-lg mb-4'>
        Contact Agent
      </h3>
      <div className='flex items-center gap-3 mb-4'>
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" alt="Agent Image" className='w-14 h-14 rounded-full object-cover object-top' />
<div>
  <p className='font-semibold text-gray-800'>Ahmed Khan
</p>
<p className='text-sm text-gray-500'>Senior Property Agent</p>

</div>
      </div>
      <hr className='my-4'/>
<div className='flex flex-col gap-3'>
<a href="tel:+923001234567" className='bg-primary text-white rounded py-2 flex items-center justify-center gap-2'>
          <Phone size={13}/>
          <span className='font-body'>Call Agent</span>
        </a>
        <a href="mailto:info@luxerealty.com" className='border border-primary text-primary rounded py-2 flex items-center justify-center gap-2'>
          <Mail size={13}/>
                        <span className="font-body">Send Email</span>

        </a>
        </div>
     </div>
    </div>
    </div>
    </>
     )
}

export default PropertyDetails