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
  import { configureStore } from "@reduxjs/toolkit"
  export const store=configureStore({
    reducer:{},
    preloadedState: loadFromLocalStorage()
  })
  store.subscribe(()=>saveToLocalStorage(store.getState()))