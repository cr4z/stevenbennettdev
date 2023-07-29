// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Box } from "@mui/material";

type Slide = { src: string };

export default function Slideshow() {
  const SLIDES: Slide[] = [
    { src: "https://swiperjs.com/demos/images/nature-2.jpg" },
    { src: "https://swiperjs.com/demos/images/nature-3.jpg" },
    { src: "https://swiperjs.com/demos/images/nature-4.jpg" },
    { src: "https://swiperjs.com/demos/images/nature-5.jpg" },
    { src: "https://swiperjs.com/demos/images/nature-6.jpg" },
  ];

  return (
    <Box
      sx={{
        ".swiper-slide": {
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "300px",
          height: "300px",
        },
      }}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {SLIDES.map((s, i) => (
          <SwiperSlide>
            <Box key={i} component="img" src={s.src} sx={{ width: "100%", height: "100%" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
