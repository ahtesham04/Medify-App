import React from 'react';
import logoImg from '../../assets/logo.png';
import './navbar.css'

const Navbar = ({type}) => {
  return (
    <div className='container'>
    <div className='d-flex navContent align-items-center'>
      <div className='col-4'><img src={logoImg} /></div>
      <div className='d-flex justify-content-between col-8 align-items-center'>
        <div className='navList'>Find Doctors</div>
        <div className='navList'>Hospitals</div>
        <div className='navList'>Medicines</div>
        <div className='navList'>Surgeries</div>
        <div className='navList'>Software for Provider</div>
        <div className='navList'>Facilities</div>
        <div><button className='navBtn'>My Bookings</button></div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
