import React, { useEffect, useState } from 'react'
import { getProductsBySeller } from '../../functions/product'
import ProductCard from '../../Components/ProductCard'

const initialProducts = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet euismod turpis.',
    price: 19.99,
    quantity: 10
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet euismod turpis.',
    price: 29.99,
    quantity: 15
  }
];

const SellerProductsInventory = () => {
  // const [products, setProducts] = useState(initialProducts);
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
    <div className="container my-5">
      <h1 className="text-center mb-4">Inventory</h1>
      <table className="tafble">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SellerProductsInventory;

































// import React from 'react'

// const SellerProductsInventory = () => {
//   return (
//     <div>SellerProductsInventory</div>
//   )
// }

// export default SellerProductsInventory