import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'
import Count from './Count.jsx'
import { Route, Routes } from 'react-router'

const App = () => {
  

  return (
    <>
      <div>
        <h1>Hello I am New To React</h1>
      </div>
      <Routes>
        <Route path='user' element={<User/>}/>
        <Route path='count' element={<Count/>}/>
      </Routes>
    </>
  )
}

export default App
