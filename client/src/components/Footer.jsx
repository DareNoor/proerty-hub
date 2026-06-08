import { Mail, MapPin, Phone, X } from 'lucide-react'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
   const navLinks = [
  { label: 'Home', path: '/' },
    { label: 'Properties', path: '/properties' },
  { label: 'Agents', path: '/agents' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
const propertyTypes = [
  { label: 'Residential', path: '/properties?type=residential' },
  { label: 'Commercial', path: '/properties?type=commercial' },
  { label: 'Buy', path: '/properties?type=buy' },
  { label: 'Rent', path: '/properties?type=rent' },
  { label: 'New Projects', path: '/properties?type=new' },
]
  return (
<>
<footer>
  <div className='bg-primary text-white py-12 '>
  <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
   <div>
     <Link to='/' className='flex items-center gap-2'>
      <div className='w-9 h-9 bg-white rounded-sm flex items-center justify-center'>
  <span className='text-primary font-heading font-bold text-lg'>L</span>
</div>
        <div>
         <span className='font-heading font-bold text-xl text-white'>Luxe</span>
<span className='font-heading font-bold text-xl text-accent'>Realty</span>
        </div>

      </Link>
      <p className='text-sm text-white/70 mt-3'>  Your trusted partner in finding the perfect property in Pakistan.
</p>
<div className='flex items-center gap-3 mt-4'>
        <Link to='/instagram' className='hover:text-accent transition-colors'><X size={18}/></Link>
              <Link to='/facebook' className='hover:text-accent transition-colors'> <FaFacebook size={18}/> </Link>
        <Link to='/instagram' className='hover:text-accent transition-colors'><FaInstagram size={18}/></Link>

      </div>
   </div>
   <div>
    <h3 className='font-heading font-semibold text-lg mb-4'>
      Quick Links
    </h3>
    <div className='flex flex-col gap-2'>
        {navLinks.map((item)=>(
<Link to={item.path} key={item.label} className='font-body text-sm text-white/70 hover:text-accent transition-colors'>
    {item.label}
    </Link>
    ))}
    </div>
   </div>
   <div>
    <h3 className='font-heading font-semibold text-lg mb-4'>
      Propery Types
    </h3>
    <div className='flex flex-col gap-2'>
        {propertyTypes.map((item)=>(
<Link to={item.path} key={item.label} className='font-body text-sm text-white/70 hover:text-accent transition-colors'>
    {item.label}
    </Link>
    ))}
    </div>
   </div>
   <div>
     <h3 className='font-heading font-semibold text-lg mb-4'>
Contact Us    </h3>
<ul className='flex flex-col gap-3'>
  <div className='flex items-center gap-2 '>
     <Phone size={18}/>
          <span className='font-body'>+92 300 123 4567</span>
  </div>
  <div className='flex items-center gap-2 '>
     <Mail size={18}/>
                        <span className="font-body">info@luxerealty.com</span>
  </div>
  <div className='flex items-center gap-2 '>
     <MapPin size={18}/>
          <span className='font-body'>123 DHA Phase 6, Lahore, Pakistan</span>
  </div>
</ul>
   </div>
  </div>
  </div>
  <div className='bg-primary-dark py-4'>
    <div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
      <p className='text-sm text-white/70'>  © {new Date().getFullYear()} LuxeRealty. All rights reserved.
</p>
      <p className='text-sm text-white/70'>Made with ❤️ in Pakistan</p>
    </div>
  </div>
</footer>
</>  )
}

export default Footer