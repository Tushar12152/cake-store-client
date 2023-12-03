import { Link } from "react-router-dom";

const Login = () => {


const handleSubmit=e=>{
    e.preventDefault()
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
}


    return (
        <div>
             <div className="hero min-h-screen shadow-2xl bg-base-200 ">
  <div className="hero-content flex-col w-[70%] justify-between items-center lg:flex-row">
    <div className=" relative ">
         <img className="w-full rounded-full" src={'https://i.ibb.co/yqRg4Yt/images.png'} alt="" />
         <h1 className="absolute bottom-[10px] animate-bounce bg-pink-400 p-2 rounded-full text-gray-200 left-12">Enjoy Your Life</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <h1 className="text-center font-bold text-2xl ">Log In Here ❤️</h1>
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
          <button className="btn bg-pink-400 text-white">Login</button>
        </div>

          <p className="text-center p-5">New Here ? Please <Link className="text-pink-400" to='/register'>Register </Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;