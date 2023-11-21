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

const FoodCard = () => {
	const navigation = useNavigation();
	return (
		<View style={{justifyContent:"center"}}>
			<FlatList 
			 	horizontal
				data={recipeList}
				renderItem={({ item }) => (
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
						<Image
							source={item.image}
							style={{ width: 150, height: 100, resizeMode: "center" }}
						/>
						<Text>{item.name}</Text>
						<View style={{ flexDirection: "row", marginTop: 8 }}>
							<Text>{item.price} </Text>
							<Text>{item.area}</Text>
						</View>
					</Pressable>
					</ScrollView>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default FoodCard;

const styles = StyleSheet.create({});
