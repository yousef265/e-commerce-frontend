import { useColorModeValue } from "@/components/ui/color-mode";
import { Box, Flex } from "@chakra-ui/react";
import HeadingTitle from "../HeadingTitle";

interface IProps {}

function OrderDetails({}: IProps) {
    const bgColor = useColorModeValue("gray.100", "blackAlpha.800");
    const borderColor = useColorModeValue("black", "gray");
    return (
        <>
            <HeadingTitle title="Order Details" size={"2xl"} mb={5} />
            <Flex gap={{ base: 5, md: 10 }} bg={bgColor} shadow={"2xl"} rounded={"lg"} border={`1px solid ${borderColor}`} direction={{ base: "column", md: "row" }} p={4}>
                <Box>Content1</Box>
                <Box>Content2</Box>
            </Flex>
        </>
    );
}

export default OrderDetails;
