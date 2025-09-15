"use client"
import styles from "./opinion.module.css"
import dataOpinion from "@/assets/data/opinion.json"
import CardOpinion from "@/components/opinion/CardOpinion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";


export default function Opinion() {

    return (
        <>
            <section className={styles.section}>
                <h2 className={styles.h2}>{"Ils ont passé un bon séjour"}</h2>
                <Swiper className={styles.opinionList}
                        spaceBetween={20}
                        slidesPerView={4}
                        loop={true}
                        autoplay={{delay:4000}}
                        modules={[ Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                >
                    {dataOpinion.map((opinion) => (
                        <SwiperSlide  className={styles.slide} key={opinion.id}>
                            <CardOpinion opinions={opinion}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <h3 className={styles.h3}>{"Pourquoi pas vous ?"}</h3>
            </section>
        </>
    )
}