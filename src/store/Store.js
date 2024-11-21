import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './cartslice/Cartslice'

export const store = configureStore({
    reducer:{cart:CartSlice},
    devTools:true
})