import { createSlice } from '@reduxjs/toolkit'
const authSlice= createSlice({
    name:'auth',
    initialState:{
        user:null,
        token:null,
        isLoading:false,
        error:null,
    },
    reducers:{
        loginSuccess:(state,action)=>{
            state.user=action.payload.user
            state.token=action.payload.token
            state.error=null
            state.isLoading= false
        },
        logout:(state)=>{
            state.user=null
            state.token=null
        },
        setLoading:(state,action)=>{
            state.isLoading=action.payload
        },
        setError:(state,action)=>{
            state.error=action.payload
            state.isLoading=false
        },
    },
})
export const {loginSuccess,logout,setLoading,setError}=authSlice.actions
export default authSlice.reducer