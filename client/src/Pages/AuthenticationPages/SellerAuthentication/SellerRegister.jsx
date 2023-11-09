import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import '../../../Styles/Register.css'
import { registerSeller } from '../../../functions/user';
import { toast } from 'react-toastify';

const SellerRegister = () => {
  const [input,setInput]=useState({
    name:"",email:"",cnic:"",bankaccount:"",mobileno:"",password:"",confirmpassword:""
  })
  const handleChange=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
    console.log({...input,[e.target.name]:e.target.value});
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await registerSeller(input)
    .then((res)=>{
      console.log("Register seller res: ", res);
      toast.success("You have registered successfully as A seller")
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    })
    .catch((err)=>{
      console.log("Seller Registration Error:",err)
    })
  }
  return (        
  <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
  <div className='mask gradient-custom-3'></div>
  <MDBCard className='m-5' style={{maxWidth: '600px'}}>
    <MDBCardBody className='px-5'>
    <form onSubmit={handleSubmit}>
      <h1 className="text-uppercase text-center mb-5" color='#5a0e41'>Join as a Seller</h1>
      <h2 className="text-uppercase text-center mb-5">Create Seller Account</h2>
      <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' onChange={handleChange} value={input.name} name='name' required />
      <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={handleChange} value={input.email} name='email' required/>
      <MDBInput wrapperClass='mb-4' label='Your CNIC' size='lg' id='form2' type='number' onChange={handleChange} value={input.cnic} name='cnic' required/>
      <MDBInput wrapperClass='mb-4' label='Your Bank Account' size='lg' id='form2' type='number' onChange={handleChange} value={input.bankaccount} name='bankaccount' required/>
      <MDBInput wrapperClass='mb-4' label='Enter your Mobile No' size='lg' id='form2' type='tel' onChange={handleChange} value={input.mobileno} name='mobileno' required/>
      <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' onChange={handleChange} value={input.password} name='password' required/>
      <MDBInput wrapperClass='mb-4' label='Confirm password' size='lg' id='form4' type='password' onChange={handleChange} value={input.confirmpassword} name='confirmpassword' required/>
      <div className='d-flex flex-row justify-content-center mb-4'>
        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' required />
      </div>
      <div className="text-center">
      <p>Already have a seller Account? <Link to="/seller/login">Sign-In as a Seller</Link></p>
    </div>
      {/* <div className="text-center">
      <p>Want to sell products? <Link to="/seller/register">Register as seller</Link></p>
    </div> */}
      <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' >Register</MDBBtn>
      </form>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
)}

export default SellerRegister