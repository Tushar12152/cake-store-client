import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../AxiosHooks/useAxiosSecure";
import Title from "../../shared/Title";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const AllOrders = () => {

    const axiosSecure=useAxiosSecure()


    const { data:order=[],refetch} = useQuery({
        queryKey: ['order'],
        queryFn: async() =>{
          const res=await axiosSecure.get('/orders')
          return res.data
     } })
  
// console.log(order);


  const handleConfirm=id=>{
    const confirm={
         status:'Confirmed'
    }
      axiosSecure.patch(`/orders/${id}`,confirm)
      .then(res=>{
        console.log(res.data);
          if(res.data.modifiedCount>0){
            refetch()
          }
      })
  }


    return (
        <div>
              <Title heading={'All Orders'}></Title>

              <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>

            <TableCell align="right">image</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Status</TableCell>
            
            <TableCell align="right">Confirm Order</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((row,idx) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx+1}
              </TableCell>
             

              <TableCell align="right" scope="row">
                <img className="w-20 rounded-full mx-auto" src={row?.img} alt="" />
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
                
                 <button onClick={()=>handleConfirm(row?._id)}  className="btn  bg-pink-400 text-white">Confirm</button>
                
              </TableCell>



              

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



        </div>
    );
};

export default AllOrders;