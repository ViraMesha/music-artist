"use client";
import Image from "next/image";
import { useState } from "react";
import { AudioPlayer } from "react-audio-play";

// Swiper
import type { Swiper as SwiperT } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { albums } from "@/lib/data";

export const AlbumSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperT | null>(null);
  return (
    <>
      {/* top slider */}
      <Swiper
        effect={"coverflow"}
        speed={1000}
        spaceBetween={80}
        allowTouchMove={false}
        className="album-slider"
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {albums.map((album) => {
          const { id, img, name, tracks } = album;
          return (
            <SwiperSlide key={id} className="mb-12">
              <div className="w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12">
                {/* img */}
                <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
                  <Image
                    src={img}
                    alt="album cover"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* track container */}
                <div className="flex flex-1 w-full h-[500px]">
                  {/* tracks */}
                  <div className="flex flex-1 flex-col xl:px-12">
                    {tracks.map((track, index) => {
                      const { name, src } = track;
                      return (
                        <div
                          key={index}
                          className="flex flex-1 w-full h-[500px]"
                        >
                          {/* track name */}
                          <div className="flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold">
                            <p
                              className="
                            text-accent text-sm xl:text-lg"
                            >
                              0{index + 1}.
                            </p>
                            <p className="text-sm xl:text-base">{name}</p>
                          </div>
                          {/* player */}
                          <div>
                            <AudioPlayer
                              style={{
                                background: "transparent",
                                boxShadow: "none",
                                width: "100%",
                              }}
                              src={src}
                              loop
                              preload="none"
                              color="#fff"
                              volume={40}
                              volumePlacement="bottom"
                              className="album-player"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* thumb slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1310: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        spaceBetween={20}
        slidesPerView={5}
        freeMode
        watchSlidesProgress
        className="thumb-slider"
      >
        {albums.map((thumb, index) => {
          const { img } = thumb;
          return (
            <SwiperSlide
              key={index}
              className="relative group overflow-hidden border-2 border-transparent w-[254px] rounded-[10px]"
            >
              {/* img */}
              <div
                className="relative w-[195px] h-[195px]
              sm:w-[360px] sm:h-[360px] md:w-[240px] md:max-h-[240px] cursor-pointer
              "
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-contain group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
