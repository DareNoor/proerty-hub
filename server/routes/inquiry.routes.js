import express from 'express'
import {
  getAllInquiries,
  createInquiry,
  updateInquiryStatus,
  deleteInquiry
} from '../controllers/inquiry.controller.js'
import { protect, adminOnly } from '../middleware/auth.middleware.js'
const router =express.Router()
router.post('/',createInquiry)
router.get('/',protect,adminOnly,getAllInquiries)
router.put('/:id',protect,adminOnly,updateInquiryStatus)
router.delete('/:id',protect,adminOnly,deleteInquiry)
export default router