import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import foods, { order } from "../../Constant";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ArrowDownLeft } from "react-native-feather";
import { faArrowLeft, faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import ChefOrderDetailScreen from "./ChefOrderDetailScreen";
import ChefHomeScreen from "../ChefHome";
import { getOrderByKitchenId, postStatusPaidToCompleted } from "../../Api";
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
const ChefOrderScreen = ({ navigation }) => {
  const plus = ({ item }) => { };
  const user = useSelector((state) => state.user.user)
  const [orders, setOrders] = useState([])
  const fetchAllOrder = () => {
    getOrderByKitchenId(user.kitchenId).then((res) => {
      setOrders(res)
    })
  }
  const onHandleCompletedOrder = (orderId) => {
    postStatusPaidToCompleted(orderId).then(() => {
      fetchAllOrder()
      return Toast.show({
        type: 'success',
        text1: 'Home Meal Taste',
        text2: `Order ${orderId} is post completed.`
      });
    })
  }
  const CartCard = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.cartcard}
        onPress={() => navigation.navigate("ChefOrderDetail", item = { item })}
      >
        <View
          style={{
            paddingVertical: 10,
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              padding: 5,
            }}
          >
            <Image
              source={{ uri: item?.mealSession?.mealDtoOrderResponse?.image }}
              style={{ width: 100, height: 100, resizeMode: "cover" }}
            />
            <View
              style={{
                justifyContent: "center",
                flexDirection: "column",
                marginLeft: 20,
              }}
            >
              <Text style={styles.textItem}>Order ID : {item.orderId}</Text>
              <Text style={styles.textItem}>Quantity: {item?.mealSession?.quantity}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                  Total: {item.totalPrice}
                </Text>
              </View>
              <Text>{item.time}</Text>
              <Text>Customer Name : {item?.customer?.name}</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {
              item?.status?.includes("PAID") ?
           (
            <TouchableOpacity
              style={{
                padding: 1,
                marginVertical: 2,
                borderRadius: 5,
                width: "20%",
                display: "flex",
                backgroundColor: "#FFD580",
                justifyContent: "center",
                alignItems: "center",
                elevation: 5,
              }}
              onPress={() => onHandleCompletedOrder(item?.orderId)}
            >
              <Text>Post</Text>
            </TouchableOpacity>
           )
            : ""
             }
            <View
            //   style={{
            //     padding: 3,
            //     backgroundColor: "#FFD580",
            //     borderRadius: 10,
            //   }}
            >
              <Text>Status:<Text style={{ padding: 5, color: 'green' }}>{item?.status}</Text></Text>
            </View>
          </View>
        </View>
        {/* <View style={{ alignItems: "center" }}>
            <View style={styles.actionButton}>
              <Ionicons
                name="add-circle-outline"
                size={25}
                color={Colors.black}
              ></Ionicons>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                1
              </Text>
              <Ionicons
                name="remove-circle-outline"
                size={25}
                color={Colors.black}
              ></Ionicons>
            </View>
          </View> */}
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    fetchAllOrder()
  }, [user.kitchenId])
  return (
    <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <View>
        <View style={styles.topNavigate}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Order
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={orders}
        contentContainerStyle={{
          margin: 10,
          borderRadius: 20,
          backgroundColor: "#FFD580",
          elevation: 5,
        }}
        renderItem={({ item }) => <CartCard item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textItem: {
    fontWeight: "bold",
    fontSize: 12,
  },

  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartcard: {
    height: 150,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "600",
    justifyContent: "center",
    fontSize: 26,
    alignContent: "center",
    textAlign: "center",
    color: "#e65332",
    borderColor: "white",
    backgroundColor: "#fab3a2",
    fontWeight: "bold",
    marginTop: 40,
    width: "40%",
    borderRadius: 20,
    borderWidth: 2,
  },
  actionButton: {
    width: 80,
    height: 30,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
  },
  topNavigate: {
    height: 50,
    backgroundColor: "#FFAB01",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default ChefOrderScreen;
