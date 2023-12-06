import { useForm } from "react-hook-form";
import Title from "../../shared/Title";
import swal from "sweetalert";
import { imageUpload } from "../../Api/UploadImage";
import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../AxiosHooks/useAxiosSecure";
// import useAuth from "../../Hooks/useAuth";

const AddCake = () => {

    // const { user } = useAuth();
    // const userEmail = user?.email;
    const axiosSecure = useAxiosSecure();
  
   
  
    const [category, setCategory] = useState('breakfast');
  
    const handleSelectChange = (event) => {
      setCategory(event.target.value);
    };
  
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
    const onSubmit = async (data) => {
      try {
        const imageFile = data.image[0];
        const imageUrl = await imageUpload(imageFile);
        const image = imageUrl?.data?.display_url;
  
        const cake = { ...data, Category: category, imageUrl: image };
//   console.log(cake);
        const res = await axiosSecure.post('/cakes', cake);
        if (res?.data?.insertedId) {
          swal("Wow!", "Your Meal is uploaded Successfully", "success");
          reset();
        }
      } catch (error) {
        console.error('Error upload img', error);
      }
    }
  
   
  
    return (
        <div>
 
 <Title heading={'Add Cake'}></Title>



      <form onSubmit={handleSubmit(onSubmit)}>
        
    <div className="lg:flex gap-4">
    <div className="form-control w-[50%]">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input   {...register("Title")} type="text" placeholder="Meals Title" className="input input-bordered"  required />
      </div>

    <div className="form-control  w-[50%]">
        <label className="label">
          <span className="label-text">Ingredients</span>
        </label>
        <input  {...register("ingredients")} type="text" placeholder="Ingredients" className="input input-bordered" required />
      </div>
    </div>


    <div className="lg:flex gap-4">
    <div className="form-control w-[50%]">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input  {...register("description")} type="text" placeholder="Description" className="input input-bordered"  required />
      </div>

    <div className="form-control  w-[50%]">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input  {...register("price")} type="text" placeholder="Price" className="input input-bordered"  required />
      </div>
    </div>


    <div className="lg:flex gap-4">
    <div className="form-control w-[50%]">
        <label className="label">
          <span className="label-text">Rating</span>
        </label>
        <input  {...register("rating")} type="text" placeholder="Rating" className="input input-bordered"  required />
      </div>

    <div className="form-control  w-[50%]">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <input   {...register("date")} type="date" placeholder="Date" className="input input-bordered" required />
      </div>
    </div>


  

    
   


  


    <div className="lg:flex gap-4">
    <div className="form-control w-[50%]">
        <label className="label">
          <span className="label-text">Image</span>
        </label>
        <input {...register("image")} type="file" placeholder=""   accept='image/*' id="image" className="input input-bordered" required />
      </div>

    <div className="form-control  w-[50%]">
        
        <label htmlFor="selectOption">Category</label>
    <select className="input input-bordered" id="category" name="category" value={category} onChange={handleSelectChange}>
      <option value="chocolate_cake">chocolate cake</option>
      <option value="strawberry_cake">Strawberry Cake</option>
      <option value="cup_cake">Cup Cake</option>
      <option value="orange_cake">Orange Cake</option>
      <option value="coffee_cake">Coffee Cake</option>
  
    </select>
      </div>
    </div>


        <div className="form-control mt-2 w-[100%]">
          <input
            type="submit"
            value="Add Cake"
            className="input input-bordered bg-pink-400 cursor-pointer text-white"
          />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
      </form>

      
    </div>
    );
};

export default AddCake;