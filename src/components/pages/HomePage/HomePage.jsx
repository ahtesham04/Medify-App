import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Hero from '../../HeroSection/Hero'
import './home.css'
import Promo from '../../promo/Promo'

const HomePage = () => {
  return (
    <div className='container'>
        <div className='section1'>
        <Navbar />
      <Hero />
        </div>
      <Promo />
    </div >
  )
}

export default HomePage
