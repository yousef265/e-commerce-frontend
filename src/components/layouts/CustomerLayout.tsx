import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Container } from "@chakra-ui/react";

interface IProps {}

function CustomerLayout({}: IProps) {
    return (
        <main>
            <Navbar />
            <Container my={10}>
                <Outlet />
            </Container>
            <Footer />
        </main>
    );
}

export default CustomerLayout;
