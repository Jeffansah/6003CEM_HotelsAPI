"use client";

import { useSwiper } from "swiper/react";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>{children}</button>;
};

export default SwiperButtonNext;
