import axios from '../utils/axios'
import { loginSuccess, logout, setLoading, setError } from '../redux/authSlice'
export const loginUser=(credentials)=>async(dispatch)=>{
    try {
        dispatch(setLoading(true))
        const{data}= await axios.post('/auth/login',credentials)
        dispatch(loginSuccess({user:data,token:data.token}))
    } catch (error) {
            dispatch(setError(error.response?.data?.message || 'Login failed'))

    }
    finally {
        dispatch(setLoading(false))
    }
}
export const registerUser=(userData)=>async(dispatch)=>{
    try {
        dispatch(setLoading(true))
    const {data}=await axios.post('/auth/register',userData)
dispatch(loginSuccess({user:data,token:data.token}))  

    } catch (error) {
          dispatch(setError(error.response?.data?.message || 'Register failed'))
  
    }
}
export const logoutUser=()=>(dispatch)=>{
    dispatch(logout())
}