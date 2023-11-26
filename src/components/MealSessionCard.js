import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getAllMealInSessionID } from "../Api";
import FoodCard from "./FoodCard";
import { ScrollView } from "react-native";
import { item } from "../Constant";
import { useFocusEffect } from "@react-navigation/native";

export default function MealSessionCard({sessionId}) {
  const [allMeal, setAllMeal] = useState([]);
  const fetchAllMeal = ()=>{
    getAllMealInSessionID(sessionId).then((res)=>{
      console.log("trong trang meal sesison carddddd",sessionId)
      setAllMeal(res)
    })
  }
  useEffect(()=>{
    fetchAllMeal()
  },[])
  return (
        // <Text key={index}>{item.mealDtoForMealSession?.name}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
          allMeal?.map((item,index)=>(
            <FoodCard item={item} key={index}/>
          ))
          }
        </ScrollView>
  );
}