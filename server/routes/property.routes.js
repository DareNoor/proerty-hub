import express from 'express'
import { getAllProperties, getPropertyById, createProperty, updateProperty, deleteProperty 
} from '../controllers/property.controller.js'
import { protect, adminOnly } from '../middleware/auth.middleware.js'
import upload from '../config/multer.js'

const router = express.Router()

router.get('/', getAllProperties)
router.get('/:id', getPropertyById)

router.post('/', protect, adminOnly, upload.array('images', 5), createProperty)
router.put('/:id', protect, adminOnly, upload.array('images', 5), updateProperty)
router.delete('/:id', protect, adminOnly, deleteProperty)

export default router