import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../AxiosHooks/useAxiosSecure";
import Title from "../../shared/Title";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import useAuth from './../../Hooks/useAuth';
import swal from "sweetalert";


const MyOrders = () => {

    const {user}=useAuth()
    const userMail=user?.email
    // console.log(userMail);
    const axiosSecure=useAxiosSecure()


    const { data:order=[],refetch} = useQuery({
        queryKey: ['order'],
        queryFn: async() =>{
          const res=await axiosSecure.get('/orders')
          return res.data
     } })
  
// console.log(orders);



   const orders=order.filter(item=>item.orderBy===userMail)





   const handleDelete=id=>{


    swal({
        title: "Are you sure?",
        text: "want to cancelled this order??",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axiosSecure.delete(`/orders/${id}`)
            .then((res)=>{
               if(res.data.deletedCount>0){
                   swal('success','your order is cancelled','success')
                   refetch()
               }
            })
        } else {
          swal("Your order is safe!");
        }
      });




      
   }


    return (
        <div>
            <Title heading={'My orders'}></Title>



            <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Status</TableCell>
            
            <TableCell align="right">Cancel Order</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row,idx) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx+1}
              </TableCell>
             

              <TableCell  align="right" scope="row">
                {row?.orderBy}
              </TableCell>

              <TableCell  align="right" scope="row">
                {row?.title}
              </TableCell>
              <TableCell  align="right" scope="row">
                {row?.status}
              </TableCell>


            

              <TableCell align="right" scope="row">
                
                 <button onClick={()=>handleDelete(row?._id)}  className="btn bg-pink-400 text-white">Cancel</button>
                
              </TableCell>



              

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
    );
};

export default MyOrders;