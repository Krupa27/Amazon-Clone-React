import React from 'react'

import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation} from 'swiper';

import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
  return (
    <div className='bg-white m-3'>
        <div className='text-2xl font-semibold p-3 ml-7'>Shop by Category</div>
        <Swiper
         slidesPerView={5}
         spaceBetween={10}
         navigation={true}
         modules={[Navigation]}
         >
            <SwiperSlide>
                <img className="ml-12" src={"../images/category_0.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="ml-12" src={"../images/category_1.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="ml-12" src={"../images/category_2.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="ml-12" src={"../images/category_3.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="ml-12" src={"../images/category_4.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="ml-12" src={"../images/category_5.jpg"} />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default CarouselCategory