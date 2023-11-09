import React, { useEffect, useState } from 'react'
import '../Styles/SellerHomePage.css'; // Import your CSS file for styling
import axios from 'axios';
import ProductCard from '../Components/ProductCard'

  const CustomerHomePage=()=>{
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
    <>
    <div className='container-fluid text-sm-center p-5 bg-light text-secondary h1 font-weight-bold fw-bold fst-italic text-decoration-underline' >
      <h3>This is Home Page For Customer</h3>
      </div>
      <div className='container'>
      <div className='row'>
      {products.map((product)=>(
      <div className='col-md-4' key={product._id}>
      <ProductCard title={product.title} id={product._id} price={product.price} description={product.description} />
      </div>
      ))
      }
      </div>
      </div>
      {/* <ProductCard price={products.price} title={products.title} description={products.description}/>    */}
    </>
  )}

export default CustomerHomePage