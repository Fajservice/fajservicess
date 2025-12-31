import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

// CSS imports - these will be bundled with this chunk
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperWrapper = ({ data, renderSlide }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
      slidesPerView={1}
      loop={true}
      speed={300}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation={false}
      pagination={{ clickable: true }}npm uninstall react-icons
      a11y={{ enabled: true }}
      onAfterInit={() => performance.mark?.("swiper-initialized")}
    >
      {data.map((item, index) => (
        <SwiperSlide key={`hero-slide-${index}`}>
          {renderSlide(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperWrapper;
