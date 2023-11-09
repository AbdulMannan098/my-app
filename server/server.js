const express=require('express')
const mongoose=require('mongoose')
const morgan=require('morgan')
const bodyParser = require("body-parser");
const cors=require('cors');
const {readdirSync}=require('fs')
require('dotenv').config();
const productRoutes=require('./routes/product')
const userRoutes=require('./routes/user')

const app=express();

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
}).then(()=>console.log("DB Connected"))
.catch((err)=>console.log("DB connected Error",err))

app.use(morgan('dev'))
app.use(bodyParser.json({limit:"2mb"}))
app.use(cors());
app.use(express.json({ extended: false }));
app.use('/api',productRoutes)
app.use('/api',userRoutes)

const port=process.env.PORT
app.listen(port,()=>console.log(`server is running on ${port}`))
