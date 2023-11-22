import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getAllMealInSessionID } from "../Api";
import FoodCard from "./FoodCard";

export default function MealSessionCard({ sessionId }) {
  const [allMeal, setAllMeal] = useState([]);
  useEffect(() => {
    getAllMealInSessionID(sessionId).then((res) => {
      setAllMeal(res);
    });
  }, [sessionId]);
  return (
    <View>
      {allMeal?.map((item, index) => (
        // <Text key={index}>{item.mealDtoForMealSession?.name}</Text>
        <FoodCard item={item}/>
      ))}
    </View>
  );
}