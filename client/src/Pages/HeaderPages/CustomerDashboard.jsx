import React from 'react';
import OrderTracking from './OrderTracking.jsx';
import OrderHistory from './OrderHistory.jsx';
import '../../Styles/CustomerDashboard.css'; // Import your CSS file for styling

const CustomerDashboard = () => {
  return (
    <div className="container my-5 customer-dashboard">
      <h1 className="text-center mb-4">Customer Dashboard</h1>
      <div className="row">
        <div className="col-lg-6">
          <OrderTracking />
        </div>
        <div className="col-lg-6">
          <OrderHistory />
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
