import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import Session from "./components/session";
import { Dropdown } from "react-native-element-dropdown";
import HeaderComp from "../HeaderComp";
import Area from "./components/area";
import { getAllDistrict, getAreaByDistrictId } from "../../Api";

const MarketScreen = ({ navigation }) => {
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrcitId] = useState();
  const [area, setArea] = useState([]);
  const fetchAllDistrict = () => {
    getAllDistrict().then((res) => {
      setDistrict(res);
    });
  };
  const fetchAllAreaBySessionId = (id) => {
    getAreaByDistrictId(id).then((res) => {
      console.log("all area", res);
      setArea(res);
    });
  };
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const posts = [
    {
      id: 1,
      name: "Binh Tan Area",
      startTime: " Address 258 TOn Duc Thnag",
      endTime: "",
    },
  ];

  // const renderItem = ({ item }) => {
  //   return <Session data={item} navigation={navigation} />;
  // };
  const renderItem = ({ item }) => {
    return <Area data={item} navigation={navigation} />;
  };
  useEffect(() => {
    fetchAllDistrict();
  }, []);
  useEffect(() => {
    console.log("districtId là", districtId);
    fetchAllAreaBySessionId(districtId);
  }, [districtId]);
  return (
    <View>
      <HeaderComp label={"Area"} isHasBackIcon={false} />
      <View style={styles.container}>
        {/* <View style={{ width: "100%" }}>
        <Image
          style={{ width: "100%" }}
          source={require("../../../assets/images/post-banner.png")}
          resizeMode="cover"
        />
      </View> */}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={district}
          maxHeight={300}
          labelField="districtName"
          valueField="districtId"
          placeholder={!isFocus ? "Select District" : "..."}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setDistrcitId(item.districtId);
            setIsFocus(false);
          }}
        ></Dropdown>
        <View style={{ flex: 1 }}>
          <FlatList
            data={area}
            keyExtractor={(item) => item.areaId}
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

export default React.memo(MarketScreen);
