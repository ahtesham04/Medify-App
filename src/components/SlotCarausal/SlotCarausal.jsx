import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {slotAvailable} from '../../constant/data'
// import './styles.css';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';
import CarauselLeftBtn from './CarauselLeftBtn';
import CarauselRightBtn from './CarauselRightBtn';
const data = [0,1,2,3,4,5,6]
const Controls = ({data}) =>{
    const swiper = useSwiper();
    useEffect(() =>{
        swiper.slideTo(0)
    },[data])
}
const getDateValue = (n) =>{
    if(n === 0){
        return 'Today'
    }

    if(n===1){
        return 'Tommorrow'
    }
    let date = new Date();
    console.log(date.toString().split(" "))
    let dateArr =date.toString().split(" ")
    let day = date.getDate()+n
    let month = date.getMonth();
    let year = date.getFullYear()
    // console.log(day)
    let nextDate = new Date(year,month,day)
    let nextArr =nextDate.toString().split(" ")
    let formattedDate = `${nextArr[0]} ${day}, ${nextArr[1]}`
    return formattedDate;
}
// getDateValue(3)
const SlotCarausal = ({bookingDate}) => {
  const[isActive, setIsActive] = useState(false);
  const dateHandler = (currDate,d) =>{
    slotAvailable.forEach(item => item.isActive = false);
    d.isActive = !d.isActive;
    bookingDate(currDate);
  }
  return (
<>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        initialSlide={0}
        modules={[Navigation]}
        className="mySwiper"
      >
        <Controls data = {slotAvailable} />
        <CarauselLeftBtn />
        <CarauselRightBtn />
        {slotAvailable.map(d => <SwiperSlide className={d.isActive ? ("activeTab"):("tab")} onClick={() => dateHandler(getDateValue(d.date),d)}>{getDateValue(d.date)}<p className='slotText'>{d.slotCount} slots available</p></SwiperSlide>)}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  )
}

export default SlotCarausal
