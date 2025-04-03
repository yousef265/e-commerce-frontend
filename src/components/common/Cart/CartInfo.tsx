import { useColorModeValue } from "@/components/ui/color-mode";
import { Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Stepper from "../Stepper";

interface IProps {}

function CartInfo({}: IProps) {
    const activeBgColor = useColorModeValue("blackAlpha.700", "whiteAlpha.800");
    const [toggleCart, setToggleCart] = useState<boolean>(false);
    return (
        <Stack spaceY={3} mx={{ base: "auto", md: 0 }}>
            <Text textStyle={{ base: "sm", md: "xl" }} fontWeight="medium" letterSpacing="tight" mt="2">
                Product Title Product Title Product Title Product Title
            </Text>
            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                $450
            </Text>

            <Flex gap={{ md: 10 }} mx={{ base: "auto", md: 0 }} w={"full"} justifyContent={{ base: "space-between", md: "flex-start" }} alignItems="center">
                <Stepper setToggleCart={setToggleCart} />
                <IconButton variant="solid" size={{ base: "sm", md: "md" }} px={5} aria-label="Remove product" _active={{ bg: activeBgColor }}>
                    <MdDeleteOutline />
                    Remove
                </IconButton>
            </Flex>
        </Stack>
    );
}

export default CartInfo;
