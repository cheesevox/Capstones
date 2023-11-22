import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Icons from "../../components/Icons";
import Dish from "./components/dish";
import AddIcon from "../../components/Icons/AddIcon";

const DishManagement = ({ navigation }) => {
  const { BackIcon } = Icons;
  const dishes = [
    {
      id: 1,
      name: "Ramen Noodles",
      type: "Noodles",
      thubnail: undefined,
    },
    {
      id: 2,
      name: "Ramen Noodles",
      type: "Noodles",
      thubnail: undefined,
    },
    {
      id: 3,
      name: "Ramen Noodles",
      type: "Noodles",
      thubnail: undefined,
    },
    {
      id: 4,
      name: "Ramen Noodles",
      type: "Noodles",
      thubnail: undefined,
    },
    {
      id: 5,
      name: "Ramen Noodles",
      type: "Noodles",
      thubnail: undefined,
    },
    {
      id: 6,
      name: "Ramen Noodles",
      type: "Noodles",
      thubnail: undefined,
    },
    {
      id: 7,
      name: "Ramen Noodles",
      type: "Noodles",
      thubnail: undefined,
    },
    {
      id: 8,
      name: "Ramen Noodles",
      type: "Noodles",
      thubnail: undefined,
    },
    {
      id: 9,
      name: "Ramen Noodles",
      type: "Noodles",
      thubnail: undefined,
    },
  ];

  const renderItem = (item) => {
    return <Dish data={item.item} />;
  };

  return (
    <View style={styles.container}>
      <View>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackIcon />
        </Pressable>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.titleHeaderContainer}>
          <Text style={styles.titleText}>{"Manage Dish"}</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: "68%",
        }}
      >
        <FlatList
          data={dishes}
          keyExtractor={(item) => item.id}
          renderItem={(item) => renderItem(item)}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
        }}
      >
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
              backgroundColor: "#EAC8C5",
              flexDirection: "row",
              paddingHorizontal: 24,
              paddingVertical: 8,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
            },
          ]}
        >
          <Text
            style={{
              color: "#756463",
              textAlign: "center",
            }}
          >
            {"Add more"}
          </Text>
          <AddIcon />
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
  titleHeaderContainer: {
    backgroundColor: "#EFE6DA",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
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
});
export default React.memo(DishManagement);
