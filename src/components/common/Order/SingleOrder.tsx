import { Link } from "react-router-dom";

interface IProps {}

function SingleOrder({}: IProps) {
    return <Link to={`details/1`}>SingleOrder</Link>;
}

export default SingleOrder;
