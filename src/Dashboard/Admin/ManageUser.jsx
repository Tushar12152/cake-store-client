import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../AxiosHooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const ManageUser = () => {

    const {user}=useAuth()
    const userMail=user?.email
    const axiosSecure=useAxiosSecure()
    // console.log(userMail);
  
    const { data:users=[]} = useQuery({
      queryKey: ['user'],
      queryFn: async() =>{
        const res=await axiosSecure.get('/users')
        return res.data
   } })


   const alluser=users.filter(user=>user?.email!==userMail)

   console.log(alluser);
    return (
        <div>
               {alluser.map(user=><li></li>)}
        </div>
    );
};

export default ManageUser;