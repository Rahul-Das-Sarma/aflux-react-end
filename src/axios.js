import axios from "axios";


const baseUrl= "https://aflux-ecom-complete-rogq6u1k7-rahul-das-sarma.vercel.app"  || "http://localhost:5000/"

const axiosInstances = axios.create({
    baseURL: baseUrl
})

export default axiosInstances;
