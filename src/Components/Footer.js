import React from 'react'
import KFC from '../images/KFC.svg'
import FindKFC from '../images/Find_KFC.svg'
import GooglePlay from '../images/google_play.svg'
import AppStore from '../images/App Store.svg'
import Instagram from '../images/Instagram.svg'
import Facebook from '../images/Facebook.svg'
import Twitter from '../images/Twitter.svg'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='bg-black pt-5'>
                <div className='container w-100 text-white py-5'>
                    <div className='d-flex gap-4 py-5'>
                        <img src={KFC} alt='KFC'/>
                        <div className='d-flex flex-column ms-5'>
                            <p className='lh-1'>KFC India</p>
                            <a href='/' className='text-decoration-none text-white'>About KFC</a>
                            <a href='/' className='text-decoration-none text-white'>KFC Care</a>
                            <a href='/' className='text-decoration-none text-white'>Careers</a>
                            <a href='/' className='text-decoration-none text-white'>Our Golden Past</a>
                            <a href='/' className='text-decoration-none text-white'>Responsible Disclosure</a>
                        </div>
                        <div className='d-flex flex-column'>
                            <p className='lh-1'>Legal</p>
                            <a href='/' className='text-decoration-none text-white'>Terms and Conditions</a>
                            <a href='/' className='text-decoration-none text-white'>Privacy Policy</a>
                            <a href='/' className='text-decoration-none text-white'>Disclaimer</a>
                            <a href='/' className='text-decoration-none text-white'>Caution Notice</a>
                        </div>
                        <div className='d-flex flex-column'>
                            <p className='lh-1'>KFC Food</p>
                            <a href='/' className='text-decoration-none text-white'>Menu</a>
                            <a href='/' className='text-decoration-none text-white'>Order Lookup</a>
                            <a href='/' className='text-decoration-none text-white'>Gift Card</a>
                            <a href='/' className='text-decoration-none text-white'>Nutrition & Allergen</a>
                        </div>
                        <div className='d-flex flex-column'>
                            <p className='lh-1'>Support</p>
                            <a href='/' className='text-decoration-none text-white'>Get Help</a>
                            <a href='/' className='text-decoration-none text-white'>Contact Us</a>
                            <a href='/' className='text-decoration-none text-white'>KFC Feedback</a>
                            <a href='/' className='text-decoration-none text-white'>Privacy Policy</a>
                        </div>
                        <div className='ms-5'>
                            <img src={FindKFC} alt='FindKFC'/>
                            <a href='/' className='text-white ms-2'>Find a KFC</a>
                        </div>
                        <div className='ms-5'>
                            <img src={GooglePlay} alt='Google Play'/>
                        </div>
                        <div className='ms-1'>
                            <img src={AppStore} alt='App Store'/>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <p className='m-auto'>Copyright © KFC Corporation 2024 All rights reserved</p>
                        <img src={Instagram} alt='Instagram'/>
                        <img className='ms-2' src={Facebook} alt='Facebook'/>
                        <img className='ms-2' src={Twitter} alt='Twitter'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer