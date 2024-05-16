import React from 'react'
import footerImg from '../../assets/Group 1000011065 (2).png';
import { footerList } from '../../constant/data';
import logo from '../../assets/logo.png';
import elem1 from '../../assets/a.elementor-icon.png'
import elem2 from '../../assets/a.elementor-icon (1).png'
import elem3 from '../../assets/a.elementor-icon (2).png'
import elem4 from '../../assets/a.elementor-icon (3).png';
import './footer.css'
import arrow from '../../assets/rightArrow.png'

const Footer = () => {
  return (
    <div>
      <div className='footer1'>
        <img src={footerImg} className='fImg' alt='Footer Image'/>
      </div>
      <div className='footer2'>
        <div className='row'>
            <div className='col-3'>
                <div>
                    <img  className='fo' src={logo} alt='Logo'/>
                    
                </div>
                <div className='socialLogo'> 
                    <img className='elemImg' src={elem1} alt='elementor1'/>
                    <img className='elemImg' src={elem2} alt='elementor2'/>
                    <img className='elemImg' src={elem3} alt='elementor3'/>
                    <img className='elemImg' src={elem4} alt='elementor4'/>
                </div>
            </div>
            <div className='col-9'>
                <div className='row g-3'>
                {footerList.map(item => <div className='col-4' style={{color:"#fff"}}><img src={arrow} alt='arrow img'  style={{marginRight:"8px"}}/>{item}</div>)}
                </div>
            </div>
        </div>
        <hr/>
      <p className='para'>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
