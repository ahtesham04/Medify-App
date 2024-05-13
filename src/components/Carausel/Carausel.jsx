import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import {promoImg} from '../../constant/data';
import Card from '../Card/Card';


const Carausel = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }
        grabCursor={true}
        pagination={true}
    // }
        
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        {promoImg.map(items => (<SwiperSlide><Card imgUrl={items}/></SwiperSlide>))}
      </Swiper>
    </>
  )
}

export default Carausel
