import React from 'react';

const OrderList = ({ orders, onOrderSelect }) => {
  return (
    <div>
      <h2 className="mb-3 text-center">Orders</h2>
      <ul className="list-group">
        {orders.map(order => (
          <li
            key={order.id}
            className="list-group-item mb-2"
            onClick={() => onOrderSelect(order.id)}
          >
            Order #{order.id} - {order.customerName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
