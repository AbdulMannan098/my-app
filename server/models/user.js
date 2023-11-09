const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema;

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:32,
        minlength:3,
    },
    email:{
        type : String ,  //email is a string data type
        required:true,
        unique: true,   //this will check if the same value exists in database or not   
    },
    password:{
        type:String,
        required:true,
        select:false,    //select false means that this field wont be returned when we query for users
        //if you want to return it then use .lean() method on your findOne and find methods
    },
    role:{
        type:String,
        default:"customer",
        enum:["customer","seller","regulator"]
    },
    cnic:{
        type:Number,
        default:"",
        //        validate(value){     //validate function takes one argument which is the value of the property
        //        validate(value){     //validate function takes one argument which is the value of our property
        //        match:/^([0-9]{5}-[0-9]{7}-[0-9])$/,
        //         validate(value){
            //             const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;
            //                         \s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1
            //                             ,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-
    },
    bankaccount:{
        type:Number,//bank account number should be of numeric datatype only
        default:"",
        //        validate(value){
            //            const reg=/^\d{10}$/g;//regex expression to match numbers with length equal to ten digits
            //            const reg=/^\d{10}$/;     //regex expression to match numbers with length equal to ten digits
            //            const regex=/^\d{10}$/g;//regular expression which checks whether the entered input matches with our desired pattern or not
            //            const reg=/^\d{10}$/;
            //             console.log("inside validator");
            //                if(!reg.test(value)){
                //                    throw new Error("Bank Account Number must contain exactly ten digits")    
                //                        }
    },
    mobileno:{
        type: Number,
        // match:/^[7-9][0-9]{9}/,
        trim:true,        
    },

    // address:{
    //     type:String,
    //     required: this.role !== "customer" ? true : false,
    //     //        validate:[validator.isLength,{message:'address should be between 5 to 10 characters'}],
    // },
    emailVerified:{
        type:Boolean,
        default:false,
    }
},{timestamps:true})

module.exports=mongoose.model("User",userSchema)
