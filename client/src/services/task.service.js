import axios from "axios";

// import axiosInstance from "./tokenInterceptor";

let options = {
    baseURL: 'http://localhost:3000/',
}
let axiosInstance = axios.create(options);

export const sendBekend = async (data) => {
    try {
        // console.log(data)
        const response = await axiosInstance.post('api/add', data);
        // console.log(response)
        return response.data
    } catch (e) {
        console.log(e.response.data)
        alert(JSON.stringify(e?.response.data?.message, null, 2))
    }
}
export const getAll = async () => {
    try {
        const response = await axiosInstance.get('api/getAll');
        // console.log(response)
        return response.data
    } catch (e) {
        console.log(e.response.data)
        alert(JSON.stringify(e.response?.data?.message, null, 2))
    }
}
export const updateServis = async (data, position) => {
    try {
        await axiosInstance.post('api/update', {data, position});
        // return response.data
    } catch (e) {
        console.log(e.response.data)
        alert(JSON.stringify(e.response.data?.message, null, 2))
    }
}