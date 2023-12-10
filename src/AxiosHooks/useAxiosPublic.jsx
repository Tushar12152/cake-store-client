import axios from "axios";


const instance=axios.create({
    baseURL:'https://cake-house-server.vercel.app/'
})

const useAxiosPublic = () => {
    return  instance ;
};

export default useAxiosPublic;