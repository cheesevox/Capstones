import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderComp from "../../HeaderComp";
import { MultiSelect } from "react-native-element-dropdown";
import React, { useEffect, useState } from "react";
import { colors } from "../../../Constant";
import * as ImagePicker from "react-native-image-picker";
import CameraIcon from "../../../components/Icons/CameraIcon";
import MinusIcon from "../../../components/Icons/MinusIcon";
import AddIcon from "../../../components/Icons/AddIcon";
import { getMealById } from "../../../Api";
import { Image } from "react-native";
import dish from "../../DishManagement/components/dish";

const FromMeal = (props) => {
  const { navigation, route } = props;
  const id = route.params;
  console.log("id", id);
  useEffect(() => {}, []);
  const [selected, setSelected] = useState([]);
  const [meal, setMeal] = useState([]);
  // const fetchMealById = async () => {
  //   // getMealById(8)
  //   //   .then((res) => {
  //   //     setMeal(res);
  //   //   })
  //   //   .catch((error) => console.log(error));
  //   // const response = await getMealById(8);
  //   // setMeal(response);
  //   console.log("-----------------------------");
  // };

  const onSelectAvatar = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: "photo",
        quality: 1,
        includeBase64: true,
      },
      async (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.errorCode) {
          console.log("ImagePicker Error: ", response.errorCode);
        } else {
          let source = response.assets[0];
          if (source.fileSize >= 5242880) {
            toastMessage(t(MessageI18n.errorImageSizeIsTooBig), true);
          } else {
            let buildFileName = new Date().toISOString();
            let formData = new FormData();
            formData.append("file", {
              uri:
                Platform.OS === "ios"
                  ? source?.uri.replace("file://", "")
                  : source?.uri,
              name: source?.fileName,
              type: source?.type,
            });
            formData.append("fileName", fileNameNormalize(buildFileName));
            // const accountUploadResult =
            //   await accountApiService.uploadAccountAvatarAsync(formData);
            // if (accountUploadResult.isSuccess === true) {
            //   let customerInformation = {
            //     ...customerInfo,
            //     thumbnail: accountUploadResult?.avatarUrl,
            //   };
            //   await updateSessionJsonStringValue(customerInformation);
            //   dispatch(updateCustomerAvatar(accountUploadResult?.avatarUrl));
            //   toastMessage(t(accountUploadResult?.message), false);
            // } else {
            //   toastMessage(t(accountUploadResult?.message), true);
            // }
          }
        }
      }
    );
  };
  // useEffect(() => {
  //   fetchMealById();
  // }, []);

  const renderDishItem = (dish, unSelect = undefined) => {
    // console.log("dish neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", dish);
    return (
      <View
        style={
          unSelect
            ? { ...styles.dishItem, backgroundColor: "#ffd580" }
            : styles.dishItem
        }
      >
        <View
          style={{
            borderRadius: 12,
          }}
        >
          <Image
            source={{ uri: dish?.image }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{ flex: 1, paddingLeft: 10, gap: 4, justifyContent: "center" }}
        >
          <Text style={styles.nameText}>{dish?.name}</Text>
          <Text
            style={{ ...styles.nameText, fontSize: 12 }}
          >{`Type: ${dish.dishType?.name}`}</Text>
        </View>
        {unSelect && (
          <TouchableOpacity onPress={() => unSelect && unSelect(dish)}>
            <MinusIcon />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: colors.COLOR_LIGHT, height: "100%" }}>
      <HeaderComp
        onBack={() => {
          navigation.goBack();
        }}
        label={id ? "Edit meal" : "Create meal"}
      />
      <View
        style={{
          padding: 28,
          gap: 20,
          height: "88%",
        }}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Name of dish"
          placeholderTextColor={"#C1C1C1"}
          defaultValue={meal?.name}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Description"
          placeholderTextColor={"#C1C1C1"}
          defaultValue={meal?.description}
        />

        <TouchableOpacity
          style={styles.uploadImages}
          onPress={() => onSelectAvatar()}
        >
          <View style={{alignItems: "center"}}>
            <CameraIcon />
            <Text>{"Post picture of dish"}</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#f2ebe1",
            borderRadius: 12,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#FFAB01",
                textAlign: "center",
                // fontFamily: "Poppins",
                fontSize: 19,
                fontWeight: "700",
                padding: 8,
              }}
            >
              {"Add dish"}
            </Text>
          </View>
          <ScrollView
            style={{
              backgroundColor: "#ffd580",
              borderRadius: 12,
              maxHeight: 200,
            }}
          >
            <MultiSelect
              style={styles.dropdown}
              placeholderStyle={{
                textAlign: "right",
                color: "#89703e",
                paddingHorizontal: 4,
              }}
              data={meal?.dishDto ?? []}
              labelField="name"
              valueField="id"
              key={(item) => item.id}
              placeholder="Add more"
              value={selected}
              onChange={(item) => {
                setSelected(item);
              }}
              renderRightIcon={() => (
                <AddIcon bgColor={"#ffd580"} color={"#89703e"} />
              )}
              renderItem={(item) => renderDishItem(item)}
              renderSelectedItem={(item, unSelect) => {
                return renderDishItem(item, unSelect);
              }}
            />
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
          gap: 10,
        }}
      >
        <TouchableOpacity
          style={{
            paddingHorizontal: 50,
            paddingVertical: 10,
            backgroundColor: "#FFAB01",
            borderRadius: 20,
          }}
          onPress={() => {
            //call api
          }}
        >
          <Text style={styles.buttonTextStyle}>{"Save"}</Text>
        </TouchableOpacity>
        {id && (
          <TouchableOpacity
            style={{
              paddingHorizontal: 40,
              paddingVertical: 10,
              backgroundColor: "#E64B17",
              borderRadius: 20,
            }}
            onPress={() => {
              //call api
            }}
          >
            <Text style={styles.buttonTextStyle}>{"Remove"}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 0.5,
    fontSize: 18,
    borderColor: "#B2B2B2",
    paddingVertical: 16,
    paddingLeft: 20,
    borderRadius: 12,
    backgroundColor: "#F8F8FC",
  },
  labelText: {
    fontSize: 16,
    // fontFamily: "Poppins",
    fontWeight: "500",
  },
  uploadImages: {
    padding: 50,
    backgroundColor: "#F8F8FC",
    gap: 5,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 0.2,
  },
  buttonTextStyle: {
    color: "#FFF",
    textAlign: "center",
    // fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.6,
  },
  dropdown: {
    backgroundColor: "#ffd580",
    padding: 10,
  },
  dishItem: {
    flexDirection: "row",
    padding: 12,
    width: "100%",
  },
  nameText: {
    color: "#000",
    // fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "800",
  },
  uploadImages: {
    padding: 50,
    backgroundColor: "#F8F8FC",
    gap: 5,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 0.2,
  },
});

export default React.memo(FromMeal);
