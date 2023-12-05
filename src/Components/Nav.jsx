import { NavLink } from "react-router-dom";
import Container from "../shared/Container";
import MenuDropdown from "./MenuDropDown";

const Nav = () => {

    const nav=<div className="flex gap-6 ">
          <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-pink-400 underline" : "" }>Home</NavLink>


          <NavLink to="/all-cakes" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-pink-400 underline" : "" }>All Cakes</NavLink>



          <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-pink-400 underline" : "" }>Join Us</NavLink>


    </div>





    return (
        <Container>
             <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {nav}
      </ul>
    </div>
<img className="w-20  rounded-full" src={"https://i.ibb.co/CBKdcNk/images-2.jpg" }alt="" />

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {nav}
    </ul>
  </div>
  <div className="navbar-end">
   <MenuDropdown/>
  </div>
</div>
        </Container>
    );
};

export default Nav;