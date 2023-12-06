import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../AxiosHooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
// import swal from "sweetalert";

const ManageUser = () => {
    const [toggle,setToggle]=useState(true)
    const [role,setRole]=useState('')
    const {user}=useAuth()
    const userMail=user?.email
    const axiosSecure=useAxiosSecure()
    // console.log(role);

   

    useEffect(()=>{
        toggle?setRole('admin'):setRole('user')
    },[toggle])


   

  
    const { data:users=[],refetch} = useQuery({
      queryKey: ['user'],
      queryFn: async() =>{
        const res=await axiosSecure.get('/users')
        return res.data
   } })



   const handleAdmin=(id,name)=>{

    const Role={
        role:role
    }
      axiosSecure.patch(`/users/${id}`,Role)
      .then(res=>{
          if(res.data.modifiedCount>0){
            swal("Good job!",`${name}'s  Role has been changed Succesfully`, "success");
            refetch()
          }
      })
}



   const alluser=users?.filter(user=>user?.email!==userMail)

//    console.log(alluser);
    return (
        <div>
              <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Role</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {alluser.map((row,idx) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx+1}
              </TableCell>
             

              <TableCell  align="right" scope="row">
                {row?.name}
              </TableCell>


              <TableCell  align="right" scope="row">
                {row?.email}
              </TableCell>

              <TableCell  onClick={()=>setToggle(!toggle)} align="right" scope="row">
                
                 <button onClick={()=>handleAdmin(row?._id,row?.name)} className="btn bg-pink-400 text-white">{row?.role}</button>
                
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageUser;