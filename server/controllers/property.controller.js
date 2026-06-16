import cloudinary from '../config/cloudinary.js'
import Property from '../models/Property.js'

// GET /api/properties
export const getAllProperties = async(req,res)=>{
    try {

        const {city,type,category,beds,minPrice,maxPrice,sort}=req.query
        let filter={}
if(city) filter.city = city
    if(type) filter.type = type
    if(category) filter.category = category
    if(beds) filter.beds = { $gte: Number(beds) } 
    if(minPrice || maxPrice){
        filter.price={}
        if(minPrice) filter.price.$gte=Number(minPrice)
            if(maxPrice) filter.price.$lte=Number(maxPrice)
    }      
let sortOption ={createdAt:-1}
if(sort==='low') sortOption={price:1} 
if(sort==='high') sortOption={price:-1} 

const properties= await ( Property.find(filter).populate('agent')).sort(sortOption)
res.json(properties)
    } catch (error) {

            res.status(500).json({ message: error.message })

    }
}
// GET /api/properties/:id
export const getPropertyById=async (req,res)=>{
    try {
        const property = await Property.findById(req.params.id).populate('agent')
        if(!property){
                  return res.status(404).json({ message: 'Property not found' })

        }
        res.json(property)
    } catch (error) {
            res.status(500).json({ message: error.message })

    }
}
// POST /api/properties
export const createProperty= async (req,res)=>{
    try {
        let imageUrls=[]
        if(req.files && req.files.length>0){
            for(const file of req.files){
                const result = await cloudinary.uploader.upload(
                    `data:${file.mimetype};base64,${file.buffer.toString('base64')}`,{folder:'luxerealty'}
                )
                imageUrls.push(result.secure_url)
            }
        }
        const property = await Property.create({...req.body,images:imageUrls})
        res.status(201).json(property)
    } catch (error) {
            res.status(500).json({ message: error.message })

    }
}
// PUT /api/properties/:id
export const updateProperty=async(req,res)=>{
    try {
        let imageUrls=[]
        if(req.files && req.files.length>0){
            for (const file of req.files){
                const result = await cloudinary.uploader.upload(
                    `data:${file.mimetype};base64,${file.buffer.toString('base64')}`,{folder:'luxerealty'}
                )
                imageUrls.push(result.secure_url)
            }
        }
        const updateData={...req.body}
        if(imageUrls.length>0){
            updateData.images=imageUrls
        }
        
        const property= await Property.findByIdAndUpdate(req.params.id,updateData,{new:true})
        res.json(property)
    } catch (error) {

            res.status(500).json({ message: error.message })

        
    }
}
// DELETE /api/properties/:id
export const deleteProperty=async(req,res)=>{
    try {
        await Property.findByIdAndDelete(req.params.id)
            res.json({ message: 'Property deleted successfully' })

    } catch (error) {
            res.status(500).json({ message: error.message })

    }
}
// Filter functionn
