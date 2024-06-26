import React from 'react';
import docImg from '../../assets/NicePng_doctor-png_336282 1.png';
import headingImg from '../../assets/Heading.png';
import './hero.css'

const Hero = () => {
  return (
    <div className='container'>
    <div className='row align-items-center'>
      <div className='col-lg-6'>
        <img src={headingImg} alt='hero img'/>
        <p className='headingContent'>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
        <button className='heroBtn'>Find Center</button>
      </div>
      <div className='col-lg-5'>
        <img src={docImg} alt="doctor img" />
      </div>
    </div>
    </div>
  )
}

export default Hero
