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

const SessionManagement = (props) => {
  const { navigation, route } = props;
  const { id, type } = route.params;
  const [tab, setTab] = useState(EnumSessionStatus.processing);
  const [sessionFilter, setsessionFilter] = useState();
  const tabs = [
    {
      label: "Processing",
      value: EnumSessionStatus.processing,
    },
    {
      label: "Approved",
      value: EnumSessionStatus.approved,
    },
    {
      label: "Rejected",
      value: EnumSessionStatus.rejected,
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
      status: EnumSessionStatus.approved,
    },
    {
      id: 2,
      nameMeal: "Meal 2",
      description: "description",
      price: 50000,
      quantity: 1,
      thubnail: undefined,
      status: EnumSessionStatus.processing,
    },
    {
      id: 3,
      nameMeal: "Meal 3",
      description: "description",
      price: 50000,
      quantity: 1,
      thubnail: undefined,
      status: EnumSessionStatus.processing,
    },
    {
      id: 4,
      nameMeal: "Meal 4",
      description: "description",
      price: 50000,
      quantity: 1,
      thubnail: undefined,
      status: EnumSessionStatus.rejected,
    },
  ];

  useEffect(() => {
    const sessions = data.filter((session) => session.status === tab);
    setsessionFilter(sessions);
  }, [tab]);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          borderRadius: 12,
          backgroundColor: item.value === tab ? "#FFE6A9" : "#EAC8C5",
          padding: 8,
          paddingHorizontal: 24,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setTab(item.value);
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
          backgroundColor: "#EFE6DA",
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
            width: 78,
            height: 140,
          }}
          source={
            item.thubnail
              ? { uri: item.thubnail }
              : require("../../../assets/images/default-image-session.png")
          }
        />
        <View style={{ gap: 18, flex: 1, width: "100%" }}>
          <Text style={{ ...styles.text, fontSize: 16, textAlign: "center" }}>
            {item.nameMeal}
          </Text>
          <Text
            style={{ ...styles.text, fontSize: 12 }}
          >{`Description: ${item.description}`}</Text>
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
          ></View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ height: "100%" }}>
      <HeaderComp
        isHasBackIcon={false}
        isHasBellIcon={true}
        isHasMessageIcon={true}
        label={type}
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
          <Text>asddddddddddddddddd</Text>
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
          <FlatList data={sessionFilter} renderItem={renderSessionItem} />
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
            navigation.navigate(RouteName.ADD_MEAL_SESSION, {
              type: type,
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
    color: "#E88C80",
    fontWeight: "700",
  },
});

export default React.memo(SessionManagement);
