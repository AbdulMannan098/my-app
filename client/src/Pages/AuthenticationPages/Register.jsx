import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import '../../Styles/Register.css'  
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'
import { createCustomer } from '../../functions/user';

const Register = () => {
    const [input,setInput]=useState(
      {
        name:"",email: "",password : "",confirmPassword:"" 
      }
    );

    const handleChange=(e)=>{
      setInput({...input,[e.target.name]:e.target.value})
      console.log({...input,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log("submit")
      if(!input.name || input.password.length<6 || input.password !==input.confirmPassword){
        console.log("Please fill all the fields correctly")
        toast.error('Please fill all the fields correctly')
        window.location.reload();
      }
      else{
      await createCustomer(input)
      .then((res)=>{
        toast.success("You are Registered Successfully")
        console.log("User Has been created",res);
        window.location.reload();
      })
      .catch((err)=>{
        toast.error("Error in Registration Please Revisit your entered Details Or This Email is already registered")
        console.error('Error creating user:', err);
      })}
    }

    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='m-5' style={{maxWidth: '600px'}}>
            <MDBCardBody className='px-5'>
            <form onSubmit={handleSubmit}>
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
              <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' value={input.name} onChange={handleChange} name='name' />
              <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' value={input.email} onChange={handleChange} name='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' value={input.password} onChange={handleChange} name='password'/>
              <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' value={input.confirmPassword} onChange={handleChange} name='confirmPassword'/>
              <div className='d-flex flex-row justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
              </div>
              <div className="text-center">
              <p>Already a member? <Link to="/login">Sign-In</Link></p>
            </div>
              <div className="text-center">
              <p>Want to sell products? <Link to="/seller/register">Register as seller</Link></p>
            </div>
              <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type='submit' onSubmit={handleSubmit}>Register</MDBBtn>
            </form>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      );}

export default Register

