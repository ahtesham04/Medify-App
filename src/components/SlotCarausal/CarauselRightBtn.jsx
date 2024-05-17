
import React, { useEffect, useState } from 'react';
import {ReactComponent as RightArrow} from '../../assets/Vector (1).svg';
import { useSwiper } from 'swiper/react';
import './slotCarausal.css'

const CarauselRightBtn = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd)

    useEffect(() =>{
        swiper.on("slideChange",() =>{
            setIsEnd(swiper.isEnd)
        })
    },[])
  return (
    <div className='rightBtn'>
      <RightArrow onClick={() => swiper.slideNext()}/>
    </div>
  )
}

export default CarauselRightBtn
