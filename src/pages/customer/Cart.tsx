import CartInfo from "@/components/common/Cart/CartInfo";
import HeadingTitle from "@/components/common/HeadingTitle";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Button, Flex, Heading, Image } from "@chakra-ui/react";

interface IProps {}

const imageUrl = "https://swiperjs.com/demos/images/nature-1.jpg";

function CartPage({}: IProps) {
    const bgColor = useColorModeValue("gray.100", "blackAlpha.800");
    const borderColor = useColorModeValue("black", "gray");
    const activeBgColor = useColorModeValue("blackAlpha.700", "whiteAlpha.800");
    return (
        <>
            <HeadingTitle title="Cart" size={"2xl"} />
            <Flex bg={bgColor} spaceY={5} direction={{ base: "column" }} shadow={"2xl"} rounded={"lg"} border={`1px solid ${borderColor}`} p={3} my={4} overflow={"hidden"}>
                {Array.from({ length: 2 }).map((_, index, arr) => (
                    <Flex
                        key={index}
                        gap={{ base: 5, md: 10 }}
                        direction={{ base: "column", md: "row" }}
                        alignItems={{ base: "self-start", md: "center" }}
                        borderBottom={index !== arr.length - 1 ? `1px solid ${borderColor}` : "none"}
                        py={"3"}
                    >
                        <Image src={imageUrl} alt={imageUrl} mx={{ base: "auto", md: 0 }} w={{ base: "100px", md: "150px" }} objectFit="cover" borderRadius="lg" />

                        <CartInfo />
                    </Flex>
                ))}
            </Flex>
            <Flex
                bg={bgColor}
                gap={5}
                justifyContent={"space-between"}
                w={{ base: "full", md: "fit-content" }}
                alignItems={"center"}
                shadow={"2xl"}
                rounded={"lg"}
                border={`1px solid ${borderColor}`}
                p={3}
            >
                <Heading>Total Price : $500</Heading>
                <Button size={{ base: "sm", md: "md" }} px={5} aria-label="Remove product" _active={{ bg: activeBgColor }}>
                    Checkout
                </Button>
            </Flex>
        </>
    );
}

export default CartPage;
