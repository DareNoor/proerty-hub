import { createSlice } from '@reduxjs/toolkit'
const propertySlice= createSlice({
    name:'properties',
    initialState:{
        properties:[],
        property:null,
        isLoading:false,
        error:null,
        filters:{
            type:'',
            city:'',
            price:'',
            beds:'',
        }
    },
    reducers:{
        setProperties:(state,action)=>{
            state.properties=action.payload
            state.isLoading=false
        },
        setProperty:(state,action)=>{
            state.property=action.payload
            state.isLoading=false
        },
        setLoading:(state,action)=>{
            state.setLoading=action.payload
        },
        setError:(state,action)=>{
            state.error=action.payload
            state.isLoading=false
        },
        setFilters:(state,action)=>{
            state.filters={...state.filters,...action.payload}
        },
        resetFilters:(state)=>{
            state.filters={type:'',city:'',price:'',beds:''}
        },
    },
})
export const{setProperties,setProperty,setLoading,setError,setFilters,resetFilters}= propertySlice.actions
export default propertySlice.reducer
