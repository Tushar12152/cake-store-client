import { NavLink } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { MdManageAccounts,} from "react-icons/md";
const UserSideBar = () => {
    return (
        <div className="menu p-4">
            <li>
                                <NavLink to="/dashboard/adminProfile">
                                <CgProfile />  User Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/orders">
                                <MdManageAccounts />
                                   My Orders</NavLink>
                            </li>
   
        </div>
    );
};

export default UserSideBar;