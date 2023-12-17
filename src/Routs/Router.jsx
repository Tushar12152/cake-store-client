import { createBrowserRouter } from "react-router-dom";
import Layout from "../LayOuts/layout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashBoard from "../LayOuts/DashBoard";
import ManageUser from "../Dashboard/Admin/ManageUser";
import AddCake from "../Dashboard/Admin/AddCake";
import AllCake from "../Dashboard/Admin/AllCake";
import Home from "../Pages/Home";
import CakeDetail from "../Components/CakeDetail";
import MyOrders from "../Dashboard/User/MyOrders";
import AllCakes from "../Pages/AllCakes";
import AllOrders from "../Dashboard/Admin/AllOrders";
import AdminRouts from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AdminProfile from "../Dashboard/Admin/AdminProfile";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                  path:'/',
                  element:<Home></Home>
            },
            {
                path:'/cake-detail/:id',
                element:<PrivateRoute><CakeDetail></CakeDetail></PrivateRoute>,
                loader:({params})=>fetch(`https://cake-house-server.vercel.app/cakes/${params.id}`)
            },
            
            {
             path:'/all-cakes'   ,
             element:<AllCakes></AllCakes>
            }
        ]

    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },

    {
        path:'/dashboard',
        element:<DashBoard/>,
        children:[
                 {
                    path:'/dashboard/manageUsers',
                    element:<AdminRouts><ManageUser/></AdminRouts>
                 },
                 {
                    path:'/dashboard/addcake',
                    element:<AdminRouts><AddCake></AddCake></AdminRouts>
                 },
                 {
                    path:'/dashboard/allcake',
                    element:<AdminRouts><AllCake></AllCake></AdminRouts>
                 },
                 {
                    path:'/dashboard/orders',
                    element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>
                 },
                 {
                    path:"/dashboard/allorders",
                    element:<AdminRouts><AllOrders></AllOrders></AdminRouts>
                 },
                 {
                    path:'/dashboard/adminProfile',
                    element:<AdminRouts>
                         <AdminProfile/>
                    </AdminRouts>
                 }
        ]

    }
])

export default Router;