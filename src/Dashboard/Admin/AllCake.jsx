import { useQuery } from "@tanstack/react-query";
import Title from "../../shared/Title";
import useAxiosSecure from "../../AxiosHooks/useAxiosSecure";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
// import toast from "react-hot-toast";
import swal from "sweetalert";

const AllCake = () => {


    const axiosSecure=useAxiosSecure()


    const { data:cakes=[],refetch} = useQuery({
        queryKey: ['cake'],
        queryFn: async() =>{
          const res=await axiosSecure.get('/cakes')
          return res.data
     } })
  

// console.log(cakes);

const handleDelete=id=>{
    //  console.log(id);



    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this cake",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
         
          axiosSecure.delete(`/cakes/${id}`)

          .then(res=>{
               if(res.data.deletedCount>0){
                swal("Poof! Your cake has been deleted!", {
                    icon: "success",
                  });

                  refetch()
               }
          })


        } else {
          swal("Your cake is not delete");
        }
      });




    
}





    return (
        <div>
            <Title heading={'All Cakes'}></Title>

            <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">view detail</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {cakes.map((row,idx) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx+1}
              </TableCell>
             

              <TableCell  align="right" scope="row">
                {row?.Title}
              </TableCell>


              <TableCell  align="right" scope="row">
              <button  className="btn bg-pink-400 text-white"><FaEdit></FaEdit></button>
              </TableCell>

              <TableCell align="right" scope="row">
                
                 <button onClick={()=>handleDelete(row?._id)}  className="btn bg-pink-400 text-white"><FaTrash/></button>
                
              </TableCell>



              <TableCell align="right" scope="row">
                
                 <button  className="btn bg-pink-400 text-white"><FaEye/></button>
                
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>




        </div>
    );
};

export default AllCake;