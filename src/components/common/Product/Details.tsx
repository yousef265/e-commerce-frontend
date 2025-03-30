import Information from "./Information";
import RelatedProducts from "./RelatedProducts";

interface IProps {}

function Details({}: IProps) {
    return (
        <>
            <Information />
            <RelatedProducts />
        </>
    );
}

export default Details;
