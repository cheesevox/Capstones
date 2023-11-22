import React from "react";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";

const Dish = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 12,
        }}
      >
        <Image
          source={
            data?.thubnail ??
            require("../../../../assets/images/dish-default.png")
          }
          style={{
            width: 80,
            height: 80,
          }}
          resizeMode="cover"
        />
      </View>
      <View style={{ flex: 1, paddingLeft: 10, gap: 4 }}>
        <Text style={styles.nameText}>{data?.name}</Text>
        <Text
          style={{ ...styles.nameText, fontSize: 12 }}
        >{`Type: ${data?.type}`}</Text>
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
          gap: 4,
        }}
      >
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
              backgroundColor: "#fd845d",
            },
            styles.buttonStyle,
          ]}
        >
          <Text
            style={
              ({
                color: "#804733",
              },
              styles.buttonText)
            }
          >
            {"Edit"}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
              backgroundColor: "#E64B17",
            },
            styles.buttonStyle,
          ]}
        >
          <Text
            style={{
              color: "white",
              ...styles.buttonText,
            }}
          >
            {"Remove"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAC8C5",
    flexDirection: "row",
    marginVertical: 5,
    elevation: 5,
    borderRadius: 12,
    padding: 6,
  },
  nameText: {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: 14,
    fontQWeight: "800",
  },
  buttonStyle: {
    borderRadius: 12,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 11,
    fontWeight: "400",
    padding: 10,
  },
});

export default React.memo(Dish);
