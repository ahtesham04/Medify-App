import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Hero from '../../HeroSection/Hero'
import './home.css'
import Promo from '../../promo/Promo'
import Service from '../../Services/Service'
import Specialist from '../../DrSpecialist/Specialist'

const HomePage = () => {
  return (
    <div>
        <div className='section1 container'>
        <Navbar />
      <Hero />
        </div>
        <div style={{background:"#fff"}}>
      <Promo />
      
      </div>
      <Service/>
      <Specialist/>
    </div >
    
  )
}

export default HomePage
