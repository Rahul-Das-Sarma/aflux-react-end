import axios from "axios";


const baseUrl= "https://damp-badlands-33929.herokuapp.com"  || "http://localhost:5000/"

const axiosInstances = axios.create({
    baseURL: baseUrl
})

export default axiosInstances;