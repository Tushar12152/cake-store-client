import { NavLink } from "react-router-dom";
import { FaBook,  FaHandsHelping,   FaUtensils } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdManageAccounts, MdPreview, MdUpcoming } from "react-icons/md";
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
                                <NavLink to="/dashboard/addmeal">
                                    <FaUtensils></FaUtensils>
                                    Add Meal</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/dashboard/allmeal">
                                    <FaBook></FaBook>
                                    All Meals</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allreview">
                                <MdPreview />
                                    All Review</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/servemeal">
                                <FaHandsHelping />
                                    Serve Meal</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/upcomingmeal">
                                <MdUpcoming />
                                    Upcoming Meal</NavLink>
                            </li>
        </div>
    );
};

export default AdminSideBar;