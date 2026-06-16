import { Building, FastForward, LayoutDashboard, MessageSquare, Settings, UserCircle, Users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createProperty, deleteProperty, fetchProperties, updateProperty } from '../services/property.service'

const Admin = () => {
  const [showForm,setShowForm] =useState(false)
  const dispatch=useDispatch()
  const{token}=useSelector((state)=>state.auth)
  const{properties}=useSelector((state)=>state.properties)
  useEffect(()=>{
    dispatch(fetchProperties())
  },[dispatch])
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
// const properties = [
//   { id: 1, title: 'Modern Villa DHA', location: 'Lahore', price: 'PKR 2.5 Cr', type: 'Sale', status: 'Active' },
//   { id: 2, title: 'Apartment Gulberg', location: 'Lahore', price: 'PKR 80 Lac', type: 'Rent', status: 'Active' },
//   { id: 3, title: 'Commercial Plaza', location: 'Karachi', price: 'PKR 5 Cr', type: 'Sale', status: 'Pending' },
// ]
const [formData, setFormData]=useState({
  title:'',description:"",price:'',location:'',city:'',type:'sale',category:'residential',beds:'',baths:'',area:'',
})
const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}
const handleSubmit = async()=>{
  const data =new FormData()
  Object.keys(formData).forEach(key=>{
    data.append(key,formData[key])
  })
  images.forEach(image=>{
    data.append('images',image)
  })
  console.log('Images array:', images)  // yeh add karo
  console.log('FormData entries:', [...data.entries()])  // yeh add karo
  if(editId){
    await dispatch(updateProperty(editId,data,token))
  }else{
    await dispatch(createProperty(data,token))
  }
  setShowForm(false)
  setEditId(null)
  setImages([])
  setFormData({
    title: '', description: '', price: '', location: '', city: '',
    type: 'sale', category: 'residential', beds: '', baths: '', area: ''

  })
}
const handleDelete= async(id)=>{
  if(window.confirm('Are you sure you want to delete this property?')){
    await dispatch(deleteProperty(id,token))
  }
}
const [editId, setEditId] = useState(null)
const handleEdit = (property) => {
  setFormData({
    title: property.title,
    description: property.description,
    price: property.price,
    location: property.location,
    city: property.city,
    type: property.type,
    category: property.category,
    beds: property.beds,
    baths: property.baths,
    area: property.area,
  })
  setEditId(property._id)
  setShowForm(true)
}
const [images,setImages]=useState([])
const handleImageChange=(e)=>{
  setImages([...e.target.files])
}
  return (
    
    <>
    {showForm && (
      <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-10'>
        <div className='bg-white rounded-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto'>
          <h2 className='font-heading font-bold text-xl text-pretty mb-6'>Add New Property</h2>
          <div className='flex flex-col gap-4'>
            <input value={formData.title} onChange={handleChange} name='title' placeholder='Property Title' className='border px-4 py-3 text-sm outline-none'/>
            <textarea value={formData.description} onChange={handleChange} name="description" rows={3} placeholder='Description' className='border rounded px-3 py-4 text-sm outline-none'/>
            <input value={formData.price} onChange={handleChange} type="number" name="price" placeholder='Price (PKR)' className='border rounded px-4 py-3 text-sm outline-none'/>
            <input value={formData.location} onChange={handleChange}  name="location" placeholder='Location' className='border rounded px-4 py-3 text-sm outline-none'/>
            <input value={formData.city} onChange={handleChange}  name="city" placeholder='City' className='border rounded px-4 py-3 text-sm outline-none'/>
            <input type='file' onChange={handleImageChange}  name="images" multiple  accept="image/*"  className='border rounded px-4 py-3 text-sm outline-none'/>
          <select value={formData.type} onChange={handleChange} name="type" className='border rounded px-4 py-3 text-sm outline-none'>
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
            <option value="commercial">Commercial</option>
          </select>
          <select value={formData.category} onChange={handleChange} name='category' className='border rounded px-4 py-3 text-sm outline-none'>
          <option value='residential'>Residential</option>
          <option value='commercial'>Commercial</option>
        </select>
        <div className='flex gap-3'>
          <input value={formData.beds} onChange={handleChange}  name='beds' type='number' placeholder='Beds' className='border rounded px-4 py-3 text-sm outline-none flex-1' />
          <input value={formData.baths} onChange={handleChange}  name='baths' type='number' placeholder='Baths' className='border rounded px-4 py-3 text-sm outline-none flex-1' />
          <input value={formData.area} onChange={handleChange} name='area' type='text' placeholder='Area' className='border rounded px-4 py-3 text-sm outline-none flex-1' />

        </div>
        <div className='flex gap-3 mt-2'>
          <button onClick={handleSubmit} className='bg-accent text-white px-6 py-2 rounded flex-1'>Add Property</button>
          <button onClick={()=>setShowForm(false)} className='border border-gray-300 px-6 py-2 rounded flex-1'>Cancel</button>
        </div>
          </div>
        </div>
      </div>
    )}
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
            <button onClick={()=>setShowForm(true)} className='bg-accent text-white px-4 py-2 rounded text-sm'>Add Properties</button>
          
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
                  <tr key={property._id} className='border-t bg-gray-100 hover:bg-gray-50'>
                    <td className='py-3 px-4 text-gray-800 text-left font-medium'>{property.title}</td>
                 <td className='py-3 px-4 text-gray-500'>{property.location}</td>
      <td className='py-3 px-4 text-gray-800 font-medium'>{property.price}</td>
      <td className='py-3 px-4 text-gray-500'>{property.type}</td>
      <td className='py-3 px-4'>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${property.status==="Active"?'bg-green-100 text-green-700':'bg-yellow-100 text-yellow-600'}`}>{property.status}</span>
      </td>
      <td className='py-3 px-4'>
        <div className='flex items-center gap-2'>
          <button className='text-primary hover:text-accent text-xs font-medium' onClick={()=>handleEdit(property)}>Edit</button>
          <button className='text-red-500 hover:text-red-700 text-xs font-medium' onClick={()=>handleDelete(property._id)}>Delete</button>
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