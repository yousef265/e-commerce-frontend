import { Box, Heading } from "@chakra-ui/react";
import CoverflowCarousel from "./CoverflowCarousel";

interface IProps {}

function RelatedProducts({}: IProps) {
    return (
        <Box py={5}>
            <Heading size={"2xl"}>Related Products</Heading>
            <CoverflowCarousel />
        </Box>
    );
}

export default RelatedProducts;
