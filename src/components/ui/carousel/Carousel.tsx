"use client";

import styles from "./carousel.module.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {ArrayImagesProps} from "@/type/definitions";

export default function Carousel({ images }: { images: ArrayImagesProps[] }) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>

            <Swiper
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                autoplay ={{delay : 2500, disableOnInteraction: false }}
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className={styles.mainSwiper}
            >
                {images.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Image
                            src={item.image}
                            alt={item.label}
                            fill={true}
                            className={styles.mainImage}

                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                modules={[FreeMode, Navigation, Thumbs,Autoplay]}
                onSwiper={setThumbsSwiper}
                slidesPerView={3}
                freeMode
                autoplay ={{delay : 2500, disableOnInteraction: false }}
                loop={true}
                watchSlidesProgress
                className={styles.thumbSwiper}
                breakpoints={{
                    768 : {slidesPerView: 4},
                    1024 : {slidesPerView: 5},
                }}
            >
                {images.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Image
                            src={item.image}
                            alt={item.label}
                            width={100}
                            height={80}
                            className={`${styles.thumbImage} ${
                                item.id === activeIndex +1 ? styles.active : ""
                            }`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    );
}
