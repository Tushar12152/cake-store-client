import { createBrowserRouter } from "react-router-dom";
import Layout from "../LayOuts/layout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashBoard from "../LayOuts/DashBoard";
import ManageUser from "../Dashboard/Admin/ManageUser";
import AddCake from "../Dashboard/Admin/AddCake";
import AllCake from "../Dashboard/Admin/AllCake";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {

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
                 }
        ]

    }
])

export default Router;