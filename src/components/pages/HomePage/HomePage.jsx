import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Hero from '../../HeroSection/Hero'
import './home.css'
import Promo from '../../promo/Promo'
import Service from '../../Services/Service'
import Specialist from '../../DrSpecialist/Specialist'
import Patient from '../../PatientCare/Patient'
import Blog from '../../Blog/Blog'
import Family from '../../Families/Family'
import Search from '../../SearchSection/Search'
import Faq from '../../Faq/Faq'
import Footer from '../../Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <div className='section1'>
        <Navbar type="home"/>
      <Hero />
        </div>
        <Search />
        <div style={{background:"#fff"}}>
      <Promo />
      
      </div>
      
      <Service/>
      <Specialist/>
      <div>
        <Patient/>
      </div>
      <Blog/>
      <Family/>
      <Faq />
      <Footer />
      
    </div >
    
  )
}

export default HomePage
