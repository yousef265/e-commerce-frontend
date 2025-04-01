import { orderTypes } from "@/interfaces";
import { Box, DataList, HeadingProps } from "@chakra-ui/react";

interface IProps extends HeadingProps {
    items: orderTypes[];
    orientation?: "horizontal" | "vertical";
}

function OrderData({ items, orientation = "horizontal", ...props }: IProps) {
    return (
        <Box rounded="lg" flex={1} maxW={"full"} {...props}>
            <DataList.Root orientation={orientation} divideY="1px" p={3} borderRadius="md" flexWrap="wrap">
                {items.map((item) => (
                    <DataList.Item key={item.label} pt="4" flex="1 1 45%" minW="150px">
                        <DataList.ItemLabel fontWeight="bold">{item.label}</DataList.ItemLabel>
                        <DataList.ItemValue>{item.value}</DataList.ItemValue>
                    </DataList.Item>
                ))}
            </DataList.Root>
        </Box>
    );
}

export default OrderData;
