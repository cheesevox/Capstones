import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	StepperInput,
	Pressable,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React from "react";
import { colors, recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FoodCard = ({ item }) => {
	const navigation = useNavigation();
	console.log("ITEM FOOOODDDD", item);
	return (
		<View style={{ justifyContent: "center",padding:20 }}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<Pressable
					onPress={() => navigation.navigate("MealDetail", {item})}
					style={{
						backgroundColor: colors.COLOR_LIGHT,
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 4 },
						shadowOpacity: 0.1,
						shadowRadius: 7,
						elevation: 5,
						borderRadius: 16,
						width: 250,
						marginVertical: 16,
						padding:20,
						paddingVertical: 26,
					
					}}
				>
					{/* //uri // */}
					<View style={{ alignItems: "center" }}>
						<Image source={{ uri: item?.mealDtoForMealSession?.image }} style={{resizeMode:"cover", height:100, width:250 }}></Image>
					</View>
					{/* <Text>{item.name}</Text> */}
					<View style={{ flexDirection: "row", marginTop: 8 }}>
						<Text style={{ fontWeight: "bold", fontSize:20}}>{item?.mealDtoForMealSession?.name}</Text>
					</View>
					<View>
						<Text >Price: {item?.price} vnd </Text>
						<Text>{item?.mealDtoForMealSession?.description}</Text>
						<Text>Quantity : {item?.remainQuantity}</Text>
					</View>
				</Pressable>
			</ScrollView>

		</View>
	);
};

export default FoodCard;

const styles = StyleSheet.create({});
