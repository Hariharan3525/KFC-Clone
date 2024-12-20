import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Deals from './Pages/Deals'
import Menu from './Pages/Menu'
import Cart from './Pages/Cart'
import Upload from './Pages/Upload'
import Update from './Pages/Update'
import Edit from './Pages/Edit'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/deals' element={<Deals />} />
          <Route path='/admin' element={<Upload />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/update' element={<Update />} />
          <Route path='/edit/:id' element={<Edit />} loader={({params}) => fetch(`http://localhost:5008/updateproducts/${params.id}`)} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App