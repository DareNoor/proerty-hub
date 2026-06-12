import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/User.js'
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})

}
// POST /api/auth/register
export const register= async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const userExists=await User.findOne({email})
        if(userExists){
            return res.status(400).json({message:"User already exists"})
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const user =await User.create({name,email,password: hashedPassword})
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            role:user.role,
            token: generateToken(user._id)
        })
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}
// POST /api/auth/login
export const login=async (req,res)=>{
    try {
        const{email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
        return res.status(400).json({ message: 'Invalid credentials' })

        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
      return res.status(400).json({ message: 'Invalid credentials' })
        }
        res.json({
            _id: user.id,
            name:user.name,
            email:user.email,
            role:user.role,
            token:generateToken(user._id)
        })
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }

}
// GET /api/auth/me
export const getMe=async(req,res)=>{
    res.json(req.user)
}