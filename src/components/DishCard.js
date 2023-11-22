import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const DishCard = ({ item }) => {
  return (
    <View style={styles.cartcard}>
      <Image
        style={{
          width: "30%",
          height: "100%",
          marginLeft: 20,
          borderRadius: 20,
        }}
        source={item.image}
      />
      <View
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>{item.type}</Text>
      </View>
    </View>
  );
};

export default DishCard;

const styles = StyleSheet.create({
  cartcard: {
    width: "100%",
    minHeight: 100,
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "gray",
  },
});
