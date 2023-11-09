const Product=require('../models/product')
const slugify=require('slugify')

exports.createProduct=async(req,res)=>{
    try{
    console.log(req.body);
    req.body.slug=slugify(req.body.title);
    const newProduct=await new Product(req.body).save();
    res.json(newProduct);
    }
    catch(err){
    console.log("Product create error ---->",err);
    // res.status(400).send("create Product failed")
    res.status(400).json({
        err: err.message,
    })
    }
}

exports.updateProduct=async(req,res)=>{
    try{
        if(req.body.title){
            req.body.slug=slugify(req.body.title);
        }
        let updatedProduct = await Product.findByIdAndUpdate(req.params.id , { $set :  req.body }).exec();
        res.json(updatedProduct)
    }
    catch(err){
        return res.status(500).send(err)
        }
}
    // if(!req.params.id) return;
    // let product = await Product.findByIdAndUpdate(req.params.id, req.body , {new : true})
    // .catch((error) => {
    //     throw Error(error); 
    //     });
    //     res.json(product);
        

exports.getProductsBySeller=async(req,res)=>{
    try{
    const products=await Product.find({}).sort([["createdAt","desc"]]).exec();
    res.json(products)    
    }catch(err){
    console.log("get all Seller Products error",err)
    }
}

exports.getSingleProduct=async(req,res)=>{
    try{
        const product=await Product.findOne({slug:req.params.slug}).exec();
        res.json(product)
    }catch(err){
        console.log('Error in getting single product',err)
    }
}

exports.getAllProducts=async(req,res)=>{
    try {
        const products=await Product.find({}).exec();
        res.json(products);
    }
    catch(err){
        console.log(`error in getallProducts ${err}`)
        res.status(401)
    }
}

exports.deleteProduct=async(req,res)=>{
    try{
        const deleteProduct=await Product.findByIdAndDelete({_id:req.params.id})
        res.json(deleteProduct) 
    }
    catch(err){
        console.log('Error in deleting the product',err)
    }
    }
