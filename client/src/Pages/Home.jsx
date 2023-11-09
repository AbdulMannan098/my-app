import React, { useEffect, useState } from 'react'
import LatestTrends from './LatestTrends.jsx';
import FutureSuggestions from './FutureSuggestions.jsx';
import ContactRegulators from './ContactRegulators.jsx';
import '../Styles/SellerHomePage.css'; // Import your CSS file for styling
import axios from 'axios';
import ProductCard from '../Components/ProductCard'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CustomerHomePage from '../Pages/CustomerHomePage'
import SellerHomePage from '../Pages/SellerHomePage.jsx'

const Home = () => {
  const [products,setProducts]=useState([])
  // const Customer=true;
  // const Seller=false;
  // const Regulator=false;
  // const {user}=useSelector((state)=>({...state}))
  // const Customer=!user||!user.role==='customer'? false:true;
  // const Seller=!user || !user.role==='seller' ? false :true;
  // const Regulator=false;
  const {user}=useSelector((state)=>({...state}))
  let userRole=user ? user.role || window.localStorage.getItem("userRole") : "";
  let User=user ? window.localStorage.getItem("user"):""
  // const Customer= (!user || !userRole || !userRole==="customer") ? false:true;
  // const Seller= (!user || !userRole || !userRole==="seller") ? false :true;
  const Customer= User && userRole==="customer" ? true : false
  const Seller= User  && userRole==="seller" ? true: false;


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
    <header>
    {/* <div className='px-3 py-2 border-bottom mb-3 bg-body'>
            <div className='container d-flex flex-wrap justify-content-center'>
                <form className='col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto'>
                <input type='search' className='form-control' placeholder="Search..." aria-label='Search'>
                </input>
                </form>
                <div className='text-end'>
                    <button type='button' className='btn btn-light text-dark me-2' >
                      <Link to="/login" style={{textDecoration:"none"}}>Login</Link>
                    </button>
                    <button type="button" className='btn btn-light' color='#520b64'>
                      <Link to="/sign-up" style={{textDecoration:"none"}}>Sign-Up</Link>
                    </button>
                </div>
            </div>
        </div> */}
    </header>
    <div className='container-fluid text-sm-center p-5 bg-light text-secondary h1 font-weight-bold fw-bold fst-italic text-decoration-underline' >
      <h3>This is Home Page</h3>
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
    {Customer && (
      <CustomerHomePage/>
    )}
    {Seller && (
      <SellerHomePage/>
    )}
    </>
    )
}

export default Home