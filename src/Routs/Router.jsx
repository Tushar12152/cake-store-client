import { createBrowserRouter } from "react-router-dom";
import Layout from "../LayOuts/layout";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                
            }
        ]

    }
])

export default Router;