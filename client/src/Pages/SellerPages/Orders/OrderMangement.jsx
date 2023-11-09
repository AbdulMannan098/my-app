import React, { useState } from 'react';
import OrderList from './OrderList.jsx';
import OrderDetails from './OrderDetails.jsx';
import './OrderManagement.css'; // Import your CSS file for styling

const OrderManagement = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      totalAmount: 100.0,
      status: 'Pending'
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      totalAmount: 150.0,
      status: 'Shipped'
    },
    // Add more orders as needed
  ]);

  const handleOrderSelect = (orderId) => {
    const order = orders.find(order => order.id === orderId);
    setSelectedOrder(order);
  };

  return (
    <div className="container my-5 order-management">
      <h1 className="text-center mb-4">Order Management</h1>
      <div className="row ace">
        <div className="col-lg-4" style={{cursor:"pointer"}}>
          <OrderList orders={orders} onOrderSelect={handleOrderSelect} />
        </div>
        <div className="col-lg-8">
          <OrderDetails order={selectedOrder} />
        </div>
      </div>
    </div>
  );
}

export default OrderManagement;







































// import React from 'react'

// const Orders = () => {
//   return (
//     <div>Orders</div>
//   )
// }

// export default Orders