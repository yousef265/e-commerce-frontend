import { useColorModeValue } from "@/components/ui/color-mode";
import { Box, Button, Flex } from "@chakra-ui/react";
import CardEffectCarousel from "./EffectCard";
import OrderData from "./OrderData";
import { orderTypes } from "@/interfaces";
import { Link } from "react-router-dom";

interface IProps {}

const items: orderTypes[] = [
    { label: "Order Number", value: "#1213213" },
    { label: "Date", value: "2025/4/1" },
    { label: "Status", value: "Delivered" },
    { label: "Payment Method", value: "Card" },
    { label: "Total Price", value: "$123" },
    { label: "Address", value: "1234 Main St, Anytown, USA1234 Main St, Anytown, USA1234 Main St, Anytown, USA1234 Main St, Anytown, USA1234 Main St, Anytown, USA1234 Main St, Anytown, USA" },
];

function SingleOrder({}: IProps) {
    const bgColor = useColorModeValue("gray.100", "blackAlpha.800");
    const borderColor = useColorModeValue("black", "gray");

    return (
        <Flex
            bg={bgColor}
            gap={{ base: 5, md: 10 }}
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "start", md: "center" }}
            shadow={"2xl"}
            rounded={"lg"}
            border={`1px solid ${borderColor}`}
            p={3}
            mb={4}
            overflow={"hidden"}
        >
            <CardEffectCarousel />
            <Box>
                <OrderData items={items} />
                <Link to={"details/1"}>
                    <Button variant={"solid"} fontWeight={"bold"} mt={4} display={"block"} mx={{ base: "auto", md: 0 }}>
                        View Details
                    </Button>
                </Link>
            </Box>
        </Flex>
    );
}

export default SingleOrder;
