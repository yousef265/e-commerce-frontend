import HeadingTitle from "@/components/common/HeadingTitle";
import OrderList from "@/components/common/Order/OrderList";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Box } from "@chakra-ui/react";

interface IProps {}

function OrdersPage({}: IProps) {
    const bgColor = useColorModeValue("gray.100", "blackAlpha.800");
    const borderColor = useColorModeValue("black", "gray");
    return (
        <>
            <HeadingTitle title="My Orders" size={"2xl"} mb={5} />
            <Box bg={bgColor} shadow={"2xl"} rounded={"lg"} border={`1px solid ${borderColor}`} p={4}>
                <OrderList />
            </Box>
        </>
    );
}

export default OrdersPage;
