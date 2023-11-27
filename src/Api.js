import axios from "axios";

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
// distrct,area
export const getAllDistrict = async () => {
  try {
    const response = await axios.get(
      "https://homemealtaste.azurewebsites.net/api/District/get-all-district"
    );
    return response.data;
  } catch (error) {
    console.log("Error get all district", error);
  }
};
export const getAreaByDistrictId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Area/get-area-by-district-id?districtid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("Get area by district id", error);
  }
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
// chef dish
export const getAllDishByKitchenId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Dish/get-dish-by-kitchen-id?kitchenid=${id}`
    );
    return response.data;
  } catch (error) {}
};
export const deleteDishByDishId = async (id) => {
  try {
    await axios.delete(
      `https://homemealtaste.azurewebsites.net/api/Dish?id=${id}`
    );
    console.log("Delete successfully.");
  } catch (error) {
    console.log("delete dish", error);
  }
};
export const createNewDish = async (values) => {
  console.log("values là", values);
  try {
    const headers = {
      accept: "application/json",
      "content-type": "multipart/form-data",
    };
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });
    const response = await axios.post(
      "https://homemealtaste.azurewebsites.net/api/Dish",
      formData,
      { headers }
    );
    if (response.status === 200) {
      console.log("Create new dish successfully.");
      console.log(response.data);
    }
  } catch (error) {
    console.error("Error creating new dish:", error.message);
    console.error("Error details:", error.response);

    // Log the entire error object for more information
    console.error("Full error object:", error);

    // If error.response is not available, log the entire error object
    if (!error.response) {
      console.error("Error object without response:", error);
    }
  }
};
export const getAllDishType = async () => {
  try {
    const response = await axios.get(
      "https://homemealtaste.azurewebsites.net/api/DishType/get-all-dish-type"
    );
    return response.data.data;
  } catch (error) {
    console.log("get all dishtype error", error);
  }
};
export const getAllMealByKitchen = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Meal/get-all-meal-by-kitchen-id?id=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get all meal by kitchen error", error);
  }
};
// export const getDishByMealId = async (id)=>{
//     try {
//         const response = await axios.get(`https://homemealtaste.azurewebsites.net/api/Dish/get-dish-id-by-meal-id?mealid=${id}`)

//     } catch (error) {

//     }
// }
export const getMealById = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Meal/get-single-meal-by-meal-id?mealid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get meal by id", error);
  }
};
