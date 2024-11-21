import React from 'react'
import KFCLogo from '../images/KFC Logo.svg'
import SignIn from '../images/SignIn.svg'
import Cart from '../images/CartIcon.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div className='navbar bg-light fixed-top '>
          <nav className='container w-100 d-flex justify-content-between align-items-center p-2'>
            <div className='d-flex align-items-center gap-5'>
              <Link to='/'><img src={KFCLogo} alt='KFC'/></Link>
              <Link to='/menu' className='text-decoration-none text-black fw-medium'>Menu</Link>
              <Link to='/deals' className='text-decoration-none text-black fw-medium'>Deals</Link>
            </div>
            <div className='d-flex align-items-center gap-3 position-relative'>
              <img src={SignIn} alt='SignIn'/>
              <p className='fw-bold mt-3'>Sign In</p>
              <Link to='/admin' className='text-decoration-none text-black fw-medium'>Admin</Link>
              <span className='fw-medium'>₹0</span>
              <Link to='/cart'><img className='me-1' src={Cart} alt='Cart' width="50px" height="50px"/></Link>
              <p className='position-absolute fw-bold end-0 mt-3 me-4'>0</p>
            </div>
          </nav>
        </div>
    </div>
  )
}

export default Navbar