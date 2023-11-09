import React from 'react';

const OrderDetails = ({ order }) => {
  if (!order) {
    return <div>Select an order to view details.</div>;
  }

  return (
    <div>
      <h2 className="mb-3">Order Details</h2>
      <p>Order ID: {order.id}</p>
      <p>Customer: {order.customerName}</p>
      <p>Total Amount: ${order.totalAmount.toFixed(2)}</p>
      <p>Status: {order.status}</p>
    </div>
  );
}

export default OrderDetails;
