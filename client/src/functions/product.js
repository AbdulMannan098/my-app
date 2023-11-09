import axios from 'axios'

export const createProduct=async(product)=>{
   // return await axios.post(`${process.env.REACT_APP_API}/create-product`,product)
   return await axios.post('http://localhost:8000/api/create-product',product)
}
export const updateProduct=async(product,id)=>{
   //return  await axios.put(`${process.env.REACT_APP_API}/update-product`,product)
   return  await axios.put(`http://localhost:8000/api/update-product/${id}`,product)
}

export const getProduct=async(slug)=>{
   return await axios.get(`http://localhost:8000/api/getproduct/${slug}`)
}

export const getProductsBySeller=async(sort,order)=>{
   return await axios.get('http://localhost:8000/api/seller/allproducts',{
      sort,
      order
   })
}
export const deleteProduct=async(id)=>{
   return await axios.delete(`http://localhost:8000/api/remove-product/${id}`);
 
}