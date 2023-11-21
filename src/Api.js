import axios, { AxiosHeaders } from "axios"

export const getOrderByUserID = (id) => {
    try {
        const repose = axios.get(`https://homemealtaste.azurewebsites.net/api/Order/get-order-by-user-id?id=${id}`)
        return repose.data
    } catch (error) {
        console.log("error get user order by id")
    }
}
export const loginUser = () => {
    try {
        const repose = axios.get(`https://homemealtaste.azurewebsites.net/api/User/login`)
        return repose.data
    } catch (error) {
        console.log("login error in here")
    }
}
export const getOrderByID = (id) => {
    try {
        const repose = axios.get(`https://homemealtaste.azurewebsites.net/api/Order/get-order-by-order-id?id=${id}`)
        return repose.data
    } catch (error) {
        console.log("error by id get order")
    }
}

export const getAllMealInSessionID = (id) => {
    try {
        const repose = axios.get(`https://homemealtaste.azurewebsites.net/api/MealSession/get-all-meal-session-by-session-id?sessionid=${id}`)
        return repose.data
    } catch (error) {
        console.log("err in get all meal in sesion id")
    }
}

export const getAllArea = async () => {
    try {
        const repose = await axios.get(`https://homemealtaste.azurewebsites.net/api/Area/get-all-area`)
        return repose.data
    } catch (error) {

    }
}
export const getAllSessionByAreaId = async (id) =>{
    try {
        const response = await axios.get(`https://homemealtaste.azurewebsites.net/api/Session/get-all-session-by-area-id?areaid=${id}`)
        return response.data
    } catch (error) {
        console.log('get all session by area Id',error)
    }
}

export const getMealInSessionBySessionId =async (id)=>{
    try {
        const response= await axios.get(`https://homemealtaste.azurewebsites.net/api/MealSession/get-all-meal-session-by-session-id?sessionid=${id}`)
        return response.data
    } catch (error) {
        console.log('get all meal in session by session id')
    }
}

