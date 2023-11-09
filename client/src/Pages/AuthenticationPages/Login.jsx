import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginCustomer } from '../../functions/user';
import { toast } from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux'

const Login = () => {
  let navigate=useNavigate();
  let dispatch=useDispatch();
  let location=useLocation();

  const {user}=useSelector((state)=>({...state}))
  const [input,setInput]=useState({
    email:"",password:""
  })

  useEffect(()=>{
    let intended=location.state;
    if(intended){
      return;
      // navigate(intended.from)
    }
      else{
      if(user && user._id) navigate('/customer/home')   
    }
    },[user,location,navigate])

  const handleChange=(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
    console.log(input);
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!input.email || !input.password){
      alert("Please fill all the fields");
    }else{
      await loginCustomer(input)
      .then((res)=>{
        dispatch({
          type:"LOGGED_IN_USER",
          payload:{
            name:res.data.name,
            email: res.data.email,
            role:res.data.role,
            _id: res.data._id
          },
        });
        toast.success("You are Login Successfully");
        window.localStorage.setItem("userRole",res.data.role)
        window.localStorage.setItem("user",res.data)
        console.log(res);
        navigate('/customer/home')      
      })
      .catch((err)=>{
        console.error('Error in user login:', err);
        toast.error("Error in User Login:",err.message)
      })
    }
  }
  return (  
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50" style={{backgroundColor:"transparent"}}>
          <form onSubmit={handleSubmit}>
          <h2 className="text-uppercase text-center mb-5">Sign In</h2>
            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={input.email} onChange={handleChange} name='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={input.password} onChange={handleChange} name='password'/>
      
            <div className="d-flex justify-content-between mx-3 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
      
            <MDBBtn className="mb-4" type='submit' onSubmit={handleSubmit}>Sign in</MDBBtn>

            <div className="text-center">
            <p>Not a member? <Link to="/sign-up">Register</Link></p>
            <p>Or Have Seller Account <Link to="/seller/login">Login As Seller</Link></p>
              <p>or sign up with:</p>

              <div className='d-flex justify-content-between mx-auto' style={{width: '90%',height:"90%"}}>
                <MDBBtn type='button' className='' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>
      
                <MDBBtn type='button' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>
      
                <MDBBtn type='button' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>
      
                <MDBBtn type='button' color='none' className='m-1' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>
              </div>
            </div>
            </form>
          </MDBContainer>
        );
      }
export default Login