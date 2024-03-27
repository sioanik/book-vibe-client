import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
    return (
        <div className="w-[90%] mx-auto">
            {/* <p>Main Layout</p> */}
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;