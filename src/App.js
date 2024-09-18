import React from 'react'
import Header from './Components/Header/Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='font-poppins'>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Footer />
    </div>
  )
}

export default App