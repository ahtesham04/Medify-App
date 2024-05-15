import React from 'react';
import docImg from '../../assets/NicePng_doctor-png_336282 1.png';
import headingImg from '../../assets/Heading.png';
import './hero.css'

const Hero = () => {
  return (
    <div className='row align-items-center'>
      <div className='col-lg-6'>
        {/* <div className='headingContent'>
        <h2 className='heading'>Skip the travel! Find Online</h2>
        <h1 className='subHeading'>Medical Centers</h1>
        </div> */}
        {/* <h1  className='heading'>Skip the travel! Find Online <br/>
        <span className='subHeading'>Medical</span> <span>Centers</span>
        </h1> */}
        <img src={headingImg}/>
        <p className='headingContent'>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
        <button className='heroBtn'>Find Center</button>
      </div>
      <div className='col-lg-5'>
        <img src={docImg} alt="doctor img" />
      </div>
    </div>
  )
}

export default Hero
