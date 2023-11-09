const mongoose=require("mongoose")
const {ObjectId}=mongoose.Schema

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:30,
        trim:true,
        text:true,
    },
    slug:{
        type:String,
        unique:true,
        lowercase:true,
        index:true,
    },
    description:{
        type:String,
        required:true,
        maxlength:2000,
        text:true,
    },
    price:{
        type:Number,
        required:true,
        trim: true,
        maxlength:32,
    },
    quantity:Number,
    sold:{
        type:Number,
        default:0
    },
    shipping:{
        type:String,
        enum: ["Yes","No"],
    },
    colors:[{type:String}]
},
{timestamps:true}
)

module.exports=mongoose.model("Product",productSchema)