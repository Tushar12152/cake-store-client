import { createBrowserRouter } from "react-router-dom";
import Layout from "../LayOuts/layout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
    }
])

export default Router;