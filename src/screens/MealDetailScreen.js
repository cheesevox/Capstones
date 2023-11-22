import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { Ionicons } from "@expo/vector-icons";
import DishCard from "../components/DishCard";

const MealDetailScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const { qty, setQty } = React.useState(1);
  console.log(item);
  return (
    <View>
      <ScrollView>
        <View
          style={{
            position: "relative",
          }}
        >
          <Image
            source={item.image}
            style={{
              width: 500,
              height: 200,
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              height: 40,
              position: "absolute",
              marginTop: 40,
              marginLeft: 24,
              backgroundColor: "white",
              borderRadius: 28,
            }}
          >
            <Icon.ArrowLeft style={{ color: "orange" }} strokeWidth={3} />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              backgroundColor: "#fff",
              borderTopLeftRadius: 60,
              borderTopRightRadius: 50,
              justifyContent: "space-between",
              flexDirection: "row",
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>
            <TouchableOpacity
              // onPress={() => navigation.navigate("MealDetail", { item: item })}
              onPress={() => navigation.navigate("OrderCart")}
              style={{
                width: 50,
                height: 50,
                backgroundColor: "orange",
                borderRadius: 28,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="cart-outline" size={25} />
              {/* <ion-icon name="cart-outline"></ion-icon> */}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              backgroundColor: "black",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 40,
                height: 40,
                position: "absolute",
                marginTop: 24,
                marginLeft: 24,
                backgroundColor: "white",
                borderRadius: 28,
              }}
            >
              <Icon.ArrowLeft style={{ color: "orange" }} strokeWidth={3} />
            </TouchableOpacity>
          </View>
          <View>
            <Text></Text>
          </View>

          <View style={{ backgroundColor: "white", padding: 20, gap: 10 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 26,
                  paddingBottom: 36,
                  marginLeft: 30,
                  marginTop: 30,
                }}
              >
                Menu Dish
              </Text>
              <Text
                style={{
                  marginRight: 10,
                  fontWeight: "bold",
                  fontSize: 20,
                  paddingBottom: 36,
                  marginLeft: 30,
                  marginTop: 36,
                  color: "red",
                }}
              >
                {/* {item.price}vnd
                 */}
                35000 VND
              </Text>
            </View>
            {item.dishes.map((dish, index) => (
              <DishCard item={{ ...dish }} key={index} />
            ))}
          </View>
        </View>
        return (
        <View>
          <ScrollView>
            <View
              style={{
                position: "relative",
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: 500,
                  height: 360,
                }}
              />
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                  height: 40,
                  position: "absolute",
                  marginTop: 40,
                  marginLeft: 24,
                  backgroundColor: "white",
                  borderRadius: 28,
                }}
              >
                <Icon.ArrowLeft style={{ color: "orange" }} strokeWidth={3} />
              </TouchableOpacity>
              <View
                style={{
                  position: "absolute",
                  marginTop: 260,
                  width: "100%",
                  backgroundColor: "#fff",
                  borderTopLeftRadius: 60,
                  borderTopRightRadius: 50,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: 50,
                  }}
                >
                  <Text
                    style={{ fontSize: 30, fontWeight: "bold", marginTop: 10 }}
                  >
                    {item.name}
                  </Text>
                  <View style={{ marginRight: 20 }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("OrderCart", { item: item })
                      }
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 50,
                        height: 50,
                        marginTop: 15,
                        backgroundColor: "orange",
                        borderRadius: 28,
                      }}
                    >
                      <Ionicons name="cart-outline" color={"white"} size={25} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View></View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: 40,
                      height: 40,
                      position: "absolute",
                      marginTop: 24,
                      marginLeft: 24,
                      backgroundColor: "white",
                      borderRadius: 28,
                    }}
                  >
                    <Icon.ArrowLeft
                      style={{ color: "orange" }}
                      strokeWidth={3}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 50,
                    paddingBottom: 2,
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="star-outline"
                    size={15}
                    style={{ color: "orange" }}
                  />
                  <Text style={styles.text}> {item.rating}</Text>
                  <Text style={styles.text}> Đánh Giá (4.6k review)</Text>
                </View>
                <View>
                  <Text></Text>
                </View>
              </View>
              <View style={{ paddingBottom: 36, backgroundColor: "white" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 26,
                      paddingBottom: 36,
                      marginLeft: 30,
                      marginTop: 30,
                    }}
                  >
                    Menu Dish
                  </Text>
                  <Text
                    style={{
                      marginRight: 10,
                      fontWeight: "bold",
                      fontSize: 20,
                      paddingBottom: 36,
                      marginLeft: 30,
                      marginTop: 36,
                    }}
                  >
                    {item.price}vnd
                  </Text>
                </View>
                {item.dishes.map((dish, index) => (
                  <DishCard item={{ ...dish }} key={index} />
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});
