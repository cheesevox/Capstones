import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import foods from "../../Constant";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ArrowDownLeft } from "react-native-feather";
import { faArrowLeft, faMugSaucer } from "@fortawesome/free-solid-svg-icons";

const ChefOrderDetailScreen = ({ navigation }) => {
  const plus = ({ item }) => {};

  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartcard}>
        <View
          style={{
            height: 100,
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
              source={item.image}
              style={{ width: 50, height: 50, resizeMode: "cover" }}
            />
            <View
              style={{
                justifyContent: "center",
                flexDirection: "column",
                marginLeft: 20,
              }}
            >
              <Text style={styles.textItem}>{item.name}</Text>
              <Text style={styles.textItem}>Quantity: {item.quantity}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                  Total: {item.price}
                </Text>
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
            >
              <Text>Post</Text>
            </TouchableOpacity>
            <View
            //   style={{
            //     padding: 3,
            //     backgroundColor: "#FFD580",
            //     borderRadius: 10,
            //   }}
            >
              <Text>Status:PROCESSING</Text>
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
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <View>
        <View style={styles.topNavigate}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesomeIcon icon={faArrowLeft} size={20} color="white" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                width: "65%",
              }}
            >
              Order Detail
            </Text>
          </View>
        </View>
      </View>
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        data={foods}
        contentContainerStyle={{
          margin: 10,
          borderRadius: 20,
          paddingTop: 50,
          paddingBottom: 80,
          backgroundColor: "#FFD580",
          elevation: 5,
        }}
        renderItem={({ item }) => <CartCard item={item} />}
      /> */}
      <View
        style={{
          margin: 10,
          borderRadius: 20,
          padding: 10,
          backgroundColor: "#FFD580",
          elevation: 5,
        }}
      >
        <Text>Order ID:</Text>
        <Text>Customer' Name:</Text>
        <Text>Customer' Phone:</Text>
        <Text>Meal</Text>
        <View></View>
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
    height: 100,
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
export default ChefOrderDetailScreen;
