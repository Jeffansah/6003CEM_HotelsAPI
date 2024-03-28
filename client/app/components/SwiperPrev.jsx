import { useSwiper } from "swiper/react";

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}>{children}</button>;
};

export default SwiperButtonPrev;
