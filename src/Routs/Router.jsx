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
                element:<CakeDetail></CakeDetail>,
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
                    element:<ManageUser/>
                 },
                 {
                    path:'/dashboard/addcake',
                    element:<AddCake></AddCake>
                 },
                 {
                    path:'/dashboard/allcake',
                    element:<AllCake></AllCake>
                 },
                 {
                    path:'/dashboard/orders',
                    element:<MyOrders></MyOrders>
                 },
                 {
                    path:"/dashboard/allorders",
                    element:<AllOrders></AllOrders>
                 }
        ]

    }
])

export default Router;