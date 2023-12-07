import { NavLink, Outlet } from "react-router-dom";
import useAxiosSecure from "../AxiosHooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import AdminSideBar from "../Dashboard/Admin/AdminSideBar";
import UserSideBar from "../Dashboard/User/UserSideBar";
import { FaHome } from "react-icons/fa";

const DashBoard = () => {
    const {user}=useAuth()
    const userMail=user?.email
    const axiosSecure=useAxiosSecure()
    
  
    const { data:users=[]} = useQuery({
      queryKey: ['user'],
      queryFn: async() =>{
        const res=await axiosSecure.get('/users')
        return res.data
   } })


   const specificuser=users.find(user=>user?.email===userMail)
   
   const Admin=specificuser?.role==='admin'


// console.log(Admin);

    return (
        <div className="grid grid-cols-12 h-full ">
             <div className="col-span-5 md:col-span-3 min-h-screen text-center text-white bg-pink-400 ">
                 {
                    Admin?<AdminSideBar/>:<UserSideBar/>
                 }



                 <div className="mt-20  menu">
                    <hr/>
                 <li >
                                <NavLink to="/">
                                <FaHome/>
                                    Home</NavLink>
                            </li>
                 </div>
             </div>
             <div className="col-span-7 md:col-span-9 p-10 min-h-screen">
                <Outlet></Outlet>
             </div>
        </div>
    );
};

export default DashBoard;