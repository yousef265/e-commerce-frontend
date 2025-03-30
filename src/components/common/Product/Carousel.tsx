import { CSSProperties, useState } from "react";
import { Box, Image, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useColorModeValue } from "@/components/ui/color-mode";

const images: string[] = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
];

const Carousel = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const borderColor = useColorModeValue("black", "gray.100");
    return (
        <Box maxW={{ base: "90%", md: "600px" }} mx="auto" spaceY={1}>
            {/* Main Image Carousel */}
            <Swiper
                style={
                    {
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    } as CSSProperties
                }
                loop
                spaceBetween={10}
                navigation={useBreakpointValue({ base: false, md: true })}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Image src={img} alt={`Slide ${index + 1}`} objectFit="cover" w="100%" h={{ base: "200px", md: "350px" }} borderRadius="lg" />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnails */}
            <Swiper onSwiper={setThumbsSwiper} loop spaceBetween={useBreakpointValue({ base: 0, md: 10 })} slidesPerView={4} freeMode watchSlidesProgress modules={[FreeMode, Navigation, Thumbs]}>
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Flex justify="center" align="center" border="2px solid transparent" _hover={{ borderColor: borderColor }} borderRadius="lg" overflow="hidden">
                            <Image src={img} alt={`Thumbnail ${index + 1}`} height={"80px"} w={"full"} objectFit="cover" cursor="pointer" />
                        </Flex>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Carousel;
