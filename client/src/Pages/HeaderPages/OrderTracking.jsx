import React from 'react';

const OrderTracking = () => {
  const orders = [
    { id: 1, status: 'Shipped' },
    { id: 2, status: 'Processing' },
    { id: 3, status: 'Delivered' }
  ];

  return (
    <div>
      <h2 className="mb-3">Order Tracking</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>Order {order.id} - Status: {order.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrderTracking;
