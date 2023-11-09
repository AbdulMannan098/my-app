import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const SubHeader = () => {
  const {user}=useSelector((state)=>({...state}))
  let userRole=user ? user.role || window.localStorage.getItem("userRole") : "";
  let User=user ? window.localStorage.getItem("user"):""
  // const Customer= (!user || !userRole || !userRole==="customer") ? false:true;
  // const Seller= (!user || !userRole || !userRole==="seller") ? false :true;
  const Customer= User && userRole==="customer" ? true : false
  const Seller= User  && userRole==="seller" ? true: false;

  let dispatch=useDispatch();
  let navigate=useNavigate();
  
  const logout=()=>{
    dispatch({
        type:"LOGOUT",
        payload: null,
    });
    window.localStorage.removeItem("user")
    window.localStorage.removeItem("userRole")
    // window.localStorage.setItem("user","")
    // window.localStorage.setItem("userRole","")
    navigate('/login')
}
    return (
  <div className='px-3 py-2 border-bottom mb-3 bg-body' >
            <div className='container d-flex flex-wrap justify-content-center'>
                <form className='col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto'>
                <input type='search' className='form-control' placeholder="Search..." aria-label='Search'>
                </input>
                </form>
                {!User ? (<div className='text-end'>
                    <button type='button' className='btn btn-light text-dark me-2' >
                      <Link to="/login" style={{textDecoration:"none"}}>Login</Link>
                    </button>
                    <button type="button" className='btn btn-light' color='#520b64'>
                      <Link to="/sign-up" style={{textDecoration:"none"}}>Sign-Up</Link>
                    </button>
                </div>
) : (
            <div className='text-end'>
                <button type='button' onClick={logout} className='btn btn-light text-dark me-2' >
                Logout
                </button>
                </div>
                )}
             </div>
        </div>
    )
}

export default SubHeader