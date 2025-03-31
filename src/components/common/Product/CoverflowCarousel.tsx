"use client";

import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "../../../styles/CoverflowCarousel.module.css";

import { Box, Image } from "@chakra-ui/react";

const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
];

const CoverflowCarousel = () => {
    return (
        <Box maxW={{ base: "90%", md: "full" }} mx="auto" className={styles.swiperContainer}>
            <Swiper
                effect="coverflow"
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        <Image className={styles.slideImage} src={img} alt={`Slide ${index + 1}`} mx={"auto"} borderRadius="lg" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default CoverflowCarousel;
