import mongoose, { SchemaType } from "mongoose";

const subsciptionSchema = new Schema({
 subscriber: {
    type:Schema.Types.ObjectId, // one how is subscribing
    res:"User"
 },
 channel:{
    type:Schema.Types.ObjectId, // one to  whome "subscriber" is subscribing
    res:"User"
 }
},{timestamps:true}) 


export const Subsciption =mongoose.model("Subsciption",subsciptionSchema)