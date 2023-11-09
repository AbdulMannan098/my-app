import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import {BookmarkHeart, Grid, HouseExclamation, People, PeopleFill, Speedometer2, Table} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SubHeader from './SubHeader';

const Header = () => {
  const {user}=useSelector((state)=>({...state}))
  let userRole=user ? user.role || window.localStorage.getItem("userRole") : "";
  let User=user ? window.localStorage.getItem("user"):""
  // const Customer= (!user || !userRole || !userRole==="customer") ? false:true;
  // const Seller= (!user || !userRole || !userRole==="seller") ? false :true;
  const Customer= User && userRole==="customer" ? true : false
  const Seller= User  && userRole==="seller" ? true: false;
  
  const Regulator=false;
  return (
    <header>
        <div className='px-3 py-2 bg-dark text-white'>
            <div className='container'>
                <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
                <Link href='/' className='d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none'>
                    <svg className='bi me-2' width="40" height="32" role='img' aria-label='Bootstrap'>
                    <BookmarkHeart/>
                    </svg>
                </Link>
                <ul className='nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-center'>
                {!User && (<li>
                        <Link to='/' className='nav-link text-secondary'>
                          <svg className='bi d-block mx-auto mb-1' width="24" height="24">
                            <HouseExclamation/>
                          </svg>      
                          Home
                        </Link>
                    </li>
                 )}{
                  (Customer && (!Seller && !Regulator)) && (
                    <>
                    <li>
                        <Link to='/customer/home' className='nav-link text-secondary'>
                          <svg className='bi d-block mx-auto mb-1' width="24" height="24">
                            <HouseExclamation/>
                          </svg>      
                          Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/customer-dashboard' className='nav-link text-white'>
                          <svg className='bi d-block mx-auto mb-1' width="24" height="24">
                            <Speedometer2/>    
                          </svg>      
                          Dashboard
                        </Link>
                    </li>
                    </>
                    )
                    }          
                    {
                  (Seller && (!Customer && !Regulator)) && (
                    <>
                    <li>
                        <Link to='/seller/home' className='nav-link text-secondary'>
                          <svg className='bi d-block mx-auto mb-1' width="24" height="24">
                            <HouseExclamation/>
                          </svg>      
                          Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/seller-dashboard' className='nav-link text-white'>
                          <svg className='bi d-block mx-auto mb-1' width="24" height="24">
                            <Speedometer2/>    
                          </svg>      
                        Seller Dashboard
                        </Link>
                    </li>
                    </>
                  )}
                  {
                    (Regulator && (!Customer && !Seller)) && (
                      <li>
                        <Link to='/regulator-dashboard' className='nav-link text-white'>
                          <svg className='bi d-block mx-auto mb-1' width="24" height="24">
                            <Speedometer2/>    
                          </svg>      
                         Regulator Dashboard
                        </Link>
                    </li>
                    )
                  }
                    {(Regulator || Seller || Customer ) &&(
                      <li>
                      {Customer ? (<Link to='/my-orders' className='nav-link text-white'>
                          <svg className='bi d-block mx-auto mb-1' width="24" height="24">
                            <Table/>
                          </svg>
                          My Orders      
                        </Link>) :(<Link to='/orders' className='nav-link text-white'>
                          <svg className='bi d-block mx-auto mb-1' width="24" height="24">
                            <Table/>
                          </svg>    
                          Orders
                        </Link>)}
                        
                    </li>
                    )}
                    {((Seller || Regulator) && (!Customer) ) && (
                    <li>
                        <Link to='/products' className='nav-link text-white'>
                          <svg className='bi d-block mx-auto mb-1' width="24" height="24">
                            <Grid/>
                          </svg>      
                          Products
                        </Link>
                    </li>
                    )}
                    {((!Seller && !Regulator) && (Customer) ) && (
                    <li>
                        <Link to='/customer/products' className='nav-link text-white'>
                          <svg className='bi d-block mx-auto mb-1' width="24" height="24">
                            <Grid/>
                          </svg>      
                          Products
                        </Link>
                    </li>
                    )}
                    {((Seller || Regulator) && (!Customer) ) && (
                      <li>
                      <Link to='/customers' className='nav-link text-white'>
                          <svg className='bi d-block mx-auto mb-1' width="24" height="24">
                            <People/>
                          </svg>      
                          Customers
                        </Link>
                    </li>
                        )}
                        {((Regulator) && (!Customer && !Seller) ) && (
                      <li>
                      <Link to='/Sellers' className='nav-link text-white'>
                          <svg className='bi d-block mx-auto mb-1' width="24" height="24">
                            <PeopleFill/>
                          </svg>      
                          Sellers
                        </Link>
                    </li>
                        )}
                </ul>
                </div>
            </div>
        </div>
        <SubHeader/>
        {/* <div className='px-3 py-2 border-bottom mb-3 bg-body'>
            <div className='container d-flex flex-wrap justify-content-center'>
                <form className='col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto'>
                <input type='search' className='form-control' placeholder="Search..." aria-label='Search'>
                </input>
                </form>
                <div className='text-end'>
                    <button type='button' className='btn btn-light text-dark me-2' >
                      <Link to="/login" style={{textDecoration:"none"}}>Login</Link>
                    </button>
                    <button type="button" className='btn btn-light' color='#520b64'>
                      <Link to="/sign-up" style={{textDecoration:"none"}}>Sign-Up</Link>
                    </button>
                </div>
            </div>
        </div> */}
    </header>
    )
}

export default Header