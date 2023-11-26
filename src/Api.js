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
// chef
export const getAllDishByKitchenId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Dish/get-dish-by-kitchen-id?kitchenid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get all dish by kitchen id", error);
  }
};
export const getAllMealByKitchenId = async (id) => {
  try {
    const response = await axios.get(
      `https://homemealtaste.azurewebsites.net/api/Meal/get-all-meal-by-kitchen-id?id=${id}`
    );
    return response.data;
  } catch (error) {
    console.log("get all meal by kitchen id", error);
  }
};
