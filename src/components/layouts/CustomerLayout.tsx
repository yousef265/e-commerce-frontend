import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

interface IProps {}

function CustomerLayout({}: IProps) {
    return (
        <main>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    );
}

export default CustomerLayout;
