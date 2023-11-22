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

const FoodCard = ({item}) => {
	const navigation = useNavigation();
	console.log("ben food cart",item.mealDtoForMealSession.image)
	return (
		<View style={{justifyContent:"center"}}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<Pressable
						onPress={() => navigation.navigate("MealDetail", { item: item })}
						style={{
							backgroundColor: colors.COLOR_LIGHT,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							elevation:5,
							borderRadius: 16,
							marginVertical: 16,
							alignItems: "center",
							paddingHorizontal: 8,
							paddingVertical: 26,
							marginRight:20
						}}
					>
						{/* //uri // */}
						<Image source={{uri: item.mealDtoForMealSession.image}} style={{width:100,height:100,position:'relative'}}></Image>
						<Text>{item.name}</Text>
						<View style={{ flexDirection: "row", marginTop: 8 }}>
							<Text>{item.price} </Text>
							<Text>{item.mealDtoForMealSession?.name}</Text>
							<Text>{item.mealDtoForMealSession?.description}</Text>
						</View>
					</Pressable>
					</ScrollView>

		</View>
	);
};

export default FoodCard;

const styles = StyleSheet.create({});
