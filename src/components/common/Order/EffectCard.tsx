"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { Box, Image } from "@chakra-ui/react";

const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
];

const CardEffectCarousel = () => {
    return (
        <Box w={{ base: "250px", md: "250px" }} mx="auto">
            <Swiper effect="cards" grabCursor modules={[EffectCards]}>
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Image src={img} alt={`Slide ${index + 1}`} borderRadius="lg" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default CardEffectCarousel;
