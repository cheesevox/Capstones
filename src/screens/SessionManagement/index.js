import React, { useEffect, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  VirtualizedList,
} from "react-native";
import { EnumSessionStatus } from "../../Constant";
import HeaderComp from "../HeaderComp";
import { Image } from "react-native";

const SessionManagement = (props) => {
  const [tab, setTab] = useState();
  const tabs = [
    {
      label: "Approved",
      value: EnumSessionStatus.approved,
    },
    {
      label: "Processing",
      value: EnumSessionStatus.processing,
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
    },
    {
      id: 2,
      nameMeal: "Meal 1",
      description: "description",
      price: 50000,
      quantity: 1,
      thubnail: undefined,
    },
  ];

  useEffect(() => {
    //call api with tab here
  }, [tab]);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          borderRadius: 12,
          backgroundColor: item.value === tab ? "#FFE6A9" : "#FFF",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setTab(item.value);
          }}
        >
          <Text
            style={{
              color: item.value === tab ? "#FFF" : "#FFE6A9",
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
          gap: 6,
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
        <View style={{ gap: 8 }}>
          <Text>{item.nameMeal}</Text>
          <Text>{`Description: ${item.description}`}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text>{`Price: ${item.price}`}</Text>
            <Text>{`Quantity: ${item.quantity}`}</Text>
          </View>
          <View
            style={{
              borderRadius: 20,
            }}
          >
            <Text>{"Status"}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <HeaderComp
        isHasBackIcon={false}
        isHasBellIcon={true}
        isHasMessageIcon={true}
      />
      <View
        style={{
          padding: 2,
          borderRadius: 12,
          backgroundColor: "#EAC8C5",
        }}
      >
        <VirtualizedList data={tabs} renderItem={renderItem} />
      </View>
      <View>
        <FlatList data={data} renderItem={renderSessionItem} />
      </View>
    </View>
  );
};

export default React.memo(SessionManagement);
