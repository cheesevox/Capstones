import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DishIcon from "../../components/Icons/DishIcon";
import MealIcon from "../../components/Icons/MealIcon";
import { RouteName } from "../../Constant";
import HeaderComp from "../../screens/HeaderComp";
const KitchenScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderComp
        label={"Kitchen"}
        isHasBackIcon={false}
        isHasBellIcon={true}
        isHasMessageIcon={true}
      />
      <View
        style={{
          paddingVertical: 36,
          paddingHorizontal: 18,
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
          <Text style={styles.buttonText}>{"Let’s see your dish now"}</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            styles.button,
          ]}
          onPress={() => {
            navigation.navigate(RouteName.MEAL_MANAGEMENT);
          }}
        >
          <MealIcon />
          <Text style={styles.buttonText}>{"Meal"}</Text>
          <Text style={styles.buttonText}>{"Let’s see your meal now"}</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
    backgroundColor: "#FFF",
    height: "100%",
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
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#FFAB01",
    borderRadius: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    paddingVertical: 50,
  },
});

export default React.memo(KitchenScreen);
