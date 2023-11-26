import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import PlusIcon from "../../../components/Icons/PlusIcon";

const DishItem = (props) => {
  const { item } = props;
  console.log("itemmmmmmmmmmmmm sao undifinde", item.item.dishId);
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainerStyle}>
        {item.item?.mealId !== "" ? (
          <Image
            source={
              { uri: item.item.image } ??
              require("../../../../assets/images/splashimage.jpg")
            }
            style={styles.imageStyle}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.plusIconStyle}>
            <PlusIcon />
          </View>
        )}
      </View>

      <Text style={styles.titleImageStyle}>{item.item?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    gap: 8,
    padding: 16,
    paddingLeft: 0,
    flex: 1,
  },
  imageContainerStyle: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "columnn",
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 25,
    justifyContent: "center",
    alignContent: "center",
  },
  titleImageStyle: {
    color: "#000",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "400",
  },
  plusIconStyle: {
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
  },
});

export default React.memo(DishItem);
