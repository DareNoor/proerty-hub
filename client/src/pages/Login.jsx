import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../services/auth.service'
import { Link, useNavigate } from 'react-router-dom'
import { store } from '../redux/store'
const Login = () => {
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const{isLoading, error}=useSelector((state)=>state.auth)
  const[formData,setFormData]=useState({
    email:'',password:''
    })
    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]: e.target.value})
    }
    const handleSubmit=async(e)=>{
      e.preventDefault()
      await dispatch(loginUser(formData))
      const user=store.getState().auth.user
      if(user?.role==='admin'){
        navigate('/admin')
      } else{
      navigate('/')
    }
  }
  const [isLogin,setIsLogin]=useState(true)
  return (
<>
 
<div className='min-h-screen flex items-center justify-center bg-cream'>
  <div className='bg-white rounded-xl shadow-md p-8 w-full max-w-md'>
    <div className='flex items-center gap-2 justify-center mb-6 '>
      <Link to='/' className='flex items-center gap-2'>
        <div className='w-9 h-9 bg-primary rounded-sm flex items-center justify-center'>
          <span className='text-white font-heading font-bold text-lg'>L</span>
        </div>
        <div>
          <span className='font-heading font-bold text-xl text-primary'>Luxe</span>
          <span className='font-heading font-bold text-xl text-accent'>Realty</span>
        </div>

      </Link>
       </div>
       <div className='flex mb-6'>
        <button onClick={()=>setIsLogin(true)} className={`flex-1 py-2 font-medium text-sm rounded-l ${isLogin? 'bg-primary text-white':'bg-gray-100 text-gray-500'}`}
          >
           Login
        </button>
        <button onClick={()=>setIsLogin(false)} className={`flex-1 py-2 font-medium text-sm rounded-r ${!isLogin?'bg-primary text-white':'bg-gray-100 text-gray-500'}`}>Register</button>
       </div>
      <h2 className='font-heading font-bold text-2xl text-center text-primary'>{isLogin? 'Welcome Back':'Create Account'}</h2>
      <p className='text-gray-500 text-sm text-center mt-1 mb-6'>{isLogin?'Login to your account':'Register a new account'}</p>
      <div className='flex flex-col gap-4'>
        {!isLogin &&(
          <>
          <label>Enter Your Name</label>
                <input type="text" name='name' onChange={handleChange} className='border px-4 py-3 text-sm outline-none' placeholder='Your Name'/>

          </>
        )}
        <label >Enter Your Email</label>
       <input type="email" name='email' value={formData.email} onChange={handleChange} className='border px-4 py-3 text-sm outline-none' placeholder='Your Email'/>
               <label >Enter Your Password</label>
        <input type="password" name='password' value={formData.password} onChange={handleChange} className='border px-4 py-3 text-sm outline-none' placeholder='Your Password'/>
        <button onClick={handleSubmit} disabled={isLoading} className='bg-accent text-white py-3 rounded w-full'>{isLoading?'logging in...': isLogin?'Login':'Register'}</button>
        <p className='text-center mt-4 text-sm'>{isLogin?"Don't have an account":'Already have an account?'}
          <button onClick={()=>setIsLogin(!isLogin)} className='text-accent font-medium ml-1'>
            {isLogin?'Register':'Login'}
          </button>
           </p>

      </div>
   
  </div>
</div>
</>
  )
}

export default Login