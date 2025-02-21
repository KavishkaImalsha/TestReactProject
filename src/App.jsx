import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'
import Count from './Count.jsx'
import { Route, Routes } from 'react-router'
import Products from './Products.jsx'
import AddProduct from './AddProduct.jsx'

const App = () => {
  

  return (
    <>
      <Routes>
        <Route path='user' element={<User/>}/>
        <Route path='count' element={<Count/>}/>
        <Route path='/' element={<Products/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
      </Routes>
    </>
  )
}

export default App
