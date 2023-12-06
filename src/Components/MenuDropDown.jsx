import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import useAxiosSecure from '../AxiosHooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'



const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user,logout} = useAuth()
  const userMail=user?.email;
  const axiosSecure=useAxiosSecure()
  const navigate=useNavigate()

  const { data:users=[]} = useQuery({
    queryKey: ['user'],
    queryFn: async() =>{
      const res=await axiosSecure.get('/users')
      return res.data
 } })

// console.log((users));

const specificUser=users?.find(user=>user.email===userMail)
//  console.log(specificUser);

  const handleLogOut=()=>{
    logout()
    .then(()=>{
       toast.success('logged out')
       navigate('/login')
    })
  }


  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Become A Host btn */}
        <div className='hidden md:block'>
         
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={specificUser?.image}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
         {
          !user?
          <div className='flex flex-col cursor-pointer'>
           

          <Link
            to='/login'
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
          >
            Login
          </Link>
          <Link
            to='/register'
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
          >
            Sign Up
          </Link>
        </div>
        :
        <div className='flex flex-col cursor-pointer'>

         <h1 className='text-center p-2 bg-pink-400 font-bold'>{specificUser?.name}</h1>

          <Link
            to='/dashboard'
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
          >
            Dashboard
          </Link>
          <Link
            onClick={handleLogOut}
            to='/register'
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
          >
            Log out
          </Link>
        </div>
         }
        </div>
      )}
    </div>
  )
}

export default MenuDropdown