import React, { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  VirtualizedList,
} from "react-native";
import { EnumSessionStatus, RouteName } from "../../Constant";
import HeaderComp from "../HeaderComp";
import { Image } from "react-native";
import AddIcon from "../../components/Icons/AddIcon";
import { getAllMealInSessionID } from "../../Api";

const SessionManagement = (props) => {
  const { navigation, route } = props;
  const { session } = route.params;
  const [tab, setTab] = useState("PROCESSING");
  const [sessionFilter, setsessionFilter] = useState();
  const [mealInSession, setMealInSession] = useState([]);
  const tabs = [
    {
      label: "Processing",
      value: "PROCESSING",
    },
    {
      label: "Approved",
      value: "APPROVED",
    },
    {
      label: "Rejected",
      value: "REJECTED",
    },
  ];

  const data = [
    {
      id: 0,
      nameMeal: "Meal 1",
      description: "description",
      price: 50000,
      quantity: 1,
      thubnail: undefined,
      status: 0,
    },
    {
      id: 2,
      nameMeal: "Meal 2",
      description: "description",
      price: 50000,
      quantity: 1,
      thubnail: undefined,
      status: 1,
    },
    {
      id: 3,
      nameMeal: "Meal 3",
      description: "description",
      price: 50000,
      quantity: 1,
      thubnail: undefined,
      status: 1,
    },
    {
      id: 4,
      nameMeal: "Meal 4",
      description: "description",
      price: 50000,
      quantity: 1,
      thubnail: undefined,
      status: 2,
    },
  ];

  const fetchAllMealSession = () => {
    getAllMealInSessionID(session.sessionId).then((res) => {
      console.log(session.sessionId);
      console.log("in ra meall in sesssison", res);
      setMealInSession(res);
    });
  };
  useEffect(() => {
    const sessions = data.filter((session) => session.status === tab);
    setsessionFilter(sessions);
  }, [tab]);
  useEffect(() => {
    fetchAllMealSession();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchAllMealSession();
      console.log("Data refreshed!");
    });

    // Clean up the listener when the component is unmounted
    return unsubscribe;
  }, [navigation]);
  
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          borderRadius: 12,
          backgroundColor: item.status === tab ? "#FFE6A9" : "#EAC8C5",
          padding: 8,
          paddingHorizontal: 24,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setTab(item.status);
          }}
        >
          <Text
            style={{
              color: "#C1682D",
            }}
          >
            {item.label.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSessionItem = ({ item }) => {
    return (
      <View
        style={{
          borderRadius: 20,
          backgroundColor: "#ECC26D",
          marginBottom: 12,
          elevation: 5,
          paddingHorizontal: 12,
          paddingVertical: 6,
          gap: 12,
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
          }}
          source={{ uri: item?.mealDtoForMealSession?.image }}
        />
        <View style={{ gap: 18, flex: 1, width: "100%" }}>
          <Text style={{ ...styles.text, fontSize: 16, textAlign: "center" }}>
            {item.mealDtoForMealSession?.name}
          </Text>
          <Text
            style={{ ...styles.text, fontSize: 12 }}
          >{`Description: ${item.mealDtoForMealSession?.description}`}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{ ...styles.text, fontSize: 12 }}
            >{`Price: ${item.price}`}</Text>
            <Text
              style={{ ...styles.text, fontSize: 12 }}
            >{`Quantity: ${item.quantity}`}</Text>
          </View>
          <View
            style={{
              borderRadius: 20,
            }}
          >
            <Text>Status :{item.status}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ height: "100%" }}>
      <HeaderComp
        isHasBackIcon={true}
        isHasBellIcon={false}
        isHasMessageIcon={false}
        label={session.sessionType}
        onBack={() => navigation.goBack()}
      />
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            padding: 2,
            borderRadius: 12,
            backgroundColor: "#EAC8C5",
            marginTop: 20,
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <VirtualizedList
            data={tabs}
            renderItem={renderItem}
            getItemCount={(data) => data.length}
            getItem={(data, index) => data[index]}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
        <View>
          <FlatList data={mealInSession} renderItem={renderSessionItem} />
        </View>
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
          onPress={() => {
            navigation.navigate("AddMealSession", {
              session: session,
            });
          }}
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
  text: {
    color: "#FFF",
    fontWeight: "700",
  },
});

export default React.memo(SessionManagement);
