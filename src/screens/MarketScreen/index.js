import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import Session from "./components/session";
import HeaderComp from "../HeaderComp";

const PostListScreen = () => {
  const posts = [
    {
      id: 1,
      name: "Breakfast session",
      startTime: "8h30 AM",
      endTime: "10h30 AM",
    },
    {
      id: 2,
      name: "Lunch session",
      startTime: "11h00 AM",
      endTime: "5h30 PM",
    },
    {
      id: 3,
      name: "Dinner session",
      startTime: "6h00 PM",
      endTime: "10h00 PM",
    },
  ];

  const renderItem = ({ item }) => {
    return <Session data={item} navigation={navigation}/>;
  };

  return (
    <View>
      <HeaderComp
        isHasBackIcon={false}
        isHasBellIcon={true}
        isHasMessageIcon={true}
      />
      <View style={styles.container}>
        {/* <View style={{ width: "100%" }}>
        <Image
          style={{ width: "100%" }}
          source={require("../../../assets/images/post-banner.png")}
          resizeMode="cover"
        />
      </View> */}
        <View style={{ flex: 1 }}>
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={(item) => renderItem(item)}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingTop: 20,
    paddingHorizontal: 20,
    gap: 20,
    backgroundColor: "#FFF",
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default React.memo(PostListScreen);
