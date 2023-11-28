import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import HeaderComp from "../../HeaderComp";
import { getAllSessionByAreaId } from "../../../Api";
import { RouteName } from "../../../Constant";

const Session = (props) => {
  const { data, navigation, route } = props;
  const { areaId } = route.params;
  const [session, setSession] = useState([]);
  const fetchAllSessionByAreaId = () => {
    getAllSessionByAreaId(areaId).then((res) => {
      console.log("-----------------------", areaId);
      console.log("++++++++++++++++++++++", res);
      setSession(res);
    });
  };
  useEffect(() => {
    fetchAllSessionByAreaId();
  }, [areaId]);
  const SessionItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text
          style={{ ...styles.text, fontSize: 20, padding: 4, paddingTop: 20 }}
        >
          {item?.sessionType}
        </Text>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "column",
            paddingTop: 20,
            padding: 20,
          }}
        >
          <Text
            style={{ ...styles.text, fontSize: 15 }}
          >{`Start: ${item?.startTime}`}</Text>
          <Text
            style={{ ...styles.text, fontSize: 15 }}
          >{`End: ${item?.endTime}`}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              styles.buttonStyle,
            ]}
            onPress={() => {
              navigation.navigate(RouteName.SESSION_MANAGEMENT, {
                id: data.id,
              });
            }}
          >
            <Text style={styles.buttonText}>{"Join"}</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  const renderItem = ({ item }) => {
    return <SessionItem item={item} />;
  };
  return (
    <View>
      <HeaderComp
        isHasBackIcon={true}
        label="Session"
        onBack={() => {
          navigation.goBack();
        }}
      />
      {/* <View style={{ flex: 1 }}> */}
      <FlatList
        data={session}
        keyExtractor={(item) => item.sessionId}
        renderItem={(item) => SessionItem(item)}
        showsHorizontalScrollIndicator={false}
      />
      {/* </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcd27e",
    borderRadius: 20,
    elevation: 8,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginBottom: 30,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  text: {
    color: "#FFF",
    // fontFamily: "Poppins",
    fontWeight: "700",
    textAlign: "center",
  },
  buttonStyle: {
    borderRadius: 20,
    backgroundColor: "#FFAB01",
    elevation: 5,
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.6,
    // fontFamily: "Poppins",
  },
});
export default React.memo(Session);
