import mongoose from 'mongoose'

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  status: { type: String, enum: ['new', 'read', 'replied'], default: 'new' },
}, { timestamps: true })

export default mongoose.model('Inquiry', inquirySchema)