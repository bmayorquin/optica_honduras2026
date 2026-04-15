'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function VideoCarousel() {
  const listaVideos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
    "/videos/video5.mp4",
    "/videos/video6.mp4",
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-center font-bold text-gray-400 mb-4 uppercase tracking-[0.2em] text-[10px]">
        Nuestra Experiencia
      </p>
      
      <div className="w-full max-w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-100">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-full h-full"
        >
          {listaVideos.map((videoPath, index) => (
            <SwiperSlide key={index}>
              <video 
                src={videoPath} 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}