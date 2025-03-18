import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";

interface IProps {}

function AdminLayout({}: IProps) {
    return (
        <main>
            <Sidebar />
            <Outlet />
        </main>
    );
}

export default AdminLayout;
