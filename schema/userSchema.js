import mongoose from "mongoose";

const schema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:String,
    password:String,
isVerified:{
    type:Boolean,
    default:false
},
createdAt:{
    type:Date,
    default:Date.now()
},
})

const userModel = mongoose.model("user",schema)

export default userModel

