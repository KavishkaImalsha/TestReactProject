import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'
import Count from './Count.jsx'
import { Route, Routes } from 'react-router'
import Products from './Products.jsx'

const App = () => {
  

  return (
    <>
      <Routes>
        <Route path='user' element={<User/>}/>
        <Route path='count' element={<Count/>}/>
        <Route path='products' element={<Products/>}/>
      </Routes>
    </>
  )
}

export default App
