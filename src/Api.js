import axios from "axios";
import { useDispatch } from "react-redux";
export const login = async (values, navigation) => {
  try {
    const response = await axios.post(
      `https://homemealtaste.azurewebsites.net/api/User/login`,
      values
    );
    const { roleId } = response.data;
    if (response.data) {
  
      if (roleId == 2) {
        navigation.navigate("CustomerHome");
        return response.data
      } else {
        navigation.navigate("chay toi trang chef");
      }
    } else {
      console.log("loi login");
    }
  } catch (error) {
    console.log("loi login", error);
  }
};

export const getOrderByUserID = (id) => {
  try {
    const repose = axios.get(
      `https://homemealtaste.azurewebsites.net/api/Order/get-order-by-user-id?id=${id}`
    );
    return repose.data;
  } catch (error) {
    console.log("error get user order by id");
  }
};
export const loginUser = () => {
  try {
    const repose = axios.get(
      `https://homemealtaste.azurewebsites.net/api/User/login`
    );
    return repose.data;
  } catch (error) {
    console.log("login error in here");
  }
};
export const getOrderByID = (id) => {
  try {
    const repose = axios.get(
      `https://homemealtaste.azurewebsites.net/api/Order/get-order-by-order-id?id=${id}`
    );
    return repose.data;
  } catch (error) {
    console.log("error by id get order");
  }
};

export const getAllMealInSessionID = async (id) => {
  try {
    const repose = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/MealSession/get-all-meal-session-by-session-id?sessionid=${id}`
    );
    return repose.data;
  } catch (error) {
    console.log("err in get all meal in sesion id");
  }
};

export const getAllArea = async () => {
  try {
    const repose = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Area/get-all-area`
    );
    return repose.data;
  } catch (error) {}
};
export const getAllSessionByAreaId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Session/get-all-session-by-area-id?areaid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get all session by area Id", error);
  }
};

export const getMealInSessionBySessionId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/MealSession/get-all-meal-session-by-session-id?sessionid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get all meal in session by session id");
  }
};
export const getAllMealSession = async () => {
  try {
    const response = await axios.get(
      "https://homemealtaste.azurewebsites.net/api/MealSession/get-all-meal-session"
    );
    return response.data;
  } catch (error) {
    console.log("get all meal ss", error);
  }
};
export const getDishByMealId = async (id)=>{
  try {
    const response = await axios.get(`https://homemealtaste.azurewebsites.net/api/Meal/get-single-meal-by-meal-id?mealid=${id}`)
    return response.data
  } catch (error) {
      console.log("get dish by mela id", error)
  }
}
export const createOrderUser = async(values)=>{
  console.log("values creaorder ///////////////",values)
  try {
    const response =await axios.post("https://homemealtaste.azurewebsites.net/api/Order/create-order",values)
  } catch (error) {
    console.log("create order",error)
  }
}

export const getAllOrderByCutomerId = async(id)=>{
  try {
    const response = await axios.get(`https://homemealtaste.azurewebsites.net/api/Order/get-order-by-customer-id?id=${id}`)
    return response.data
  } catch (error) {
    console.log("erroe all order by cutomer id" ,error)
  }
}

export const getAllAreaByDistrictId = async(id) =>{
  try {
    const response = await axios.get(`https://homemealtaste.azurewebsites.net/api/Area/get-area-by-district-id?districtid=${id}`)
    return response.data
  } catch (error) {
    console.log("error in getall area by district")
  }
}