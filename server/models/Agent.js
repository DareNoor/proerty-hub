import mongoose from 'mongoose'

const agentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  role: { type: String, default: 'Property Consultant' },
  avatar: { type: String },
  properties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
}, { timestamps: true })

export default mongoose.model('Agent', agentSchema)