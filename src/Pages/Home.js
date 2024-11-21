import React from 'react'
import './Home.css'
import Location from '../images/Location.svg'
import Clock from '../images/Clock.svg'
import Stripe from '../images/Stripe.png'
import Img1 from '../images/Img1.webp'
import Img2 from '../images/Img2.webp'
import Img3 from '../images/Img3.webp'
import WedSpl from '../images/Wed Spl.jpg'
import ChickenRolls from '../images/Chicken Rolls.jpg'
import LunchSpl from '../images/Lunch Spl.jpg'
import ChickenBuckets from '../images/Chicken Buckets.jpg'
import ArrowImg from '../images/ArrowImg.svg'
import { Link } from 'react-router-dom'
import ChickenGinger from '../images/ChickenGinger.jpg'
import Offer from '../images/Offer.jpg'
import HotandCrispy from '../images/Hot&Crispy.jpg'
import VegGinger from '../images/Veg Ginger.jpg'
import BoxMeals from '../images/Box Meals.jpg'
import Snackers from '../images/Snackers.jpg'
import BurgerFest from '../images/Burger Fest.jpg'
import Menu from '../images/Menu.svg'

const Home = () => {
  return (
    <div>
      <div className='container-fluid p-0 w-100 border-top'>
        <div className='d-flex align-items-center justify-content-center gap-3 my-2'>
          <img src={Location} alt='Location'/>
          <p className='fw-medium mt-3'>Allow location access for local store menu and promos</p>
          <button className='bg-black text-white fw-semibold rounded-pill px-3 py-1'>Set Location</button>
        </div>
        <div className='bg-black p-2 d-flex justify-content-center text-white pt-4'>
          <p className='mt-3'><img src={Location} alt='Location'/> <span className='mx-2'>Dine in at: KFC Coimbatore - Thudiyalur</span>  <img src={Clock} alt='ASAP'/> <span className='mx-2'>ASAP</span> </p>
          <button className='bg-black text-white border-2 border-white rounded-pill px-3 ms-3'>Change</button>
        </div>
        <div className='d-flex flex-column'>
          <img className='m-auto' src={Stripe} alt='Stripe' width="40px" height="25px"/>
          <h5 className='text-center fw-bold my-3'>SELECT YOUR ORDER TYPE TO START</h5>
          <div className='d-flex m-auto fw-medium rounded-pill bg-secondary-subtle px-5 py-2'>
            <button className='border border-end-0 rounded-pill bg-secondary-subtle fw-bold'>DELIVERY</button>
            <button className='border border-start-0 border-end-0 bg-secondary-subtle ms-5 fw-bold'>PICK UP</button>
            <button className='border border-start-0 rounded-pill bg-secondary-subtle ms-5 fw-bold'>DINE IN</button>
          </div>
        </div>
        <div id="carouselExampleAutoplaying" className="carousel slide my-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Img1} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={Img2} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={Img3} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className='container ps-5'>
          <div className='d-flex ms-5'>
            <h3 className='fw-bold'>BROWSE CATEGORIES</h3>
          </div>
          <div className='row ms-5 mt-3'>
            <div className='col-lg-3'>
              <img src={WedSpl} alt='Wed Spl' width="250px" height="200px"/>
              <p className='card fw-bold bg-secondary-subtle text-center py-3'>WEDNESDAY SPECIALS</p>
            </div>
            <div className='col-lg-3'>
              <img src={ChickenRolls} alt='Chicken Rolls' width="250px" height="200px"/>
              <p className='card fw-bold bg-secondary-subtle text-center py-3'>NEW CHICKEN ROLLS</p>
            </div>
            <div className='col-lg-3'>
              <img src={LunchSpl} alt='Lunch Spl' width="250px" height="200px"/>
              <p className='card fw-bold bg-secondary-subtle text-center py-3'>VALUE LUNCH SPECIALS</p>
            </div>
            <div className='col-lg-3'>
              <img src={ChickenBuckets} alt='Chicken Buckets' width="250px" height="200px"/>
              <p className='card fw-bold bg-secondary-subtle text-center py-3'>CHICKEN BUCKETS</p>
            </div>
          </div>
          <div className='row ms-5 mt-3'>
            <div className='col-lg-3'>
              <img src={BoxMeals} alt='Wed Spl' width="250px" height="200px"/>
              <p className='card fw-bold bg-secondary-subtle text-center py-3'>BOX MEALS</p>
            </div>
            <div className='col-lg-3'>
              <img src={Snackers} alt='Chicken Rolls' width="250px" height="200px"/>
              <p className='card fw-bold bg-secondary-subtle text-center py-3'>SNACKERS @99</p>
            </div>
            <div className='col-lg-3'>
              <img src={BurgerFest} alt='Lunch Spl' width="250px" height="200px"/>
              <p className='card fw-bold bg-secondary-subtle text-center py-3'>INTERNATIONAL BURGER FEST</p>
            </div>
            <div className='col-lg-3'>
              <img src={Menu} alt='Chicken Buckets' width="250px" height="200px"/>
              <div className='card d-flex'>
                <Link className='fw-medium bg-secondary-subtle text-center text-black text-decoration-none p-3' to='/'>View All Menu</Link>
                {/* <img className='w-25' src={ArrowImg} alt='ArrowImg'/> */}
              </div>
            </div>
          </div>
        </div>

          <div className='bg-black ps-5 mt-3'>
            <div className='container'>
              <img className='ms-5' src={Stripe} alt='Stripe'/>
              <div className='d-flex justify-content-between ms-5 my-4'>
                <h3 className='text-white fw-bold '>EXCLUSIVE OFFERS FOR YOU</h3>
                <Link to='/' className='deals text-white text-decoration-none me-5 pe-5'>View All Deals <img src={ArrowImg} alt='ArrowImg'/></Link>
              </div>

              <div className='row ps-5'>
                <div className='col-lg-3'>
                  <div className='card w-100'>
                    <img src={ChickenGinger} alt='Coming Soon' height="230px" />
                    <h3 className='text-danger fw-bold text-center mt-2'>Free Chicken Zinger ...</h3>
                    <p className='text-center mx-2'>1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered</p>
                    <div className='d-flex justify-content-around align-items-center mb-3'>
                      <Link to='/' className='text-black fw-medium'>View Details</Link>
                      <button className='fw-medium px-4 py-2 rounded-pill'>Apply Offer</button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='card w-100'>
                    <img src={Offer} alt='Coming Soon' height="230px" />
                    <h3 className='text-danger fw-bold text-center mt-2'>Upto Rs 100 off ...</h3>
                    <p className='text-center mx-2'>Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order onwards for...</p>
                    <div className='d-flex justify-content-around align-items-center mb-3'>
                      <Link to='/' className='text-black fw-medium'>View Details</Link>
                      <button className='fw-medium px-4 py-2 rounded-pill'>Apply Offer</button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='card w-100'>
                    <img src={HotandCrispy} alt='Coming Soon' height="230px" />
                    <h3 className='text-danger fw-bold text-center mt-2'>Add 2 Pc Hot N ...</h3>
                    <p className='text-center mx-2'>Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable ...</p>
                    <div className='d-flex justify-content-around align-items-center mb-3'>
                      <Link to='/' className='text-black fw-medium'>View Details</Link>
                      <button className='fw-medium px-4 py-2 rounded-pill'>Apply Offer</button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='card w-100'>
                    <img src={VegGinger} alt='Coming Soon' height="230px" />
                    <h3 className='text-danger fw-bold text-center mt-2'>1 Pc free Veg Zinger...</h3>
                    <p className='text-center mx-2'>1 Pc free Veg Zinger on a cart value of Rs.499 or above on first order. Only for registered users</p>
                    <div className='d-flex justify-content-around align-items-center mb-3'>
                      <Link to='/' className='text-black fw-medium'>View Details</Link>
                      <button className='fw-medium px-4 py-2 rounded-pill'>Apply Offer</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home