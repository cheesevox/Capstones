import React from "react";
import { FlatList, Pressable, StyleSheet, View, Text } from "react-native";
import MealItem from "./components/meal-item";
import HeaderComp from "../HeaderComp";
import AddIcon from "../../components/Icons/AddIcon";
import { RouteName } from "../../Constant";

const MealManagement = ({ navigation }) => {
  const meals = [
    {
      id: 1,
      name: "Ramen Noodles",
      type: "Noodles",
      description: "description",
      thubnail: undefined,
    },
    {
      id: 2,
      name: "Ramen Noodles",
      type: "Noodles",
      description: "description",
      thubnail: undefined,
    },
    {
      id: 3,
      name: "Ramen Noodles",
      type: "Noodles",
      description: "description",
      thubnail: undefined,
    },
    {
      id: 4,
      name: "Ramen Noodles",
      type: "Noodles",
      description: "description",
      thubnail: undefined,
    },
    {
      id: 5,
      name: "Ramen Noodles",
      type: "Noodles",
      description: "description",
      thubnail: undefined,
    },
    {
      id: 6,
      name: "Ramen Noodles",
      type: "Noodles",
      description: "description",
      thubnail: undefined,
    },
    {
      id: 7,
      name: "Ramen Noodles",
      type: "Noodles",
      description: "description",
      thubnail: undefined,
    },
    {
      id: 8,
      name: "Ramen Noodles",
      type: "Noodles",
      description: "description",
      thubnail: undefined,
    },
    {
      id: 9,
      name: "Ramen Noodles",
      type: "Noodles",
      description: "description",
      thubnail: undefined,
    },
  ];

  const renderItem = (item) => {
    return <MealItem data={item.item} navigation={navigation} />;
  };

  const handleClickAdd = () => {
    navigation.navigate(RouteName.FORM_MEAL);
  };

  return (
    <View>
      <HeaderComp
        label={"Manage Meal"}
        onBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            height: "80%",
          }}
        >
          <FlatList
            data={meals}
            keyExtractor={(item) => item.id}
            renderItem={(item) => renderItem(item)}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
        }}
      >
        <Pressable
          onPress={handleClickAdd}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
              backgroundColor: "#FFAB01",
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
              color: "#FFF",
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
    gap: 20,
    paddingTop: 30,
    paddingHorizontal: 20,
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

export default React.memo(MealManagement);
