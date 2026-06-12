import Agent from '../models/Agent.js'
// GET /api/agents
export const getAllAgents= async(req,res)=>{
    try {
        const agents=await Agent.find().populate('properties')
        res.json(agents)
    } catch (error) {
            res.status(500).json({ message: error.message })

        
    }
}
// GET /api/agents/:id
export const getAgentById= async(req,res)=>{
    try {
        const agent= await Agent.findById(req.params.id).populate('properties')
        if(!agent){
                  return res.status(404).json({ message: 'Agent not found' })

        }
        res.json(agent)
    } catch (error) {
            res.status(500).json({ message: error.message })

    }
}
// POST /api/agents
export const createAgent=async(req,res)=>{
    try {
        const agent= await Agent.create(req.body)
        res.status(201).json(agent)
    } catch (error) {
            res.status(500).json({ message: error.message })

    }
}
// PUT /api/agents/:id
export const updateAgent=async(req,res)=>{
    try {
        const agent= await Agent.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(agent)
    } catch (error) {
            res.status(500).json({ message: error.message })

    }
}
// DELETE /api/agents/:id
export const deleteAgent = async (req,res)=>{
    try {
        await Agent.findByIdAndDelete(req.params.id)
        res.json({message:'Agent deleted successfully'})
    } catch (error) {
            res.status(500).json({ message: error.message })

    }
}