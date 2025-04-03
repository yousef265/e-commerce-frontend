import { Button, Card, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Stepper from "../Stepper";
interface IProps {}

function CardPage({}: IProps) {
    const [toggleCart, setToggleCart] = useState<boolean>(true);

    return (
        <Card.Root maxW={"400px"} mx={"auto"} border={"solid 2px gray"} _hover={{ bg: "none", transition: "0.2s" }} overflow="hidden">
            <Link to="product/1">
                <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    boxSize={"200px"}
                    rounded={"full"}
                    objectFit={"cover"}
                    mx={"auto"}
                    mt={2}
                />
            </Link>
            <Card.Body gap="2">
                <Card.Title>Living room Sofa</Card.Title>
                <Card.Description>This sofa is perfect for modern tropical spaces, baroque inspired spaces.</Card.Description>
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    $450
                </Text>
            </Card.Body>
            <Card.Footer gap="2">
                {/* Condition Here */}
                {toggleCart ? (
                    <Button variant="solid" textTransform={"uppercase"} flex={1} onClick={() => setToggleCart((prev) => !prev)}>
                        Add To Cart
                    </Button>
                ) : (
                    <Stepper setToggleCart={setToggleCart} />
                )}

                <Link to="product/1">
                    <Button variant="subtle" textTransform={"uppercase"} flex={1}>
                        View Details
                    </Button>
                </Link>
            </Card.Footer>
        </Card.Root>
    );
}

export default CardPage;
