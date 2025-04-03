"use client";

import { Box, Container, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";
import { Link as RouterLink } from "react-router-dom";
import { useColorModeValue } from "../ui/color-mode";

export default function Footer() {
    const bgHover = useColorModeValue("gray.600", "gray.400");
    const bgColor = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
    return (
        <Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")} position={"relative"} bottom={0} insetX={0} w={"full"}>
            <Container as={Stack} maxW={"6xl"} padding={4} justifyContent={"center"} alignItems={"center"}>
                <HStack alignItems={"center"} maxH={"100px"} overflow={"hidden"}>
                    <RouterLink to={"/"}>
                        <Box as={SiWoocommerce} w={"150px"} h={"fit-content"} />
                    </RouterLink>
                </HStack>
                <Stack direction={"row"} spaceX={3}>
                    <RouterLink to={"/"}>Home</RouterLink>
                    <RouterLink to={"customer/order"}>Orders</RouterLink>
                    <RouterLink to={"cart"}>Cart</RouterLink>
                </Stack>
            </Container>

            <Box borderTopWidth={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.700")}>
                <Container
                    as={Stack}
                    maxW={"6xl"}
                    direction={{ base: "column", md: "row" }}
                    padding={4}
                    justifyContent={{ base: "center", md: "space-between" }}
                    alignItems={{ base: "center", md: "center" }}
                >
                    <Text>© 2022 Chakra Templates. All rights reserved</Text>
                    <Stack direction={"row"} padding={2}>
                        <RouterLink aria-label="Twitter" to={"https:twitter.com"} target="_blank">
                            <IconButton rounded={"full"} bg={bgColor} _hover={{ bg: bgHover }}>
                                <FaTwitter />
                            </IconButton>
                        </RouterLink>
                        <RouterLink aria-label="YouTube" to={"https:youtube.com"} target="_blank">
                            <IconButton rounded={"full"} bg={bgColor} _hover={{ bg: bgHover }}>
                                <FaYoutube />
                            </IconButton>
                        </RouterLink>
                        <RouterLink aria-label="Instagram" to={"https:instagram.com"} target="_blank">
                            <IconButton rounded={"full"} bg={bgColor} _hover={{ bg: bgHover }}>
                                <FaInstagram />
                            </IconButton>
                        </RouterLink>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
