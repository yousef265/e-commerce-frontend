import { Button, Card, Image, Text } from "@chakra-ui/react";
interface IProps {}

function CardPage({}: IProps) {
    return (
        <Card.Root maxW={"400px"} mx={"auto"} border={"solid 2px gray"} _hover={{ bg: "none", transition: "0.2s" }} overflow="hidden">
            <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                boxSize={"200px"}
                rounded={"full"}
                objectFit={"cover"}
                mx={"auto"}
                mt={2}
                cursor={"pointer"}
            />
            <Card.Body gap="2">
                <Card.Title>Living room Sofa</Card.Title>
                <Card.Description>This sofa is perfect for modern tropical spaces, baroque inspired spaces.</Card.Description>
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    $450
                </Text>
            </Card.Body>
            <Card.Footer gap="2">
                {/* <Flex justifyContent={"center"} alignItems={"center"} flex={1}>
                    <Button variant="solid" textTransform={"uppercase"} _active={{ bg: "gray.300" }}>
                        <FiMinus />
                    </Button>
                    <Box mx={2}>2121</Box>
                    <Button variant="solid" textTransform={"uppercase"} _active={{ bg: "gray.300" }}>
                        <FiPlus />
                    </Button>
                </Flex> */}

                <Button variant="solid" textTransform={"uppercase"} flex={1}>
                    Add To Cart
                </Button>

                <Button variant="subtle" textTransform={"uppercase"} flex={1}>
                    View Details
                </Button>
            </Card.Footer>
        </Card.Root>
    );
}

export default CardPage;
