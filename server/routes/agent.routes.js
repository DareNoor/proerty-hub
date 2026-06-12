import express from 'express'
import {
  getAllAgents,
  getAgentById,
  createAgent,
  updateAgent,
  deleteAgent
} from '../controllers/agent.controller.js'
import { protect, adminOnly } from '../middleware/auth.middleware.js'
const router = express.Router()
router.get('/',getAllAgents)
router.get('/:id',getAgentById)
router.post('/',protect,adminOnly,createAgent)
router.put('/:id',protect,adminOnly,updateAgent)
router.delete('/:id',protect,adminOnly,deleteAgent)
export default router