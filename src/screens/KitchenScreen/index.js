import React from "react";
import BellIcon from "../../components/Icons/BellIcon";
import MessageIcon from "../../components/Icons/MessageIcon";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DishIcon from "../../components/Icons/DishIcon";
import MealIcon from "../../components/Icons/MealIcon";
import { RouteName } from "../../Constant";

const KitchenScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BellIcon />
        <MessageIcon />
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.titleHeaderContainer}>
          <Text style={styles.titleText}>{"Kitchen"}</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#d8feec",
          paddingVertical: 36,
          paddingHorizontal: 18,
          borderRadius: 30,
          gap: 36,
        }}
      >
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            styles.button,
          ]}
          onPress={() => {
            navigation.navigate(RouteName.DISH_MANAGEMENT);
          }}
        >
          <DishIcon />
          <Text style={styles.buttonText}>{"Dish"}</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            styles.button,
          ]}
        >
          <MealIcon />
          <Text style={styles.buttonText}>{"Meal"}</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingTop: 50,
    paddingHorizontal: 20,
    gap: 20,
    backgroundColor: "#FFF",
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleHeaderContainer: {
    backgroundColor: "#EFE6DA",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    marginBottom: 30,
  },
  titleText: {
    color: "#E88C80",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "700",
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#EFDBD3",
    borderRadius: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    paddingVertical: 20,
  },
});

export default React.memo(KitchenScreen);
