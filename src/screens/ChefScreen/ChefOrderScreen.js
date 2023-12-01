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
import SearchFilter from "../../components/SearchFilter";
import DateTimePicker from '@react-native-community/datetimepicker';

const ChefOrderScreen = ({ navigation }) => {

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [newData,setNewData] = useState([])
  const [selectedDate,setSelectedDate] = useState();
  const onChange = async (event, selectedDate) => {
    const dateTimeString = '01-12-2023 14:27'; // Replace this with your actual date-time string

    // Parse the date-time string into a JavaScript Date object
    const dateTimeObject = new Date(dateTimeString);
  
    // Create a new Date object with the same date but set the time to midnight
    const dateOnlyObject = new Date(dateTimeObject.getFullYear(), dateTimeObject.getMonth(), dateTimeObject.getDate());
  
    // Format the date without the time
    const formattedDate = dateOnlyObject.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    console.log(formattedDate)
  };
  const showDatePicker = () => {
    if (!show) {
      setShow(true);
    }
  };
  const formattedDate = date.toLocaleDateString();

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
  // console.log("ORRRRRRRRRRRRRRRRRRRRRRR", order)


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
                marginLeft: 20,
              }}
            >
              <Text style={styles.textItem}>Order ID : {item.orderId}</Text>
              <Text style={styles.textItem}>Quantity: {item?.mealSession?.quantity}</Text>
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                Total: {item.totalPrice}
              </Text>
              <Text>Area : {item?.mealSession?.sessionDto?.areaDtoOrderResponse?.areaName}</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text>Customer: {item?.customer?.name}</Text>
                <Text>  Time: {item.date}</Text>
              </View>
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

      <View style={{
        flexDirection: "row", alignItems: "center",
        marginHorizontal: 40, marginVertical: 10, justifyContent: "center",
        borderRadius: 30, elevation: 5, backgroundColor: '#00000000'
      }}>
        <View>
          {/* <Button onPress={showDatePicker} title=""   ><Ionicons name="calendar-outline"/></Button>   */}
          <TouchableOpacity onPress={showDatePicker}>
            <Ionicons name="calendar-outline" size={22} />
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              value={date}
              mode="date" // Change to "time" for time picker
              display="default"
              onChange = {onChange}
           />
          )}
        </View>
        <View
          style={{
            alignItems: "center", justifyContent: "center",
            width: '50%', height: 60, borderRadius: 20
          }}>
          {formattedDate && <Text style={{ fontSize: 22 }}>{formattedDate}</Text>}
        </View>
      </View>
      <View style={{
        backgroundColor: "blue", flex: 9,
        margin: 10,
        marginTop:10,
        borderRadius: 20,
        backgroundColor: "#FFD580",
        elevation: 5,
      }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={date ?  newData : orders}
          contentContainerStyle={{
            // margin: 10,
            // borderRadius: 20,
            // backgroundColor: "#FFD580",
            // elevation: 5,
          }}
          renderItem={({ item }) => <CartCard item={item} />}
        />
      </View>
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
