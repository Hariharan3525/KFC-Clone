import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, updateQuantity } from '../store/cartslice/Cartslice'

const Cart = () => {
  const cartProducts = useSelector((state)=>state.cart.cartItems)
  const dispatch = useDispatch()
  
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item))
  }

  const incrementCart = (id,quantity) => {
    dispatch(updateQuantity({id,quantity:quantity+1}))
  }

  const decrementCart = (id,quantity) => {
    if(quantity>1)
      dispatch(updateQuantity({id,quantity:quantity-1}))
  }

  return (
    <div>
      <div className='container'>
        <h2 className='text-center mt-5 pt-5'>MY CART</h2>
        <div className='row mt-3 mb-5'>
          {cartProducts.map((item)=>(
            <div className='col-lg-3'>
              <div className='card shadow w-100 mt-3' key={item.id}>
                <img src={item.img} alt='' width="304px" height="220px"/>
                <div className='p-3'>
                  <p className='fw-bold lh-1 mt-2'>{item.title}</p>
                  <p className='text-seondary lh-1 fw-medium'>{item.foodtype}</p>
                  <p className='fw-bold lh-1'>{item.price}</p>
                  <p className='text-secondary fw-medium'>{item.desc}</p>
                </div>
                <div className='d-flex justify-content-around mb-3'>
                  <button className='btn btn-danger' onClick={()=>deleteCart(item)}>Delete</button>
                  <div>Qty : 
                    <button className='btn btn-danger mx-2 fw-bold' onClick={()=>decrementCart(item.id,item.quantity)}>-</button>
                    {item.quantity}
                    <button className='btn btn-success ms-2 fw-bold' onClick={()=>incrementCart(item.id,item.quantity)}>+</button>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>

      </div>
    </div>
  )
}

export default Cart