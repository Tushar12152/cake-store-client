import { useLoaderData } from "react-router-dom";
import Container from "../shared/Container";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from './../AxiosHooks/useAxiosSecure';
import swal from "sweetalert";

const CakeDetail = () => {
    const cake=useLoaderData()
//   console.log(cake);
const {user}=useAuth()
const axiosSecure=useAxiosSecure()

const order={
    title:cake?.Title,
    img:cake?.imageUrl,
    orderBy:user?.email,
    category:cake?.Category,
    status:'pending'
}


const handleOrder=()=>{
    //  console.log(order);

     axiosSecure.post('/orders',order)
     .then(res=>{
         if(res.data.insertedId){
             swal('success','your order is success','success')
         }
     })

}


    return (
        <Container>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${cake?.imageUrl})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{cake?.Title}</h1>
      <p className="mb-5">{cake?.description}</p>
      <p className="mb-5"> made by : {cake?.ingredients}</p>
      <p className="mb-5">price:  {cake?.price} taka</p>
      <button onClick={handleOrder}  className="btn bg-pink-400">Order Now</button>
    </div>
  </div>
</div>
        </Container>
    );
};

export default CakeDetail;