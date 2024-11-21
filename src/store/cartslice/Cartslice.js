import {createSlice} from '@reduxjs/toolkit'

const storedItems = localStorage.getItem('cartItems')
const initialState = {
    cartItems: storedItems ? JSON.parse(storedItems) : []
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload
            const existingItem = state.cartItems.find(Items => Items.id === newItem.id)
            if(existingItem)
                existingItem.quantity = newItem.quantity
            else
            {
                state.cartItems.push({
                    id: newItem.id,
                    img: newItem.img,
                    desc: newItem.desc,
                    price: newItem.price,
                    foodtype: newItem.foodtype,
                    quantity: newItem.quantity
                })
            }
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        deleteFromCart:(state,action)=>{
            state.cartItems = state.cartItems.filter(Items => Items.id !== action.payload.id)
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        updateQuantity:(state,action)=>{
            const {id,quantity} = action.payload
            const itemToUpdate = state.cartItems.find(Item => Item.id === id)
            if(itemToUpdate){
                itemToUpdate.quantity = quantity
                localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
            }
        }
    }
})

export default CartSlice.reducer
export const{addToCart,deleteFromCart,updateQuantity} = CartSlice.actions