import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import * as Icon from "react-native-feather";

const SearchFilter = ({ icon, placeholder }) => {
	return (
		<View
			style={{
				flexDirection:"row",
				backgroundColor: "#fff",
				flexDirection: "row",
				paddingVertical: 16,
				borderRadius: 8,
				paddingHorizontal: 16,
				marginVertical: 16,
				shadowColor: "#000",
				shadowOffset: { width: 0, height: 4 },
				shadowOpacity: 0.1,
				shadowRadius: 7,
			}}
		>
			<FontAwesome name={icon} size={20} color="#f96163" />
			<TextInput placeholder="enter your food" style={{ paddingLeft: 8, fontSize: 16, color: "#808080" }}>
				{/* {placeholder} */}
			</TextInput>
			
		</View>


		// <View className="flex-row items-center space-x-2 px-4 pb-2 ">
        //     <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
        //         <Icon.Search height="25" width="25" stroke="gray" />
        //         <TextInput placeholder='Resturants' className="ml-2 flex-1" keyboardType='default' />
        //         <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
        //             <Icon.MapPin height="20" width="20" stroke="gray" />
        //             <Text className="text-gray-600">Go Vap</Text>
        //         </View>
        //     </View>
        //     <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
        //         <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
        //     </View>
        // </View>
	);
};

export default SearchFilter;

const styles = StyleSheet.create({});
