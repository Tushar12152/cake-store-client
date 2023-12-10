import { NavLink } from "react-router-dom";
import { FaBook,  FaHandsHelping,   FaUtensils } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdManageAccounts} from "react-icons/md";
const AdminSideBar = () => {
    return (
        <div className="menu p-4">
            <li>
                                <NavLink to="/dashboard/adminProfile">
                                <CgProfile />  Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageUsers">
                                <MdManageAccounts />
                                    Manage Users</NavLink>
                            </li>


                            <li>
                                <NavLink to="/dashboard/addcake">
                                    <FaUtensils></FaUtensils>
                                    Add Cake</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/dashboard/allcake">
                                    <FaBook></FaBook>
                                    All Cakes</NavLink>
                            </li>
                           
                            <li>
                                <NavLink to="/dashboard/allorders">
                                <FaHandsHelping />
                                    All Orders</NavLink>
                            </li>
                           
        </div>
    );
};

export default AdminSideBar;