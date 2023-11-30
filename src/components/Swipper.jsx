import React from "react";
import Content from "./Content";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import "swiper/css";

const Swipper = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Content
            name="Amarjeet"
            position="Machine Learning"
            img="https://picsum.photos/201/300"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Content
            name="Ashish"
            position="Web developer"
            img="https://picsum.photos/200/301"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Content
            name="Amjad"
            position="Flutter developer"
            img="https://picsum.photos/204/300"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Content
            name="Reetika"
            position="Business Lead"
            img="https://picsum.photos/205/300"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Content
            name="Abhishek "
            position="Marketing Lead"
            img="https://picsum.photos/205/305"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipper;
