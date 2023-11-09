import React, { useEffect, useState } from 'react'
import { getProductsBySeller } from '../../functions/product'
import ProductCard from '../../Components/ProductCard'

const SellerAllProducts = () => {
  const [products,setProducts]=useState([])
  // const {title,description,price}=products
  useEffect(()=>{
    getProductsBySeller("createdAt","desc")
    .then((res)=>{
      console.log(res)
      setProducts(res.data);
    })
    .catch((err)=>{
      console.error("Error", err)
    })
  },[])
  return (
    <div>
    <h1 className="text-center container">Seller All Products</h1><hr/>
    {/* {JSON.stringify(products)} */}
    <div className='row' style={{marginLeft:"13px"}}>
    {products.map((p)=>{
    const {_id,title,description,price,slug}=p;
    return(
    <ProductCard key={_id} id={_id} title={title} description={description} price={price} slug={slug}/>
    )
    })}
    </div>
    </div>
  )
}

export default SellerAllProducts