import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosHooks/useAxiosSecure";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Container from "../shared/Container";

const AllCakes = () => {

    
    
    const axiosSecure=useAxiosSecure()


    const { data:cakes=[]} = useQuery({
        queryKey: ['cake'],
        queryFn: async() =>{
          const res=await axiosSecure.get('/cakes')
          return res.data
     } })
  

    return (
        <Container>
             <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {
                cakes.map(cake=><Card key={cake._id} sx={{ maxWidth: 415 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={cake?.imageUrl}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {cake?.Title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                       Price:  {cakes?.price} Taka
                      </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to={`/cake-detail/${cake?._id}`}>  <Button className='btn text-pink-400' >View Details</Button></Link>
                      
                    </CardActions>
                  </Card>)
              }
        </div>
        </Container>
    );
};

export default AllCakes;