import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Header from './component/header'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
