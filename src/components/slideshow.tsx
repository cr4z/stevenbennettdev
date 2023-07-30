/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Thumbs, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Typography, useTheme } from "@mui/material";
// @ts-ignore
import Asdf from "../img/forms.png";
// @ts-ignore
import Qwer from "../img/fhr2.png";
// @ts-ignore
import qwer from "../img/todoshredder_mini.png";

type Slide = { src: string; title: string; description: string; href: string };

export default function Slideshow() {
  const SLIDES: Slide[] = [
    {
      src: qwer,
      title: "TodoShredder",
      description: "View my live database implementing single sign-on functionality!",
      href: "https://www.todoshredder.com/",
    },
    {
      src: Qwer,
      title: "Flores Home Repair",
      description: "View work I did for a client using Next.js on floreshomerepair.com!",
      href: "https://floreshomerepair.com/",
    },
    {
      src: Asdf,
      title: "Form Component Collection",
      description: "View a collection of form components I've built for a team!",
      href: "/portfolio/11",
    },
  ];

  const { palette } = useTheme();

  return (
    <Box
      sx={{
        ".swiper-slide": {
          maxWidth: "300px",
          height: "400px",
        },
        "*": { color: "white" },
        ".swiper-pagination-bullet-active": {
          bgcolor: palette.primary.main,
        },
        minWidth: "100%",
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
        modules={[EffectCoverflow, Pagination, Navigation, A11y, Thumbs]}
        navigation
        pagination={{ clickable: true }}
        style={{ height: "500px", minWidth: "100%" }}
      >
        {SLIDES.map((s, i) => (
          <SwiperSlide key={i}>
            <a href={s.href} target="_blank" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  width: "100%",
                  minHeight: "100%",
                  backgroundImage: `url(${s.src})`,
                  backgroundSize: "cover",
                  // add black effect
                  "::after": {
                    position: "absolute",
                    content: '""',
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: "100%",
                    background: "linear-gradient(transparent, #111)",
                  },
                  // move text below
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  // go behind text
                  zIndex: 1,
                }}
              >
                <Box sx={{ zIndex: 2, padding: "1rem" }}>
                  <Typography gutterBottom variant="h5">
                    {s.title}
                  </Typography>
                  <Typography variant="body1">{s.description}</Typography>
                </Box>
              </Box>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
