import { Grid } from "@chakra-ui/react";
import CardPage from "./Card";

interface IProps {}

function ProductList({}: IProps) {
    return (
        <Grid templateColumns={"repeat(auto-fill,minmax(300px,1fr))"} gap={3}>
            <CardPage />
            <CardPage />
            <CardPage />
            <CardPage />
            <CardPage />
            <CardPage />
        </Grid>
    );
}

export default ProductList;
