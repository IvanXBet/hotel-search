import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Autoplay, Pagination } from "swiper";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";

export const Slider = () => {
  const { sliderImg } = useSelector((state: RootStore) => state.hotelsReducer);
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {sliderImg.map((value: string, index: number) => (
          <SwiperSlide key={index}>
            <img src={value} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
function RootState(a: unknown, b: unknown): boolean {
  throw new Error("Function not implemented.");
}
