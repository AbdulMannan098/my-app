import React from 'react';
import { EditOutlined, DeleteOutlined,ShoppingCartOutlined,ShoppingOutlined} from '@ant-design/icons'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteProduct } from '../functions/product';
import { toast } from 'react-toastify';

const ProductCard = ({title,description,price,id,slug}) => {
  const {user}=useSelector((state)=>({...state}))
  let userRole=user ? user.role || window.localStorage.getItem("userRole") : "";
  let User=user ? window.localStorage.getItem("user"):"";
  // const Customer= (!user || !userRole || !userRole==="customer") ? false:true;
  // const Seller= (!user || !userRole || !userRole==="seller") ? false :true;
  // const Customer= User && userRole==="customer" ? true : false
  const Seller= User  && userRole==="seller" ? true: false;

  const handleDeleteProduct=async(id)=>{
    if(window.confirm('Are you sure to delete this product?')){
    await deleteProduct(id)
    .then((res)=>{
      toast.dark(`${res.data.title} is removed successfully`)
      // navigate('/seller/products')
      window.location.reload();
    })
    .catch((err)=>{
      console.log('Error in deleting Product',err)
    })
  }}

  return (
    <div key={id} className="card" style={{ width: '18rem',marginLeft:'8px', marginBottom:"7px" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <span className="card-price">{price}</span>
        <hr/>
        {Seller ? (<>
        <Link to={`/seller/edit-product/${slug}`} style={{textDecoration:"none"}}  className='text-warning m-2'><EditOutlined />Edit</Link>
        <Link onClick={()=>handleDeleteProduct(id)} style={{textDecoration:"none"}} className='text-danger m-5'><DeleteOutlined />Delete</Link>
        </>) : (
          <>
        <Link to="/product/add-cart" style={{textDecoration:"none"}}  className='text-warning m-1'><ShoppingCartOutlined />Add to Cart</Link>
        <Link to="/buy-product" style={{textDecoration:"none"}} className='text-danger m-3'><ShoppingOutlined  />Buy Product</Link>
        </>)
        }
        </div>
    </div>
    );
}

export default ProductCard;







































// import React, { useState } from 'react'
// import {Card, Tooltip} from 'antd'
// import laptop from '../../images/laptop.png'
// import { Link } from 'react-router-dom'
// import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons'
// import { showAverage } from '../../functions/rating'
// import _ from 'lodash'
// import { useDispatch, useSelector } from 'react-redux'

// const {Meta}=Card

// function ProductCard({product}) {
//  const [tooltip,setTooltip]=useState("Click to add")
//  //destructure
//  const {images,title,description,slug,price}=product

// //  redux
//     const {user,cart}=useSelector((state)=>({...state}))
//     const dispatch=useDispatch();

 
//  const handleAddToCart=()=>{
//   // console.log("getitemcart",localStorage.getItem('cart'));  
//   // create cart array
//     let cart=[]
//     if(typeof window !=='undefined'){
//       if(localStorage.getItem('cart')){
//         cart=JSON.parse(localStorage.getItem('cart'))
//       }
//       // push new product to cart
//       cart.push({
//         ...product,
//         count:1,
//       })
//       // save cart to local storage
//       const unique=_.uniqWith(cart,_.isEqual)
//       // save to localstorage\
//       console.log("unique",unique);
//       localStorage.setItem('cart',JSON.stringify(unique))
//       //show tooltip
//       setTooltip("added")
//       // add to redux
//       dispatch({
//         type:'ADD_TO_CART',
//         payload:unique
//       })
//     }
//  }

//     return (
//     <>
//     {product && product.ratings.length>0 ? 
//     (showAverage(product))
//     :(<div className="text-center pt-1 pb-3"> No Rating Yet</div>)
//     }
//         <Card 
//         cover={<img src={images && images.length ? images[0].url:laptop}
//         style={{height:"150px",objectFit:"cover"}}
//         className="p-1" alt=''
//         /> }
//         actions={[
//           <Link to={`/product/${slug}`}>
//             <EyeOutlined className="text-warning"/> <br/> View Product
//           </Link>,
//           <Tooltip title={tooltip}>
//             <a onClick={handleAddToCart} >
//           <ShoppingCartOutlined
//           className="text-danger"/> <br/> Add to Cart 
//        </a>
//           </Tooltip>
//         ]}
//         >
//             <Meta title={`${title} - $${price}`} description={`${description && description.substring(0,40)}...`}/>
//         </Card>
//       </>
    
//       )
// }

// export default ProductCard;
