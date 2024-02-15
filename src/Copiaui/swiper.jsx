import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Sala1,Sala2,Sala3,Sala4,Sala5,Sala6,Sala7} from '../ui-components';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '480': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '600': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '960': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1280': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Sala1/></SwiperSlide>
        <SwiperSlide><Sala2/></SwiperSlide>
        <SwiperSlide><Sala3/></SwiperSlide>
        <SwiperSlide><Sala4/></SwiperSlide>
        <SwiperSlide><Sala5/></SwiperSlide>
        <SwiperSlide><Sala6/></SwiperSlide>
        <SwiperSlide><Sala7/></SwiperSlide>
        
      </Swiper>
    </>
  );
}