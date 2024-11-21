import React from 'react'
import './Menu.css'
import Location from '../images/Location.svg'
import Clock from '../images/Clock.svg'
import Stripe from '../images/Stripe.png'
import Search from '../images/Search.svg'
import ChickenRolls from '../Products/ChickenRolls'
import NonVeg from '../images/Non Veg.svg'
import AddToCart from '../images/AddToCart.svg'
import LunchSpls from '../Products/LunchSpls'
import ChickenBuckets from '../Products/ChickenBuckets'
import BoxMeals from '../Products/BoxMeals'
import Snackers from '../Products/Snackers'
import BurgerFests from '../Products/BurgerFests'
import Burgers from '../Products/Burgers'
import Sides from '../Products/Sides'
import Beverages from '../Products/Beverages'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice'

const Menu = () => {

  const cartProducts = useSelector((state)=>state.cart.cartItems)
  const dispatch = useDispatch()

  const addCart = (item) => {
    dispatch(addToCart(item))
  }

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item))
  }

  return (
    <div>
        <div className='container w-100 p-5'>
            <div className='bg-black pt-5 pb-3 d-flex justify-content-center text-white mt-5 fixed-top z-1'>
                <p className='mt-3'><img src={Location} alt='Location'/> <span className='mx-2'>Dine in at: KFC Coimbatore - Thudiyalur</span>  <img src={Clock} alt='ASAP'/> <span className='mx-2'>ASAP</span> </p>
                <button className='bg-black text-white border-2 border-white rounded-pill px-3 ms-3'>Change</button>
            </div>
            <div className='row mt-5 pt-4'>
                <div className='col-lg-3 sidebar my-5'>
                <img src={Stripe} alt='Stripe'/>
                <h3 className='fw-bold my-3'>KFC MENU</h3>
                  <ul className='d-flex flex-column list-unstyled gap-3'>
                    <li className='text-secondary text-decoration-none fw-medium'>New Chicken Rolls</li>
                    <li className='text-secondary text-decoration-none fw-medium'>Value Lunch Specials</li>
                    <li className='text-secondary text-decoration-none fw-medium'>Chicken Buckets</li>
                    <li className='text-secondary text-decoration-none fw-medium'>Box Meals</li>
                    <li className='text-secondary text-decoration-none fw-medium'>Snackers @99</li>
                    <li className='text-secondary text-decoration-none fw-medium'>International Burger Fest</li>
                    <li className='text-secondary text-decoration-none fw-medium'>Burgers</li>
                    <li className='text-secondary text-decoration-none fw-medium'>Sides</li>
                    <li className='text-secondary text-decoration-none fw-medium'>Beverages and Desserts</li>
                  </ul> 
                </div>
                <div className='col-lg-9'>
                    <img src={Search} alt='Search'/> <input type='text' placeholder='Search Our Menu' className='rounded-pill border-2 border-secondary'/>
                    <hr className='border-2 border-dark'/>
                    <h3 className='fw-bold mt-5 mb-3'>NEW CHICKEN ROLLS</h3>

                    <div className='row'>
                        {ChickenRolls.map((item)=>(
                        <div className='col-lg-4 mt-3'>
                            <div className='card shadow w-100' key={item.id}>
                            <img src={item.img} alt='' width="287px" height="200px"/>
                            <div className='p-3'>
                                <p className='lh-1 fw-bold mt-2'>{item.title}</p>
                                <p className='lh-1 text-secondary fw-medium'><img className='me-2' src={NonVeg} alt='Non Veg'/>{item.category}</p>
                                <p className='lh-1 fw-bold'>{item.price}</p>
                                <p className='text-secondary fw-medium'>{item.desc}</p>
                            </div>
                            <div className='text-center mb-3'>
                              {cartProducts.find((Items)=>Items.id === item.id) ?
                              (<button className='bg-danger border-0 rounded-pill text-white px-4 py-2' onClick={()=>deleteCart(item)}>Delete From Cart <img src={AddToCart} alt='Delete From Cart'/></button>):
                              (<button className='bg-success border-0 rounded-pill text-white px-4 py-2' onClick={()=>addCart(item)}>Add To Cart <img src={AddToCart} alt='Add To Cart'/></button>)
                              }                             
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className='row'>
                        {LunchSpls.map((item)=>(
                        <div className='col-lg-4 mt-3'>
                            <div className='card shadow w-100' key={item.id}>
                            <img src={item.img} alt='' width="287px" height="200px"/>
                            <div className='p-3'>
                                <p className='lh-1 fw-bold mt-2'>{item.title}</p>
                                <p className='lh-1 text-secondary fw-medium'><img className='me-2' src={NonVeg} alt='Non Veg'/>{item.category}</p>
                                <p className='lh-1 fw-bold'>{item.price}</p>
                                <p className='text-secondary fw-medium'>{item.desc}</p>
                            </div>
                            <div className='text-center mb-3'>
                              {cartProducts.find((Items)=>Items.id === item.id) ?
                              (<button className='bg-danger border-0 rounded-pill text-white px-4 py-2' onClick={()=>deleteCart(item)}>Delete From Cart <img src={AddToCart} alt='Delete From Cart'/></button>):
                              (<button className='bg-success border-0 rounded-pill text-white px-4 py-2' onClick={()=>addCart(item)}>Add To Cart <img src={AddToCart} alt='Add To Cart'/></button>)
                              }                               
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className='row'>
                        {ChickenBuckets.map((item)=>(
                        <div className='col-lg-4 mt-3'>
                            <div className='card shadow w-100' key={item.id}>
                            <img src={item.img} alt='' width="287px" height="200px"/>
                            <div className='p-3'>
                                <p className='lh-1 fw-bold mt-2'>{item.title}</p>
                                <p className='lh-1 text-secondary fw-medium'><img className='me-2' src={NonVeg} alt='Non Veg'/>{item.category}</p>
                                <p className='lh-1 fw-bold'>{item.price}</p>
                                <p className='text-secondary fw-medium'>{item.desc}</p>
                            </div>
                            <div className='text-center mb-3'>
                              {cartProducts.find((Items)=>Items.id === item.id) ?
                              (<button className='bg-danger border-0 rounded-pill text-white px-4 py-2' onClick={()=>deleteCart(item)}>Delete From Cart <img src={AddToCart} alt='Delete From Cart'/></button>):
                              (<button className='bg-success border-0 rounded-pill text-white px-4 py-2' onClick={()=>addCart(item)}>Add To Cart <img src={AddToCart} alt='Add To Cart'/></button>)
                              }                               
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className='row'>
                        {BoxMeals.map((item)=>(
                        <div className='col-lg-4 mt-3'>
                            <div className='card shadow w-100' key={item.id}>
                            <img src={item.img} alt='' width="287px" height="200px"/>
                            <div className='p-3'>
                                <p className='lh-1 fw-bold mt-2'>{item.title}</p>
                                <p className='lh-1 text-secondary fw-medium'><img className='me-2' src={NonVeg} alt='Non Veg'/>{item.category}</p>
                                <p className='lh-1 fw-bold'>{item.price}</p>
                                <p className='text-secondary fw-medium'>{item.desc}</p>
                            </div>
                            <div className='text-center mb-3'>
                              {cartProducts.find((Items)=>Items.id === item.id) ?
                              (<button className='bg-danger border-0 rounded-pill text-white px-4 py-2' onClick={()=>deleteCart(item)}>Delete From Cart <img src={AddToCart} alt='Delete From Cart'/></button>):
                              (<button className='bg-success border-0 rounded-pill text-white px-4 py-2' onClick={()=>addCart(item)}>Add To Cart <img src={AddToCart} alt='Add To Cart'/></button>)
                              }                               
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className='row'>
                        {Snackers.map((item)=>(
                        <div className='col-lg-4 mt-3'>
                            <div className='card shadow w-100' key={item.id}>
                            <img src={item.img} alt='' width="287px" height="200px"/>
                            <div className='p-3'>
                                <p className='lh-1 fw-bold mt-2'>{item.title}</p>
                                <p className='lh-1 text-secondary fw-medium'><img className='me-2' src={NonVeg} alt='Non Veg'/>{item.category}</p>
                                <p className='lh-1 fw-bold'>{item.price}</p>
                                <p className='text-secondary fw-medium'>{item.desc}</p>
                            </div>
                            <div className='text-center mb-3'>
                              {cartProducts.find((Items)=>Items.id === item.id) ?
                              (<button className='bg-danger border-0 rounded-pill text-white px-4 py-2' onClick={()=>deleteCart(item)}>Delete From Cart <img src={AddToCart} alt='Delete From Cart'/></button>):
                              (<button className='bg-success border-0 rounded-pill text-white px-4 py-2' onClick={()=>addCart(item)}>Add To Cart <img src={AddToCart} alt='Add To Cart'/></button>)
                              }                               
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className='row'>
                        {BurgerFests.map((item)=>(
                        <div className='col-lg-4 mt-3'>
                            <div className='card shadow w-100' key={item.id}>
                            <img src={item.img} alt='' width="287px" height="200px"/>
                            <div className='p-3'>
                                <p className='lh-1 fw-bold mt-2'>{item.title}</p>
                                <p className='lh-1 text-secondary fw-medium'><img className='me-2' src={NonVeg} alt='Non Veg'/>{item.category}</p>
                                <p className='lh-1 fw-bold'>{item.price}</p>
                                <p className='text-secondary fw-medium'>{item.desc}</p>
                            </div>
                            <div className='text-center mb-3'>
                              {cartProducts.find((Items)=>Items.id === item.id) ?
                              (<button className='bg-danger border-0 rounded-pill text-white px-4 py-2' onClick={()=>deleteCart(item)}>Delete From Cart <img src={AddToCart} alt='Delete From Cart'/></button>):
                              (<button className='bg-success border-0 rounded-pill text-white px-4 py-2' onClick={()=>addCart(item)}>Add To Cart <img src={AddToCart} alt='Add To Cart'/></button>)
                              }                               
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className='row'>
                        {Burgers.map((item)=>(
                        <div className='col-lg-4 mt-3'>
                            <div className='card shadow w-100' key={item.id}>
                            <img src={item.img} alt='' width="287px" height="200px"/>
                            <div className='p-3'>
                                <p className='lh-1 fw-bold mt-2'>{item.title}</p>
                                <p className='lh-1 text-secondary fw-medium'><img className='me-2' src={NonVeg} alt='Non Veg'/>{item.category}</p>
                                <p className='lh-1 fw-bold'>{item.price}</p>
                                <p className='text-secondary fw-medium'>{item.desc}</p>
                            </div>
                            <div className='text-center mb-3'>
                              {cartProducts.find((Items)=>Items.id === item.id) ?
                              (<button className='bg-danger border-0 rounded-pill text-white px-4 py-2' onClick={()=>deleteCart(item)}>Delete From Cart <img src={AddToCart} alt='Delete From Cart'/></button>):
                              (<button className='bg-success border-0 rounded-pill text-white px-4 py-2' onClick={()=>addCart(item)}>Add To Cart <img src={AddToCart} alt='Add To Cart'/></button>)
                              }                               
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className='row'>
                        {Sides.map((item)=>(
                        <div className='col-lg-4 mt-3'>
                            <div className='card shadow w-100' key={item.id}>
                            <img src={item.img} alt='' width="287px" height="200px"/>
                            <div className='p-3'>
                                <p className='lh-1 fw-bold mt-2'>{item.title}</p>
                                <p className='lh-1 text-secondary fw-medium'><img className='me-2' src={NonVeg} alt='Non Veg'/>{item.category}</p>
                                <p className='lh-1 fw-bold'>{item.price}</p>
                                <p className='text-secondary fw-medium'>{item.desc}</p>
                            </div>
                            <div className='text-center mb-3'>
                              {cartProducts.find((Items)=>Items.id === item.id) ?
                              (<button className='bg-danger border-0 rounded-pill text-white px-4 py-2' onClick={()=>deleteCart(item)}>Delete From Cart <img src={AddToCart} alt='Delete From Cart'/></button>):
                              (<button className='bg-success border-0 rounded-pill text-white px-4 py-2' onClick={()=>addCart(item)}>Add To Cart <img src={AddToCart} alt='Add To Cart'/></button>)
                              }                               
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className='row'>
                        {Beverages.map((item)=>(
                        <div className='col-lg-4 mt-3'>
                            <div className='card shadow w-100' key={item.id}>
                            <img src={item.img} alt='' width="287px" height="200px"/>
                            <div className='p-3'>
                                <p className='lh-1 fw-bold mt-2'>{item.title}</p>
                                <p className='lh-1 text-secondary fw-medium'><img className='me-2' src={NonVeg} alt='Non Veg'/>{item.category}</p>
                                <p className='lh-1 fw-bold'>{item.price}</p>
                                <p className='text-secondary fw-medium'>{item.desc}</p>
                            </div>
                            <div className='text-center mb-3'>
                              {cartProducts.find((Items)=>Items.id === item.id) ?
                              (<button className='bg-danger border-0 rounded-pill text-white px-4 py-2' onClick={()=>deleteCart(item)}>Delete From Cart <img src={AddToCart} alt='Delete From Cart'/></button>):
                              (<button className='bg-success border-0 rounded-pill text-white px-4 py-2' onClick={()=>addCart(item)}>Add To Cart <img src={AddToCart} alt='Add To Cart'/></button>)
                              }                               
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>        
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu