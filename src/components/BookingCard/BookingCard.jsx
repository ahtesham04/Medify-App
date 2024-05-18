import React from 'react';
import medical from '../../assets/div.u-pos-has.png';
import like from '../../assets/Vector (1).png'
import rupees from '../../assets/currency.png'
import './bookingCard.css'

const BookingCard = ({data}) => {
    let oldDate = data.date.split(' ');

    let newDate = new Date()
    let year = newDate.getFullYear()
    let formateDate = `${oldDate[1]} ${oldDate[2]} ${year}`
    console.log(oldDate)
  return (
    <div className='card medicalCard' >
      <div className='row' style={{gap:"18px"}}>
        <div className='col-2'>
          <img src={medical} alt='medicals' />
        </div>
        <div className='col-5'>
            <h5 className='hName'>{data.hospital}</h5>
            <h6>{data.city},{data.state}</h6>
            <p>Smilessence Center for Advanced Dentistry + 1</p>
            <p>more</p>
            {/* <p><span className='freeText'>FREE</span> <img src={rupees} alt='rupee' style={{marginBottom:"3px"}}/><s className='fees'>500</s><span className='consultText'>Consultation fee at clinic</span></p> */}
            <div className='likes'><img  src={like} alt='like' style={{margin:"5px"}}/>5</div>
        </div>
        <div className='col-4 d-flex justify-content-evenly'>
          <div className='timeBox'>{data.time}</div>
          <div className='dateBox'>{formateDate}</div>

        </div>
        </div>
    </div>
  )
}

export default BookingCard
