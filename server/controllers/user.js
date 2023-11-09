const User=require('../models/user')
exports.createCustomer=async(req,res)=>{
    try{
        const {name ,email,password,confirmPassword} = req.body;
        const user =await User.findOne({email})
        if(user){
            res.status(401).json("User Already exists")
        }
        else{
        const newUser=await new User({
            name:name,
            email :email,
            password:password,
            confirmPassword:confirmPassword,
        }).save();
        if(!newUser){
            throw Error('unable to create user');
            }else {
            res.json(newUser)
            }
    }
}   catch(err){
    console.log(err);
    res.status(400)
}
}

exports.getCustomers=async(req,res)=>{
    const Customers=User.find().exec();
    // if (!Customers || !Customers[0]) return next()
    res.json(Customers)
}

exports.loginCustomer=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const customer=await User.findOne({email,password})
        if (!customer){
            throw Error ('Invalid Credentials')
        }
    res.json(customer)
    }
    catch(err){
        console.log(err);
    }
}
exports.loginSeller=async(req,res)=>{
    try{
        const {email,cnic,password}=req.body;
        const seller=await User.findOne({email,password,cnic})
        if(!seller){
            throw Error ('Invalid Credentials')
        }
    res.json(seller)
    }
    catch(err){
        console.log(err);
    }
}

exports.createSeller=async(req,res)=>{
    try{
        const {name,email,cnic,bankaccount,mobileno,password,confirmpassword}=req.body;
        const seller= await User.findOne({email});
        if (seller){
            throw  "Email already exist"
        }
        else{
            const newSeller = await new User ({
                name,email,cnic,bankaccount,mobileno,password,confirmpassword,role:"seller"
        }).save();
        if(!newSeller){
            throw Error('unable to create user');
        }else {
        res.json(newSeller)
        }     
        }
    }catch(err){
        console.log("error", err);
    }
}
