import HeadingTitle from "@/components/common/HeadingTitle";
import OrderList from "@/components/common/Order/OrderList";

interface IProps {}

function OrdersPage({}: IProps) {
    return (
        <>
            <HeadingTitle title="My Orders" size={"2xl"} mb={5} />
            <OrderList />
        </>
    );
}

export default OrdersPage;
