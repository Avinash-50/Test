import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from './Card';

const Testimonials = ({ reviews }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-16 overflow-hidden">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}  
        slidesPerView={1}  
        breakpoints={{
          768: {
            slidesPerView: 1,  
          },
          1024: {
            slidesPerView: 2,  
          },
        }}
        pagination={{ clickable: true }}
        grabCursor={true}
        className="w-full max-w-[90%] lg:max-w-[1100px] overflow-hidden"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <Card review={review} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-pagination {
          margin-top: 20px;
          position: static;
        }

        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
