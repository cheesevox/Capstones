import axios from "axios"

export const getOrderByUserID = (id) =>{
    try {
        const repose = axios.get(`https://homemealtaste.azurewebsites.net/api/Order/get-order-by-user-id?id=${id}`)
        return repose.data
    } catch (error) {
        console.log("error get user order by id")
    }
}
export const loginUser = () =>{
    try {
        const repose = axios.get(`https://homemealtaste.azurewebsites.net/api/User/login`)
        return repose.data
    } catch (error) {
        console.log("login error in here")
    }
}
export const getOrderByID =(id)=>{
    try {
        const repose = axios.get(`https://homemealtaste.azurewebsites.net/api/Order/get-order-by-order-id?id=${id}`)
        return repose.data
    } catch (error) {
        console.log("error by id get order")
    }
}