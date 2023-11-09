import React, { useState } from 'react'
import {loginSeller} from '../../functions/user.js'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const SellerLogin = () => {

    let navigate=useNavigate();
    let dispatch=useDispatch();
    const [input,setInput]=useState({
        email:"",password:"",cnic:""
      })
    
      const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value});
        console.log(input);
      }
    
      const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!input.email || !input.password){
          alert("Please fill all the fields");
        }else{
          await loginSeller(input)
          .then((res)=>{dispatch({
            type:"LOGGED_IN_USER",
            payload:{
              name:res.data.name,
              email: res.data.email,
              role:res.data.role,
              _id: res.data._id
            },
          });
        toast.success("You are Login Successfully");
        window.localStorage.setItem("user",res.data)
        window.localStorage.setItem("userRole",res.data.role)
        console.log(res);
        navigate('/seller/home')      
        })
          .catch((err)=>{
            console.error('Error in user login:', err);
            toast.error("Error in User Login:",err.message)
          })
        }
      }
    //   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState('')
//   const [cnic,setCnic]=useState("")

//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//     await loginSeller(email,cnic,password)
//     .then((res)=>{
//         toast.success('userLogin successfully')
//         localStorage.setItem('token', res.data.access_token);
//         // console.log(localStorage.getItem('token'))
//         if (res.data.role === "seller"){
//             // navigate('/dashboard');
//             navigate('/seller/home')
//             }else{
//             navigate("/");
//             }
//         })
// }

  return (
    <div className=''>
    <h3 className='text-center'>Login As a Seller</h3>

    <br/>
    <form className='form-control' onSubmit={handleSubmit}  style={{backgroundColor:"transparent"}}>
    <input className='m-3' value={input.email} placeholder='Enter Email' name='email' type='email'  onChange={handleChange}/>
    <br/>
    <input className='m-3' value={input.cnic} placeholder='Enter your CNIC Number without dash' name='cnic' type='number' onChange={handleChange} />
    <br/>
    <input className='m-3' value={input.password} placeholder='Enter your password' name='password' type='password' onChange={handleChange} />
    <br/>        
    <button type='submit' className='btn btn-primary' onSubmit={handleSubmit}>Login</button>
    </form>
    </div>
  )
}

export default SellerLogin