import { useColorModeValue } from "@/components/ui/color-mode";
import { orderTypes } from "@/interfaces";
import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import HeadingTitle from "../HeadingTitle";
import OrderData from "./OrderData";

interface IProps {}
const items: orderTypes[] = [
    { label: "Product Name", value: "Product 1" },
    { label: "Product Description", value: "Product Description Product Description Product Description" },
    { label: "Category", value: "T-Shirt" },
    { label: "Price", value: "$200" },
];

const imageUrl = "https://swiperjs.com/demos/images/nature-1.jpg";

function OrderDetails({}: IProps) {
    const bgColor = useColorModeValue("gray.100", "blackAlpha.800");
    const borderColor = useColorModeValue("black", "gray");
    return (
        <>
            <HeadingTitle title="Order Details" size={"2xl"} />
            <Flex bg={bgColor} direction={"column"} shadow={"2xl"} rounded={"lg"} border={`1px solid ${borderColor}`} p={3} my={4} overflow={"hidden"}>
                {Array.from({ length: 3 }).map((_, index, arr) => (
                    <Flex key={index} direction="row" alignItems={"center"} borderBottom={index !== arr.length - 1 ? `1px solid ${borderColor}` : "none"} pb={index !== arr.length - 1 ? 3 : 0}>
                        <Image src={imageUrl} mx="auto" alt={`Image ${index + 1}`} w={{ base: "200px", md: "200px" }} objectFit="cover" borderRadius="lg" />
                        <OrderData items={items} orientation={useBreakpointValue({ base: "vertical", md: "horizontal" })} />
                    </Flex>
                ))}
            </Flex>
        </>
    );
}

export default OrderDetails;
