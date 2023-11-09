import React from 'react';
import ProductManagement from './ProductManagement.jsx';
import SellerManagement from './SellerManagement.jsx';
import CustomerSupport from './CustomerSupport.jsx';
import './RegulatorDashboard.css';  // Import your CSS file for styling

const RegulatorDashboard = () => {
  return (
    <div className="container my-5 regulator-dashboard">
      <h1 className="text-center mb-4">Regulator Dashboard</h1>
      <div className="row">
        <div className="col-lg-6">
          <ProductManagement />
        </div>
        <div className="col-lg-6">
          <SellerManagement />
        </div>
      </div>
      <CustomerSupport />
    </div>
  );
}

export default RegulatorDashboard;
