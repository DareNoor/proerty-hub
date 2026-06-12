import Inquiry from '../models/Inquiry.js'
// POST /api/inquiries — contact form submit
export const createInquiry =async (req,res)=>{
    try {
        const inquiry = await Inquiry.create(req.body)
    res.status(201).json({ message: 'Inquiry sent successfully', inquiry })
    } catch (error) {
            res.status(500).json({ message: error.message })

    }
}
// GET /api/inquiries
export const getAllInquiries = async(req,res)=>{
    try {
        const inquiries= await Inquiry.find().populate('property').sort({createdAt: -1})
        res.json(inquiries)
    } catch (error) {
            res.status(500).json({ message: error.message })

    }
}
// PUT /api/inquiries/:id 
export const updateInquiryStatus=async(req,res)=>{
    try {
        const inquiry = await Inquiry.findByIdAndUpdate(req.params.id,{status:req.body.status},{new:true})
        res.json(inquiry)
    } catch (error) {
            res.status(500).json({ message: error.message })

    }
}
// DELETE /api/inquiries/:id
export const deleteInquiry=async(req,res)=>{
    try {
        await Inquiry.findByIdAndDelete(req.params.id)
            res.json({ message: 'Inquiry deleted successfully' })

    } catch (error) {
            res.status(500).json({ message: error.message })

    }
}

