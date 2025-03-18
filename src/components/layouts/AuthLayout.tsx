import { Outlet } from "react-router-dom";

interface IProps {}

function AuthLayout({}: IProps) {
    return (
        <main className="auth-content">
            <Outlet />
        </main>
    );
}

export default AuthLayout;
