import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderComp from "../../HeaderComp";
import { Dropdown } from "react-native-element-dropdown";
import React, { useEffect, useState } from "react";
import { RouteName, colors } from "../../../Constant";
import * as ImagePicker from "react-native-image-picker";
import { launchImageLibrary } from "react-native-image-picker";
// import { launchImageLibraryAsync } from "expo-image-picker";
import CameraIcon from "../../../components/Icons/CameraIcon";
import { createNewDish, getAllDishType } from "../../../Api";

const FormDish = (props) => {
  const { navigation, route } = props;
  const id = route.params;
  const [typeOfDish, setTypeOfDish] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [typeOfDishes, setTypeOfDishes] = useState([]);
  const [values, setValues] = useState({
    name: "",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dishTypeId: "null",
    kitchenId: 1,
  });
  const [imageSource, setImageSource] = useState(null);
  // const typeOfDishes = [
  //   {
  //     id: 1,
  //     name: "Type 1",
  //   },
  //   {
  //     id: 2,
  //     name: "Type 2",
  //   },
  //   {
  //     id: 3,
  //     name: "Type 3",
  //   },
  // ];
  const fetchAllTypeOfDish = () => {
    getAllDishType()
      .then((res) => {
        console.log(res);
        setTypeOfDishes(res);
      })
      .catch((error) => console.log(error));
  };
  const initData = () => {};
  const handleCreateNewDish = () => {
    createNewDish(values);
  };

  const onSelectAvatar = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      setImageSource({ uri: image.path });
    } catch (error) {
      console.log("ImagePicker Error: ", error);
    }
  };
  // const onSelectAvatar = () => {
  //   ImagePicker.launchImageLibrary(
  //     {
  //       mediaType: "photo",
  //       quality: 1,
  //       includeBase64: true,
  //     },
  //     async (response) => {
  //       if (response.didCancel) {
  //         console.log("User cancelled image picker");
  //       } else if (response.errorCode) {
  //         console.log("ImagePicker Error: ", response.errorCode);
  //       } else {
  //         let source = response.assets[0];
  //         if (source.fileSize >= 5242880) {
  //           toastMessage(t(MessageI18n.errorImageSizeIsTooBig), true);
  //         } else {
  //           let buildFileName = new Date().toISOString();
  //           let formData = new FormData();
  //           formData.append("file", {
  //             uri:
  //               Platform.OS === "ios"
  //                 ? source?.uri.replace("file://", "")
  //                 : source?.uri,
  //             name: source?.fileName,
  //             type: source?.type,
  //           });
  //           formData.append("fileName", fileNameNormalize(buildFileName));
  //           // const accountUploadResult =
  //           //   await accountApiService.uploadAccountAvatarAsync(formData);
  //           // if (accountUploadResult.isSuccess === true) {
  //           //   let customerInformation = {
  //           //     ...customerInfo,
  //           //     thumbnail: accountUploadResult?.avatarUrl,
  //           //   };
  //           //   await updateSessionJsonStringValue(customerInformation);
  //           //   dispatch(updateCustomerAvatar(accountUploadResult?.avatarUrl));
  //           //   toastMessage(t(accountUploadResult?.message), false);
  //           // } else {
  //           //   toastMessage(t(accountUploadResult?.message), true);
  //           // }
  //         }
  //       }
  //     }
  //   );
  // };
  useEffect(() => {
    fetchAllTypeOfDish();
  }, []);

  return (
    <View style={{ backgroundColor: colors.COLOR_LIGHT, height: "100%" }}>
      <HeaderComp
        onBack={() => {
          navigation.goBack();
        }}
        label={id ? "Edit dish" : "Create dish"}
      />
      <View
        style={{
          padding: 28,
          gap: 20,
        }}
      >
        <Dropdown
          data={typeOfDishes}
          placeholder={"Select type of dish"}
          placeholderStyle={{
            color: "#C1C1C1",
            fontSize: 18,
          }}
          labelField="name"
          valueField="dishTypeId"
          value={typeOfDish}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(value) => {
            setTypeOfDish(value);
            setValues({ ...values, dishTypeId: value.dishTypeId });
            setIsFocus(false);
          }}
          style={{ ...styles.textInput, paddingRight: 12, paddingVertical: 12 }}
          isFocus={isFocus}
          containerStyle={{
            borderRadius: 12,
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Name of dish"
          placeholderTextColor="#C1C1C1"
          onChangeText={(text) => setValues({ ...values, name: text })}
        />

        <TouchableOpacity
          style={styles.uploadImages}
          onPress={() => onSelectAvatar()}
        >
          {imageSource ? (
            <Image source={imageSource} resizeMode="cover" />
          ) : (
            <>
              <CameraIcon />
              <Text>{"Post picture of dish"}</Text>
            </>
          )}
        </TouchableOpacity>
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
            handleCreateNewDish();
            navigation.navigate(RouteName.DISH_MANAGEMENT);
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
    fontFamily: "Poppins",
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
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.6,
  },
});

export default React.memo(FormDish);
