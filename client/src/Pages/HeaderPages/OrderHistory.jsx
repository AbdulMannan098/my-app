import React from 'react';

const OrderHistory = () => {
  const orderHistory = [
    { id: 1, date: '2023-09-10', total: 150.0 },
    { id: 2, date: '2023-09-05', total: 200.0 },
    { id: 3, date: '2023-08-30', total: 100.0 }
  ];

  return (
    <div>
      <h2 className="mb-3">Order History</h2>
      <ul>
        {orderHistory.map(order => (
          <li key={order.id}>Order {order.id} - Date: {order.date}, Total: ${order.total}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrderHistory;
