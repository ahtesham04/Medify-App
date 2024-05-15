import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import Card from '../Card/Card';
import './carausal.css'


const Carausel = ({allData,type}) => {
  return (
    <>
      <Swiper
        slidesPerView={type==='service'? (3):('auto')}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }
    }
        
        modules={[Pagination]}
        className="mySwiper"
      >
        {allData.map(items => (<SwiperSlide className={type==='specialist' ? ('swiperSlide'):('')}><Card data={items} type={type}/></SwiperSlide>))}
      </Swiper>
    </>
  )
}

export default Carausel
