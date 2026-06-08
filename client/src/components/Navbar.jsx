import React, { useState } from 'react'
import {  ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
const Navbar = () => {
  const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Agents', path: '/agents' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]
 const propertyLinks = [
    { label: 'Buy', path: '/properties?type=buy' },
    { label: 'Rent', path: '/properties?type=rent' },
    { label: 'Commercial', path: '/properties?type=commercial' },
  ]
  const [isDropOepn,setIsDropOpen]=useState(false)
  const [isMobOpen, setIsMobOpen]=useState(false)
  return (
    <>
    <header className='fixed top-0 left-0 right-0 z-50 '>
    <div className='bg-primary text-white text-sm'>
      <div className='max-w-7xl mx-auto px-4 py-2 flex justify-between items-center'>
      <div className='flex items-center gap-6'>
        <a href="tel:+923001234567" className='flex items-center gap-1.5 hover:text-accent transition-colors'>
          <Phone size={13}/>
          <span className='font-body'>+92 300 123 4567</span>
        </a>
        <a href="mailto:info@luxerealty.com" className='hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors'>
          <Mail size={13}/>
                        <span className="font-body">info@luxerealty.com</span>

        </a>
      </div>
      <div className='flex items-center gap-3'>
        <Link to='/instagram' className='hover:text-accent transition-colors'><X size={14}/></Link>
              <Link to='/facebook' className='hover:text-accent transition-colors'> <FaFacebook size={14}/> </Link>
        <Link to='/instagram' className='hover:text-accent transition-colors'><FaInstagram size={14}/></Link>

      </div>
      </div>
    </div>
    <nav className='bg-white py-4'>
    <div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
      <Link to='/' className='flex items-center gap-2'>
        <div className='w-9 h-9 bg-primary rounded-sm flex items-center justify-center'>
          <span className='text-white font-heading font-bold text-lg'>L</span>
        </div>
        <div>
          <span className='font-heading font-bold text-xl text-primary'>Luxe</span>
          <span className='font-heading font-bold text-xl text-accent'>Realty</span>
        </div>

      </Link>
       <button onClick={()=>setIsMobOpen(!isMobOpen)} className='lg:hidden text-primary'>
  {isMobOpen ? <X size={24}/>:<Menu size={24}/>}
</button>
      {/* for mobile  */}
   <div className='hidden lg:flex items-center gap-8'>
    {navLinks.slice(0,1).map((item)=>(
<NavLink to={item.path} key={item.label} className={({isActive})=>`font-body text-sm font-medium transition-colors hover:text-primary ${isActive? 'text-primary border-b-2 border-accent pb-0.5':"text-gray-600"}`}>
    {item.label}
    </NavLink>
    ))}
    <div className='relative' onMouseEnter={()=>setIsDropOpen(true)} onMouseLeave={()=>setIsDropOpen(false)}>
    <button className='font-body text-sm font-medium text-gray-600 hover:text-primary transition-colors flex items-center gap-1'>
      Properties <ChevronDown size={15}/>
    </button>
    {isDropOepn &&(
<div className='absolute top-full left-0 bg-white shadow-lg rounded border-gray-100 py-1'>
     {propertyLinks.map((item)=>(
      <Link key={item.label} to={item.path} className='block px-4 py-2.5 text-sm font-body text-gray-600 hover:bg-primary-light hover:text-primary transition-colors '>
        {item.label}
      </Link>
     ))}
    </div>
    )}
    
    </div>
    {navLinks.slice(1).map((item)=>(
<NavLink to={item.path} key={item.label} className={({isActive})=>`font-body text-sm font-medium transition-colors hover:text-primary ${isActive? 'text-primary border-b-2 border-accent pb-0.5':"text-gray-600"}`}>
    {item.label}
    </NavLink>
    ))}
   </div>
   <div className='hidden lg:flex items-center gap-3'>
    <Link to='/login' className='border px-5 py-2 border-primary rounded hover:border-accent font-body text-sm font-medium text-primary hover:text-accent transition-colors'>
    Login</Link>
    <Link to='/list-property' className='bg-accent hover:bg-orange-700 text-white font-body text-sm font-medium px-5 py-2 rounded transition-colors'>
    List Property</Link>
   </div>
    </div>
    {isMobOpen && (
      <div  className='lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4'>
         {navLinks.slice(0,1).map((item)=>(
<NavLink to={item.path} key={item.label} onClick={()=>setIsMobOpen(false)} className={({isActive})=>`font-body text-sm font-medium transition-colors hover:text-primary ${isActive? 'text-primary border-b-2 border-accent pb-0.5':"text-gray-600"}`}>
    {item.label}
    </NavLink>
    ))}
    <NavLink  to='/properties' onClick={() => setIsMobOpen(false)} className='font-body text-sm font-medium text-gray-600 hover:text-primary'>
  Properties
</NavLink>
{navLinks.slice(1).map((item)=>(
<NavLink to={item.path} key={item.label} onClick={()=>setIsMobOpen(false)} className={({isActive})=>`font-body text-sm font-medium transition-colors hover:text-primary ${isActive? 'text-primary border-b-2 border-accent pb-0.5':"text-gray-600"}`}>
    {item.label}
    </NavLink>
    ))}
    <hr className='border-gray-100'/>
<Link to='/login' className='font-body text-sm font-medium text-primary'>Login</Link>
<Link to='/list-property' className='bg-accent text-white font-body text-sm font-medium px-5 py-2 rounded text-center'>
  List Property
</Link>     


 </div>
    )}
   
    </nav>
    </header>
    </>
  )
}

export default Navbar