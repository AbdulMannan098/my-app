import React from 'react';
import ProductManagement from './ProductManagement.jsx';
import FinanceManagement from './FinanceManagement.jsx';
import CustomerQuestions from './CustomerQuestions.jsx';
import './SellerDashboard.css'; // Import your CSS file for styling

const SellerDashboard = () => {
  return (
    <div className="container my-5 seller-dashboard">
      <h1 className="text-center mb-4">Seller Dashboard</h1>
      <div className="row">
        <div className="col-lg-6">
          <ProductManagement />
        </div>
        <div className="col-lg-6">
          <FinanceManagement />
        </div>
        <hr/>
        <div className="col-lg-6 center _expanded_" style={{objectFit:"cover"}}>
          <CustomerQuestions />
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;
