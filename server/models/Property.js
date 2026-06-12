import mongoose from "mongoose"
const propertySchema= new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String, required:true},
    price:{type:Number,required:true},
    location:{type:String,required:true},
    city:{type:String,required:true},
    type:{type:String,enum:['sale','rent','commercial'], required:true},
    category:{type:String,enum:['residential','commercial'], required:true},
    beds:{type:Number},
    baths:{type:Number},
    area:{type:String},
    images:[{type:String}],
    features:[{type:String}],
    status:{type:String,enum:['active','pending','sold'],default:'active'},
    agent:{type:mongoose.Schema.Types.ObjectId, ref:'Agent'},

},{timestamps:true})
export default mongoose.model('Property',propertySchema)