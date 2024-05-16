import React from 'react'
import pcare from '../../assets/Group 1000011062.png';
import icons from '../../assets/Frame.png';
import './Patient.css'

const Patient = () => {
  return (
    <div className='patientMain'>
    <div className='container'>
        <div className='row'>
            <div className='col-6 patientImg'>
                <img  src={pcare}/>

            </div>
             <div className='col-6 d-flex flex-column justify-content-center'>
                <h5>HELPING PATIENTS FROM AROUND THE GLOBE!!</h5>
                <h2>Patient <span className='caringSpan'>Caring</span></h2>
                <p className='para'>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. 
                   We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                   <div className='iconContent'>
                    <img className='iconImg' src={icons}/>
                    <p >Stay Updated About Your Health</p>
                   </div>

                   <div className='iconContent'>
                    <img className='iconImg' src={icons}/>
                    <p > Check Your Results Online</p>
                   </div>

                  <div className='iconContent'>
                    <img className='iconImg' src={icons}/>
                    <p>Manage Your Appointments</p>
                   </div>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Patient
