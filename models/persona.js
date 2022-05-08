import mongoose from "mongoose";


const PersonaSchema= new mongoose.Schema({
    nombre:{type:String,maxlength:25,required:true},
    apellido:{type:String,maxlength:25,required:true},
    edad:{type:Number,default:0},
    telefono:{type:String,required:true,unique:true},
    password:{type:String,required:true,minlemght:6},
    createDate:{type:Date,default:Date.now()}
})
export default mongoose.model("persona",PersonaSchema)






