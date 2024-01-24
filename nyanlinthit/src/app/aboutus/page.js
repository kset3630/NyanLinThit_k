import React from "react";
import Hero from "../Components/Aboutus/Hero";
import WhatWeHaveDone from "../Components/Aboutus/WhatWeHaveDone";
import SupportUs from "../Components/Aboutus/SupportUs";
import MissionVisionCore from "../Components/Aboutus/MissionVisionCore";


// import SwiperImg1 from "@/assets/SwiperImg1.png";
// import SwiperImg2 from "@/assets/SwiperImg2.jpg";
// import SwiperImg3 from "@/assets/SwiperImg3.jpg";
// import SwiperImg4 from "@/assets/SwiperImg4.jpg";
// import SwiperImg5 from "@/assets/SwiperImg5.jpg";
// import SwiperImg6 from "@/assets/SwiperImg6.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AboutUs = () => {
  return (
    <section className="max-container mt-5 px-6">
      <Hero />

      <WhatWeHaveDone />
        

      <SupportUs />
      <MissionVisionCore />
    </section>
  );
};

export default AboutUs;
