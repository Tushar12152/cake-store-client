import axios from "axios";


const instance=axios.create({
    baseURL:'https://cake-house-server.vercel.app'
})

const useAxiosSecure = () => {
    return  instance ;
};

export default useAxiosSecure;