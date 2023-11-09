import 'react-toastify/dist/ReactToastify.css'; 
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import {ToastContainer} from 'react-toastify'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import './Styles/App.css'
import Dashboard from './Pages/HeaderPages/CustomerDashboard';
// import SellerDashboard from './Pages/HeaderPages/SellerDashboard';
import Register from './Pages/AuthenticationPages/Register';
import Login from './Pages/AuthenticationPages/Login';
import RegisterComplete from './Pages/AuthenticationPages/RegisterComplete';
import Products from './Pages/HeaderPages/Products';
import Orders from './Pages/SellerPages/Orders/OrderMangement';
import Customers from './Pages/HeaderPages/Customers';
import Sellers from './Pages/HeaderPages/Sellers';
import MyOrders from './Pages/HeaderPages/MyOrders';
import AddProducts from './Pages/SellerPages/AddProducts';
import SellerAllProducts from './Pages/SellerPages/SellerAllProducts';
import SellerProductsInventory from './Pages/SellerPages/SellerProductsInventory';
import SellerRegister from './Pages/AuthenticationPages/SellerAuthentication/SellerRegister';
import RegulatorDashboard from './Pages/RegulatorsPages/RegulatorDashboard';
import SellerDashboard from './Pages/SellerPages/SellerDashboard';
import ProductsForCustomer from './Components/ProductsForCustomer';
import CustomerDashboard from './Pages/HeaderPages/CustomerDashboard';
import SellerLogin from './Pages/SellerPages/SellerLogin';
import CustomerHomePage from './Pages/CustomerHomePage';
import SellerHomePage from './Pages/SellerHomePage';
import RegulatorHomePage from './Pages/RegulatorHome';
import UpdateProduct from './Pages/SellerPages/UpdateProduct';
// import SellerDashboard from './Components/src/app/SellerDashboard';

function App() {
  return (
    <div>
    <ToastContainer/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/customer/home' element={<CustomerHomePage/>}/>
      <Route path='/seller/home' element={<SellerHomePage/>}/>
      <Route path='/regulator/home' element={<RegulatorHomePage/>}/>
      <Route path='/customer-dashboard' element={<CustomerDashboard/>}/>
      <Route path='/seller-dashboard' element={<SellerDashboard/>}/>
      <Route path='/regulator-dashboard' element={<RegulatorDashboard/>}/>
      <Route path='/sign-up' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register-complete' element={<RegisterComplete/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/my-orders' element={<MyOrders/>}/>
      <Route path='/customers' element={<Customers/>}/>
      <Route path='/sellers' element={<Sellers/>}/>
      <Route path='/seller/add-product' element={<AddProducts/>}/>
      <Route path='/seller/edit-product/:slug' element={<UpdateProduct/>}/>
      <Route path='/seller/products' element={<SellerAllProducts/>}/>
      <Route path='/seller/products/inventory' element={<SellerProductsInventory/>}/>
      <Route path='/seller/register' element={<SellerRegister/>}/>
      <Route path='/customer/products' element={<ProductsForCustomer/>}/>
      <Route path='/seller/login' element={<SellerLogin/>}/>

      {/* <Route path='/seller-dashboard' element={<SellerDashboard/>}/> */}
    </Routes>
    </div>
    );
}

export default App;
