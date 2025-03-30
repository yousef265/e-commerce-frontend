import { useColorModeValue } from "@/components/ui/color-mode";
import { Box, Button, Flex, Heading, HStack, IconButton, NumberInput, Text } from "@chakra-ui/react";
import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import Carousel from "./Carousel";

interface IProps {}

function Information({}: IProps) {
    const bgColor = useColorModeValue("gray.100", "blackAlpha.800");
    const borderColor = useColorModeValue("black", "gray");
    const [toggleFav, setToggleFav] = useState<boolean>(false);
    const [toggleCart, setToggleCart] = useState<boolean>(true);

    return (
        <>
            <Flex gap={{ base: 5, md: 10 }} bg={bgColor} shadow={"2xl"} rounded={"lg"} border={`1px solid ${borderColor}`} direction={{ base: "column", md: "row" }} p={4}>
                <Box flex={{ base: "none", md: 1 }} w={{ base: "100%", md: "50%" }}>
                    <Carousel />
                </Box>

                <Box flex={{ base: "none", md: 1 }} w={{ base: "100%", md: "50%" }} paddingX={4} spaceY={4}>
                    <Heading size={"2xl"}>Product Title</Heading>
                    <Text color={"blue"} textStyle="2xl" fontWeight="medium" letterSpacing="tight">
                        $450
                    </Text>
                    <Text textStyle="md" fontWeight="medium" letterSpacing="tight" paddingBottom={3} borderBottom={`1px solid ${borderColor}`}>
                        Product description Lorem ipsum dolor sit amet consectetur adipisicing elit. A excepturi nulla, quia nihil, corporis quod laudantium ab nobis blanditiis facere repellendus!
                        Iure dolorum porro sed quasi aut consequuntur. Atque, dicta?
                    </Text>
                    <Box>
                        <Flex justifyContent={"flex-start"} alignItems={"center"} gap={4}>
                            {/* Condition Here */}

                            {toggleCart ? (
                                <Button variant="solid" textTransform={"uppercase"} onClick={() => setToggleCart((prev) => !prev)}>
                                    Add To Cart
                                </Button>
                            ) : (
                                <NumberInput.Root
                                    defaultValue="1"
                                    unstyled
                                    spinOnPress={false}
                                    onValueChange={(Details) => {
                                        if (Details.valueAsNumber === 0) setToggleCart(true);
                                    }}
                                >
                                    <HStack gap="2">
                                        <NumberInput.DecrementTrigger asChild>
                                            <IconButton variant="outline" size="sm">
                                                <LuMinus />
                                            </IconButton>
                                        </NumberInput.DecrementTrigger>
                                        <NumberInput.ValueText textAlign="center" fontSize="lg" minW="3ch" />
                                        <NumberInput.IncrementTrigger asChild>
                                            <IconButton variant="outline" size="sm">
                                                <LuPlus />
                                            </IconButton>
                                        </NumberInput.IncrementTrigger>
                                    </HStack>
                                </NumberInput.Root>
                            )}

                            {/* Condition Here */}
                            <IconButton aria-label="favorite" onClick={() => setToggleFav((prev) => !prev)}>
                                {toggleFav ? <MdFavorite /> : <MdFavoriteBorder />}
                            </IconButton>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </>
    );
}

export default Information;
