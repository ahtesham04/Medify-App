import React from 'react'
import familyImg from '../../assets/div.elementor-widget-wrap.png'
import './Family.css'

const Family = () => {
  return (
    <div className='familyContainer'>
    <div className='container'>
        <div className='row justify-content-center align-items-center'>
            <div className='col-6 familyLeft'>
                <h5>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h5>
                <h2>Our Families</h2>
                <p>We will work with you to develop individualised care plans, including management of chronic diseases. 
                   If we cannot assist, we can provide referrals or advice about the type of practitioner you require. 
                   We treat all enquiries sensitively and in the strictest confidence.</p>
            </div>
            <div className='col-6 familyRight'>
                <img src={familyImg}/>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Family
