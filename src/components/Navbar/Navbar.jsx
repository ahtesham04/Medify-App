import React from 'react';
import logoImg from '../../assets/logo.png';
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = ({type}) => {
  return (
    <div className='container'>
    <div className='d-flex navContent align-items-center'>
      <div className='col-4'><Link to="/"><img src={logoImg} /></Link></div>
      <div className='d-flex justify-content-between col-8 align-items-center'>
        <div className='navList'><Link to="/hospitals">Find Doctors</Link></div>
        <div className='navList'>Hospitals</div>
        <div className='navList'>Medicines</div>
        <div className='navList'>Surgeries</div>
        <div className='navList'>Software for Provider</div>
        <div className='navList'>Facilities</div>
        <div><Link to="/myBooking"><button className='navBtn'>My Bookings</button></Link></div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
