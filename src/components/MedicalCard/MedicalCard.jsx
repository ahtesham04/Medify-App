import React, { useEffect, useState } from 'react';
import './medicalCard.css';
import medical from '../../assets/div.u-pos-has.png';
import like from '../../assets/Vector (1).png'
import SlotCarausal from '../SlotCarausal/SlotCarausal';
const getLocalStorageData = () =>{
  let data = JSON.parse(localStorage.getItem("myBooking"))
  return data
}
const MedicalCard = ({data}) => {
const[showBooking, setShowBooking] = useState(false);
const[bookingTime, setBookingTime] = useState('')
const[bookingDate, setBookingDate] = useState('')
const[bookingData, setBookingData] = useState(getLocalStorageData())
const dateConversion = (n) =>{
  let date = new Date();
  let dateArr = date.toString().split(" ")
  let day = date.getDate()+n;
  let formattedDate = `${dateArr[0]}, ${day} ${dateArr[1]}}`
  return formattedDate;
}
const slotDate = (date) =>{
  if(date === 'Today'){
    let newDate = dateConversion(0);
    setBookingDate(newDate)
  }else if(date === 'Tommorrow'){
    let newDate = dateConversion(1)
    setBookingDate(newDate)
  }else{
    setBookingDate(date)
  }
}

const bookSlotHandler = () =>{
  let objData = {
    hospital:data['Hospital Name'],
    city:data.City,
    state:data.State,
    time:bookingTime,
    date:bookingDate
  }
  setBookingData([...bookingData,objData])
}
const bookingTimeHandler = (t) =>{
  setBookingTime(t)
}
useEffect(() =>{
  localStorage.setItem("myBooking",JSON.stringify(bookingData))
},[bookingData])
  return (
    <div className='card medicalCard' >
        <div className='row' style={{gap:"18px"}} onClick={() => setShowBooking(!showBooking)}>
        <div className='col-2'>
          <img src={medical} alt='medicals' />
        </div>
        <div className='col-5'>
            <h5 className='hName'>{data['Hospital Name']}</h5>
            <h6>{data.City},{data.State}</h6>
            <p>Smilessence Center for Advanced Dentistry + 1</p>
            <p>more</p>
            <p><span>FREE</span> <span>500</span>Consultation fee at clinic</p>
            <div className='likes'><img  src={like} alt='like' style={{margin:"5px"}}/>{data['Hospital overall rating']}</div>
        </div>
        <div className='col-4 d-flex align-items-end'>
          <div>
            <p className='available'>Available Today</p>
            <button className='bookBtn' onClick={bookSlotHandler}>Book Free Center Visit</button>
            </div>
        </div>
        </div>
        {showBooking ? (<div className='slotBooking'>
        <SlotCarausal bookingDate={slotDate}/>
        <div className='row g-4 mt-2'>
            <div className='col-2'>Morning</div>
            <div className='col-2'><div className='time'>10:00AM </div></div>
            <div className='col-2'><div className='time'>11:00AM</div></div>
            <div className='col-2'></div>
            <div className='col-2'></div>
            <div className='col-2'></div>
            <div className='col-2'>Afternoon</div>
            <div className='col-2'></div>
            <div className='col-2'><div className='time'>01:00PM</div></div>
            <div className='col-2'><div className='time'>03:00PM</div></div>
            <div className='col-2'><div className='time'>04:30PM</div></div>
            <div className='col-2'></div>
            <div className='col-2'>Evening</div>
            <div className='col-2'></div>
            <div className='col-2'></div>
            <div className='col-2'></div>
            <div className='col-2'></div>
            <div className='col-2'><div className='time'>07:00PM</div></div>
        </div>
        </div>) : ('')}
    </div>
  )
}

export default MedicalCard