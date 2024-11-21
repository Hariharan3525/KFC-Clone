import React from 'react'
import Clock from '../images/Clock.svg'
import Location from '../images/Location.svg'
import './Deals.css'
import Stripe from '../images/Stripe.png'
import { Link } from 'react-router-dom'
import ChickenGinger from '../images/ChickenGinger.jpg'
import Offer from '../images/Offer.jpg'
import HotandCrispy from '../images/Hot&Crispy.jpg'
import VegGinger from '../images/Veg Ginger.jpg'

const Deals = () => {
  return (
    <div>
        <div className='container-fluid p-0 w-100'>
            <div className='bg-black p-2 d-flex justify-content-center text-white'>
                <p className='mt-3'><img src={Location} alt='Location'/> <span className='mx-2'>Dine in at: KFC Coimbatore - Thudiyalur</span>  <img src={Clock} alt='ASAP'/> <span className='mx-2'>ASAP</span> </p>
                <button className='bg-black text-white border-2 border-white rounded-pill px-3 ms-3'>Change</button>
            </div>
            <div className='background d-flex'>
                <h1 className='offers m-auto text-white fw-bold'>OFFERS</h1>
            </div>
        </div>
        <div className='container w-100 px-5'>
            <img className='ms-5' src={Stripe} alt='Stripe'/>
            <div className='d-flex justify-content-between mx-5 mt-5'>
                <h3 className='fw-bold'>OFFERS FOR YOU</h3>
                <Link to='/' className='text-black'>Sign In to see exclusive offers & deals</Link>
            </div>
        
            <div className='row mx-5 mt-5'>
                <div className='col-lg-4'>
                    <div className='login card w-100 bg-danger d-flex justify-content-center align-items-center py-5'>
                        <h3 className='text-white text-center'>SIGN IN TO SEE MORE EXCLUSIVE OFFERS & DEALS</h3>
                        <button className='w-50 py-2 rounded-pill bg-danger text-white border border-2 border-white mt-4'>Login</button>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='card shadow w-100'>
                        <img src={ChickenGinger} alt='Free Chicken Ginger' height="250px" />
                        <h3 className='text-danger fw-bold text-center mt-2'>Free Chicken Zinger ...</h3>
                        <p className='text-center mx-2'>1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered</p>
                        <div className='d-flex justify-content-around align-items-center mb-3'>
                            <Link to='/' className='text-black fw-medium'>View Details</Link>
                            <button className='fw-medium px-4 py-2 rounded-pill'>Apply Offer</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='card shadow w-100'>
                        <img src={Offer} alt='Rs 100 Offer'height="250px" />
                        <h3 className='text-danger fw-bold text-center mt-2'>Upto Rs 100 off on min...</h3>
                        <p className='text-center mx-2'>Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order onwards for...</p>
                        <div className='d-flex justify-content-around align-items-center mb-3'>
                            <Link to='/' className='text-black fw-medium'>View Details</Link>
                            <button className='fw-medium px-4 py-2 rounded-pill'>Apply Offer</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mx-5 my-5'>
                <div className='col-lg-4'>
                    <div className='card shadow w-100'>
                        <img src={HotandCrispy} alt='Hot & Crispy' height="250px" />
                        <h3 className='text-danger fw-bold text-center mt-2'>Add 2 Pc Hot n Crispy...</h3>
                        <p className='text-center mx-2'>Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable ...</p>
                        <div className='d-flex justify-content-around align-items-center mb-3'>
                            <Link to='/' className='text-black fw-medium'>View Details</Link>
                            <button className='fw-medium px-4 py-2 rounded-pill'>Apply Offer</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='card shadow w-100'>
                        <img src={VegGinger} alt='1 Pc Free Veg Ginger'height="250px" />
                        <h3 className='text-danger fw-bold text-center mt-2'>1 Pc free Veg Zinger ...</h3>
                        <p className='text-center mx-1'>1 Pc free Veg Zinger on a cart value of Rs.499 or above on first order. Only for registered users</p>
                        <div className='d-flex justify-content-around align-items-center mb-3'>
                            <Link to='/' className='text-black fw-medium'>View Details</Link>
                            <button className='fw-medium px-4 py-2 rounded-pill'>Apply Offer</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'></div>
            </div>
        </div>
    </div>
  )
}

export default Deals