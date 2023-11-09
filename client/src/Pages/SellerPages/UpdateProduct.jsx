import React, { useEffect, useState } from 'react'
import ProductCreateForm from '../../Components/forms/ProductCreateForm';
import {toast} from 'react-toastify'
import {LoadingOutlined} from '@ant-design/icons'
import {createProduct, getProduct, updateProduct} from '../../functions/product.js'
import ProductUpdateForm from '../../Components/forms/ProductUpdateForm';
import { useNavigate, useParams } from 'react-router-dom';

const initialState={
  title:"",
  description:"",
  price:"",
  shipping:"",
  quantity:"",
  colors:[]
  };


   const UpdateProduct = () => {
    const [values,setValues]=useState(initialState)
    const [loading,setLoading]=useState(false)
    const [productId,setProductId]=useState("")
    // const [title,setTitle]=useState("");
    // const [description,setDescription]=useState("")
    // const [quantity,setQuantity]=useState("")
    // const [price,setPrice]=useState("")
    // const [shipping,setShipping]=useState(false)
    let {slug}=useParams();
    let navigate=useNavigate();
    useEffect(()=>{
    loadProduct()
    },[])
    const loadProduct=()=>{
    getProduct(slug)
    .then((p)=>{
    setValues({...values, ...p.data})
    setProductId(p.data._id)
    console.log(p.data);
    }).catch((err)=>{
    console.log("Error in fetching single Product",err);
    })
    }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await updateProduct(values,productId)
    .then((res)=>{
        toast.success('Prouduct updated successfully')
        navigate('/seller/products')
    })
    .catch((err)=>{
        console.log(err);
        // if(err.response.status===400) toast.error(err.response.data)
        toast.error(err.response.data.err)
    })
}
const handleChange=(e)=>{
  setValues({...values,[e.target.name]:e.target.value})
  // console.log(e.target.name,"-----",e.target.value);
}


  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-10">
        {loading ? < LoadingOutlined className="text-danger h1"/> :<h4>Product Create</h4>
        }
        <hr/>

      </div>
      <ProductUpdateForm
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setValues={setValues}
      />
        </div>
    </div>
)
  }
  
  export default UpdateProduct
