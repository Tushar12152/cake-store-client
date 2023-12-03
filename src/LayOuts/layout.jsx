import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <div>
           <Nav></Nav>
           <Outlet/>
           <Footer></Footer>
        </div>
    );
};

export default Layout;