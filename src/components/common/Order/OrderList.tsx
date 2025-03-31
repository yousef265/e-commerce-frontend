import { Flex } from "@chakra-ui/react";
import SingleOrder from "./SingleOrder";

interface IProps {}

function OrderList({}: IProps) {
    return (
        <Flex direction={"column"}>
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
        </Flex>
    );
}

export default OrderList;
