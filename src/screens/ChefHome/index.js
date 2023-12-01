import { FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import BellIcon from "../../components/Icons/BellIcon";
import MessageIcon from "../../components/Icons/MessageIcon";
import Item from "./components/Item";
import { getAllDishByKitchenId, getAllMealByKitchen } from "../../Api";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import DishItem from './components/DishItem'
import { Touchable } from "react-native";
import { RouteName, item } from "../../Constant";
const ChefHomeScreen = ({navigation}) => {
  const [dish, setDish] = useState([])
  const [meal, setMeal] = useState([])
  const user = useSelector((state) => state.user.user)
  const dishes = [
    {
      id: 1,
      name: "ramen",
      thubnail: undefined,
    },
    {
      id: 2,
      name: "hamburger",
      thubnail: undefined,
    },
    {
      id: 3,
      name: "Salmon",
      thubnail: undefined,
    },
    {
      id: 4,
      name: "Beefsteak",
      thubnail: undefined,
    },
    {
      id: 6,
      name: "ramen",
      thubnail: undefined,
    },
    {
      id: 7,
      name: "hamburger",
      thubnail: undefined,
    },
    {
      id: 8,
      name: "Salmon",
      thubnail: undefined,
    },
    {
      id: 9,
      name: "Beefsteak",
      thubnail: undefined,
    },
    {
      id: "",
      name: "Add More Dishes",
      thubnail: undefined,
    },
  ];

  const renderItem = (item) => {
    return <Item  navigation={navigation} item={item} />;
  };
  const renderDishItem = (item) => {
    return <DishItem navigation={navigation} item={item} 
     />;
  }
  const fetchAllDishByKitchenId = () => {
    getAllDishByKitchenId(user.kitchenId).then((res) => {
      setDish(res)
    })
  }
  const fetchAllMealByKitchenId = () => {
    getAllMealByKitchen(user.kitchenId).then((res) => {
      setMeal(res)
    })
  }
  console.log("DISSSSSSSSSSSSSSSSSSSSSSS", dish)
  console.log("MEaLLLLLLLLLLLLLLLLL", meal)

  useEffect(() => {
    fetchAllDishByKitchenId()
    fetchAllMealByKitchenId()
  }, [user?.kitchenId])
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <View style={styles.header}>
        <BellIcon />
        <MessageIcon />
      </View>
      <Text style={styles.headerText}>{"Hello Chef,"}</Text>

      <Text style={styles.titleStyle}>{"Dish of Kitchen"}</Text>
        <View style={styles.listDishStyle}>
          <FlatList
            data={dish}
            keyExtractor={(item) => item.id}
            renderItem={(item) => renderDishItem(item)}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      <Text style={styles.titleStyle}>{"Meal of Kitchen"}</Text>
      <View style={styles.listDishStyle}>
        <FlatList
          data={meal}
          keyExtractor={(item) => item.id}
          renderItem={(item) => renderItem(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingTop: 50,
    paddingHorizontal: 20,
    gap: 20,
    backgroundColor: "#FFF",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "#F95A0B",
    fontSize: 20,
    fontWeight: "700",
  },
  titleStyle: {
    color: "#4A43EC",
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 8,
  },
  listDishStyle: {
    width: "100%",
    height: "auto",
  },
});

export default ChefHomeScreen;
