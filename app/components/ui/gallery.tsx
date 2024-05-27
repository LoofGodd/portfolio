import React from "react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { galleryImage } from "@/app/data"
import Image from "next/image"
export default function Gallery() {
  return (
    <div
      id="gallery"
      className="h-[550px] sm:h-[650px] md:h-full 2xl:h-[750px] w-full"
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="swiper rounded-2xl"
      >
        {galleryImage.map((image, i) => (
          <SwiperSlide key={i}>
            <Image
              src={image.image}
              alt={image.alt}
              className="object-cover w-full h-full object-left-top"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
