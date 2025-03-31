"use client";

import { Avatar, Box, Button, Center, ClientOnly, Container, Flex, HStack, IconButton, Menu, Portal, Skeleton, Stack, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaBars, FaClipboardList, FaHome, FaShoppingCart, FaTimes } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";
import { SiWoocommerce } from "react-icons/si";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { useColorMode, useColorModeValue } from "../ui/color-mode";

interface IProps {
    title: string;
    to: string;
    icon?: ReactNode;
}

const Links: IProps[] = [
    { title: "home", to: "/", icon: <FaHome /> },
    { title: "orders", to: "/customer/order", icon: <FaClipboardList /> },
    { title: "cart", to: "/cart", icon: <FaShoppingCart /> },
];

const NavLink = ({ title, to, icon }: IProps) => {
    const bgActive = useColorModeValue("gray.300", "gray.600");
    const bgHover = useColorModeValue("gray.200", "gray.700");

    return (
        <RouterNavLink to={to} key={title} style={{ textDecoration: "none" }}>
            {({ isActive }) => (
                <Flex
                    px={3}
                    py={2}
                    alignItems={"center"}
                    rounded={"md"}
                    bg={isActive ? bgActive : "transparent"}
                    _hover={{
                        textDecoration: "none",
                        bg: bgHover,
                    }}
                >
                    <Box mr={"5px"}>{icon && icon}</Box>
                    {title} {title === "cart" && `(0)`}
                </Flex>
            )}
        </RouterNavLink>
    );
};

const Navbar = () => {
    const { open, onOpen, onClose } = useDisclosure();
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <Box bg={useColorModeValue("gray.100", "blackAlpha.900")}>
            <Flex as={Container} h={16} alignItems={"center"} justifyContent={"space-between"} overflow={"hidden"}>
                <IconButton aria-label="Open Menu" onClick={open ? onClose : onOpen} display={{ base: "flex", md: "none" }} justifyContent="center" alignItems="center">
                    {open ? <FaTimes /> : <FaBars />}
                </IconButton>
                <HStack alignItems={"center"} h={"fit-content"}>
                    <Link to={"/"}>
                        <Box as={SiWoocommerce} w={{ base: "100px", md: "150px", lg: "180px" }} h="auto" />
                    </Link>
                </HStack>
                <HStack as={"nav"} display={{ base: "none", md: "flex" }}>
                    {Links.map((link) => (
                        <NavLink key={link.title} {...link} />
                    ))}
                </HStack>

                <HStack p={1} spaceX={3}>
                    <ClientOnly fallback={<Skeleton boxSize="8" />}>
                        <IconButton onClick={toggleColorMode} variant="outline" size="sm">
                            {colorMode === "light" ? <IoSunny /> : <IoMoon />}
                        </IconButton>
                    </ClientOnly>

                    <Menu.Root>
                        <Menu.Trigger asChild>
                            <Button rounded={"full"} p={0} border={"none"}>
                                <Avatar.Root>
                                    <Avatar.Fallback name="username" />
                                    <Avatar.Image src="https://bit.ly/sage-adebayo" />
                                </Avatar.Root>
                            </Button>
                        </Menu.Trigger>
                        <Portal>
                            <Menu.Positioner>
                                <Menu.Content display="flex" flexDirection="column" alignItems="center" textAlign="center" gap={3} p={3}>
                                    <Avatar.Root size="2xl">
                                        <Avatar.Fallback name="username" />
                                        <Avatar.Image src="https://bit.ly/sage-adebayo" />
                                    </Avatar.Root>
                                    <Center fontSize="16px">username</Center>

                                    <Menu.Item cursor="pointer" value="Profile" display="flex" alignItems="center">
                                        <Link to="/profile">Profile</Link>
                                    </Menu.Item>

                                    <Menu.Item value="Orders" cursor="pointer">
                                        <Box flex="1">Orders</Box>
                                    </Menu.Item>
                                    <Menu.Item value="Logout" cursor="pointer">
                                        <Box flex="1">Logout</Box>
                                    </Menu.Item>
                                </Menu.Content>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root>
                </HStack>
            </Flex>

            {open && (
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as={"nav"} padding={4}>
                        {Links.map((link) => (
                            <NavLink key={link.title} {...link} />
                        ))}
                    </Stack>
                </Box>
            )}
        </Box>
    );
};

export default Navbar;
