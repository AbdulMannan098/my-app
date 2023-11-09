import React, { useEffect, useState } from 'react'
import LatestTrends from './LatestTrends.jsx';
import FutureSuggestions from './FutureSuggestions.jsx';
import ContactRegulators from './ContactRegulators.jsx';
import '../Styles/SellerHomePage.css'; // Import your CSS file for styling
import axios from 'axios';
  const SellerHomePage=()=>{
  
  const [products,setProducts]=useState([])
//   const Customer=true;
//   const Seller=false;
//   const Regulator=false;
  const loadAllProducts=async()=>{
    console.log("Loading products");
    await axios.get('http://localhost:8000/api/get-all-products')
    .then((res)=>{
      setProducts(res.data);
      console.log({res})
    })
    .catch((err)=>{
      console.error(`Error in loading all the products ${JSON.stringify(err)}`)
    })
  }
  useEffect(()=>{
    loadAllProducts();
  },[])
  return(
    <div className="container my-5 seller-home-page">
      <h1 className="text-center mb-4">Welcome, Seller!</h1>
      <div className="row">
        <div className="col-lg-6">
          <LatestTrends />
        </div>
        <div className="col-lg-6">
          <FutureSuggestions />
        </div>
        <hr/>
      </div>
      <ContactRegulators />
    </div>
  )  
}

export default SellerHomePage