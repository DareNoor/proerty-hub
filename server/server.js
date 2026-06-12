import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import propertyRoutes from './routes/property.routes.js'
import agentRoutes from './routes/agent.routes.js'
import inquiryRoutes from './routes/inquiry.routes.js'
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api/auth',authRoutes)
app.use('/api/properties',propertyRoutes)
app.use('/api/agents',agentRoutes)
app.use('/api/inquiries',inquiryRoutes)

app.get('/',(req,res)=>{
    res.send('LuxeRealty API is running!')
})
const PORT= process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB Connected!'))
.catch((err)=>console.log(err))