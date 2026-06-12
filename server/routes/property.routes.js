import express from 'express'
import { 
  getAllProperties, 
  getPropertyById, 
  createProperty, 
  updateProperty, 
  deleteProperty 
} from '../controllers/property.controller.js'
import { protect, adminOnly } from '../middleware/auth.middleware.js'
const router= express.Router()
router.get('/',getAllProperties)
router.get('/:id',getPropertyById)
router.post('/',protect,adminOnly,createProperty)
router.put('/:id',protect,adminOnly,updateProperty)
router.delete('/:id',protect,adminOnly,deleteProperty)
export default router