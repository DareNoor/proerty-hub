import { Building, LayoutDashboard, MessageSquare, Settings, UserCircle, Users } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Admin = () => {
  const sidebarLinks = [
      { icon: <LayoutDashboard/>, label: 'Dashboard', path: '/admin' },
      { icon: <Building/>, label: 'Properties', path: '/admin/properties' },
      { icon: <Users/>, label: 'Agents', path: '/admin/agents' },
      { icon: <MessageSquare/>, label: 'Inquiries', path: '/admin/inquiries' },
      { icon: <Settings/>, label: 'Settings', path: '/admin/settings' },
    ]
    const stats = [
  { label: 'Total Properties', value: '124', icon: <Building size={24}/>, color: 'bg-blue-50 text-blue-600' },
  { label: 'Total Agents', value: '48', icon: <Users size={24}/>, color: 'bg-green-50 text-green-600' },
  { label: 'Total Users', value: '1,204', icon: <UserCircle size={24}/>, color: 'bg-purple-50 text-purple-600' },
  { label: 'Inquiries', value: '36', icon: <MessageSquare size={24}/>, color: 'bg-orange-50 text-orange-600' },
]
const properties = [
  { id: 1, title: 'Modern Villa DHA', location: 'Lahore', price: 'PKR 2.5 Cr', type: 'Sale', status: 'Active' },
  { id: 2, title: 'Apartment Gulberg', location: 'Lahore', price: 'PKR 80 Lac', type: 'Rent', status: 'Active' },
  { id: 3, title: 'Commercial Plaza', location: 'Karachi', price: 'PKR 5 Cr', type: 'Sale', status: 'Pending' },
]
  return (
    
    <>
    <div className='flex min-h-screen'>
      <div className='w-64 bg-primary text-white shrink-0'>
        <div className='px-6 py-5 border-b border-white/10'>
           <Link to='/' className='flex items-center gap-2'>
                <div className='w-9 h-9 bg-white rounded-sm flex items-center justify-center'>
            <span className='text-primary font-heading font-bold text-lg'>L</span>
          </div>
                  <div>
                   <span className='font-heading font-bold text-xl text-white'>Luxe</span>
          <span className='font-heading font-bold text-xl text-accent'>Realty</span>
                  </div>
          
                </Link>
             
        </div>
           <nav className='flex-1 px-4 py-6 flex flex-col gap-2'>
                 {sidebarLinks.map((Link)=>(
                  <NavLink to={Link.path} key={Link.label} className={({isActive})=>`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${isActive? 'bg-white/20':'hover:bg-white/10'}`}>
                    {Link.icon}
                      <span className='font-body text-sm'>{Link.label}</span>

                    </NavLink>
                 ))}
                </nav>
      </div>
      <div className='flex-1 bg-cream p-8'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='font-heading font-bold text-2xl text-primary'>Dashboard</h1>
          <div className='flex items-center gap-3'>
            <span className='text-sm text-gray-600'>Admin</span>
            <div className='w-9 h-9 bg-primary rounded-full flex items-center justify-center'>
              <span className='text-white font-bold'>A</span>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          {stats.map((stat)=>(
            <div key={stat.label} className='bg-white rounded-xl shadow-sm p-6 flex items-center gap-4'>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <p className='text-2xl font-bold font-heading text-gray-800'>{stat.value}</p>
                <p className='text-sm text-gray-500'>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='bg-white rounded-xl shadow-sm p-6'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='font-heading font-semibold text-lg'>Recent Properties</h2>
            <button className='bg-accent text-white px-4 py-2 rounded text-sm'>Add Properties</button>
          
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className="py-3 px-4 text-left">Title</th>
        <th className="py-3 px-4 text-left">Location</th>
        <th className="py-3 px-4 text-left">Price</th>
        <th className="py-3 px-4 text-left">Type</th>
        <th className="py-3 px-4 text-left">Status</th>
        <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.length===0?(
                  <tr>
                    <td colSpan='6' className='py-4 text-center text-gray-500'>
                      No Properties Found
                    </td>
                  </tr>

                ):(
                 properties.map((property)=>(
                  <tr key={property.id} className='border-t bg-gray-100 hover:bg-gray-50'>
                    <td className='py-3 px-4 text-gray-800 text-left font-medium'>{property.title}</td>
                 <td className='py-3 px-4 text-gray-500'>{property.location}</td>
      <td className='py-3 px-4 text-gray-800 font-medium'>{property.price}</td>
      <td className='py-3 px-4 text-gray-500'>{property.type}</td>
      <td className='py-3 px-4'>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${property.status==="Active"?'bg-green-100 text-green-700':'bg-yellow-100 text-yellow-600'}`}>{property.status}</span>
      </td>
      <td className='py-3 px-4'>
        <div className='flex items-center gap-2'>
          <button className='text-primary hover:text-accent text-xs font-medium'>Edit</button>
          <button className='text-red-500 hover:text-red-700 text-xs font-medium'>Delete</button>
        </div>
      </td>
      
                  </tr>
                ))
                )}
               
              </tbody>
            </table>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Admin