import React, { useEffect, useState } from 'react'
import '../Styles/SellerHomePage.css'; // Import your CSS file for styling
import axios from 'axios';
import ProductCard from '../Components/ProductCard'

const RegulatorHomePage = () => {
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

  return (
    <>
    <div>
      <h3>This is Home Page For Regulator</h3>
    </div>
  </>
    )
}

export default RegulatorHomePage