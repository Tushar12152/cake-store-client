import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { PropTypes } from 'prop-types';


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading}=useAuth()

if(loading){
    return <div>
         Loading...................
    </div>
}

if(user){
     
    return  children
}
else{
     return <Navigate  state={location?.pathname}  to='/login'></Navigate>
}

};

PrivateRoute.propTypes={
     children:PropTypes.node,
}


export default PrivateRoute;