import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../Api/UploadImage";

import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../AxiosHooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const axiosPublic=useAxiosPublic()
    const {createUser,logout}=useAuth()
    const navigate=useNavigate()
    
const handleSubmit=async e=>{
    e.preventDefault()
    const form=e.target;
    const email=form.email.value;
    const name=form.name.value;
    const photo=form.photo.files[0]
    const img=await imageUpload(photo)
    const image=img?.data?.display_url;
    const password=form.password.value;
    // console.log(email,password,name,image);

    

   


    createUser(email,password)
    .then((res)=>{
        //   console.log(res);

        if(res?.user){

          const userInfo={
            name,
            image,
            email: res?.user?.email,
           role:'user'
       }
          axiosPublic.post('/users',userInfo)
          .then(()=>{
            logout()
            .then(()=>{
                 navigate('/login')
                 toast.success('Your Registration Compleate')
            })
          })
            
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}


    return (
        <div>
          
<Helmet>
     <title>Nazme,s shop || Register</title>
</Helmet>
             <div className="hero min-h-screen shadow-2xl bg-base-200 ">
  <div className="hero-content flex-col w-[70%] justify-between items-center lg:flex-row">
    <div className=" relative ">
         <img className="w-full rounded-full" src={'https://i.ibb.co/yqRg4Yt/images.png'} alt="" />
         <h1 className="absolute bottom-[10px] animate-bounce bg-pink-400 p-2 rounded-full text-gray-200 left-12">Enjoy Your Life</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <h1 className="text-center font-bold text-2xl ">Register Now ❤️</h1>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="name" placeholder="name" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input name="photo" type="file" placeholder="name" className="input input-bordered" required />
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-pink-400 text-white">Register</button>
        </div>

          <p className="text-center p-5">Already have an account ? Please <Link className="text-pink-400" to='/login'>Login </Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;