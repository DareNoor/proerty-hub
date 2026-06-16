import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../redux/authSlice.js'
import propertyReducer from '../redux/propertySlice.js'
const saveToLocalStorage=(state)=>{
  try {
    localStorage.setItem("realestate",JSON.stringify(state))
  } catch (error) {
    
  }
}
const loadFromLocalStorage=()=>{
  try {
    const data = localStorage.getItem("realestate")
    if(data) return JSON.parse(data)
  } catch (error) {}
    return undefined
  }
  export const store=configureStore({
    reducer:{
      auth: authReducer,
      properties:propertyReducer
    },
    preloadedState: loadFromLocalStorage()
  })
  store.subscribe(()=>saveToLocalStorage(store.getState()))