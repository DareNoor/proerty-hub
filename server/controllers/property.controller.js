import Property from '../models/Property.js'

// GET /api/properties
export const getAllProperties= async(req,res)=>{
    try {
        const properties=await Property.find().populate('agent')
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
        const property = await Property.create(req.body)
        res.status(201).json(property)
    } catch (error) {
            res.status(500).json({ message: error.message })

    }
}
// PUT /api/properties/:id
export const updateProperty=async(req,res)=>{
    try {
        const property= await Property.findByIdAndUpdate(req.params.id,req.body,{new:true})
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