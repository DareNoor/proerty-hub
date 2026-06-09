import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <>
<div className='bg-primary py-12 text-white text-center'>
  <h1 className='font-heading font-bold text-3xl md:text-4xl'>Contact Us</h1>
</div> 
<div className='py-16 max-w-7xl mx-auto px-4'>
  <div className='flex flex-col lg:flex-row gap-12'>
    <div className='w-full flex-1'>
      <div className='flex flex-col gap-6'>
        <div>
          <h2 className='font-heading font-bold text-3xl text-primary'>Get In Touch</h2>
          <p className='text-gray-500 mt-2'>  We'd love to hear from you. Reach out to us anytime and we'll get back to you as soon as possible.
</p>
<div className='flex flex-col gap-4 mt-2'>
  <div className='flex items-start gap-4'>
    <div className='w-12 h-12 bg-primary-light rounded-full flex items-center justify-center'>
      <Phone className='text-primary'/>
      </div>
      <div>
              <p className='font-semibold'>Phone</p>
              <p className='text-gray-500 text-sm'>+92 300 123 4567</p>

      </div>
    
  </div>
  <div className='flex items-start gap-4'>
    <div className='w-12 h-12 bg-primary-light rounded-full flex items-center justify-center'>
      <Mail className='text-primary'/>
      </div>
      <div>
              <p className='font-semibold'>Email</p>
              <p className='text-gray-500 text-sm'>info@luxerealty.com</p>

      </div>
    
  </div>
   <div className='flex items-start gap-4'>
    <div className='w-12 h-12 bg-primary-light rounded-full flex items-center justify-center'>
      <MapPin className='text-primary'/>
      </div>
      <div>
              <p className='font-semibold'>Address</p>
              <p className='text-gray-500 text-sm'>123 DHA Phase 6, Lahore, Pakistan</p>

      </div>
    
  </div>
   <div className='flex items-start gap-4'>
    <div className='w-12 h-12 bg-primary-light rounded-full flex items-center justify-center'>
      <Clock className='text-primary'/>
      </div>
      <div>
              <p className='font-semibold'>Working Hours</p>
              <p className='text-gray-500 text-sm'>Mon - Sat: 9:00 AM - 6:00 PM</p>

      </div>
    
  </div>
</div>
        </div>
      </div>
    </div>
    <div className='flex-1'>
      <div className='bg-white rounded-xl shadow-md p-8'>
        <h3 className='font-heading font-bold text-2xl text-primary mb-6'>Send Us a Message</h3>
        <div className='flex flex-col gap-4'>
          <input type="text" className='border px-4 py-3 text-sm outline-none' placeholder='Your Name'/>
                    <input type="email" className='border px-4 py-3 text-sm outline-none' placeholder='Your Email'/>
          <textarea rows={5} className='border border-gray-200 rounded px-4 py-3 text-sm outline-none w-full' placeholder='Your Message'/>
          <button className='bg-accent text-white py-3 rounded font-medium'>Send Message</button>

        </div>
      </div>
    </div>
  </div>
</div>
</>
 )
}

export default Contact