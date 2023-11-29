import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import HeaderComp from "../../HeaderComp";
import { Dropdown } from "react-native-element-dropdown";
import { DescreaseIcon } from "../../../components/Icons/DescreaseIcon";
import { IncreaseIcon } from "../../../components/Icons/IncreaseIcon";

const AddMealSession = (props) => {
  const { navigation, route } = props;
  const { type } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  return (
    <View>
      <HeaderComp label={`Add meal ${type}`} />
      <View>
        <Dropdown />
        <View>
          <Text>{"Price"}</Text>
          <TextInput value={price} />
        </View>
        <View>
          <Text>{"Quantity"}</Text>

          <Text>{quantity}</Text>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity
              onPress={() => {
                setQuantity(quantity + 1);
              }}
            >
              <IncreaseIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setQuantity(quantity - 1);
              }}
            >
              <DescreaseIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(AddMealSession);
