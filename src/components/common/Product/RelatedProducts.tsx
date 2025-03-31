import HeadingTitle from "../HeadingTitle";
import CoverflowCarousel from "./CoverflowCarousel";

interface IProps {}

function RelatedProducts({}: IProps) {
    return (
        <>
            <HeadingTitle title="Related Products" size={"2xl"} mt={5} />
            <CoverflowCarousel />
        </>
    );
}

export default RelatedProducts;
