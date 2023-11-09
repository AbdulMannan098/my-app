import React from 'react'
import { Link } from 'react-router-dom';
import ProductsForCustomer from '../../Components/ProductsForCustomer';

const Products = () => {
  const Customer=false;
  const Seller=true;
  const Regulator=false;
  return (
    <div>
    {Seller &&(
      <div className='border-4 align-content-center' style={{display:"flex", flexDirection:"column",borderWidth:"5px",borderColor:"#2c1e0c"}} >
      <div className='btn btn-block btn-dark m-auto' color='#817651'>
       <Link to="/seller/add-product"> Click here to Add/list Products </Link>
      </div>
      <div className='btn btn-block btn-dark m-auto mt-2' color='#817651'>
       <Link to="/seller/products"> Click here To See your listed products </Link>
      </div>
      <div className='btn btn-block btn-dark m-auto mt-2' color='#817651'>
       <Link to="/seller/products/inventory"> Click here To See your Prouducts Inventory </Link>
      </div>
      </div>
    )}
    {Customer &&(
      <ProductsForCustomer/>    
    )}
    {Regulator && (
      <h1 style={{textAlign:'center'}} >Welcome to Regulator's Product page</h1>
    )}
    </div>
    )
}

export default Products