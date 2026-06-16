import axios from '../utils/axios'
import { setProperties, setProperty, setLoading, setError,   } from '../redux/propertySlice.js'
export const fetchProperties=(filters={})=>async(dispatch)=>{
    try {
        dispatch(setLoading(true))
        const params= new URLSearchParams()
if(filters.city) params.append('city', filters.city)
    if(filters.type) params.append('type', filters.type)
    if(filters.category) params.append('category', filters.category)
    if(filters.beds) params.append('beds', filters.beds)
    if(filters.minPrice) params.append('minPrice', filters.minPrice)
    if(filters.maxPrice) params.append('maxPrice', filters.maxPrice)
     if(filters.sort) params.append('sort', filters.sort)
   const {data}= await axios.get(`/properties?${params.toString()}`)
        dispatch(setProperties(data))
    } catch (error) {
            dispatch(setError(error.response?.data?.message || 'Failed to fetch properties'))

    }
}
export const fetchPropertyById=(id)=>async (dispatch)=>{
    try {
        dispatch(setLoading(true))
        const{data}= await axios.get(`/properties/${id}`)
        dispatch(setProperty(data))
    } catch (error) {
         dispatch(setError(error.response?.data?.message || 'Failed to fetch property'))
   
    }
}
export const createProperty=(propertyData,token)=>async(dispatch)=>{
    try {
        dispatch(setLoading(true))
        const{data}= await axios.post('/properties',propertyData,{
            headers:{Authorization:`Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
     }
     })
        dispatch(fetchProperties())
    } catch (error) {
            dispatch(setError(error.response?.data?.message || 'Failed to create property'))

    }
}
export const updateProperty = (id, propertyData, token) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const { data } = await axios.put(`/properties/${id}`, propertyData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
    dispatch(fetchProperties())
  } catch (error) {
    dispatch(setError(error.response?.data?.message || 'Failed to update property'))
  }
}
export const deleteProperty= (id,token)=>async(dispatch)=>{
    try {
        await axios.delete(`/properties/${id}`,{
            headers:{Authorization:`Bearer ${token}`}
        })
        dispatch(fetchProperties())
    } catch (error) {
            dispatch(setError(error.response?.data?.message || 'Failed to delete property'))

    }
}